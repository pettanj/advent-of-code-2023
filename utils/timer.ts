export default class Timer {
  startDate: Date | null = null;
  constructor() {}

  public start() {
    this.startDate = new Date();
  }

  public stop() {
    if (this.startDate == null) return;
    const time = +new Date() - +this.startDate;
    this.clear();
    return time;
  }

  public clear() {
    this.startDate = null;
  }
}
