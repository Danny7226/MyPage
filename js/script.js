// var React = require ('react');
// var ReactDom = require('react-dom');



// let tmp = $.ajax({url:'./snippet/myleetcode.html',async:true});
// htmlobj=$.ajax({url:"/jquery/test1.txt",async:false})
console.log('hello');
// console.log(tmp);

function on_leetcode_click(){

	document.getElementById('button_home').className -= 'active';
	document.getElementById('button_leetcode').className += ' active';
	// let tmp = $.ajax(url:'../snippet/myleetcode.html');
	$('#main-code').load('./snippet/myleetcode.txt');

}

var element = document.getElementById('button_leetcode');
element.onclick = on_leetcode_click;
