import './style.css';

let ex1: number[] = [];
let ex2: number[] = [];

/*************** #1 *************************/

const example1 = () => {
  const tracker = [];
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log('ex1: ', i);
    }, 1000 + i);
    tracker.push(i);
  }
  return tracker;
};

// 0, 1, 2
// 3, 3, 3

/*************** #2 *************************/
const example2 = () => {
  const tracker = [];
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log('ex2: ', i);
    }, 1000 + i);
    tracker.push(i);
  }
  return tracker;
};

/********************************************/

ex1 = example1();
ex2 = example2();

// 3, 3, 3, 0, 1, 2
// 3, 0, 3, 1, 3, 2

/********************************************/
/********************************************/

async function myFunc(str1: string, str2: string): Promise<string> {
  const result = await `${str1} + ${str2}`;
  return result;
}

const response = async () => {
  const nyWeather: string = await myFunc('Hi', 'there');
};

const ex1Div: HTMLElement = document.getElementById('ex1');
const ex2Div: HTMLElement = document.getElementById('ex2');
ex1Div.innerHTML = `${ex1}`;
ex2Div.innerHTML = `${ex2}`;
