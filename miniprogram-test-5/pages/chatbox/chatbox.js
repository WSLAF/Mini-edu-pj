// pages/chatbox/chatbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: [],      // message数组默认为空
    index: 0,        // 下标默认值为 0
    totalMessage: []  //将一个知识点所有的message数据都存放到这个数组里
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   console.log(options.chatbox_id);
  //   var that = this;
  //   let chatboxApi1 = new chatboxApi;
  //   chatboxApi1.getMessage(options.chatbox_id, null).then(res => {
  //     console.log(res);
  //     that.setData({
  //       totalMessage: res[0].message
  //     })
  //   });

    onLoad: function (options) {
      this.getChapter(options);
    },

    getChapter: function (options) {
      var that = this;
      let id = options.class_id;
      console.log(id);
      wx.request({
        url: 'http://localhost:4000/api/debate/' + id,
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
            totalMessage: res.data[0].content
          })
        },
        fail: function (err) { }, //请求失败
        complete: function () { }
      })
    },

    // console.log('id');
    // console.log(options.chatbox_id);
    // console.log('/id');
    // console.log(chatboxApi1._baseUrl);
    // console.log(chatboxApi1.getMessage(options.chatbox_id, null));
    // that.setData({ totalMessage: (new chatboxApi).getMessage(options.chatbox_id)[0].message});

    // wx.request({
    //   url: 'http://localhost:5300/chatbox?chatbox_id=' + options.chatbox_id,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     that.setData({
    //       totalMessage: res.data[0].message
    //     })
    //   }
    // })
  // },



  addMessage: function () {
    var that = this;
    // 将 Page 内部定义的 Data 中的 index 赋值给 i
    var i = this.data.index;
    console.log(this.data.totalMessage.length);

    if (i >= this.data.totalMessage.length) {
      // 跳出程序，这种实现比较简陋
      return;
    }

    console.log(this.data.totalMessage[i]);
    // 通过下标的移动，给message数组不断连接(concat)值的方式增加值
    var message = this.data.message.concat(this.data.totalMessage[i]);

    // 将函数内部的message变量通过setData赋值给Page中的Data内的变量message，页面的数据随之更新
    that.setData({
      message: message
    })

    i++;
    // 将函数内部的i变量通过setData赋值给Page中的Data内的变量index，目的是保存下标的值
    that.setData({
      index: i
    })
    // 创建节点查询器 query
    var query = wx.createSelectorQuery()
    // 选择类名称为 messageHeight 的节点，获取节点位置信息的查询请求
    query.select('.messageHeight').boundingClientRect()

    query.exec(function (res) {
      //  res.id       节点的ID
      //  res.dataset  节点的dataset
      //  res.left     节点的左边界坐标
      //  res.right    节点的右边界坐标
      //  res.top      节点的上边界坐标
      //  res.bottom   节点的下边界坐标
      //  res.width    节点的宽度
      //  res.height   节点的高度 
      console.dir(res[0].height);
      console.dir(res[0].bottom);
      // 滑动页面请求
      wx.pageScrollTo({
        // scrollTop	Number	是	滚动到页面的目标位置（单位px）
        scrollTop: res[0].bottom + res[0].height,
        // duration: 300
      })
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