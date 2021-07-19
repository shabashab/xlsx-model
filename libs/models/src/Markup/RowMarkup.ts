export default class RowMarkup {
  public height?: number;
  public level?: number;
  public collapsed?: boolean;

  constructor(height?: number, level?: number, collapsed?: boolean) {
    this.height = height;
    this.level = level;
    this.collapsed = collapsed;
  }
}
