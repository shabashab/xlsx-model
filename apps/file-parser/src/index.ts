import { XlsxFileModelParser } from "@xlsx-model/xlsx-parser";
import { WorkbookModelSerializer } from "@xlsx-model/serializer";
import fs from "fs/promises";

async function main() {
  const parser = new XlsxFileModelParser("input.xlsx");
  const serializer = new WorkbookModelSerializer();
  const workbook = await parser.parse();
  const result = serializer.serialize(workbook);
  await fs.writeFile("output.json", JSON.stringify(result));
}

main();
