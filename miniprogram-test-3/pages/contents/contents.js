// pages/course/course.js
import contentsApi from '../apis/contentsApi.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents_name: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从options取得Course页面传过来的URL参数course_id，打印方便调试
    console.log(options.course_id);
    //把this对象复制到临时变量that
    var that = this;
    let _contentsApi = new contentsApi;
    _contentsApi.getMessage(options.content_id, null).then(res => {
      console.log(res);
      that.setData({
        contents_name: res[0].contents_name
      })
    })
    // wx.request({
    //   url: 'http://localhost:5300/contents?content_id=' + options.content_id,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     console.log(res.data[0].contents_name);
    //     that.setData({
    //       contents_name: res.data[0].contents_name
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})