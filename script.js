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
   //check if a number has already been clicked
    if(resultVal){
        //start a new number
        newVal = num;
        //reset to create a new result 
        resultVal = '';
    }else {
        //used to block multiple decimals
        if (num === '.'){
            if(decimalClicked != true){
                //take the current value of newVal and add the character pressed 
                newVal += num;
                //set decimal check var to true, want allow more
                decimalClicked = true;
            }
        } else {
            newVal += num;
            console.log(newVal);
        }
    }
    //update the display
    document.getElementById('entry').value= newVal;
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

 document.getElementById('entry').value='0';
}
function copyButPress(){
    valMemoryStored = document.getElementById('entry').value;
}
//If a value has been stored paste it in the #entry window and assign its as the newVl
function pasteButPress(){
    if(valMemStored){
    document.getElementById('entry').valMemStored;
    newVal = valMemStored;
    }
}