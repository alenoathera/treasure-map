import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve current directory for both ESM and CJS execution
const currentDir = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

function main(): void {
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outputDir, { recursive: true });

  const sourcePath: string = path.join(currentDir, 'entry.png');
  const targetPath: string = path.join(outputDir, 'entry.png');

  const imageBuffer: Buffer = fs.readFileSync(sourcePath);
  fs.writeFileSync(targetPath, imageBuffer);

  console.log(`Successfully wrote entry.png (${imageBuffer.length} bytes) to ${targetPath}`);
}

main();
