// 서로소 유니온 타입 - 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
  tag: 'ADMIN';
  name: 'string';
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: 'string';
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: 'string';
  visitCount: number;
};

type User = Admin | Member | Guest;
const login = (user: User) => {
  const { tag } = user;
  if (tag === 'ADMIN') {
    console.log(`${tag}: ${user.name}의 추방 횟수 ${user.kickCount} 회`);
  } else if (tag === 'MEMBER') {
    console.log(`${tag}: ${user.name}의 점수 ${user.point} 포인트`);
  } else {
    console.log(`${tag}: ${user.name}의 방문 횟수 ${user.visitCount}회`);
  }
};

// 비동기 작업의 결과를 처리하는 객체 예시

type LoadingTask = {
  state: 'LOADING';
};
type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};
type SuccessedTask = {
  state: 'SUCCESS';
  response: { data: string };
};

type AsyncTask = LoadingTask | FailedTask | SuccessedTask;

const processResult = (task: AsyncTask) => {
  const { state } = task;
  switch (state) {
    case 'LOADING': {
      console.log('로딩 중');
      break;
    }
    case 'FAILED': {
      console.log('에러: ', task.error.message);
      break;
    }
    case 'SUCCESS':
      console.log('성공: ', task.response.data);
      break;
  }
};

const loading: AsyncTask = {
  state: 'LOADING',
};

const faild: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류가 발생했습니다.',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터 리스트는 ~~',
  },
};
