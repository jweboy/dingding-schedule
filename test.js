// /*
//  * @Author: jweboy
//  * @Date: 2019-12-03 16:18:35
//  * @LastEditors: jweboy
//  * @LastEditTime: 2019-12-04 10:27:30
//  */
// const { spawn } = require('child_process');
// const EventEmitter = require('events');

// const app = require('http').createServer();
// const io = require('socket.io')(app);

// const emitter = new EventEmitter();

// emitter.setMaxListeners(1000);

// app.listen(8889, () => {
//   console.log('Socket server is running 8889');
// });

// const childProcess = spawn('node', ['server.js']);

// childProcess.stdout.on('data', (buffer) => {
//   // console.log('buffer =>', buffer);
//   io.on('connection', (socket) => {});
// });

// const test = (bool) => ({
//   bool,
// });
// const ary = [1, 2, 3];

// function HelloWorld({ greeting = 'hello', greeted = 'World', silent = false, onMouseOver }) {
//   if (!greeting) {
//     return null;
//   }
// }

// const set = new Set();
// const b = { foo: 'test' };
// const a = { ...b };

// const p = {
//   get name() {
//     // no returns.
//   },
// };

// console.log(p);
