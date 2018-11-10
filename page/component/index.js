/**
 * onShareAppMessage 函数
 * =====================================
 * 在页面的js文件中定义了 onShareAppMessage 函数时，表示该页面可以转发。可以在函数中设置页面转发的信息。
 *
 * 只有定义了该函数，小程序右上角的菜单中才会有转发按钮。
 *
 * 该函数内需要 return 一个 Object，Object中包含转发的信息（可自定义转发的内容）
 *
 * 用户点击转发按钮的时候回调用该函数。
 *
 * 页面中可以触发转发的地方有两个：
 *
 * 1.右上角菜单中的转发按钮
 * 2.页面中具有属性 open-type="share" 的 button 。
 * （button的样式：去除默认黑色边框的方法：给 button 添加样式属性 plain="true" 文件中添加 button[plain]{ border:0 }）
 *
 */


Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() { // 表示页面可以分享转发
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index'
    }
  },

  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video', 'camera']
      }, {
        id: 'map',
        name: '地图',
        open: false,
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: ['canvas']
      }, {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: ['ad', 'open-data', 'web-view']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})

/*onShareAppMessage: function(options){
  var that = this;
  // 设置菜单中的转发按钮触发转发事件时的转发内容
  var shareObj = {
    title: "转发的标题",        // 默认是小程序的名称(可以写slogan等)
    path: '/pages/share/share',        // 默认是当前页面，必须是以‘/’开头的完整路径
    imgUrl: '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
    success: function(res){
      // 转发成功之后的回调
      if(res.errMsg == 'shareAppMessage:ok'){}
    },
    fail: function(){
      // 转发失败之后的回调
      if(res.errMsg == 'shareAppMessage:fail cancel'){ // 用户取消转发

      }else if(res.errMsg == 'shareAppMessage:fail'){ // 转发失败，其中 detail message 为详细失败信息

      }
    },
    complete: function(){ // 转发结束之后的回调（转发成不成功都会执行）

    }
  };
  // 来自页面内的按钮的转发
  if( options.from == 'button' ){
    var eData = options.target.dataset;
    console.log( eData.name );     // button 的 data-name 属性值
    // 此处可以修改 shareObj 中的内容
    shareObj.path = '/pages/btnname/btnname?btn_name='+eData.name;
  }
  // 返回shareObj
  return shareObj;
}*/
