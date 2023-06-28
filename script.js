const cvv=document.getElementById("cvc");
const cardcvv=document.getElementById("card-cvv");
const number=document.getElementById("form-card-number");
const month=document.getElementById("exp-month");
const year=document.getElementById("exp-year");
const date=document.querySelectorAll(".exp-date");
const cardnum=document.getElementById("card-number");
const cardname=document.getElementById("card-name");
const formCardNname=document.getElementById("form-card-name");
const numw=document.getElementById("card-number-warning");
const datew=document.getElementById("date-warnings");
const cvvw=document.getElementById("cvv-warnings");
const mm=document.getElementById("MM");
const yy=document.getElementById("YY");
var regex = /[a-zA-Z]/;
var dval= "0000 0000 0000 0000";
var preval=0;
date.forEach((item)=>{
    item.oninput = function(){
        if(this.value.length>2){
            this.value = this.value.slice(0,2);
        }
        let len=this.value.length;
        if(this.id=="exp-month"){
            mm.innerText=this.value.substring(0,len)+dval.substring(len,2);
        }else{
            yy.innerText=this.value.substring(0,len)+dval.substring(len,2);
        }
        if(datew.innerText!=""){
            datew.innerText="";
        }
        if(month.style.borderColor!="" || year.style.borderColor!=""){
            month.style.borderColor="";
            year.style.borderColor="";
        }
    }
});
number.onkeyup = function(){
    let len=this.value.length;
    if(preval<len){
        this.value = this.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
    }
    if(len>19){
        this.value = this.value.slice(0,19);
    }
    if(regex.test(number.value)){
        numw.innerText="Wrong format, numbers only";
    }else{
        numw.innerText="";
    }
    cardnum.innerText=this.value.substring(0,len)+dval.substring(len,20);
    preval=len;
};
cvv.oninput = function(){
    if(this.value.length>3){
        this.value = this.value.slice(0,3);
    }
    let len=this.value.length;
    cardcvv.innerText=this.value.substring(0,len)+dval.substring(len,3);
    if(cvvw.value!=""){
        cvvw.innerText="";
    }
    if(cvv.style.borderColor!=""){
        cvv.style.borderColor="";
    }
};
formCardNname.oninput = function(){
    if(this.value=="") cardname.innerText="Jane Appleseed";
    else cardname.innerText=this.value;
    if(this.value.length>25){
        this.value = this.value.slice(0,25);
    }
};
function submit(){
    let ck=false;
    if(year.value==""){  
        year.style.borderColor="hsl(0, 100%, 66%)";
        datew.innerText="Can't be empty";
        ck=true;
    }
    if( month.value==""){  
        month.style.borderColor="hsl(0, 100%, 66%)";
        datew.innerText="Can't be empty";
        ck=true;
    }
    if(cvv.value==""){ 
        cvv.style.borderColor="hsl(0, 100%, 66%)";
        cvvw.innerText="Can't be empty";
        ck=true;
    }
    if(numw.innerText!="") ck=true;
    console.log(numw.innerText,ck);
    if(ck) return;
    const form= document.getElementById("form");
    form.classList.add("next");
}