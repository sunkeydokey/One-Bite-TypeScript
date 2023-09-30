// 함수 타입의 호환성 (특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단)

// 리턴값의 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 캐스팅
// b = a; 다운 캐스팅
// 'A' 형식은 'B' 형식에 할당할 수 없습니다.
// 'number' 형식은 '10' 형식에 할당할 수 없습니다.

// 매개변수의 호환
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};
// c = d; 업 캐스팅
// 'D' 형식은 'C' 형식에 할당할 수 없습니다.
// 'value' 및 'value' 매개 변수의 형식이 호환되지 않습니다.
// 'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c; // 다운 캐스팅

// 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number, c: number, d: number) => void;
type Func2 = (a: number, b: number) => void;

let func1: Func1 = (a, b, c, d) => {};
let func2: Func2 = (a, b) => {};

func1 = func2;
// func2 = func1;
// 'Func1' 형식은 'Func2' 형식에 할당할 수 없습니다.
// Target signature provides too few arguments. Expected 4 or more, but got 2.
