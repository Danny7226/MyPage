// var React = require ('react');
// var ReactDom = require('react-dom');



// let tmp = $.ajax({url:'./snippet/myleetcode.html',async:true});

function on_leetcode_click(){

	document.getElementById('button_home').className -= 'active';
	document.getElementById('button_leetcode').className += ' active';
	// let tmp = $.ajax(url:'../snippet/myleetcode.html');
	// $('#main-code').load('./snippet/myleetcode.txt');
	document.getElementById('main-code').style.display = 'none';
	document.getElementById('leetcode').style.display = 'inherit';
}

var element = document.getElementById('button_leetcode');
element.onclick = on_leetcode_click;
