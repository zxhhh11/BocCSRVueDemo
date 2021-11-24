import { arrayFind } from './util';

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    name: 'Vue Master'
  },
  {
    id: 2,
    username: 'user1',
    password: 'password',
    name: 'User One'
  }
];

export default {
  'post|/auth-center/jwt/login': (options) => {
    let accessToken = '';
    let status = 401;
    const user = JSON.parse(options.body);
    for (let i = 0; i < users.length; i++) {
      if (
        users[i]['username'] === user['username'] &&
        users[i]['password'] === user['password']
      ) {
        accessToken =
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkMTAxNDY4YWNhZjM0ZGRhYmFjOTY0NmQyZDkyMDExMyIsImlkIjoiZDEwMTQ2OGFjYWYzNGRkYWJhYzk2NDZkMmQ5MjAxMTMiLCJjb2RlIjoiYWRtaW4iLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiZXhwIjoxNTcxOTg4MzkwfQ.etLx6wELsJwWAHn8fxgz4qLjfuuPHlMiZpc1d2eULt1zpIdIEZulljbSreOcf60mUsNB_yXTHeJR6-tMAYB9hIRNy6-UeKipJ12xxv4S-3JLg7NceQ84-N30IA6RaODAPTk6YyZ5DGUyWmvGJGlYY0f0JR304c41twgJ1zfgwCI';
        status = 200;
        break;
      }
    }
    return {
      status: status,
      message: 'success',
      data: {
        state: 20101,
        accessToken
      }
    };
  },
  'get|/auth-center/jwt/authVerify': (options) => {
    console.log({ options });
    const params = 'longtimenoseeIamdyingtoseeyou-1';
    const userId = parseInt(params.split('-')[1]);
    const user = arrayFind(users, 'id', userId);
    user.name = user.username;
    return {
      status: user ? 200 : 404,
      message: 'success',
      data: user
    };
  },
  'get|/auth-center/jwt/logout': () => {
    return {
      status: 200,
      message: 'success',
      data: 'ok'
    };
  },
  'get|/auth-center/jwt/refresh': () => {
    return {
      status: 200,
      message: 'success',
      data: 'ok'
    };
  }
};
