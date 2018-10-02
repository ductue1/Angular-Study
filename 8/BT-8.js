//Bai 1
var number_b1_1 = -32;
var number_b1_2 = 24;
console.log("Enter number: " + number_b1_1);
console.log("=> Absolute value: " + Math.abs(number_b1_1));
console.log("Enter number: " + number_b1_2);
console.log("=> Absolute value: " + Math.abs(number_b1_2));

//Bai 2
var number_b2_1 = 5;
var number_b2_2 = 24;
console.log("Enter number: " + number_b2_1);
if(number_b2_1 % 2 == 0)
    console.log("=> " + number_b2_1 + " is an even number");
else
    console.log("=> " + number_b2_1 + " is an odd number");
console.log("Enter number: " +  number_b2_2);
if(number_b2_2 % 2 == 0)
    console.log("=> " + number_b2_2 + " is an even number");
else
    console.log("=> " + number_b2_2 + " is an odd number");

//Bai 3
var hour = 3;
var minute = 2;
var second = 5;
console.log("Enter hour: " + hour);
console.log("Enter minute: " + minute);
console.log("Enter second: " + second);
console.log("=> Number of seconds: " + ((hour * 60 * 60) + (minute * 60) + second));

//Bai 4
var x = 3, y = 2, z = 7, t = 1;
console.log("Enter x: " + x);
console.log("Enter y: " + y);
console.log("Enter z: " + z);
console.log("Enter t: " + t);
var arr = [x, y, z, t];
var max = arr[0];
var min = arr[0];
for(var i = 0; i < arr.length; i++)
{
    if(max < arr[i])
        max = arr[i];
    if(min > arr[i])
        min = arr[i];
}
console.log("=> Minimum value: " + min);
console.log("=> Maximum value: " + max);

//Bai 5
var month = 5;
console.log("Enter month (1-12): " + month);
if(month >= 1 && month <= 3)
    console.log("We are in spring");
else
    if(month > 3 && month <= 6)
        console.log("We are in summer");
    else
        if(month > 6 && month <= 9)
            console.log("We are in fall");
        else
            console.log("We are in winter");

//Bai 6
var year = 2000;
console.log("Enter year: " + year);
var string = "";
for(var i = 1988; i <= year; i+=4)
{
    if(i == year)
        string += "Olympic, Euro, ";
}
for(var i = 1990; i <= year; i+=4)
{
    if(i == year)
        string += "World Cup, ";
}
for(var i = 1995; i <= year; i+=2)
{
    if(i == year)
        string += "SEA Games, ";
}
for(var i = 1996; i <= year; i+=2)
{
    if(i == year)
        string += "Tiger Cup";
}
if(string.charAt(string.length) == ',')
    string.split(string, string.length - 1);
console.log("Events in " + year + ": " + string);

//Bai 7
var day = 8;
var month = 2;
var year = 2015;


//Bai 8
for(var i = 1; i <= 5; i++)
{
    console.log("wwww.stdio.vn");
}

//Bai 9
for(var i = 1; i <= 3; i++)
{
    switch(i % 3)
    {
        case 1:
            console.log("www.stdio.vn");
            break;
        case 2:
            console.log("bugs.vn");
            break;
        case 0:
            console.log("training.stdio.vn");
            break;
    }
}

//Bai 10
var n = 9;
var s = 0;
for(var i = 1; i <= n; i ++)
{
    s+= i;
}
console.log("S = " + s);

//Bai 11
var n = 5;
var s = 1;
console.log("Enter n: " + n);
for(var i = 1; i <= n; i++)
{
    s *= i;
}
console.log("n! = " + s);

//Bai 12
var n = 5;
var s = 0;
for(var i = 1; i <= n; i+=2)
{
    s += i;
}
console.log("=> S = " + s);

//Bai 13
var n = 13;
var prime = true;
console.log("Enter number: " + n);
if(n <= 1)
{
    prime = false;
}
else
{
    for(var i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            prime = false;
            break;
        }
    }
}
if(prime == true)
    console.log(n + " is prime");
else
    console.log(n + "is not prime");

//Bai 14
var n = 10;
var arr = [];
console.log("Enter number: " + n);
for(var i = 1; i <= n; i++)
{
    if(n % i == 0)
    {
        arr.push(i);
    }
}
var s = "Divisors of " + n + " are "; 
for(var i = 0; i < arr.length; i++)
{
    s += arr[i].toString();
    s += ", ";
}
console.log(s);

//Bai 15
var n = 6;
var arr = [];
console.log("Enter number: " + n);
for(var i = 1; i < n; i++)
{
    if(n % i == 0)
    {
        arr.push(i);
    }
}
var s = 0;
for(var i = 0; i < arr.length; i++)
{
    s += arr[i];
}
if(s == n)
{
    console.log(n + " is a perfect number");
}
else
{
    console.log(n + " is not a perfect number");
}

//Bai 16
var n = 12341;
var s = 0;
while(n != 0)
{
    
}