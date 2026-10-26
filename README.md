# noodlellm.com

The website for Noodle LLM: a Next.js static export. The desktop app lives in
[HearthLabs/noodlellm](https://github.com/HearthLabs/noodlellm).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Branches

- `main` is the website's source.
- `gh-pages` is the built site that GitHub Pages serves. Do not edit it by hand: every push
  to `main` rebuilds it (`.github/workflows/publish.yml`), keeping `CNAME`, `.nojekyll` and,
  while the site is private, `gate.js` and its `robots.txt`.

## The model catalog

`public/catalog.json` is the list of models the desktop app shows in its store, served at
https://noodlellm.com/catalog.json. Do not edit it here: it is written by the "Publish
catalog" workflow in HearthLabs/noodlellm whenever `catalog/catalog.seed.json` changes there.

## Installers

The download button links to this repo's GitHub Releases (`NoodleLLM-Setup.exe`), so releases
stay here. The Mac shows as coming soon; `NoodleLLM-mac.dmg` stays on the release but nothing
links to it.
