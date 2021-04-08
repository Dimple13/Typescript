var count = 5;
//count='a';gives compilation error
var a;
a = 1;
a = true;
a = 'a'; //no issues
var b;
//b=true gives compilation error
var c;
var d;
var e;
var f;
var g = [1, 2, 3];
var h = [1, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
