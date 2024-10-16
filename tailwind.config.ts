import type { Config } from "tailwindcss";
import {
  iconsPlugin,
  getIconCollections,
  dynamicIconsPlugin,
} from "@egoist/tailwindcss-icons";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide", "whh"]),
    }),
    dynamicIconsPlugin(),
  ],
} satisfies Config;
