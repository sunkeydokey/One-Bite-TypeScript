// 배열과 튜플

//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'i am', 'sunkeydokey'];
let boolArr: Array<boolean> = [true, false, false];

let multiArr: (string | number)[] = [1, 'hello'];

let doubleArr: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

// 튜플: 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];
