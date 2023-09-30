// 함수 타입 정의

// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 리턴하는지 정의
// return 타입 추론됨
// 함수선언문
function func(a: number, b: number): number {
  return a + b;
}

// 화살표함수
const add = (a: number, b: number): number => a + b;

// function introduce(name: number = 'Lee') {
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.
//   console.log(`name: ${name}`);
// }

// function introduce(name: string = 'Lee', height: number) {
//   console.log(`name: ${name}`);
//   console.log(`height: ${height}`);
// }
// introduce('Lee');
// 2개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)

function introduce(name: string = 'Lee', height?: number) {
  console.log(`name: ${name}`);
  console.log(`height: ${height}`);
}
introduce('Lee');
// introduce(180); 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((number) => (sum += number));
}
