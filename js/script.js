// var React = require ('react');
// var ReactDom = require('react-dom');



// let tmp = $.ajax({url:'./snippet/myleetcode.html',async:true});

function on_contact_click(){

	document.getElementById('button_home').className -= ' active';
	document.getElementById('button_contact').className += ' active';
	document.getElementById('button_about').className -= ' active'
	// let tmp = $.ajax(url:'../snippet/myleetcode.html');
	// $('#about').load('./snippet/myleetcode.txt');
	document.getElementById('about').style.display = 'none';
	document.getElementById('contact').style.display = 'inherit';
	document.getElementById('home').style.display = 'none';
}

function on_about_click(){

	document.getElementById('button_home').className -= ' active';
	document.getElementById('button_contact').className -= ' active';
	document.getElementById('button_about').className += ' active'
	// let tmp = $.ajax(url:'../snippet/myleetcode.html');
	// $('#about').load('./snippet/myleetcode.txt');
	document.getElementById('about').style.display = 'inherit';
	document.getElementById('contact').style.display = 'none';
	document.getElementById('home').style.display = 'none';
}

function on_home_click(){

	document.getElementById('button_home').className += ' active';
	document.getElementById('button_contact').className -= ' active';
	document.getElementById('button_about').className -= ' active'
	// let tmp = $.ajax(url:'../snippet/myleetcode.html');
	// $('#about').load('./snippet/myleetcode.txt');
	document.getElementById('about').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
	document.getElementById('home').style.display = 'inherit';
}

var home = document.getElementById('button_home');
home.onclick = on_home_click;

var contack = document.getElementById('button_contact');
contack.onclick = on_contact_click;

var about = document.getElementById('button_about');
about.onclick = on_about_click;

$('.navbar-collapse a').click(function(){
	$('.navbar-collapse').collapse('hide');
})

$(window).scroll(function(){
	$('.navbar-collapse').collapse('hide');
})