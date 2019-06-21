//logs.js
const util = require('../../utils/util.js')

Page({
  onLoad: function (options) {
    this.getChapter(options);
  },

  getChapter: function (options) {
    var that = this;
    let id = options.homework_id;
    wx.request({
      url: 'http://localhost:4000/api/homeworkListById/'+id,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // id:""
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          tasks: res.data
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  },
})