// 타입 좁히기
// 조건문 등을 이용해 타입을 좁힘

const narrowing = (value: string | number | Date) => {
  // value.toFixed();
  // 'string | number' 형식에 'toFixed' 속성이 없습니다.
  // 'string' 형식에 'toFixed' 속성이 없습니다.
  // value.toUpperCase();
  // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
  // 'number' 형식에 'toUpperCase' 속성이 없습니다.

  // 타입 가드
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log;
  }
};
