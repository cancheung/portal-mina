var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
var app = getApp();

Page({
  data: {
    bannerInfo: {
      'img_url': '',
      'name': ''
    },
    categoryFilter: false,
    filterCategory: [],
    goodsList: [],
    categoryId: 0,
    currentSortType: 'default',
    currentSortOrder: 'desc',
    page: 1,
    size: 1000
  },
  getData: function () {
    let that = this;
    util.request(api.GoodsHot).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          bannerInfo: res.data.bannerInfo,
        });
        that.getGoodsList();
      }
    });
  },
  getGoodsList (){
    var that = this;

    util.request(api.GoodsList, { isHot: 1, page: that.data.page, size: that.data.size, order: that.data.currentSortOrder, sort: that.data.currentSortType, categoryId: that.data.categoryId})
      .then(function (res) {
        if (res.errno === 0) {
          that.setData({
            goodsList: res.data.goodsList,
            filterCategory: res.data.filterCategory
          });
        }
      });
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getData();
  },
  openSortFilter: function (event) {
    let currentId = event.currentTarget.id;
    switch (currentId) {
      case 'categoryFilter':
        this.setData({
          'categoryFilter': !this.data.categoryFilter,
          'currentSortType': 'category',
          'currentSortOrder': 'asc'
        });
        break;
      case 'priceSort':
        let tmpSortOrder = 'asc';
        if (this.data.currentSortOrder == 'asc') {
          tmpSortOrder = 'desc';
        }
        this.setData({
          'currentSortType': 'price',
          'currentSortOrder': tmpSortOrder,
          'categoryFilter': false
        });

        this.getData();
        break;
      default:
        //综合排序
        this.setData({
          'currentSortType': 'default',
          'currentSortOrder': 'desc',
          'categoryFilter': false
        });
        this.getData();
    }
  },
  selectCategory: function(event){
    let currentIndex = event.target.dataset.categoryIndex;
    this.setData({
      'categoryFilter': false,
      'categoryId': this.data.filterCategory[currentIndex].id
    });
    this.getData();

  }
})