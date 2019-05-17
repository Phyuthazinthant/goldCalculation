$(document).ready(function(){
$('#smt').click(function(){
	var a=parseInt($('#gp').val());
	var b=parseInt($('#kt').val());
	var c=parseInt($('#pel').val());
	var e=parseInt($('#pel2').val());
	var d=parseInt($('#yal').val());
	var f=parseInt($('#yal2').val());
	var g=parseInt($('#lk').val());
	
    var tpal=c+e;
    var tyal=d+f;

if(tyal>=8)
{
var ytotal=parseInt(tyal%8);
var newpl=parseInt(tyal/8);
var npal=parseInt(newpl+tpal);
if(npal>=16)
 {
   var ptotal=parseInt(npal%16);
   var kyt=parseInt(npal/16);
   var newkt=parseInt(kyt+b);
   var oneYal=parseInt((ptotal*8)+ytotal);
   var result=parseInt(((oneYal/128)*a)+(a*newkt)+g);
  $('#dv').html("The total number of gold price is "+"\""+result+"\"");
 }
else if(npal<16)
  {
    var oneYal=parseInt((npal*8)+ytotal);
    var result=parseInt(((oneYal/128)*a)+(a*b)+g);
	$('#dv').html("The total number of gold price is "+"\""+result+"\"");
   }
}
else if(tpal>=16)
  {
	var ptotal=parseInt(tpal%16);
    var kyt=parseInt(tpal/16);
    var newkt=parseInt(kyt+b);
	var oneYal=parseInt((ptotal*8)+tyal);
	var result=parseInt(((oneYal/128)*a)+(a*newkt)+g);
   //alert ("The total number of gold price is:\n"+total);
   $('#dv').html("The total number of gold price is "+"\""+result+"\"");
   }else 
  {
	var oneYal=parseInt((tpal*8)+tyal);
	var result=parseInt(((oneYal/128)*a)+(a*b)+g);
	//alert ("The total number of gold price is:\n"+total);
    $('#dv').html("The total number of gold price is "+"\""+result+"\"");
   }
});
});