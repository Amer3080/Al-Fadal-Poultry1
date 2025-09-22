// scripts/optimize-react-icons.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ==== ESM __dirname hack ====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ============================

const projectDir = path.resolve(__dirname, "../src");
// كل المجموعات التي لا تدعم deep imports
const problematicPacks = [
  "fa",
  "io",
  "md",
  "ti",
  "wi",
  "di",
  "bs",
  "bi",
  "cg",
  "gi",
  "hi",
  "im",
  "ri",
  "si",
  "vsc",
  "pi",
];

let totalDeepImports = 0;
const report = [];

// 1) استعراض جميع ملفات .js/.jsx/.tsx في src
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (/\.(js|jsx|tsx)$/.test(entry.name)) return [full];
    return [];
  });
}

// 2) إعادة كتابة الاستيرادات في كل ملف
function optimize(file) {
  let content = fs.readFileSync(file, "utf8");

  // أ) تحويل deep imports لمجموعات problematic إلى import جماعي
  const deepRe =
    /import\s+([A-Za-z0-9_]+)\s+from\s+['"]react-icons\/(\w+)\/\1['"]/g;
  content = content.replace(deepRe, (_, icon, pack) => {
    if (problematicPacks.includes(pack)) {
      report.push({ file, pack, icons: [icon], method: "grouped (from deep)" });
      return `import { ${icon} } from 'react-icons/${pack}';`;
    }
    return _;
  });

  // ب) تحويل الاستيرادات الجماعية للمجموعات غير problematic إلى deep imports
  const groupRe =
    /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]react-icons\/(\w+)['"]/g;
  content = content.replace(groupRe, (_, grp, pack) => {
    const icons = grp
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
    if (!icons.length) return _;

    // لو هذه المجموعة problematic نخليها import جماعي
    if (problematicPacks.includes(pack)) {
      report.push({ file, pack, icons, method: "grouped" });
      return `import { ${icons.join(", ")} } from 'react-icons/${pack}';`;
    }

    // بخلاف ذلك، نقسمها إلى deep imports
    report.push({ file, pack, icons, method: "deep" });
    totalDeepImports += icons.length;
    return icons
      .map((icon) => `import ${icon} from 'react-icons/${pack}/${icon}';`)
      .join("\n");
  });

  if (content !== fs.readFileSync(file, "utf8")) {
    fs.writeFileSync(file, content, "utf8");
    console.log(`✅ Optimized: ${path.relative(projectDir, file)}`);
  }
}

// 3) نفّذ على جميع الملفات
console.log("🔍 Scanning src files…");
walk(projectDir).forEach(optimize);

// 4) أطبع تقرير
console.log("\n📋 Icons Optimization Report:");
report.forEach(({ file, pack, icons, method }) => {
  console.log(
    `  • [${method}] ${pack}: ${icons.join(", ")} — ${path.relative(
      projectDir,
      file
    )}`
  );
});
console.log(`\n✨ Total deep imports applied: ${totalDeepImports}`);
