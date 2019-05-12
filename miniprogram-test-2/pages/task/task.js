Page({
    data: {
      tasks: [{
        title: "任务一",
        status: "未完成",
        type: "作业"
      }, {
        title: "任务二",
        status: "已完成",
          type: "作业"
      }, {
        title: "任务三",
        status: "未完成",
        type: "作业"
      }, {
        title: "任务四",
        status: "未完成",
        type: "作业"
        }, {
          title: "任务五",
          status: "未完成",
          type: "作业"
        }, {
          title: "任务六",
          status: "未完成",
          type: "作业"
        }, {
          title: "任务七",
          status: "未完成",
          type: "作业"
        }, {
          title: "任务八",
          status: "未完成",
          type: "作业"
        }, {
          title: "任务九",
          status: "未完成",
          type: "作业"
        }
      ]
  },
})
// // pages/list/list.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     title: '加载中',
//     list: [], // 数据列表
//     type: '', // 数据类型
//     loading: true // 显示等待框
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) { // options 为 board页传来的参数
//     const _this = this;
//     // 拼接请求url
//     const url = 'https://movie.douban.com/'+ options.type;
//       // 请求数据
//       wx.request({
//         url: url,
//         data: {},
//         header: {
//           'content-type':'json'
//         },
//         success: function (res) {
//           console.log(res.data);
//           // 赋值
//           _this.setData({
//             title: res.data.title,
//             list: res.data.subjects,
//             type: options.type,
//             loading: false // 关闭等待框
//           })
//         }
//       })
//   }
// })