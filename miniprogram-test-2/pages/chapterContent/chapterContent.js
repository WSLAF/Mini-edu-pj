//logs.js
const util = require('../../utils/util.js')

Page({
  onLoad: function (options) {
    this.getChapter(options);
  },

  getChapter: function (options) {
    var that = this;
    let id = options.lecture_s_id;
    console.log(id);
    wx.request({
      url: 'http://localhost:4000/api/sourcelist/' + id,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // id:""
      },
      success: function (res) {
        console.log("aaa"+res.data);
        that.setData({
          resources: res.data
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  },
})