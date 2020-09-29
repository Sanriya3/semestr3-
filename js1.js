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
$('bb1').style.background="url(logo1.png) repeat-y #fc0";
}

function js1_f2()
{
$('bb1').style.background="#f00";
}

function js1_f3()
{
$('sp1').style.backgroundPosition="right bottom";
}

function js1_f4()
{
$('sp1').style.backgroundPosition="0% 0%";
}

function js1_f5()
{
$('b1').style.borderColor="blue";
}

function js1_f6()
{
$('b1').style.borderColor="purple";
}

function js1_f7()
{
$('b5').style.borderRightStyle="dotted";
}

function js1_f8()
{
$('b5').style.borderRightStyle="double";
}

function js1_f9()
{
$('b6').style.borderWidth="3px 7px 7px 4px";
}

function js1_f10()
{
$('b6').style.borderWidth="6px 14px 14px 8px";
}

function js1_f11()
{
$('b7').style.font="inherit";
}

function js1_f12()
{
$('b7').style.font="caption";
}

function js1_f13()
{
$('b8').style.letterSpacing="inherit";
}

function js1_f14()
{
$('b8').style.letterSpacing="normal";
}

function js1_f15()
{
$('n3').style.marginBottom="auto";
}

function js1_f16()
{
$('n3').style.marginBottom="inherit";
}

