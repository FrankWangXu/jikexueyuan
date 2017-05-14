<?php
//删除新闻文件
//引入连接文件
require_once("connect.php");

//获取新闻类型和id
$newsType = $_POST["newsType"];
$id = $_POST["id"];

// 删除相应新闻
$sql = "DELETE FROM `$newsType` WHERE `id`=$id";
mysql_query($sql);
?>