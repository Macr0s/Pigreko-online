var npages = 23;
var url = "http://pigrego.files.wordpress.com/2012/02/pc3acgreko-0220121.pdf";
var corrent = 0;
function img(n){
	var i = "https://docs.google.com/viewer?url="+url+"&a=bi&pagenumber="+n+"&w=800";
	return i;
}
function IsNotUneven(numero){
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}
function view(n){
	var n2;
	var a = corrent;
	var a2 = a + 1;
	if (IsNotUneven(n) == true)
	{
		corrent = n;
		n2 = n;
		n++;
	}
	else
	{
		corrent = n - 1;
		n2 = n;
		n2--;
		
	}
	$("#"+a).hide();
	$("#"+a2).hide();
	$("#"+n).fadeIn("slow");
	$("#"+n2).fadeIn("slow");
	
}
function next(){
	if (corrent == npages){
	
	}else{
		var a = corrent + 2;
		view(a);
	} 
	return corrent;
}
function back(){
	if (corrent == 1){
	
	}else{
		var a = corrent - 2;
		view(a);
	} 
	return corrent;
}

$(document).ready(function (){
	$("#loading").fadeIn("slow");
	var html3 = '  <a href="#back" onClick="back()" id ="aback">Indietro</a>  |';
	$("#pages").append(html3);
	for (var i = 1; i<=npages; i++){
		var w = $("body").width() / 2 - 50;
		var h = $("body").height() - 76;
		var html = '<a class ="full" href="'+img(i)+'"><img id ="'+i+'" src="'+img(i)+'" alt="page" width ="'+w+'" height = "'+h+'"/></a>';
		var html2 = '  <a href="#'+i+'" onClick="view('+i+')" id ="a'+i+'">'+i+'</a>  |';
		if (IsNotUneven(i) == true)
		{
			$("#pari").append(html);
		}
		else
		{
			$("#dispari").append(html);
		}
		$("#pages").append(html2);
	}
	var html3 = '  <a href="#next" onClick="next()" id ="aback">Avanti</a>  ';
	$("#pages").append(html3);
	$(".full").colorbox({iframe:true,width:"859px",height:"100%"});
	$("#1").fadeIn("slow");
	$("#2").fadeIn("slow");
	corrent = 1;
	$(".commenti").colorbox({inline:true, width:"50%"});
	html = '|  <a href="https://docs.google.com/viewer?url='+url+'">Apri in Google Docs</a>  ';
	html2 = '|  <a href="'+url+'">Apri semplicemente</a>  | <a class="about" href="#inline_about">Informazioni su..<a>';
	$("#u").append(html);
	$("#u").append(html2);
	$(".about").colorbox({inline:true, width:"50%"});
	
	$("#b").fadeIn("slow");
	$("#a").fadeIn("slow");
	$("#c").fadeIn("slow");
	$("#cc").fadeIn("slow");
});