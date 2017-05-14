<?php
//登录文件
//引入连接文件
require_once 'connect.php';

//选择存储管理员账号密码的数据表
$sql = "SELECT * FROM `account` WHERE `username`='".$_POST['username']."' AND `password`=''".$_POST['password']."''";
$query=mysql_query($sql);
if (mysql_num_rows($query)>0) {
	# 说明有记录
	$arr = array('code'=>'success');
	$jsonData = json_encode($arr);
	echo $jsonData;
}else{
	$arr = array('code'=>'error');
	$jsonData=json_encode($arr);
	echo $jsonData;
}
?>