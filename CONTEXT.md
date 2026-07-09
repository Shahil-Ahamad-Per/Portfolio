# Shahil Ahamad Portfolio

A single-page portfolio site with a blog. Content is static — no CMS, no database.

## Language

**Content Adapter**:
A module that abstracts content storage behind a seam. Exposes `getAllPosts()` and `getPostById(id)` across a uniform interface. Callers never import React components or raw markdown from data files.
_Avoid_: Content loader, data provider

**Contact Pipeline**:
The end-to-end flow from form submission through rate limiting to delivery. Spans three internal modules: a form state hook (`useContactForm`), a rate-limit adapter (localStorage client-side, Cloudflare Pages Function server-side), and an API adapter (proxies to Web3Forms).
_Avoid_: Contact form, contact service

**Section**:
A visually distinct region on the single-page portfolio (Hero, About, Skills, Projects, Blog, Contact, Footer). Each is a self-contained module rendered by the page orchestrator.
_Avoid_: Component (when referring to a full page region), block, widget

**Page Orchestrator**:
The top-level module (`app/page.tsx`) that wires sections together, manages scroll-based navigation, and handles first-visit lifecycle. Thin by design — navigation behaviour lives in hooks.
_Avoid_: Layout, shell, app shell
