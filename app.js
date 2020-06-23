// =====chapter 20-25====

// --task no 1--
// Fname = prompt("what is your first Name");
// Lname = prompt("what is your last  Name");
// Fullname = Fname + " " + Lname;
// alert(`${Fullname} welcome`)

// --task no 2--
// Fmobile = prompt("what is your favorite mobile phone model");
// document.write("My favorite mobile is"+ Fmobile + "</br>"+"Length of the string:"+ Fmobile.length )

// --task no 3--
// var a = "pakistani"
// var indxNum = a.indexOf("n")
// document.write("string:"+" "+ a +"</br>"+ "index of n:"+" " + indxNum)

// --task no 4--
// var b = "hello world"
// var indxNum = b.lastIndexOf("l")
// document.write("string:"+" " + b +"</br>" + "last index of l:" +" " + indxNum )

// --task no 5--
// var name = "pakistan"
// var ind = name.slice(3,4)
// document.write("string:"+" "+ name+"</br>"+"characters at index 3:"+" "+ ind)

// --task no 6--


// --task no 7--
// var cityName = "Hydrabad";
// var indxNum = cityName.indexOf("abad");
// var first = cityName.slice(indxNum)
// var replace = "Islam";
// document.write("City:" +cityName+ "</br>"+ "After replacement:"+" "+  replace +first)

// --task no 8--
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g,"&")
// document.write(message1)


// --task no 9--
// var val = "472"
// var val1 = Number(val)
// document.write("Value:"+" "+val+"</br>"+ "Type : String" +"</br>"+"Value:"+" "+val1+"</br>"+"Type : Number")

// --task no 10--
// var write = prompt("write some thing in small letter");
// var capital = write.toUpperCase();
// document.write(capital)

// --task no 14--
// var items = ["cake","apple pie","cookies","chips","patties"]
// var user = prompt("welcome to Malick bakery, what do you want to order sir/ma'am")
// for (var i = 0; i < items.length; i++){
//     if(items[i] === user){
//         alert(user +"is avilable ")
//         break;
//     }
//     else{
//         alert(user + "is not avilable")
//     }
// }





// ========chapter 26 - 30 ========

// --task no 1--
//  var a = 3.45567;
//  var round = Math.round(a)
//  var floor = Math.floor(a)
//  var ceil = Math.ceil(a)
//  document.write("number"+" "+a + "</br>"+"round of value"+ " "+ round+"</br>"+"floor value:"+" "+ floor+"</br>" +"ceil value"+" "+ceil)



// --task no 2--
//  var a = -2.5648;
//  var round = Math.round(a)
//  var floor = Math.floor(a)
//  var ceil = Math.ceil(a)
//  document.write("number"+" "+a + "</br>"+"round of value"+ " "+ round+"</br>"+"floor value:"+" "+ floor+"</br>" +"ceil value"+" "+ceil)


// --task no 4--

//  var random = Math.random()*7;
//  var floor = Math.floor(random)
//  document.write("Random dice value is "+" "+floor)

// --task no 5--
//  var random = Math.random()*2;
//  var floor = Math.ceil(random)
//  if (floor === 2){
//      alert(floor+ " " + "Ramdom coin value is : Head")
//  }
//  else(
//     alert(floor+ " " + "Ramdom coin value is : Tail")

//  )


// --task no 6--
// var random = Math.random()*100;
// var ceil = Math.ceil(random)
// document.write("Random number between 1 to 100:" +" "+ ceil)




// --task no 7--
// var weight = prompt("Enter your weight")
// document.write(weight+"kilogram")







// --task no 8--
// var random = Math.random()*10;
// var real = Math.ceil(random)
// var user = prompt("Enter a number between 1 to 10")
// if (user === real){
//     alert("congratulation")
// }
// else{
//     alert("Try again")
// }


//  ==== chapter 31 - 34 ======

// --task no 1--
// var date = new Date();
// document.write(date)


// --task no 2--
// var month = ["janrary","febrary","March","April","May","June","July","Augest","Septembar","Octubar","Novembar","December"]
// var date = new Date();
// var monthget = date.getMonth();
// var monthName = month[monthget]
// document.write("Current Month:" +monthName)




// --task no 3--
// var day = ["sun","Mon","Tue","Wed","Thr","Fri","Sat"]
// var date = new Date();
// var dayget = date.getDay();
// var dayName = day[dayget]
// document.write("Today is" +dayName)



// --task no 4--
//  var day = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]
// var date = new Date();
// var dayget = date.getDay();
// var dayName = day[dayget]
// if (dayName === "Sun" || "Sat"){
//     alert("Its fun day")
// }
// else{
//     alert("its busy day")
// }


