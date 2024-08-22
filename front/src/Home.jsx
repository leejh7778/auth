import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const authData = false;
  return (
    <div>
      {authData ? (
        <div>
          <p>누구누구님 로그인</p>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <p>로그인 해주세요</p>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
