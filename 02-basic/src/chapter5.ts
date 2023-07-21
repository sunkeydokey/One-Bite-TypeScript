// enum (열거형) 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용

enum Role {
  ADMIN, // Default = 0
  USER, // Default + 1
  GUEST, // Default + 2
}

enum Language {
  korean = 'ko',
  english = 'en',
}
// 컴파일 결과
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["USER"] = 1] = "USER";
//     Role[Role["GUEST"] = 2] = "GUEST";
// })(Role || (Role = {}));
// var Language;
// (function (Language) {
//     Language["korean"] = "ko";
//     Language["english"] = "en";
// })(Language || (Language = {}));

const user1 = {
  name: '김첨지',
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: '홍길동',
  role: Role.USER,
};

const user3 = {
  name: '박무당',
  role: Role.GUEST,
};

console.log(user1, user2, user3);