// --task no 5--
// var date = new Date();
// var dayMonth = date.getDate();
// if (dayMonth < 15){
//     alert("First fifteen day of month")
// }
// else{
//     alert("Last day of the month")
// }




// --task no 6--
// var date = new Date();
// var mili = date.getTime();
// var min = mili / 60;
// document.write("Current Date"+ " "+ date + "</br>"+ "Elapesed milisecond since janurary 1,1970:"+" "+ mili+"</br>"+"Elapesed minutes since janurary 1,1970:" 
// + " "+ min)





// --task no 7--
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12){
//     alert("Its AM")
// }
// else{
//     alert("Its PM")
// }


// --task no 8--
//  var satDate = new Date();
//  var month = satDate.setMonth(11);
//  var day = satDate.setDate(31);
//  var hours = satDate.setHours(0);
//  var hours = satDate.setMinutes(0);
//  var hours = satDate.setSeconds(0);


//  document.write("Later date:"+" "+satDate)


// --task no 9--
//  var dateRam = new Date("Jun 18, 2015");
//  var ramMili = dateRam.getTime()
//  var date = new Date();
//  var dateMili = date.getTime()
//  var diff = dateMili - ramMili
//  var days = diff /(1000*60*60*24)
//  var sloor = Math.floor(days)
//  document.write(sloor +" "+ "Date has passed since 1st ramazan , 2015")


// --task no 10--
//  var dateRam = new Date("Sat ,Dec 5, 2015, 22:50:16");
//  var ramMili = dateRam.getTime()
//  var date = new Date();
//  var dateMili = date.getTime()
//  var diff = dateMili - ramMili
//  var days = diff /(1000)
//  var sloor = Math.floor(days)
//  document.write( "on referance"+dateRam+"</br>" + sloor+" "+"second has been passed since early 2015" )


// --task no 11--

// --task no 12--
// --task no 13--
//  var age = prompt("Enter your age");
//  var year = 2020 - age 
//  document.write("your age is "+" "+ age+ "</br>"+ "your birth year is "+ " "+ year)

//  // --task no 14--
// var name = "Customer Name: Muzammil Ahmed Malik"
// var mon = "Month : febrary"
// var unit = prompt ("what is unit")
// var units = "no of units;"+" " + unit
// var charge = 16
// var amount = unit * 16
// var late = 350
// var after = amount + late
// document.write(name +"</br>"+mon +"</br>"+ units +"</br>"+
// "charge per unit:"+" "+ charge+ "</br>"+ 
// "Net amount payable(with in due date:"+ " "+ amount+ "</br>"+ "late payment surcharge:"+ " "+ late+"</br>"+ 
// "Gross amount payable (after due date): " + " "+ after)


// ===cahpter 35 -38 =====
//  // --task no 1--
// var date = new Date();
// function date1(){
//     document.write(date +" ")
// } 
// date1()


//  // --task no 2--
// function greet(fname,lname){
//     document.write(`hello ${fname} ${lname} </br>`)
//   }
//   greet("jawan","malick")

//  // --task no 3--
// var a = prompt("enter first value")
// var a1 = parseInt(a)
// var b = prompt("enter second value")
// var b1 = parseInt(b)

// function add(n1,n2){
//     var sum =n1+n2 
//     document.write(sum+"</br>")
//   }
//   add(a1,b1)


//  // --task no 4--
// function calculator(num1,opt,num2){
//     if(opt=="+"){
//       document.write(num1+num2+"</br>")
//     }
//     else if(opt=="-"){
//       document.write(num1-num2+"</br>")
//     }
//     if(opt=="*"){
//       document.write(num1*num2+"</br>")
//     }
//     if(opt=="/"){
//       document.write(num1/num2+"</br>")
//     }
//   }
//   calculator(2,"*",5)


//  // --task no 5--
// function square(num){
//     document.write(`${num**2} </br>`)
//   }
//   square(6)

//  // --task no 6--
// function cont (n1,n2){
//     for(i = n1; i < n2+1; i++){
// document.write(i+"</br>")
//     }
// }
// cont(4,20)


//  // --task no 7--

//  // --task no 8--
// function hypo(base,perpan){
// document.write(((base**2)+(perpan**2))**(1/2))

// }
// hypo(3,4)
// var a = 4
// var b = 7
// function rectangle(w,h){
//     document.write(w*h)
// }
// rectangle(a,b)

//  // --task no 13--
// var a = "ground"
// function foo() {
    
//     console.log(a.length+1)
// }
// foo()

// ------task 14 -----
function end (r){
    document.write("circumference of the circle: "+ Math.round((2*(3.14)*r)) +" </br>")
    document.write("Area of the circle: "+ (3.14)*(r**2))

    
}
end(5)

