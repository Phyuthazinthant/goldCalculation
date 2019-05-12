<?php
define("db_host","localhost");
define("db_name","pt");
define("db_user","root");
define("db_pass","");
function dbconnect(){
$db=mysqli_connect(db_host,db_user,db_pass,db_name);
 if($db){
	echo "connection success";
 }else{
	 echo "fail";
 }
 //echo mysqli_connect_errno()>0 ? "Connection fail" : "Connection success";
}

function errDubbger($data){
	echo "<pre>".print_r ($data,true) ."</pre>";
}
$con=dbconnect();

	$result=mysqli_query($con,"select * from ptzttable");
	if(mysqli_num_rows($result)>0){
	foreach($result as $item){
		echo "Id is ". $item["Id"];
	}
	}
?>