import type { PostMeta } from "../types";

export const typescriptBlogMeta: PostMeta = {
  id: 3,
  title: "TypeScript Best Practices for Enterprise Applications",
  excerpt:
    "Essential TypeScript patterns and practices for building maintainable, type-safe applications.",
  category: "TypeScript",
  date: "2024-01-05",
  readTime: "10 min read",
};

export const typescriptBlogContent = `# TypeScript Best Practices for Enterprise Applications: Architecture, Safety, and Patterns

## Introduction: Beyond "JavaScript with Types"

In enterprise-scale development, TypeScript is far more than a syntax layer for static analysis-it is a **domain modeling tool**, an architectural contract, and your first line of defense against production outages.

When projects grow beyond dozens of developers and hundreds of thousands of lines of code, weak type discipline quickly turns into technical debt. Loose types provide a false sense of security while letting subtle bugs slip through to production.

This guide explores essential patterns, compiler flags, and architectural practices for building robust, maintainable, and type-safe enterprise TypeScript systems.

---

## 1. Strict Compiler Foundations

The cornerstone of any enterprise TypeScript codebase is a strictly configured \`tsconfig.json\`. Never settle for default configurations.

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
\`\`\`

### Why \`noUncheckedIndexedAccess\` is Crucial

By default, TypeScript assumes accessing an array index or dynamic object key always produces a valid value:

\`\`\`typescript
const items: string[] = ["apple", "banana"];
// Without noUncheckedIndexedAccess: type is 'string' -> Runtime TypeError!
// With noUncheckedIndexedAccess: type is 'string | undefined' -> Safe!
const firstItem = items[0];

if (firstItem !== undefined) {
  console.log(firstItem.toUpperCase());
}
\`\`\`

Enabling \`noUncheckedIndexedAccess\` forces developers to handle undefined cases when accessing dynamic records and arrays, eliminating an entire category of runtime errors.

---

## 2. Make Illegal States Unrepresentable with Discriminated Unions

A common anti-pattern in frontend and backend applications is modeling complex state machines with independent boolean flags:

\`\`\`typescript
// ❌ Anti-pattern: Allows impossible combinations (e.g. isLoading: true AND isError: true)
interface BadUserDataState {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  data?: User;
}
\`\`\`

Instead, use **Discriminated Unions** (Tagged Unions) to guarantee that only valid combinations can ever exist:

\`\`\`typescript
// ✅ Enterprise pattern: Each state is distinct and mutually exclusive
export type UserDataState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User }
  | { status: "error"; error: Error; code: number };
\`\`\`

### Exhaustiveness Checking with the \`never\` Type

Use the \`never\` type in switch statements to ensure compile-time verification that every union variant is handled:

\`\`\`typescript
function assertNever(x: never): never {
  throw new Error(\`Unhandled union variant: \${JSON.stringify(x)}\`);
}

export function renderUserStatus(state: UserDataState): string {
  switch (state.status) {
    case "idle":
      return "Ready to initiate";
    case "loading":
      return "Fetching records...";
    case "success":
      return \`Welcome \${state.data.name}\`;
    case "error":
      return \`Error (\${state.code}): \${state.error.message}\`;
    default:
      // If a new status is added to UserDataState, this line triggers a compile error!
      return assertNever(state);
  }
}
\`\`\`

---

## 3. Branded Types for Domain Safety (Nominal Typing)

TypeScript operates on a **structural typing** model: if two types share the same shape, they are interchangeable. This can result in hazardous logical bugs in financial and enterprise software:

\`\`\`typescript
function transferFunds(senderId: string, recipientId: string, amount: number) {
  // Accidental parameter swap goes completely undetected by TypeScript!
}
\`\`\`

You can enforce nominal typing using **Branded (Opaque) Types**:

\`\`\`typescript
declare const __brand: unique symbol;

export type Brand<T, B> = T & { readonly [__brand]: B };

export type UserId = Brand<string, "UserId">;
export type OrderId = Brand<string, "OrderId">;
export type MoneyAmount = Brand<number, "MoneyAmount">;

// Constructor/Validator helpers
export function createUserId(id: string): UserId {
  if (!id.startsWith("usr_")) throw new Error("Invalid User ID format");
  return id as UserId;
}

export function createOrderId(id: string): OrderId {
  if (!id.startsWith("ord_")) throw new Error("Invalid Order ID format");
  return id as OrderId;
}

// Function signature
function cancelOrder(orderId: OrderId, requestedBy: UserId) {
  // Business logic here
}

const uId = createUserId("usr_1024");
const oId = createOrderId("ord_9981");

// cancelOrder(uId, oId); // 💥 Compile Error: Argument of type 'UserId' is not assignable to parameter of type 'OrderId'.
cancelOrder(oId, uId);    // ✅ Type-safe and validated!
\`\`\`

---

## 4. Runtime Validation at Application Boundaries

TypeScript types only exist at compile time-they are completely erased in the output JavaScript. If external data (REST responses, WebSockets, LocalStorage, or form inputs) does not match your interface, TypeScript cannot protect you at runtime.

**Rule**: Never cast external data with \`as SomeType\`. Always validate using schemas like **Zod** or **Valibot**.

\`\`\`typescript
import { z } from "zod";

// 1. Define the validation schema (single source of truth)
export const UserResponseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(["admin", "manager", "engineer"]),
  createdAt: z.string().datetime(),
  preferences: z.object({
    theme: z.enum(["light", "dark", "system"]),
    notifications: z.boolean(),
  }),
});

// 2. Infer the TypeScript type directly from the schema
export type UserResponse = z.infer<typeof UserResponseSchema>;

// 3. Safe API consumer function
export async function fetchUserData(userId: string): Promise<UserResponse> {
  const res = await fetch(\`/api/users/\${userId}\`);
  const json: unknown = await res.json();

  // Throws informative ZodError if payload deviates from schema
  return UserResponseSchema.parse(json);
}
\`\`\`

---

## 5. Advanced Utility Types & Template Literals

Leverage built-in and custom utility types to eliminate code duplication:

\`\`\`typescript
// Derive payload types directly without duplicate interfaces
type UserDto = z.infer<typeof UserResponseSchema>;

// Update payload where only some properties can be modified
type UpdateUserDto = Partial<Omit<UserDto, "id" | "createdAt">>;

// Strongly-typed event broker keys using Template Literal Types
type Entity = "customer" | "invoice" | "shipment";
type Action = "created" | "updated" | "archived";

export type DomainEvent = \`\${Entity}_\${Action}\`;
// Resulting type: "customer_created" | "customer_updated" | "customer_archived" | "invoice_created" ...
\`\`\`

---

## 6. Enterprise Anti-Patterns vs. Recommended Practices

| Anti-Pattern | Why It Is Dangerous | Enterprise Best Practice |
|--------------|----------------------|---------------------------|
| Using \`any\` | Completely disables the type checker | Use \`unknown\` combined with type narrowing/guards |
| Numeric \`enum\` | Generates bloated JS IIFE code, unsafe reverse mapping | Use \`as const\` object or string union types |
| Type Assertions (\`as T\`) | Overrides compiler checks without runtime validation | Use type guards (\`is\`) or Zod schema validation |
| Non-null assertion (\`foo!\`) | Bypasses null checks, leading to runtime null pointers | Use optional chaining (\`foo?.bar\`) and nullish coalescing (\`??\`) |
| Deeply nested generics | Drastically slows compiler and breaks IDE autocompletion | Decompose into intermediate, named types |

### The \`as const\` Pattern vs. Traditional Enums

\`\`\`typescript
// ❌ Avoid numeric enums
enum UserRoleEnum {
  Admin,
  Editor,
  Viewer,
}

// ✅ Prefer const objects with union types
export const UserRole = {
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  VIEWER: "VIEWER",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
\`\`\`

---

## 7. Explicit Code Organization & Imports

1. **Use \`import type\`**: Ensure type imports are completely stripped during compilation, preventing accidental runtime bundling and circular dependency deadlocks:
   \`\`\`typescript
   import type { UserResponse, UserDataState } from "./types";
   \`\`\`
2. **Co-locate Types with Domain Logic**: Place domain types close to the services and components that use them, rather than burying everything in an unwieldy global \`types.d.ts\` file.
3. **Prefer Interfaces for Public APIs**: Use \`interface\` when designing extensible SDKs and component props (for declaration merging), and \`type\` for unions, primitives, and complex transformations.

---

## Conclusion

Writing high-quality enterprise TypeScript is about discipline, predictability, and safety. By pairing a strict compiler configuration with discriminated unions, branded types, and schema-driven runtime validation, you transform TypeScript from a cosmetic typing system into an impenetrable architectural backbone.

Explore my portfolio and GitHub repositories [here](https://github.com/Shahil-Ahamad-Per).`;
