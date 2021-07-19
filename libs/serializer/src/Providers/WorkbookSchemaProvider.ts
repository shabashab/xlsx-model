import ISchemaProvider from "./Interfaces/ISchemaProvider";
import { Schema } from "jsonschema";

import path from "path";
import fs from "fs";

export default class WorkbookSchemaProvider implements ISchemaProvider {
  private _dependencies: Schema[];
  private _rootSchema: Schema;

  constructor(dirName?: string) {
    this._dependencies = [];
    this._rootSchema = {};
    this.load(dirName || path.resolve(__dirname, "../../schema"));
  }

  private buildSchemasFileNames(dirName: string): string[] {
    let fileNames = fs.readdirSync(dirName);
    fileNames = fileNames.map((value) => {
      return path.resolve(dirName, value);
    });
    return fileNames;
  }

  public load(dirName: string) {
    let fileNames = this.buildSchemasFileNames(dirName);

    let rootSchema: Schema = {};
    let dependencies: Schema[] = [];

    fileNames.forEach((fileName) => {
      let schema = <Schema>JSON.parse(fs.readFileSync(fileName).toString());
      if (schema.$id == "/WorkbookModel") rootSchema = schema;
      else dependencies.push(schema);
    });

    this._rootSchema = rootSchema;
    this._dependencies = dependencies;
  }

  public get dependencies(): Schema[] {
    return this._dependencies;
  }

  public get rootSchema(): Schema {
    return this._rootSchema;
  }
}
