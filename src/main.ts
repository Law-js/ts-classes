import './style.css';
import Component from './Component';

const app = document.querySelector<HTMLDivElement>('#app')!;
const content = document.querySelector<HTMLDivElement>('#content')!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
`;

const myComponent = new Component('Peter Pan');
//myComponent.name = 'Hans';

const txt = [];

txt.push(myComponent.getVersion());
txt.push(myComponent.creatorName);

myComponent.creatorName = 'Pascal';
txt.push(myComponent.creatorName);

myComponent.pause();

class C2 extends Component {
  userAge: number;

  constructor(derName: string, alter: number) {
    super(derName);
    this.userAge = alter;
  }

  public getTest() {
    return 'Test von C2 mit dem Alter: ' + this.userAge;
  }
}

const c2 = new C2('C2-Instanz', 40);
txt.push('C2 VERSION: ' + c2.getVersion());
txt.push('C2 TEST: ' + c2.getTest());

content.innerHTML = txt.map((item) => `<p>${item}</p>`).join('');
