Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
  },

  getDataList(){
    let that=this;
    wx.request({
      url: 'https://v.juhe.cn/movie/movies.today?key=19f366cb9c78fa60629ac4d095877dee&cityid=4',
      success(res){
        console.log(res.data)
        if (res.data.reason==='success'){
        that.setData({
          datalist: res.data.result
        })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataList()
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