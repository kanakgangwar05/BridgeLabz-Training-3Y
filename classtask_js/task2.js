//task2:generate 4-digit otp
function generateOtp(){
let mini=1000;
let maxx=9999;
let num=Math.floor(Math.random()*(maxx-mini))+mini;
console.log(num);
return num;

}
generateOtp();