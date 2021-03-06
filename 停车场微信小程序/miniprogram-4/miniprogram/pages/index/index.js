// miniprogram/pages/index/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qRCodeMsg:'',
    isscan:"",
    cheweiweizhi:""
  },

  getQRCode: function(){
    var _this = this;
    
    wx.scanCode({        //扫描API
      success: function(res){
        console.log(res);    //输出回调信息
        _this.setData({
          qRCodeMsg: res.result,
          isscan:true
        });
        wx.showToast({
          title: '成功',
          duration: 2000
        });
        var cheweiid =  res.result
        console.log(cheweiid)
        db.collection("chewei").where({
          cheweiid :cheweiid
        }).get().then(res=>{
          console.log(res.data)
          _this.setData({
            cheweiweizhi : res.data[0].cheweiweizhi,
          })
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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