<?php
header("Content-Type:text/html;charset=utf-8");
$isErr = false;
//获取js Post来的cityid
$cityid=isset($_POST['cityid'])?trim($_POST['cityid']):"";
if ($cityid == "") {
	# code...
	$isErr == true;
}
//获取数据
$handle = fopen("http://apistore.baidu.com/microservice/weather?cityid=$cityid", "rb");
$content = "";
while (!feof($handle)) {
	# code...
	$content .= fread($handle, 10000);
}
fclose($handle);
//返回数据
$content = json_decode($content);
$data = array(
	'cityname' => $content->retData->city,
	'weather' => $content->retData->weather,
	'temp' => $content->retData->temp,
	);
//输出
header("Content-Type:application/json");
echo json_encode($data);