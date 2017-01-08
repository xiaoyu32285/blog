var express = require('express');
var router = express.Router();
//所有以/admin/cats打头的路由，都会走这儿。
//凡是cats后面的/的内容，可以再次进行路由处理
// /admin/cats 交给/
// /admin/cats/add 交给/add
// /admin/cats/edit 交个/edit
/* 访问后台分类显示页面 */
router.get('/', function(req, res, next) {
  // res.render('posts', { title: 'Express' });
  // res.send('显示分类');
  res.render('admin/category_list');
});

//后台分类添加页面
router.get("/add", function(req,res,next) {
	// res.send('显示添加分类的表单页面');
	res.render('admin/category_add');
})
//完成后台分类添加动作
router.get("/insert",function(req,res,next){
	res.send("完成添加分类动作")
});

//显示编辑后边分类的表单页面
router.get("/edit",function(req,res,next){
	// res.send("显示后台分类编辑的表单页面");
	res.render('admin/category_edit');
})

module.exports = router;
