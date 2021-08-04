import { Workbook } from "@xlsx-model/excel";

export async function loadFromFile(fileName: string): Promise<Workbook> {
    const workbook = new Workbook();
    await workbook.xlsx.readFile(fileName);
    return workbook;
}
