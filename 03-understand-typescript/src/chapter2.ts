// unknown type: 최상위 타입

const unknownTyeps = () => {
  // 업 캐스팅 가능
  let a: unknown = 1;
  let b: unknown = 'string';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar
  // 다운 캐스팅 불가
  // 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
};

// never type: 최하위 타입, 공집합

const neverType = () => {
  const neverFunction = (): never => {
    while (true) {}
  };

  // 업 캐스팅
  let num: number = neverFunction();
  let string: string = neverFunction();
  let boolean: boolean = neverFunction();

  // 다운 캐스팅
  // let never1: never = 123;
  // 'number' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
};

// void type: undefined의 상위 타입

const voidType = () => {
  const voidFunction = (): void => {
    console.log(`I'm void`);
  };

  // 업 캐스팅
  let voidVar: void = undefined;

  // 다운 캐스팅
  // let undef: undefined = voidFunction();
  // 'void' 형식은 'undefined' 형식에 할당할 수 없습니다.
};

// any type: 치트키, 슈퍼타입이 되기도, never type 제외 서브타입이 되기도함

const anyType = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  anyVar = undefinedVar;
  undefinedVar = anyVar;

  // any 라도never에는 다운 캐스팅 불가
  let neverVar: never;
  // neverVar = anyVar
  // 'any' 형식은 'never' 형식에 할당할 수 없습니다.
};
