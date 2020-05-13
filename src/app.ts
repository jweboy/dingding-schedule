/*
 * @Author: jweboy
 * @Date: 2020-05-13 22:49:33
 * @LastEditors: jweboy
 * @LastEditTime: 2020-05-14 00:20:06
 */
/*
 * @Author: jweboy
 * @Date: 2020-02-20 21:10:41
 * @LastEditors: jweboy
 * @LastEditTime: 2020-03-24 23:32:03
 */
import Koa from 'koa';
import dotenvFlow from 'dotenv-flow';
import remindJob from './job';

dotenvFlow.config();

const app = new Koa();
const { PORT, PROTOCOL, HOST } = process.env;

app.listen(PORT, async () => {
  remindJob();
  console.log(`🚀 Server running at ${PROTOCOL}://${HOST}:${PORT}/api/pet`);
});

process.on('unhandledRejection', (err) => {
  throw err;
});
