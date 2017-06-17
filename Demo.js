
/*var box = {
  toString:function(){
	return 'Lee';
	}
};*/
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
/*function dd(a){
	if(a<=1){
		return a;
	}
	return arguments.callee(a-1)*2;
}*/
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
/*
function sayhi2(){
	return new{
		name:"fengchufu",
		age: 32,
		location:"changsha"
	};
}
*/  /*
var obj = {
	name: "Lee",
	age: 12
}
	
//alert(typeof obj);   object
 
function box(obj){
  obj.name = "kkk";
  //var obj = new Object();
	//	obj.name= "dddd"; 
}

box(obj);   //值传递，但是传递的是引用地址。
alert(obj.name);   // "kkk"
alert(obj.age);
*8/
/var num = 12;
function box(num){
	return num+50;
}
alert(box(num));  //62  javascript中都是按值传递，只不过传递 引用类型  时，要注意传递的是引用地址。  
alert(num);   //12
*/
/*
var num1 = [1,2,3,4,5];
var box = {
	name:"lee",
	age:12
};
alert(box instanceof Object);
alert(num1 instanceof Object); */
/*
var num = 23;
function box(){
	num = 34;
	num2 = 23;   //没有var 是全局变量
	return "dddd";
}
alert(window.box());  //"dddd"
alert(window.num);   // 34
alert(window.num2);  //23   */
/*var box = "Lee";
function setBox(box){
	var box = 'red';
	return box;
} 
alert(setBox(box));   
*/
/*
var name = "Mr. Feng";
alert(typeof name);
alert(name.substring(2));
var school = new String("CSU");
alert(school.substring(2));
*/

//var num = 100;
//alert(Number.MAX_VALUE);
var str = "microsoft";
alert(str.charAt(3));