// 대수 타입: 여러개의 타입을 합성해서 새롭게 만들어낸 타입

// 합집합 타입 - Union Type

let a: string | number;
a = 1;
a = 'string';

let arr: (string | number)[] = [1, 'hello'];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let Union2: Union1 = {
  name: '',
  language: '',
  color: '',
};

// 교집합 타입 - Intersection Tyoe

let variable: number & string;
// let variable: never

type Intersection = Dog & Person;
let Intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
