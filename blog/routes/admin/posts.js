var express = require('express');
var router = express.Router();

/* 访问后台文章显示页面 */
router.get('/', function(req, res, next) {
  // res.render('posts', { title: 'Express' });
  // res.send('显示文章');
  res.render('admin/article_list');
});

//后台文章添加页面
router.get("/add", function(req,res,next) {
	// res.send('显示添加文章的表单页面');
	res.render('admin/article_add');
})
//完成后台文章添加动作
router.get("/insert",function(req,res,next){
	res.send("完成添加文章动作")
});
//显示编辑后边文章的表单页面
router.get("/edit",function(req,res,next){
	// res.send("显示后台文章编辑的表单页面");
})

module.exports = router;
