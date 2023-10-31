# ew.lab-website

NextJS 13 project with the app router.

```bash
npm run dev
```

## Dev Notes

- The work section has been hardcoded instead of usingz a dynamic slug (e.g. [project].tsx) because then everything can be prerendered on the server and so will vastly improve performance.

- We currently get a css warning due to an existing issue https://github.com/vercel/next.js/issues/51524

- Next's automatic image optimisation doesn't let you use different images for different viewports: https://github.com/vercel/next.js/discussions/32196#discussioncomment-1761938
  I initially manually used html source like this:

```
<picture>
    <source srcSet="/CaseStudy/Hestia.jpg" media="(min-width: 768px)" />
    <img
    className={styles.image}
    src="/CaseStudy/Hestia-mob.jpg"
    alt="Hestia background image"
    />
</picture>
```

but then we don't get any of next's automatic image optimisation so I just render both but hide the relevant one on breakpoints.
