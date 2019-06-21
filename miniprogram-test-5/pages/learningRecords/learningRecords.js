//logs.js
const util = require('../../utils/util.js')

Page({
  onLoad: function (options) {
    this.getLectureNum(options);
    this.getLectureCompletedNum(options);
    this.getHomeworkNum(options);
    this.getHomeworkCompletedNum(options);
  },

  getLectureNum: function (options) {
    var that = this;
    let id = options.class_id;
    console.log(id);
    wx.request({
      url: 'http://localhost:4000/api/lectureAll/'+id,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // id:""
      },
      success: function (res) {
        console.log("aaa" + res.data);
        that.setData({
          lectureNum: res.data.length
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  },

  getLectureCompletedNum: function(options) {
    var that = this;
    let id = options.class_id;
    console.log(id);
    wx.request({
      url: 'http://localhost:4000/api/lectureCompleted/'+id,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // id:""
      },
      success: function (res) {
        console.log("aaa" + res.data);
        that.setData({
          lectureCompletedNum: res.data.length
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  },

    getHomeworkNum: function (options) {
    var that = this;
    let id = options.class_id;
    console.log(id);
    wx.request({
      url: 'http://localhost:4000/api/homeworkAll/'+id,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // id:""
      },
      success: function (res) {
        console.log("aaa" + res.data);
        that.setData({
          homeworkNum: res.data.length
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  },

  getHomeworkCompletedNum: function (options) {
    var that = this;
    let id = options.class_id;
    console.log(id);
    wx.request({
      url: 'http://localhost:4000/api/homeworkCompleted/'+id,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // id:""
      },
      success: function (res) {
        console.log("aaa" + res.data);
        that.setData({
          homeworkCompletedNum: res.data.length
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  }
})