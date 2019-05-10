// var React = require ('react');
// var ReactDom = require('react-dom');



// let tmp = $.ajax({url:'./snippet/myleetcode.html',async:true});

function on_contact_click(){

	document.getElementById('button_home').className -= 'active';
	document.getElementById('button_contact').className += ' active';
	// let tmp = $.ajax(url:'../snippet/myleetcode.html');
	// $('#main-code').load('./snippet/myleetcode.txt');
	document.getElementById('main-code').style.display = 'none';
	document.getElementById('contact').style.display = 'inherit';
}

var element = document.getElementById('button_contact');

element.onclick = on_contact_click;

$('.navbar-collapse a').click(function(){
	$('.navbar-collapse').collapse('hide');
})

$(window).scroll(function(){
	$('.navbar-collapse').collapse('hide');
})