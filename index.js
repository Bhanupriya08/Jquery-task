$(document).ready(function(){
	$('#headingsub1').click(function(){
		var data = $('#input1').val();
		var dataHtml = "<h1>"+data+"</h1>"
		$('#input1').val("")
		$('.headingData').append(dataHtml)
	})
 });