import { globby } from "globby";
import path from "path";
import fs from "fs";
import fm from "front-matter";
import { createCanvas, GlobalFonts, loadImage } from "@napi-rs/canvas";

async function generateBlogCover() {
  const pages = await globby(["pages/blogs/**/*.mdx"], {
    cwd: path.join(process.cwd(), "src"),
  });
  for (let page of pages) {
    let p = path.join(process.cwd(), "src", page);
    const file = fs.readFileSync(p, { encoding: "ascii" });
    const matter = fm(file)?.attributes;
    if (!matter) return;
    const save_file = path.join(
      process.cwd(),
      "public",
      "blogs",
      "covers",
      page.split("/")[page.split("/").length - 1].replace(".mdx", ".png")
    );
    GlobalFonts.registerFromPath(
      path.join(process.cwd(), "fonts", "Kanit-Bold.ttf"),
      "Kanit"
    );
    GlobalFonts.registerFromPath(
      path.join(process.cwd(), "fonts", "Roboto-Medium.ttf"),
      "Roboto-Med"
    );
    GlobalFonts.registerFromPath(
      path.join(process.cwd(), "fonts", "Roboto-Bold.ttf"),
      "Roboto-Bold"
    );
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#001e29";
    ctx.fillRect(0, 0, 1200, 630);
    ctx.drawImage(
      await loadImage(
        fs.readFileSync(
          path.join(process.cwd(), "public", "adaptive-logo-dark.svg")
        )
      ),
      20,
      20,
      30,
      30
    );
    ctx.fillStyle = "#fff";
    ctx.font = "30px Roboto-Med";
    ctx.fillText("Abh80 Blogs", 60, 43, 400);
    ctx.font = "60px Kanit";
    ctx.fillText(matter.title, 40, 300, 1200 - 40);
    ctx.fillStyle = "#38bdf8";
    ctx.font = "30px Kanit";
    ctx.fillText(matter.tag, 40, 300 - 100, 1200 - 40);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "24px Roboto-Bold";
    ctx.fillText(matter.description, 40, 300 + 70, 1200 - 40);

    fs.mkdirSync(path.join(process.cwd(), "public", "blogs", "covers"), {
      recursive: true,
    });
    fs.writeFileSync(save_file, canvas.toBuffer("image/png"));
  }
}

generateBlogCover();
