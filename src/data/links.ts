export type LinkItem = {
  href: string;
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  description: string;
};

export const linkItems: LinkItem[] = [
  {
    href: "https://www.figma.com",
    image: "/images/figma.png",
    imageAlt: "Figma",
    category: "ONLINE MASTERCLASS",
    title: "Figma Pro",
    description: "Learn how to design with Figma like a Pro.",
  },
  {
    href: "https://cursor.com",
    image: "/images/cursor.png",
    imageAlt: "Laptop",
    category: "ONLINE MASTERCLASS",
    title: "Cursor Pro",
    description: "Learn how to code with Cursor like a Pro.",
  },
  {
    href: "#",
    image: "/images/poster.png",
    imageAlt: "Posters",
    title: "The posters",
    description: "All posters drawn by hand on my iPad.",
  },
  {
    href: "#",
    image: "/images/merch.png",
    imageAlt: "Merch",
    title: "The merch",
    description: "Finally a cool brand of merch for creatives.",
  },
  {
    href: "#",
    image: "/images/cv.png",
    imageAlt: "CV templates",
    category: "FIGMA TEMPLATES",
    title: "CV Templates",
    description: "Make sure to make a good first impression.",
  },
  {
    href: "#",
    image: "/images/portfolio.png",
    imageAlt: "Portfolio templates",
    category: "FIGMA TEMPLATES",
    title: "Portfolio Templates",
    description: "Give your masterpieces the shiny frame they deserve.",
  },
  {
    href: "#",
    image: "/images/davinci.png",
    imageAlt: "DaVinci Resolve",
    category: "DA VINCI FILES",
    title: "Get my LUT",
    description: "If you love my Color Grading, just get the same.",
  },
  {
    href: "#",
    image: "/images/camera.png",
    imageAlt: "Camera gear",
    category: "AFFILIATE LINKS",
    title: "My camera setup",
    description: "If you want to start creating content, start here.",
  },
];
