import { defineConfig } from "vite";
import monkey, { MonkeyUserScript } from "vite-plugin-monkey";

const userscript: MonkeyUserScript = {
  name: "duckduckgo-gmaps",
  namespace: "https://github.com/kiangkuang",
  version: "0.0.1",
  description: "Redirect DuckDuckGo Maps query to Google Maps",
  author: "Kiang Kuang",
  match: "https://duckduckgo.com/*",
  icon: "https://www.google.com/s2/favicons?sz=64&domain=duckduckgo.com",
  grant: [],
  require: [],
  // add any other userscript headers
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript,
      build: {
        fileName: "script.user.js",
      },
    }),
  ],
});
