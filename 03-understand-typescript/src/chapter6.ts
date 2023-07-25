// 타입 단언
type Person = {
  name: string;
  age: number;
};
let person = {} as Person;
person.name = 'sunny';
person.age = 27;

// A as B - A와 B는 계층 관계가 있어야함

// const 단언
let num = 10 as const;
// '2' 형식은 '10' 형식에 할당할 수 없습니다.
// num = 2

let cat = {
  name: 'cat',
  color: 'black',
} as const;
// 모든 프로퍼티가 readonly가 됨

// None NULL 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: 'Lee',
} as const;

// const len: number = post.author.length
// 'post.author'은(는) 'undefined'일 수 있습니다.
const len: number = post.author!.length;
// ! 를 통해 post.author가 무조건 있을 것이라 단언
