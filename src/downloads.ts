import type { DownloadableItem } from "./types";

export const downloads: DownloadableItem[] = [
  {
    title: "Atom one dark",
    description: `
      This was inspired by the theme I use in my Visual Studio Code,
      which is the One Dark Pro darker variant.
      So I basically ported a theme from VS Code,
      which was a port from Atom, to Vital. It's a dark theme with a
      pretty low contrast and cool colors that aren't too in your
      face.
    `,
    downloadLink: "/skins/Atom One Dark.vitalskin",
    images: [
      {
        src: "/images/atom one dark pro vital skin.png",
        alt: "Atom one dark pro darker main view",
      },
      {
        src: "/images/atom one dark pro vital skin fx.png",
        alt: "Atom one dark pro darker effects view",
      },
    ],
  },
];
