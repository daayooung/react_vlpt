import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user);
  });
  // useEffect 를 사용 할 때: 첫번째 parameter에는 함수,
  // 두번째 parameter에는 의존값이 들어있는 배열 (deps)을 넣는다.
  // 만약에 deps 배열을 비우게 된다면, component가 처음 나타날때에만 useEffect에 등록한 함수가     호출된다.
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={ () => onToggle(user.id) }
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={()=> onRemove(user.id)}>삭제</button>
      {/* props로 받아온 onRemove 함수에 user.id값을 parameter로 넣어줌.
      삭제 버튼을 누르면(onClick) onRemove 함수 실행  */}
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
// onRemove props를 UserList에도 전달
  return (
    <div>
      {users.map(user => (
        <User 
          user={user} 
          key={user.id} 
          onRemove={ onRemove } 
          onToggle={ onToggle } 
      />
    ))}
    </div>
  );
}

export default UserList;