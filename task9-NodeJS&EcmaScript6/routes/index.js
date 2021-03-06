var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../dbs/dbs')(router);

var fs = require('fs'),
    Log = require('log');
var stream = fs.createReadStream(__dirname + '/file.log')
    // function ,function
router.post('/select', dbs.selectData, function(req, res) {
    res.send(res.locals.NewsInfo);

});

/* 到显示手机页面的主页 */
router.get('/shownews', function(req, res, next) {
    log = new Log('debug', stream)
    console.log(log);
    
    res.render('shownews');
});

/* 到显示手机页面的主页 */
router.get('/admin', function(req, res, next) {
    log = new Log('into admin', stream)
    console.log(log);

    res.render('index');
});





// 通过post查询并返回数据
router.post('/update', dbs.updateData, function(req, res) {
    log = new Log('update', stream);
    console.log(log);
    res.send(res.locals.NewsInfo);
});

// 查询功能的实现
router.post('/insert', dbs.insertData, function(req, res) {
    res.send(res.locals.NewsInfo);
});

// 通过post查询并返回数据
router.post('/delete', dbs.deleteData, function(req, res) {
    res.send(res.locals.NewsInfo);
});

module.exports = router;
