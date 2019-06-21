import courseApi from '../apis/courseApi.js'
Page({
  data: {
    courseName: []
  },

  onLoad: function () {
    //把this对象复制到临时变量that
    var that = this;
    let _courseApi = new courseApi;

    _courseApi.getMessage2().then(res => {
      // console.log(res[1].course_name);
      // let num = res.length;
      // for (var i = 0; i < num; i++) {
      //   courseName[i] = res[i]
      // }
      that.setData({
        course_name: res
      })
      // console.log(res[1].course_name);
    })
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


