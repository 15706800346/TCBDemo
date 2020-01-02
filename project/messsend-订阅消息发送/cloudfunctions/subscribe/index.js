const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  try {
    const result = await db.collection('messages').add({
      data: {
        touser: event.userInfo.openId,
        page: 'index',
        data: event.data,
        templateId: event.templateId,
        date: new Date(event.date),
        done: false,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
