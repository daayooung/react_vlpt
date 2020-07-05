import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
  // inputs를 setInputs로 바꿀꺼다
    username: '',
    email: ''
    // parameter로 초기값 설정
  });
  const { username, email } = inputs;
  // 위에 inputs.username, inputs.email 비구조화 할당
  const onChange = e => {
  // input 입력값
    const { name, value } = e.target;
    //e.target.name, e.target.value 비구조화 할당
    setInputs({
      ...inputs,
      // unputs 복사
      [name]: value
      // []안의값: key값. e.target.name을 key값으로 설정했다.
      // onChange가 2번쓰이는데, 같은 내용의 함수를 중복으로 쓰는 것은 비효율적이기에
      // 같은 기능을 하는 하나의 onChange라는 함수 안에서 []안에 key값만 다르게 설정하였다.
    });
  };
  const [users, setUsers] = useState([
  // users를 setUsers로 바꿀꺼다.
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
    // users 초기값
  ]);

  const nextId = useRef(4);
  // useRef(4) 4를 초기값으로 설정. userdml id값을 참조할거다.
  const onCreate = () => {
  // '등록' 버튼을 누르면 실행되는 함수
    const user = {
      id: nextId.current,
      username,
      email
    };
    // user값 선언
    setUsers([...users, user]);
    // setUsers: users가 변경된 값.
    // ...users : 기존 users를 복사한 배열 뒤에 input으로 입력된 값 user을 추가
    setInputs({
    // inputs에 입력된 값 초기화
      username: '',
      email: ''
    });
    nextId.current += 1;
    // nextId는 현재값 +1을 한 값이 된다.
  };

  const onRemove = () => {

  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;