# Fix the failing GitHub publish (red cross)

## What went wrong
GitHub stops a step as soon as any part of it reports a problem, even a small one. My "Prepare files" step looked in two places for the finished website. One of those places never exists, so GitHub treated that as an error and stopped. The site was built fine, but it never got uploaded, so you still see the 404.

## What I will change
1. Point the publish steps straight at the one folder where the finished site is built (`dist/client`), so nothing is reported as missing.
2. Keep the extra copy of the main page that stops 404s when someone refreshes the page.
3. Run the build here again using GitHub's strict settings, to check every step finishes without errors.

## What you do afterwards
1. On GitHub, check **Settings → Pages → Source** says **GitHub Actions**.
2. Open the **Actions** tab and wait for the newest run to show a green checkmark.
3. Open https://physchologychannels-sys.github.io/3d-social-showcase/ and refresh.

If it shows a red cross again, click it and copy the text from the step marked in red so I can fix that step.

## Technical details
- GitHub Actions runs steps with `bash -eo pipefail`. `find dist .output ...` returns exit code 1 because `.output` is missing, and pipefail turns that into a failed step.
- New step: `OUT=dist/client`, check that `$OUT/index.html` exists, copy it to `404.html`, add `.nojekyll`, upload `dist/client`.
- Test it here with `bash -eo pipefail` and `GITHUB_PAGES=true NITRO_PRESET=static`.
