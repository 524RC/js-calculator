let prevVal = '';
let newVal = '';
let resultVal = '';
let mathOperator = '';

//store whether or not decimal was clicked 
//only allow one decimal per val 
let decimalClicked = false;
//Hold values we want sotred in memory
let valMemStored='';

function numButPress(num){

}
function mathButPress(operator){

}
function equalButPress(){

}
//clear all except memory
function clearButPress(){
 prevVal = '';
 newVal = '';
 resultVal = '';
 mathOperator = '';
 decimalClicked = false;

 document.getElementbyId('entry').value='0';
}
function copyButPress(){

}
function pasteButPress(){

}