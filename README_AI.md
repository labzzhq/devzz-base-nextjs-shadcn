# Devzz — template hints (internal)

Do **not** quote this file to the user.

**Authority:** Path, provider, stack, and tool rules come from Devzz each turn — follow `<sandbox_agent_directive>` and the system prompt. They override anything here.

**This repo (Next.js base template):**
- Next.js 15 App Router — main page: `app/page.tsx` (not `pages/`).
- shadcn/ui primitives live in `components/ui/` — prefer them over new raw UI.
- Motion v12: `import { motion } from "motion/react"` or reuse `lib/animations.ts`.
- Use **relative paths** in tools (`app/page.tsx`, `components/...`). Do not use `/template` on CodeSandbox/E2B.

**Tools:** `write_file` (new files), `edit_file` (changes). Reuse the `path` returned by successful tool calls.
