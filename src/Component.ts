class Component {
  private name: string;

  constructor(name: string) {
    this.name = name;

    console.log(`:: instance instantiated for user ${name}`);
    console.log(':: instantiated in version ', this.getVersion());
  }

  get creatorName() {
    return this.name;
  }

  set creatorName(n: string) {
    this.name = n.toUpperCase();
  }

  public getVersion() {
    return `(c) ${this.name} v1.0`;
  }

  public pause() {
    const that = this;

    setTimeout(function () {
      console.log(':: PAUSE BEENDET, lieber ' + that.name);
    }, 1000);
  }

  public pauseArrow() {
    setTimeout(() => {
      console.log(':: PAUSE BEENDET, lieber ' + this.name);
    }, 1000);
  }
}

export default Component;
