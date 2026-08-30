# The Flip

Short articles that counter ideologically-slanted news framing with missing context and
counter-data. Each article pairs an original headline/outlet with a corrected headline and a
fact-based rebuttal body.

Built with [Astro](https://astro.build) content collections — no database, no CMS, no admin
panel. New articles are published by committing a markdown file to the repo.

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

To type-check and build a production bundle:

```bash
npm run build
npm run preview
```

## Deploying

This is a static Astro site with no server-side code, so it deploys to Vercel or Netlify with
zero configuration — both auto-detect Astro and set the correct build command
(`npm run build`) and output directory (`dist/`) automatically.

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Import the repo in [Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/start).
3. Deploy. Every push to `main` triggers an automatic rebuild and redeploy.

No environment variables or build settings need to be changed.

## Publishing a new article

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the exact format. In short: add one markdown file to
`content/articles/`, commit, and push to `main`. The host rebuilds automatically and the article
appears on the homepage — there is no login, form, or admin UI involved.
