type Project = {
  title: string;
  description: string;
  image: {
    path: string;
    alt: string;
  };
  color: string;
  link: string;
  tags: string[];
  priority?: boolean;
};

export const projects: Project[] = [
  {
    title: "Rental Data Scraper",
    description:
      "A tool developed for the IJCRS Data Mining Competition. It aggregates rental listings and active development planning applications in a simple unified dashboard. ",
    image: {
      path: "/rental-scraper.png",
      alt: "A screenshot of the reddit-scraper CLI",
    },
    color: "#00FF33",
    link: "https://github.com/ldhwaddell/southwest-properties",
    tags: ["Python", "Airflow", "Next.js"],
  },
  {
    title: "GrayJay Search",
    description:
      "A Google Chrome extension to allow officials to search through games on the GrayJay website. ",
    image: {
      path: "/grayjay.png",
      alt: "A screenshot of the GrayJay Chrome Extension",
    },
    color: "#00FF33",
    link: "https://github.com/ldhwaddell/grayjay-search",
    tags: ["TypeScript", "Chrome", "React"],
  },
  {
    title: "PPTX Parser",
    description:
      "A command line tool to transcribe audio files and extract text from Powerpoint files. ",
    image: {
      path: "/pptx-parser.png",
      alt: "A screenshot of the pptx-parser CLI",
    },
    color: "#00FF33",
    link: "https://github.com/ldhwaddell/pptx-parser",
    tags: ["Python", "Whisper", "Transformers"],
    priority: true
  },
  {
    title: "Reddit Scraper",
    description:
      "A tool to scrape all posts, content, and comments from a subreddit",
    image: {
      path: "/reddit-scraper.png",
      alt: "A screenshot of the reddit-scraper CLI",
    },
    color: "#00FF33",
    link: "https://github.com/ldhwaddell/reddit-scraper",
    tags: ["Python", "Selenium"],
  },
];
