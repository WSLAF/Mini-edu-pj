//logs.js
const util = require('../../utils/util.js')

Page({
    onLoad: function (options) {
    this.getChapter(options);
    this.getSubchapter(options);
  },

  getChapter: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:4000/api/lecturebig/1',
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
          lecture_b_title: res.data
        })
      },
      fail: function (err) {}, //请求失败
      complete: function () { }
    })
  },

    getSubchapter: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:4000/api/lecturesmallclass/1',
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
          lecture_small_title: res.data
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { }
    })
  }
  // data: {
  //   chapter: [{
  //     name: '一.课程简介',
  //     subChapter: [
  //       {
  //         name: '1.1 课程信息'
  //       },
  //       {
  //         name: '1.2 课程教与学特色'
  //       }
  //     ]
  //   }, {
  //     name: '二.JavaEE基础',
  //     subChapter: [
  //       {
  //         name: '2.1 javaEE&Servlet'
  //       },
  //       {
  //         name: '2.2 JSP + JavaBean'
  //       }
  //     ]
  //   }, {
  //     name: '三. web协议',
  //     subChapter: [{
  //       name: '3.1 web架构演变'
  //     }, {
  //       name: '3.2 Web与云计算'
  //     }
  //     ]
  //   }]
  // }
})





  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }

  // data: {
  //   logs:[]
  // }

  // onLoad: function () {
  //   this.getdata();
  // }

  // getdata:function (){
  //   var that = this;
  //   wx.request({
  //     url: 'management - tutorial.co67lmt8ztpp.ap - southeast - 1.rds.amazonaws.com',
  //     user: 'user',
  //     password: '11111111',
  //     header:{
  //       "Content-Type":"application/json"
  //     },
  //     method: "GET",
  //     success: function(res) {
  //       console.log(res.data);
  //       that.setData({
  //         logs:res.data.result
  //       })
  //     },
  //     fail:function(err){}, //请求失败
  //     complete: function(){}
  //   })
  // }
