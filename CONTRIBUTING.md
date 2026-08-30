# Publishing an article to The Flip

There is no admin panel or login. An article is published by adding **one markdown file** to the
repo and pushing it to `main`. The host (Vercel/Netlify) rebuilds automatically and the article
appears on the homepage.

## Where the file goes

```
content/articles/YYYY-MM-DD-slug.md
```

- The folder is `content/articles/` at the repo root — **not** `src/content/articles/`.
- The filename itself isn't parsed for anything; it's just for humans browsing the repo. Match it
  to the date and slug for sanity, but the fields that actually drive the site come from the
  frontmatter below.

## Required frontmatter

Every field below is required. The build will fail (loudly, in CI) if a field is missing, the
wrong type, or `sources` is empty — that's intentional, so a malformed file can't silently break
the homepage.

| Field                | Type              | Notes                                                        |
|-----------------------|-------------------|---------------------------------------------------------------|
| `title`               | string            | The corrected/flipped headline. Used as the page title.       |
| `original_headline`   | string            | The original outlet's headline being corrected.                |
| `original_outlet`     | string            | e.g. `CNN`, `Fox News`, `Reuters`.                             |
| `date`                | date (`YYYY-MM-DD`) | Publish date. Controls homepage ordering (newest first).    |
| `slug`                | string            | URL path: the article lives at `/articles/<slug>/`.            |
| `sources`             | array of URLs     | At least one. Rendered as a numbered "Sources" list.           |

## Example file

`content/articles/2026-09-01-example-slug.md`:

```markdown
---
title: "Corrected/flipped headline"
original_headline: "The original outlet's headline"
original_outlet: "e.g. CNN"
date: 2026-09-01
slug: "example-slug"
sources:
  - "https://example.com/source-1"
  - "https://example.com/source-2"
---

Full article body in markdown goes here. Normal markdown — paragraphs, **bold**, links — all
work. The first paragraph is also used as the one-line teaser on the homepage, so lead with the
core point.
```

## Steps

1. Create the file at `content/articles/YYYY-MM-DD-slug.md` with the frontmatter above.
2. Write the article body in markdown below the frontmatter.
3. Commit the file and push to `main` (or open a PR and merge it).
4. The host rebuilds automatically. The article appears on the homepage at
   `/articles/<slug>/` once the build finishes — no further action needed.
