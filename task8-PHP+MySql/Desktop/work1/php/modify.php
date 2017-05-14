<?php
// 修改新闻文件
// 引入链接文件
require_once("connect.php");

//从前台获取新闻类型、id、标题、标签、图片地址、内容、日期
$newsType = $_POST["newsType"];
$id = $_POST["id"];
$title = $_POST["title"];
$label = $_POST["label"];
$pic = $_POST["pic"];
$content = $_POST["content"];
$date = $_POST["date"];

// 更新相应新闻的数据
$sql = "update $newsType set title='".$title."',label='".$label."',pic='".$pic."',content='".$content."',date='".$date."' where id=$id";
$query = mysql_query($sql);
?>