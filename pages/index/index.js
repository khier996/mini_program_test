//index.js
//获取应用实例
const AV = require('../../utils/av-weapp-min.js');
const Fml = require('../../models/fml.js');

var app = getApp()
Page({
  data: {
    userInfo: {},
    fml: [{ nickname: 'Johny', message: 'today, I slept for 3 hours, FML' }, { nickname: 'Johny', message: 'today, I slept for 3 hours, FML' }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    }),
      new AV.Query('Fml').descending('createdAt').find().then(fml => this.setData({ fml })).catch(console.error);
    }, 
})

