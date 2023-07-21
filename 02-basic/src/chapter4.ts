// 타입 별칭 alias

import { type } from 'os';

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: 'Lee',
  nickname: 'sunkeydokey',
  birth: '1996-05-18',
  bio: '이선기입니다.',
  location: 'Seoul',
};

// 인덱스 시그니처
// key와 value의 타입 규칙을 정할 수 있음
// 모든 property를 열거하지 않아도 됨
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCode = {
  [key: string]: number;
  Korea: number; // 꼭 가지고 있어야 하는 property를 설정할 수도 있음
};
let countryNumberCode: CountryNumberCode = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};
