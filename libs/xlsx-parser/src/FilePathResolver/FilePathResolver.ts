import IFilePathResolver from "./IFilePathResolver";
import appRoot from "app-root-path";

export default class FilePathResolver implements IFilePathResolver {
  resolve(fileName: string): string {
    return appRoot.resolve(fileName);
  }
}
