var express = require('express');           // 引入Express对象
var router = express.Router();                             // 引入路由对象
// 引入自定义的controller
const IndexController = require('../controllers/index');
router.get('/', IndexController.index);                  // 定义首页路由
router.get('/cate/:cateId', IndexController.cate);    // 定义分类页路由
// 定义文章页路由
router.get('/article/:articleId', IndexController.article);
router.get('/about', IndexController.about);  // 定义“关于我们”的路由
module.exports = router;                       // 导出路由，供app.js文件调用