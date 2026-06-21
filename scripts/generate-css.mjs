import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "../src/app/globals.src.css");
const dest = path.resolve(__dirname, "../src/app/globals.css");

const css = fs.readFileSync(src, "utf8");

postcss([tailwindcss()])
  .process(css, { from: src })
  .then((result) => {
    fs.writeFileSync(dest, result.css);
    console.log(`✅ Tailwind CSS generated: ${(result.css.length / 1024).toFixed(1)} KB`);
  })
  .catch((err) => {
    console.error("❌ Error generating CSS:", err.message);
    process.exit(1);
  });
