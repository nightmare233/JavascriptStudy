var box = {
  toString:function(){
	return 'Lee';
	}
};
/*
alert("Hello world!");
alert(isNaN(box));
alert(Number(null));
alert(Number(undefined));
*/
/*
function f1()
{
	return arguments[0] + '|' + arguments[1] + '|' +arguments[2];
}

var dd = f1('Frank',23,'gg');

alert(dd);
*/
/*
var pattern = /8(.*)8/i;
var str= 'this is 8google8.';
pattern.test(str);
//alert(RegExp.$1);
alert(RegExp.$1);
document.write(str.replace(pattern,'<strong>baidu</strong>'));
*/
function dd(a){
	if(a<=1){
		return a;
	}
	return arguments.callee(a-1)*2;
}
//alert(dd(3));    //4
//alert(dd(5))

//alert(typeof window);

//alert(this);
//alert(typeof this);

/*var color  = 'red';

var box = {
	color:'blue',
	sayhi:function(){
		alert(this.color);
	}
}

alert(this.color);

box.sayhi();
*/
/*
function sum(num1, num2){
	return num1+num2;
}
function testsum(){
	return sum.apply(this,arguments);
}
alert(testsum(10,2));
*/
function sayhi2(){
	return new{
		name:"fengchufu",
		age: 32,
		location:"changsha"
	};
}




