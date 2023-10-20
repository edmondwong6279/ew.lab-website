# ew.lab-website

NextJS 13 project with the app router.

```bash
npm run dev
```

## Dev Notes

- The work section has been hardcoded instead of usingz a dynamic slug (e.g. [project].tsx) because then everything can be prerendered on the server and so will vastly improve performance.

- We currently get a css warning due to an existing issue https://github.com/vercel/next.js/issues/51524
