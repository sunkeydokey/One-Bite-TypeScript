// 타입 추론

let a = 10;
// let a: number
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// a = 'string'

// 초기값을 기준으로 추론

let obj = {
  id: 1,
  name: 'sunkeydokey',
  profile: {
    nickname: 'sunny',
    birthday: '1996-05-18',
  },
};

let { id, name, profile } = obj;

function func(message = 'message') {
  return 'string';
}

let d; // 암묵적 any
