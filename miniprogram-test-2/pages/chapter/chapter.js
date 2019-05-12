//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    chapter:[{
      name:'一.课程简介',
      subChapter: [
        {
          name:'1.1 课程信息'
        },
        {
          name:'1.2 课程教与学特色'
        }
      ]
    }, {
      name:'二.JavaEE基础',
      subChapter: [
        {
          name: '2.1 javaEE&Servlet'
        },
        {
          name: '2.2 JSP + JavaBean'
        }
      ]
    }, {
      name:'三. web协议',
      subChapter: [{
        name: '3.1 web架构演变'
      }, {
        name: '3.2 Web与云计算'
      }
      ]
    }
    ]
  },
})
  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }