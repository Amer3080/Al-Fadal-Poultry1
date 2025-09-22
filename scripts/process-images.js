import fs from "fs";
import path from "path";
import sharp from "sharp";

const sourceDir = "./src/assets/images";
const outputDir = "./src/assets/processed";
const sizesFile = "./image-sizes.json";

const validFormats = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const imageSizes = {};

fs.mkdirSync(outputDir, { recursive: true });

const processImage = async (file) => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);
  const inputPath = path.join(sourceDir, file);

  try {
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;

    imageSizes[file] = { width, height };

    await sharp(inputPath)
      .resize(width, height)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${baseName}-${width}x${height}.webp`));

    await sharp(inputPath)
      .resize(width, height)
      .avif({ quality: 50 })
      .toFile(path.join(outputDir, `${baseName}-${width}x${height}.avif`));

    console.log(`✅ Processed: ${file} → ${width}x${height}`);
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err.message);
  }
};

const run = async () => {
  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (validFormats.includes(ext)) {
      await processImage(file);
    }
  }

  fs.writeFileSync(sizesFile, JSON.stringify(imageSizes, null, 2));
  console.log(`📄 Saved image sizes to ${sizesFile}`);
};

run();
