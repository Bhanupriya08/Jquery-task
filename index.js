

$(document).ready(function(){
	
	


	// $('.form1').addEventListener('keyup',function(event){
	// 	if (event.keycode==13){
	// 		event.preventDefault();
	// 		$('#headingsub1').trigger('submit');
	// 	}
	// })

	// $('.form1').keypress((e)=>{
	// 	if (e.which==13){
	// 		e.preventDefault();
	// 		$('#headingsub1').trigger('click');
	// 	}
	// })
	// $('.form2').keypress((e)=>{
	// 	if (e.which==13){
	// 		$('.headingsub2').trigger('click');
	// 	}
	// })
	// $('.form3').keypress((e)=>{
	// 	if (e.which==13){
	// 		$('.formSubmit').trigger('click');
	// 	}
	// })
	let result = []
	

	//console.log(result[0].heading[0])

	$('#headingsub1').click(function(){
		
		$('.headDropdown1').find('option:not(:first)').remove();

		var heading = $('#input1').val();
		var dataHtml = "<section><h1>"+heading+" </h1></section>"
		result.push({'heading':[heading]})
		//console.log(result)
		
		localStorage.setItem('result',JSON.stringify(result))
		//var data = JSON.parse(localStorage.getItem('result'))
		//console.log(data)
		//result[0].heading =[]
		//console.log(result)
		
		
		$('main').append(dataHtml)
		
		var i = 0

		$('main h1').each(function(){
			var data = $(this).text()
			i=i+1
			var dataHtml = "<option value="+i+">"+data+"</option>"
			$('.headDropdown1').append(dataHtml)
		})
		$('.form1').trigger('reset')

	});

// submit sub-heading button

	$('.headingsub2').click(function(){

		var data = parseInt($('.headDropdown1 option:selected').attr('value'))
		var data2 = $('#input2').val()
		var dataHtml = "<div><h2>"+data2+"</h2></div>"
		result[data-1].heading.push({'subHeading':[data2]})
		console.log(result)
		//result[0].heading[].push({'subHeading':data2})
		localStorage.setItem('result',JSON.stringify(result))
		//console.log(result)
		//result[0].heading[data].push({'subHeading':data2})
		//console.log(result)
		$("main section:nth-child("+data+") ").append(dataHtml)
		$('.form2').trigger('reset')
	});

	$('.target').change(function(){
		$('.headDropdown2').find('option:not(:first)').remove();
		var data = parseInt($('.target option:selected').attr('value'))
		//console.log(data)
		var h2 =$("main section:nth-child("+data+") div h2").text()
		var i = 0
		$("main section:nth-child("+data+")  h2").each(function(){
			i =i+1
			var h2Data = $(this).text()
			var dataHtml = "<option value='"+i+"'>"+h2Data+"</option>"
			$('.headDropdown2').append(dataHtml)
		})

	});

	$('.formSubmit').click(function(){

		var data = parseInt($('.target option:selected').attr('value'))
		//console.log('data='+data)
		var dataH2 = parseInt($('.headDropdown2 option:selected').attr('value'))
		console.log("datah2="+dataH2)
		var num = dataH2+1

		var heading1 = $('.headDropdown1').val()
		var subHeading = $('.headDropdown2').val()
		var inputType = $('.headDropdown3').val()
		var label = $('.label1').val()
		var name = $('.name').val()
		var placeholder = $('.placeholder').val()
		var cls = $('.cls').val()
		var value1 = $('.value').val()
		var optionData = $('.optionData').val()

		

		if(inputType == 'select'){
			var opts = optionData.split(',')
			var dataHtml = "<select class='"+cls+"'>"
			$.each(opts,function(index,value){
				dataHtml += "<option value='"+value1+"'>"+value+"</option>"
					
			})
			dataHtml += "</select>"
			result[data-1].heading[dataH2].subHeading.push(dataHtml)
			console.log(result)
			$("main section:nth-child("+data+") div:nth-child("+num+")").append(dataHtml)
			dataHtml=""
		}
		else if(inputType=='checkbox'){
			var valueData = value1.split(',')
			var opts = optionData.split(',')
			var dataHtml = "<form><label>"+label+"</label><br> :"
			$.each(opts,function(index,value){
				dataHtml +="<input type=checkbox class='"+cls+"'' name='"+value+"' value='"+value+"' ><label for='"+value+"'>"+value+"</label>"
			})
			dataHtml +="</form>"
			$("main section:nth-child("+data+") div:nth-child("+num+")").append(dataHtml)
		}
		else if(inputType=='textarea'){
			
			var opts = optionData.split(',')
			var dataHtml = "<label>"+label+"</label><textarea name='"+name+"'"
			
			dataHtml +="rows='"+parseInt(opts[0])+"' column='"+parseInt(opts[1])+"' >"
			$("main section:nth-child("+data+") div:nth-child("+num+")").append(dataHtml)
		}
		else if(inputType=='radio'){
			var opts = optionData.split(',')
			var dataHtml="<form>"
			
			$.each(opts,function(index,value){
				dataHtml += "<input  type=radio name='"+name+"' value='"+value+"' ><label for='"+value+"''>"+value+"</label>"
			})
			dataHtml +="</form>"
			$("main section:nth-child("+data+") div:nth-child("+num+")").append(dataHtml)
		}
		else{
			var dataHtml = "<label>"+label+"</label><input type='"+inputType+"' name='"+name+"' placeholder='"+placeholder+"' class='"+cls+"' value='"+value1+"' />"
			$("main section:nth-child("+data+") div:nth-child("+num+")").append(dataHtml)
		}
		$('.form3').trigger('reset')
	});

 });

