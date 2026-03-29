# TODOS

## OG Image Generator for New Page Types
**What:** Extend `/og/[...slug].png.ts` to handle `/case-studies/*` and `/decisions/*` page types with appropriate visual treatment.
**Why:** Case studies shared on Twitter/LinkedIn without compelling OG images get less engagement. The current generator likely only handles blog post titles.
**Depends on:** Case study pages being created first.
**Context:** Current generator uses Satori + Sharp. Satori has constraints (TTF fonts only, limited CSS subset). May need iteration on the visual template.

## Tech Stack Data Cleanup
**What:** Decide where `technologies` array from `src/data/projects.ts` lives after homepage redesign removes Tech Stack section.
**Why:** Dead data exports are confusing for future maintainability.
**Options:** Move to About page, use in case studies via `<Stack>` component, or remove entirely.
**Context:** 7 items with name, years, description, primary flag. Homepage was the only consumer.
