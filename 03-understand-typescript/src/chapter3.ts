// 기본 타입 간 호환성

import { type } from 'os';

let num1: number = 10;
let num2: 10 = 10;

// 업 캐스팅
num1 = num2;
// 'number' 형식은 '10' 형식에 할당할 수 없습니다.
// num2 = num1

// 객체 타입 간의 호환성 -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '개',
  color: 'yellow',
};

let dog: Dog = {
  name: '멍멍이',
  color: 'yellow',
  breed: 'Jindo',
};

animal = dog;
// 'breed' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다.
// dog = animal;

// 객체 타입들은 프로퍼티를 통해 다른 객체와 타입 계층을 가질 수 있음

// let animal: Animal = {
// name: '멍멍이',
// color: 'yellow',
// 초과 프로퍼티 검사
// breed: 'Jindo',
// '{ name: string; color: string; breed: string; }' 형식은 'Animal' 형식에 할당할 수 없습니다.
// 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Animal' 형식에 'breed'이(가) 없습니다.
// };
