Page({
  onShareAppMessage() {
    return {
      title: 'camera',
      path: 'page/component/pages/camera/camera'
    }
  },

  data: {
    src: '',
    videoSrc: '',
    position: 'back',
    mode: 'scanCode',
    result: {}
  },
  onLoad() {
    this.ctx = wx.createCameraContext(); // 微信小程序相机组件wx.createCameraContext()使用
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })

        /*wx.uploadFile("https://xx.xxxxxx.cn/api/upload", res.tempImagePath, "upload")
          .then(d => {
            console.log(d);
          })
          .catch(e => {
            console.log(e);
          })*/
      },
      fail: (e) => {
        console.log(e);
      }
    })
  },
  startRecord() {
    this.ctx.startRecord({
      success: () => {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  togglePosition() { // 切换相机前后置摄像头
    this.setData({
      position: this.data.position === 'front'
        ? 'back' : 'front'
    })
  },
  open(e) { // 打开模拟的相机界面
    let { type } = e.target.dataset;
    console.log("开启相机准备", type == "takePhoto" ? "拍照" : "录视频");
    this.setData({
      camera: true,
      type
    })
  },
  close() { // 关闭模拟的相机界面
    console.log("关闭相机");
    this.setData({
      camera: false
    })
  },
  error(e) {
    console.log(e.detail)
  }
})
