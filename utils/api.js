const host = "10.0.2.2:8013"
// const host = "ac8acbcf.ngrok.io"
const baseUrl = `http://${host}/api`

module.exports = {
  IndexUrl: `${baseUrl}/index/index`, //首页数据接口
  CatalogList: `${baseUrl}/catalog/index`,  //分类目录全部分类数据接口
  CatalogCurrent: `${baseUrl}/catalog/current`,  //分类目录当前分类数据接口

  AuthLoginByWeixin: `${baseUrl}/auth/loginByWeixin`, //微信登录

  GoodsCount: `${baseUrl}/goods/count`,  //统计商品总数
  GoodsList: `${baseUrl}/goods/list`,  //获得商品列表
  GoodsCategory: `${baseUrl}/goods/category`,  //获得分类数据
  GoodsDetail: `${baseUrl}/goods/detail`,  //获得商品的详情
  GoodsNew: `${baseUrl}/goods/new`,  //新品
  GoodsHot: `${baseUrl}/goods/hot`,  //热门
  GoodsRelated: `${baseUrl}/goods/related`,  //商品详情页的关联商品（大家都在看）

  BrandList: `${baseUrl}/brand/list`,  //品牌列表
  BrandDetail: `${baseUrl}/brand/detail`,  //品牌详情

  CartList: `${baseUrl}/cart/index`, //获取购物车的数据
  CartAdd: `${baseUrl}/cart/add`, // 添加商品到购物车
  CartUpdate: `${baseUrl}/cart/update`, // 更新购物车的商品
  CartDelete: `${baseUrl}/cart/delete`, // 删除购物车的商品
  CartChecked: `${baseUrl}/cart/checked`, // 选择或取消选择商品
  CartGoodsCount: `${baseUrl}/cart/goodscount`, // 获取购物车商品件数
  CartCheckout: `${baseUrl}/cart/checkout`, // 下单前信息确认

  OrderSubmit: `${baseUrl}/order/submit`, // 提交订单
  PayPrepayId: `${baseUrl}/pay/prepay`, //获取微信统一下单prepay_id

  CollectList: `${baseUrl}/collect/list`,  //收藏列表
  CollectAddOrDelete: `${baseUrl}/collect/addordelete`,  //添加或取消收藏

  CommentList: `${baseUrl}/comment/list`,  //评论列表
  CommentCount: `${baseUrl}/comment/count`,  //评论总数
  CommentPost: `${baseUrl}/comment/post`,   //发表评论

  TopicList: `${baseUrl}/topic/list`,  //专题列表
  TopicDetail: `${baseUrl}/topic/detail`,  //专题详情
  TopicRelated: `${baseUrl}/topic/related`,  //相关专题

  SearchIndex: `${baseUrl}/search/index`,  //搜索页面数据
  SearchResult: `${baseUrl}/search/result`,  //搜索数据
  SearchHelper: `${baseUrl}/search/helper`,  //搜索帮助
  SearchClearHistory: `${baseUrl}/search/clearhistory`,  //搜索帮助

  AddressList: `${baseUrl}/address/list`,  //收货地址列表
  AddressDetail: `${baseUrl}/address/detail`,  //收货地址详情
  AddressSave: `${baseUrl}/address/save`,  //保存收货地址
  AddressDelete: `${baseUrl}/address/delete`,  //保存收货地址

  RegionList: `${baseUrl}/region/list`,  //获取区域列表

  OrderList: `${baseUrl}/order/list`,  //订单列表
  OrderDetail: `${baseUrl}/order/detail`,  //订单详情
  OrderCancel: `${baseUrl}/order/cancel`,  //取消订单
  OrderExpress: `${baseUrl}/order/express`, //物流详情

  FootprintList: `${baseUrl}/footprint/list`,  //足迹列表
  FootprintDelete: `${baseUrl}/footprint/delete`,  //删除足迹
}