// 함수 오버로딩 (함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의)

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // ✅ 버전 1 - 오버로드 시그니쳐
// func(1, 2); 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.
func(1, 2, 3); // ✅ 버전 3 - 오버로드 시그니쳐
