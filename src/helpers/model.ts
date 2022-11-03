export class Spotcheck {
  public id: string
  public timer: string
  public number: string
  public carName: string
  public checkCount: number
  public checkTotalCount: number
  constructor(options: ISpotcheck) {
    this.id = options.id
    this.timer = options.timer
    this.number = options.number
    this.carName = options.carName
    this.checkCount = options.checkCount
    this.checkTotalCount = options.checkTotalCount
  }

  static cars(): ISpotcheck[] {
    const datas: ISpotcheck[] = []
    for (let i = 0; i < 50; i++) {
      datas.push(new Spotcheck({ id: Math.random().toString() + Date.now() + '', timer: this.getDate(), carName: '生产车间', checkCount: 3, checkTotalCount: 10, number: Math.random().toString() + Date.now() + '' }))
    }
    return datas
  }

  private static getDate() {
    const date = new Date()
    const day = (date.getDate()).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0')
    const minunte = date.getMinutes().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${month}/${day} ${hours}:${minunte}`;
  }
}
