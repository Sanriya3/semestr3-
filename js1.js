function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 

function js1_f1()
{
$('sp1').style.background="url(logo1.png) repeat-y #fc0";
}

function js1_f2()
{
$('sp1').style.background="#f00";
}