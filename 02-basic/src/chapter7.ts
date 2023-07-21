// void

let a: void = undefined;

// return이 없는 함수의 반환값 타입을 설정할 때 사용
const doNotHaveReturn = (): void => {
  console.log('no return');
};

// never
const neverType = (): never => {
  while (true) {}
};

const makesError = (): never => {
  throw new Error();
};
