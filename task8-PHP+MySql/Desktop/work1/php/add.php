<?php
//添加新闻文件
//引入连接文件
require_once("connect.php");

//从前台获取新闻类型、id、标题、标签、图片地址、内容、日期
$newsType = $_POST["newsType"];
$id = $_POST["id"];
$title = $_POST["title"];
$label = $_POST["label"];
$pic = $_POST["pic"];
$content = $_POST["content"];
$date = $_POST["date"];

// 添加新闻到相应数据表
$sql = "INSERT INTO `$newsType`(`title`, `label`, `pic`, `content`, `date`) VALUES ('".$title."','".$label."','".$pic."','".$content."','".$date."')";
$query = mysql_query($sql);
?>