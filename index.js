$(document).ready(function(){
	
$('#smt').click(function(){
	var a=parseInt($('#gp').val());
	var b=parseInt($('#kt').val());
	var c=parseInt($('#pel').val());
	var e=parseInt($('#pel2').val());
	var d=parseInt($('#yal').val());
	var f=parseInt($('#yal2').val());
	var g=parseInt($('#lk').val());
	var tpal=0, tyal=0;
	var onek=128;
	tpal=c+e;
	tyal=d+f;
if(tpal>=16 ) {
var ptotal=tpal%16;
	var kyt;
	kyt=parseInt(tpal/16);
var newkt=parseInt(kyt+b);
}else if(tyal>=8 ){
 var ytotal=tyal%8;
var newpl=parseInt(tyal/8);
alert (newpl);
var oneYal=parseInt((newpl*8)+ytotal));
alert (oneYal);
}
else {
	var oneYal=parseInt((tpal*8)+tyal);
	var total=parseInt((oneYal/128)*a+g);
alert ("The total number of gold price is:&nbsp;"+total);
}

});
});
/**/
	//alert ("gold weight is"+" "+a+"\n"+"kyatthar"+b);