<?php
//连接数据库文件

//连接数据库
// $con = mysql_connect(HOST,UESRNAME,PASSWORD);
$con = mysql_connect("localhost","root","root");
//选择数据库
mysql_select_db("baidunews");
//设定字符集
mysql_query("set names utf8");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
?>