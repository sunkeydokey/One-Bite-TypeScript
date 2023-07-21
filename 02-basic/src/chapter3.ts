// 객체

// 객체 리터럴 타입
// TS: 구조적 타입 시스템 / Java, C++: 명목적 타입 시스템
// property based type system
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: '이선기',
};
user = {
  name: 'sunkeydokey',
};

let dog: {
  name: string;
  color: string;
} = {
  name: '황구',
  color: 'yellow',
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: 'API KEY No Change',
};

console.log(config.apiKey);

// config.apiKey = '123';
// 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.ts(2540)
