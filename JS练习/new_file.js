// alert()
/*
多行注释
*/
//alert('hello');
document.write('hello');
console.log('hello');
/*
	标识符命名规则：
		1. 字母、数字、——、$
		2. 不可以用数字开头
		3. 不能是ES中的关键字与保留字
		4. 建议驼峰命名法
*/
var age = 10;
console.log(age);
/*
	数据类型：
	string\number\bool\null\undifined\object
	object:引用数据类型
	number:所有数字都是number类型
	JS转义符：
	\”表示 ”
	\n表示 换行
	\t表示 制表符（tab键）
	\\表示 \
*/
age = "helloWorld"
console.log(age);
var a = 123;
var b = "123";
// 检查变量类型 typeof a 
// console.log(typeof a);
// console.log(typeof b)
// console.log(Number.MAX_VALUE)
a = "abc"*"abc"
console.log(a);
// 数值超出Number.MAX_VALUE 返回Infinity:表示正无穷大 ; -Infinity 表示负无穷
// NaN:Not a Number 
// JS进行浮点运算可能得到一个不精确的结果，故不可使用JS激行精度较高的运算
/*
	数据类型
*/
 // var cars = new Array("Saab","Volvo","BWM")
 var cars = ["Saab","Volvo","BWM"];
 for(i=0;i<cars.length;i++)
 {
	 document.write(cars[i]+"<br>")
 }
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
	fullName  : function()
	{
		return this.firstName+" "+this.lastName;
	}
};
// document.write(person.firstName)
 // document.write(person.firstName)
 document.write(person.fullName);
 //

 

 var cars = ["BMW","Volvo","Saab","Ford"];
 console.log(typeof(cars))
 for(i=0;i< cars.length;i++){
	 // console.log(i);
	 console.log(cars[i])	 
 }
 // while循环
 function myFunction(){
 	var x="",i=6;
 		do{
 			x=x + "该数字为 " + i + "<br>";
 		    i++;
 		}
 		while (i<5)  
 		document.getElementById("demo").innerHTML=x;
 }
// break语句练习
 function bre(){
	 var x = "";
	 for(i=0;i<10;i++){
		 if(i==3)break;
		 x = x+"该数字为"+i+"<br>";		 
	 }
	 document.getElementById('demo').innerHTML = x;
 }
