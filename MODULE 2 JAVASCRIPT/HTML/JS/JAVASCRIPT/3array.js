let nos = [1,2,3,4,5];
console.log("Initially nos are:", nos);
nos.shift();
console.log("Nos after shift:", nos);
nos.unshift(1);
console.log("Nos after inshift:", nos);
nos.splice(3,2);
console.log("Nos after splice deletion:", nos);
// 1st index 2nd position
//example: (1,4) means 1st element is remaining remaining 4 elements will be deleted 
///(0,3) 1st position is index number and then 2nd is number of elements

//insert elements in between using splice

nos.splice(2,0,7,8);
console.log("Nos after splice inserton or addition:", nos);
// addition; ex: (2,0,5) 
// replacement of 2 numbers (2,2,5,6)
// replacement of 1 number and addition (2,1,5,6) 

f= ["a","b","c"];
console.log(f);
f.splice(1,0,"d","e","f");
console.log("Values after addition", f);