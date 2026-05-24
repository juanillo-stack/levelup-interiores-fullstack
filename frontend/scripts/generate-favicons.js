const sharp = require("sharp");
const toIco = require("to-ico");
const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "../src/assets/logolevelupinteriores.jpg");
const publicDir = path.join(__dirname, "../public");

const bg = { r: 245, g: 241, b: 232, alpha: 1 };

async function generate() {
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "logo192.png", size: 192 },
    { name: "logo512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(source)
      .resize(size, size, {
        fit: "contain",
        background: bg,
      })
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, name));
    console.log("Created", name);
  }

  const png16 = await sharp(source)
    .resize(16, 16, { fit: "contain", background: bg })
    .png()
    .toBuffer();

  const png32 = await sharp(source)
    .resize(32, 32, { fit: "contain", background: bg })
    .png()
    .toBuffer();

  const png48 = await sharp(source)
    .resize(48, 48, { fit: "contain", background: bg })
    .png()
    .toBuffer();

  const ico = await toIco([png16, png32, png48]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
  console.log("Created favicon.ico");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
