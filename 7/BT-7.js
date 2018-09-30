// Bai 1
console.log("www.stdio.vn");
// Bai 2
console.log("STDIO stqands for StandarD Input Output");
// Bai 3
console.log(" _______  _______  ______   ___   _______");
console.log("|       ||       ||      | |   | |       |");
console.log("|  _____||_     _||  _    ||   | |   _   |");
console.log("| |_____   |   |  | | |   ||   | |  | |  |");
console.log("|_____  |  |   |  | |_|   ||   | |  |_|  |");
console.log(" _____| |  |   |  |       ||   | |       |");
console.log("|_______|  |___|  |______| |___| |_______|");
// Bai 4
console.log("Microsoft DirectX is a collection of application programming interfaces (APIs) for handling tasks related to multimedia, especially game programming and video, on Microsoft platforms.");
console.log("Originally, the names of these APIs all began with Direct, such as");
console.log("- Direct3D");
console.log("- DirectDraw");
console.log("- DirectMusic");
console.log("- DirectPlay");
console.log("- DirectSound");
console.log("- And so forth.");
console.log("The name DirectX was coined as shorthand term for all of these APIs (the X standing in for the particular API names) and soon became the name of the collection.");
// Bai 5
console.log("In C++, we have some special characters:");
console.log("- // or /* */ for the comment.");
console.log("- \t for tab.");
console.log("- \n for new line.");
console.log(`- " and " to mark it's a string.`);
// Bai 6
var width = 5;
var height = 3;
console.log("Enter width: " + width);
console.log("Enter height: " + height);
console.log("=> Perimeter: " + ((width + height)*2));
console.log("=> Area: " + (width * height));
// Bai 7
var radius = 5;
console.log("Enter radius: " + radius);
console.log("Perimeter: " + (3.14 * 2 * radius));
console.log("Area: " + (radius * radius * 3.14));
// Bai 8
var radius2 = 5;
var height2 = 10;
console.log("Enter radius: " + radius2);
console.log("Enter height: " + height2);
console.log("=> Curved Surface Area: " + (2 * 3.14159 * radius2 * height2));
console.log("=> Surface Area: " + ((2 * 3.14159 * radius2 * radius2) + (2 * 3.14159 * radius2 * height2)));
console.log("Volume: " + (3.14159 * radius2 * radius2 * height2));
// Bai 9
var number1 = 12;
var number2 = 98;
console.log("Enter number 1: " + number1);
console.log("Enter number 2: " + number2);
console.log("BEFORE SWAPPING:");
console.log("number 1: " + number1);
console.log("number 2: " + number2);
var temp = number2;
number2 = number1;
number1 = temp;
console.log("AFTER SWAPPING");
console.log("number 1: " + number1);
console.log("number 2: " + number2);
// Bai 10
var number = 237;
console.log("Enter number (100-999): " + number);
var digit = 0;
while(number != 0)
{
    digit += number % 10;
    number = parseInt(number / 10);
}
console.log("=> Sum of digits: " + digit);
// Bai 11
var number3 = 248;
console.log("Enter number (100 - 999): " + number3);
var reverse = 0;
while(number3 != 0)
{
    reverse = (reverse * 10) + (number3 % 10);
    number3 = parseInt(number3/10);
}
console.log("Reverse number: " + reverse);
// Bai 12
var realnumber1 = 0.3;
var realnumber2 = 5.4;
var realnumber3 = 31.78;
console.log("Enter number: " + realnumber1);
console.log("=> Round of number: " + Math.round(realnumber1));
console.log("Enter number: " + realnumber2);
console.log("=> Round of number: " + Math.round(realnumber2));
console.log("Enter number: " + realnumber3);
console.log("=> Round of number: " + Math.round(realnumber3));