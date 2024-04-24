type Project = {
  name: string;
  description: string;
  image: {
    path: string;
    alt: string;
  };
  color: string;
  link: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "GrayJay Search",
    description:
      "A Google Chrome extension to allow officials to search through games on the GrayJay website. ",
    image: {
        path: "/grayjay.png",
        alt: "A screenshot of the Chrome Extension"
    },
    color: "red",
    link: "https://github.com/ldhwaddell/grayjay-search",
    tags: ["TypeScript", "Chrome", "React"],
  },
  {
    name: "GrayJay Search",
    description:
      "A Google Chrome extension to allow officials to search through games on the GrayJay website. ",
      image: {
        path: "/grayjay.png",
        alt: "A screenshot of the Chrome Extension"
    },
    color: "green",
    link: "https://github.com/ldhwaddell/grayjay-search",
    tags: ["TypeScript", "Chrome", "React"],
  },
  {
    name: "GrayJay Search",
    description:
      "A Google Chrome extension to allow officials to search through games on the GrayJay website. ",
      image: {
        path: "/grayjay.png",
        alt: "A screenshot of the Chrome Extension"
    },
    color: "blue",
    link: "https://github.com/ldhwaddell/grayjay-search",
    tags: ["TypeScript", "Chrome", "React"],
  },
];
