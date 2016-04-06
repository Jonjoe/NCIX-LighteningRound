$(document).ready(function(){
	var letters = [];
	$('ul').children().each(function(i){
		letters.push($(this));
	})


	setInterval(function(){
		$('ul > li').removeClass('animated jello');
		var pos = Math.ceil(Math.random() * (15 - 1) + 1);
		console.log(pos);
		targ = letters[pos].addClass('animated jello');
	}, 2000)


	setInterval(function(){
		var axis = Math.ceil(Math.random() * (100 - 1) + 1);
		var bolt = '<i class="fa fa-bolt bolt" style="left:' + axis + '%;"></i>';
		$('.bolt-shower').append(bolt);
	}, 500)

	setInterval(function(){
		var axis = Math.ceil(Math.random() * (100 - 1) + 1);
		var bolt = '<i class="fa fa-bolt bolt" style="left:' + axis + '%;"></i>';
		$('.bolt-shower').append(bolt);
	}, 700)

	setInterval(function(){
		var axis = Math.ceil(Math.random() * (100 - 1) + 1);
		var bolt = '<i class="fa fa-bolt bolt" style="left:' + axis + '%;"></i>';
		$('.bolt-shower').append(bolt);
	}, 1000)

	setInterval(function(){
		$('.bolt').remove()
	}, 40000)
})





