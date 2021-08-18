var totalAmount=document.getElementById("total-amount");
function myfunction(oneAmount,amount){
  var totalAmount=document.getElementById("total-amount");
    var depositOrWithdrawAmount=document.getElementById(oneAmount);
    var totalDepositOrWithdrawAmount=document.getElementById(amount); 
   var convertedDepositOrWithdrawAmount =parseFloat( depositOrWithdrawAmount.value);
   var convertedTotalDepositOrWithdrawAmount =parseFloat(totalDepositOrWithdrawAmount.innerText);
   var total=parseFloat(totalAmount.innerText);
    if(convertedDepositOrWithdrawAmount>0){
      if(depositOrWithdrawAmount.getAttribute('id')=='withdraw-amount'&&convertedDepositOrWithdrawAmount<=total){
        totalDepositOrWithdrawAmount.innerText=convertedDepositOrWithdrawAmount+convertedTotalDepositOrWithdrawAmount;
        var amountField= totalDepositOrWithdrawAmount.innerText;
        totalFunction(depositOrWithdrawAmount,totalAmount.innerText);
      }
     else if(depositOrWithdrawAmount.getAttribute('id')=="deposit-amount"){
        totalDepositOrWithdrawAmount.innerText=convertedDepositOrWithdrawAmount+convertedTotalDepositOrWithdrawAmount;
        var amountField= totalDepositOrWithdrawAmount.innerText;
        totalFunction(depositOrWithdrawAmount,totalAmount.innerText);
      }
   depositOrWithdrawAmount.value='';
   return amountField;
  }
}
function totalFunction(x,y){

if(x.getAttribute('id')=='deposit-amount'){
  totalAmount.innerText=parseFloat(x.value)+parseFloat(y);
}
else if(x.getAttribute('id')=='withdraw-amount'){
  totalAmount.innerText=parseFloat(y)-parseFloat(x.value);
}
else{
  alert("error");
}
var amountOfTotal=totalAmount.innerText;
   return amountOfTotal;
}
document.getElementById("deposit-button").addEventListener("click",function(){
  myfunction("deposit-amount","total-deposit-amount");
})
document.getElementById("withdraw-button").addEventListener("click",function(){
    myfunction("withdraw-amount","total-withdraw-amount");
})