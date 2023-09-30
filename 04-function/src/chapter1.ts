// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: Operation = (a: number, b: number) => a + b;
const sub: Operation = (a: number, b: number) => a - b;
const multifly: Operation = (a: number, b: number) => a * b;
const divide: Operation = (a: number, b: number) => a / b;

// 호출 시그니처 (콜 시그니처)
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a: number, b: number) => a + b;
const sub2: Operation2 = (a: number, b: number) => a - b;
const multifly2: Operation2 = (a: number, b: number) => a * b;
const divide2: Operation2 = (a: number, b: number) => a / b;
