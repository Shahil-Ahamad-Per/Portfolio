import type { PostMeta } from "../types";

export const javascriptBlogMeta: PostMeta = {
  id: 4,
  title: "Modern JavaScript: ES2026 Features You Should Know",
  excerpt:
    "Explore the latest JavaScript features and how they can improve your development workflow.",
  category: "JavaScript",
  date: "2026-08-28",
  readTime: "6 min read",
};

export const javascriptBlogContent = `# Modern JavaScript: ES2026 Features You Should Know

## Introduction: The ECMAScript 2026 Specification

JavaScript continues its rapid evolution with the official approval of **ECMAScript 2026 (ES2026)**—the 17th edition of the language specification approved by Ecma International on June 30, 2026.

Following TC39's strict stage progression, ES2026 delivers seven finalized Stage 4 features designed to replace common external utility libraries (such as Node's \`Buffer\`, manual base64 decoders, precision math workarounds, and cross-realm helper routines) with native, high-performance engine primitives.

In this guide, we dive deep into every approved ES2026 feature with practical code examples you can leverage across modern runtimes.

---

## 1. Native Base64 and Hex Encoding on \`Uint8Array\`

For over two decades, converting binary byte arrays to and from Base64 or Hexadecimal strings required cumbersome workarounds: Node.js developers leaned on \`Buffer.from()\`, while browser developers wrestled with \`atob()\`/\`btoa()\` or third-party packages.

ES2026 adds four standard methods directly to \`Uint8Array\`:
- \`Uint8Array.prototype.toBase64()\`
- \`Uint8Array.fromBase64()\`
- \`Uint8Array.prototype.toHex()\`
- \`Uint8Array.fromHex()\`

\`\`\`javascript
// Encoding bytes to Base64 and Hex
const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"

const b64 = bytes.toBase64();
console.log(b64); // "SGVsbG8="

const hex = bytes.toHex();
console.log(hex); // "48656c6c6f"

// Decoding back to a Uint8Array
const fromB64 = Uint8Array.fromBase64("SGVsbG8=");
const fromHex = Uint8Array.fromHex("48656c6c6f");

console.log(fromB64); // Uint8Array(5) [72, 101, 108, 108, 111]
console.log(fromHex); // Uint8Array(5) [72, 101, 108, 108, 111]
\`\`\`

You can also pass options for URL-safe Base64 (\`alphabet: "base64url"\`) and custom padding behaviors.

---

## 2. Map Upserts: \`getOrInsert()\` and \`getOrInsertComputed()\`

Managing memoized values or grouping entries inside a \`Map\` or \`WeakMap\` traditionally meant writing tedious boilerplate checks:

\`\`\`javascript
// ❌ The old check-then-set boilerplate
if (!cache.has(key)) {
  cache.set(key, computeHeavyValue(key));
}
const value = cache.get(key);
\`\`\`

ES2026 introduces **\`getOrInsert()\`** and **\`getOrInsertComputed()\`** directly onto \`Map\` and \`WeakMap\`:

\`\`\`javascript
const userCache = new Map();

// 1. Insert fixed fallback if key doesn't exist
const session = userCache.getOrInsert("guest", { role: "anonymous", active: true });

// 2. Compute value lazily only when key is missing
const profile = userCache.getOrInsertComputed(userId, (id) => {
  console.log(\`Running expensive setup for \${id}...\`);
  return { id, initializedAt: Date.now() };
});
\`\`\`

If the key exists, the callback is never executed. This guarantees optimal performance for caching and dependency resolution systems.

---

## 3. \`Error.isError()\`: Cross-Realm Error Detection

Detecting whether a given object is truly an instance of an \`Error\` has been notoriously fragile in JavaScript when working across multiple execution realms (such as \`<iframe>\`, Web Workers, Shadow Realms, or Node.js \`vm\` contexts):

\`\`\`javascript
// ❌ Fails across iframes or VM contexts!
// If 'err' was thrown from an iframe, its prototype chain
// references the iframe's Error constructor, NOT window.Error.
if (err instanceof Error) {
  // Can evaluate to false even when 'err' is a legitimate Error!
}
\`\`\`

ES2026 introduces **\`Error.isError()\`**, mirroring the dependable behavior of \`Array.isArray()\`:

\`\`\`javascript
// ✅ Reliable across all execution realms and window boundaries
if (Error.isError(value)) {
  console.error("Identified genuine error object:", value.message);
}
\`\`\`

---

## 4. \`Math.sumPrecise()\`: Accurate Floating-Point Summation

Because JavaScript numbers use standard IEEE 754 double-precision floats, cumulative addition frequently suffers from precision drift:

\`\`\`javascript
const values = [0.1, 0.2, 0.3, 0.4];

// ❌ Standard reduce drift:
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 0.9999999999999999 instead of 1.0!
\`\`\`

ES2026 introduces **\`Math.sumPrecise()\`**, which computes exact mathematical sums across iterables using multi-word arithmetic before performing a single final rounding step:

\`\`\`javascript
const exactSum = Math.sumPrecise([0.1, 0.2, 0.3, 0.4]);
console.log(exactSum); // 1.0

const financialAmounts = [19.99, 0.01, 80.00, -0.05];
console.log(Math.sumPrecise(financialAmounts)); // 99.95
\`\`\`

---

## 5. Asynchronous Iterables to Arrays: \`Array.fromAsync()\`

While \`Array.from()\` handles synchronous iterables, modern applications rely heavily on \`AsyncIterator\`, readable streams, and async generators.

**\`Array.fromAsync()\`** processes async sequences and returns a promise that resolves to a newly constructed array:

\`\`\`javascript
async function* fetchUserPages() {
  yield { page: 1, users: ["Alice", "Bob"] };
  yield { page: 2, users: ["Charlie", "Diana"] };
}

// Convert all yielded pages into a single flat array
const allPages = await Array.fromAsync(fetchUserPages());
console.log(allPages.length); // 2

// Optional mapping callback
const pageNumbers = await Array.fromAsync(fetchUserPages(), (p) => p.page);
console.log(pageNumbers); // [1, 2]
\`\`\`

---

## 6. Iterator Concatenation: \`Iterator.concat()\`

Iterating through multiple data sets sequentially without allocating intermediate arrays in memory is now standard with **\`Iterator.concat()\`**:

\`\`\`javascript
const firstBatch = [1, 2, 3].values();
const secondBatch = [4, 5, 6].values();
const thirdBatch = [7, 8, 9].values();

// Combine iterators lazily without memory copying
const combined = Iterator.concat(firstBatch, secondBatch, thirdBatch);

for (const value of combined) {
  console.log(value); // Logs 1 through 9
}
\`\`\`

---

## 7. \`JSON.parse\` Source Text Access

When parsing payloads containing high-precision numbers (such as 64-bit database identifiers or high-precision currency values), standard \`JSON.parse()\` converts digits into JavaScript \`number\` before your reviver runs, causing silent precision truncation.

ES2026 equips the reviver with a third context parameter holding the exact raw source snippet:

\`\`\`javascript
const jsonString = '{"accountId": 9007199254740993882}';

const parsed = JSON.parse(jsonString, (key, value, context) => {
  if (key === "accountId") {
    // context.source contains the exact string "9007199254740993882"
    return BigInt(context.source);
  }
  return value;
});

console.log(typeof parsed.accountId); // "bigint"
console.log(parsed.accountId.toString()); // "9007199254740993882" (preserved!)
\`\`\`

---

## Approved ES2026 Features Quick Reference

| Feature | Method / Syntax | Primary Problem Solved |
|---------|-----------------|------------------------|
| \`Uint8Array\` Base64/Hex | \`.toBase64()\`, \`.fromHex()\` | Native binary encoding without Node.js \`Buffer\` |
| Map Upserts | \`map.getOrInsertComputed()\` | Atomic cache queries without duplicate checks |
| Cross-Realm Error Check | \`Error.isError(val)\` | Fixes broken \`instanceof Error\` across iframes/VMs |
| Exact Summation | \`Math.sumPrecise(iterable)\` | Eliminates IEEE 754 precision accumulation error |
| Async Array Builder | \`Array.fromAsync(stream)\` | Automatically resolves async streams to arrays |
| Iterator Chaining | \`Iterator.concat(...iterators)\` | Memory-efficient lazy iterator composition |
| Raw JSON Source | \`JSON.parse(str, reviver)\` | Access unparsed source text for BigInt/Decimal |

---

## Conclusion

ECMAScript 2026 marks another tremendous milestone for JavaScript, continuing to bake runtime essentials directly into the engine. With built-in Base64/Hex support on byte arrays, accurate floating-point summation, and cross-realm error verification, developers can build faster, cleaner applications with significantly fewer dependencies.

Explore my portfolio and open-source projects [here](https://github.com/Shahil-Ahamad-Per).`;
