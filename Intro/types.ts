let count=5;
//count='a';gives compilation error
let a;
a=1;
a=true;
a='a'//no issues
let b: number;
//b=true gives compilation error
let c:number;
let d:boolean;
let e:string;
let f:any;
let g:number[]=[1,2,3];
let h:any[]=[1,true,'a',false];
enum Color {Red=0, Green=1, Blue=2}
let backgroundColor=Color.Red;