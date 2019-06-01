//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: {},
    datalist:[],
  },
  getnewlist(logs){
    this.setData({
      logs:logs
      })
  },
  getDataList(){
    console.log(this.data.logs)
    // console.log(this.data.logs.slice(5,7))
    // console.log(this.data.logs.slice(8,10))
    //let mon=this.data.logs.slice(5,7);
    //let day=this.data.logs.slice(8,10);
    let that=this;
    let url ='https://v.juhe.cn/toutiao/index?type=top&key=dccc69127dc757cb085337af2be35101';
    wx.request({
      url: url,
      success(res){
        console.log(res.data)
        if (res.data.reason==='成功的返回'){
        that.setData({
          datalist: res.data.result.data
        })
        }
      }
    })
  },

  onLoad: function () {
    let logs=util.formatTime(new Date());
    this.getnewlist(logs);
    this.getDataList();
},
})
