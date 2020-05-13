/*
 * @Author: jweboy
 * @Date: 2020-05-14 00:02:34
 * @LastEditors: jweboy
 * @LastEditTime: 2020-05-14 00:46:44
 */
import schedule from 'node-schedule';
import superagent from 'superagent';

function remindCorn() {
  try {
    const resp = superagent
      .post(
        'https://oapi.dingtalk.com/robot/send?access_token=b43d1e87fab4008275fb0a73afde113282db1313e6fb74a6dc95db14378cd407'
      )
      .send({
        msgtype: 'text',
        text: {
          content: '提醒：我就是我，不一样的烟火',
        },
      });

    console.log(resp);
  } catch (err) {
    console.error(err);
  }
  // schedule.scheduleJob('2 * * * * *', () => {
  //   try {
  //     const resp = superagent
  //       .post(
  //         'https://oapi.dingtalk.com/robot/send?access_token=b43d1e87fab4008275fb0a73afde113282db1313e6fb74a6dc95db14378cd407'
  //       )
  //       .send({
  //         msgtype: 'text',
  //         text: {
  //           content: '我就是我, 是不一样的烟火@156xxxx8827',
  //         },
  //       });

  //     console.log(resp);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // });
}

remindCorn();

export default remindCorn;
