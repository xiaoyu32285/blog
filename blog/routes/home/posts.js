var express = require('express');
var router = express.Router();

/* 访问文章页面 */
router.get('/', function(req, res, next) {
  res.render('home/posts', { title: 'Express' });
});

module.exports = router;
