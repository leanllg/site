export default {
  env: 'dev',
  server: {
    host: 'http://127.0.0.1',
    port: 4000
  },
  db: {
    database: 'site',
    username: 'yj',
    password: 'yjmima',
    port: '3306',
    logging: true,
    host: 'localhost'
  },
  redis: {
    host: 'http://127.0.0.1',
    port: 6379
  }
};