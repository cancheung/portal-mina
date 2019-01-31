var util = require('../../../utils/util.js');
var api = require('../../../utils/api.js');
var app = getApp();

Page({
  data: {
    orderId: 1,
    expressInfo: {},
    expressTraces: []
  },
  onLoad: function (options) {
    this.setData({
      orderId: options.id
    });
    this.getExpressInfo();
  },
  getExpressInfo() {
    let that = this;
    util.request(api.OrderExpress, { orderId: that.data.orderId }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          expressInfo: res.data,
          expressTraces: res.data.traces
        });
      }
    });
  },
  updateExpress() {
    this.getExpressInfo();
  }
})