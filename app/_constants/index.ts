export const navBarHeight = 54;

export const navArray = [
  { link: "/work", text: "Work" },
  { link: "/about", text: "About" },
  { link: "/contact", text: "Contact" }
];

export const footerArray = [
  { link: "/privacy-policy", text: "Privacy Policy & Cookie Policy" },
  {
    link: "https://lab.co.uk/LAB.LEGAL.STAND-TSCS.04.02.pdf",
    text: "Terms & conditions"
  }
];

type projectTitle =
  | "Superdry"
  | "iSky"
  | "Hestia"
  | "Neovest"
  | "Teamsport"
  | "Tevva"
  | "Hasbean";

export const projectsArray: {
  link: string;
  text: projectTitle;
  imageAlt: string;
  subtitle: string;
}[] = [
  {
    link: "superdry",
    text: "Superdry",
    imageAlt: "Image of case study",
    subtitle: "A new mobile e-commerce experience for Superdry"
  },
  {
    link: "isky",
    text: "iSky",
    imageAlt: "Image of case study",
    subtitle: "Developing a digital intelligence platform for iSky"
  },
  {
    link: "hestia",
    text: "Hestia",
    imageAlt: "Image of case study",
    subtitle: "Redesigning Hestia's app to be more supportive"
  },
  {
    link: "neovest",
    text: "Neovest",
    imageAlt: "Image of case study",
    subtitle: "Transforming Neovest's digital experience for traders"
  },
  {
    link: "teamsport",
    text: "Teamsport",
    imageAlt: "Image of case study",
    subtitle: "A new winning booking experience for Teamsport"
  },
  {
    link: "tevva",
    text: "Tevva",
    imageAlt: "Image of case study",
    subtitle: "Launching Tevva into the hydrogen electric truck market"
  },
  {
    link: "hasbean",
    text: "Hasbean",
    imageAlt: "Image of case study",
    subtitle: "A new Shopify e-commerce experience for Hasbean"
  }
];

// Need to type this so we can import the static image data instead of making a network call
// Could just provide the path straight to the src but the docs import the image
type homeTitle = "Superdry" | "Teamsport" | "Neovest" | "Hestia" | "Tevva";

export const homeFeatures: {
  title: homeTitle;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImageAlt: string;
}[] = [
  {
    title: "Superdry",
    subtitle: "Redesigning the mobile e-commerce experience",
    buttonText: "View Superdry",
    buttonLink: "/work/superdry",
    backgroundImageAlt: "Superdry background image"
  },
  {
    title: "Teamsport",
    subtitle: "Moving to a performant composable platform",
    buttonText: "View Teamsport",
    buttonLink: "/work/teamsport",
    backgroundImageAlt: "Teamsport background image"
  },
  {
    title: "Neovest",
    subtitle: "Refreshing the brand and website for a global hedgfund",
    buttonText: "View Neovest",
    buttonLink: "/work/neovest",
    backgroundImageAlt: "Neovest background image"
  },
  {
    title: "Hestia",
    subtitle: "Designing for empathy",
    buttonText: "View Hestia",
    buttonLink: "/work/hestia",
    backgroundImageAlt: "Hestia background image"
  },
  {
    title: "Tevva",
    subtitle: "Launching Tevva's Hydrogen Electric Truck brand",
    buttonText: "View Tevva",
    buttonLink: "/work/tevva",
    backgroundImageAlt: "Tevva background image"
  }
];
