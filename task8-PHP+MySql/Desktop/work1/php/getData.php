<?php
//获取数据文件
//引入连接文件
require_once("connect.php");

//获取新闻类型
$newsType = $_GET["newsType"];

//选择相应数据表并按id倒序排列
$sql = "SELECT * FROM `$newsType` order by `id` desc";
$query = mysql_query($sql);

//获取新闻数据
if ($query && mysql_num_rows($query)) {
	while ($row = mysql_fetch_assoc($query)) {
		$data[] = $row;
	}
}elseif (mysql_num_rows($query) == 0) {
	$data = "blank";
}

//转换为json格式并输出
$jsonData = json_encode($data, JSON_UNESCAPED_UNICODE);
echo $jsonData;
?>