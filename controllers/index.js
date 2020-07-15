const Common = require('./common');             // 引入公共方法
const async = require('async');                  // 引入async
const dateFormat = require('dateformat');      // 引入dateformat模块
const CateModel = require('../models/cate');  // 引入cate表的model实例
// 引入article表的model实例
const ArticleModel = require('../models/article');
const InfoModel = require('../models/info');  // 引入info表的model实例
const Constant = require('../constant/constant'); // 引入常量constant
// 配置导出对象
let exportObj = {
  index,
  cate,
  article,
  about,
};
module.exports = exportObj;                        // 导出对象，供其他模块调用
// 首页渲染方法
function index(req, res) {
  // 首页渲染逻辑
}
// 分类页渲染方法
function cate(req, res) {
  // 分类页渲染逻辑
}
// 文章页渲染方法
function article(req, res) {
  // 文章页渲染逻辑
}
// “关于我们页”渲染方法
function about(req, res) {
  // “关于我们页”渲染逻辑
}