var result=""
var screen
var ans=0
var screenAns
var counterBracket=0;
rad=true
deg=false

function zero() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×0'
    }else {
        document.getElementById('screen').innerHTML = screen+'0'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function one() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×1'
    }else {
        document.getElementById('screen').innerHTML = screen+'1'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function two() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×2'
    }else {
        document.getElementById('screen').innerHTML = screen+'2'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function three() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×3'
    }else {
        document.getElementById('screen').innerHTML = screen+'3'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function four() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×4'
    }else {
        document.getElementById('screen').innerHTML = screen+'4'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function five() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×5'
    }else {
        document.getElementById('screen').innerHTML = screen+'5'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function six() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×6'
    }else {
        document.getElementById('screen').innerHTML = screen+'6'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function seven() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×7'
    }else {
        document.getElementById('screen').innerHTML = screen+'7'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function eight() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×8'
    }else {
        document.getElementById('screen').innerHTML = screen+'8'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function nine() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×9'
    }else {
        document.getElementById('screen').innerHTML = screen+'9'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function openBracket() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        counterBracket++
        document.getElementById('screen').innerHTML = screen+'×(' 
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        counterBracket++
        document.getElementById('screen').innerHTML = screen+'('
    }
 
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function closeBracket() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"||screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"||screen.charAt(screen.length-1)=="^"){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else if(counterBracket>0){
        document.getElementById('screen').innerHTML = screen+')'
        counterBracket--
    }else if(screen.charAt(screen.length-1)=="("){
        backSpace()
    }if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function percent() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==""){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'%'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function clearAll() {
    
    try{
        ans=eval(result)
    }
    catch(SyntaxError){
        
    }
    document.getElementById('screenAns').innerHTML = "Ans = "+ans
    document.getElementById('screen').innerHTML=""
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function backSpace() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-2)=="t"){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(0, screen.length -5)
        counterBracket--
    }else if(screen.charAt(screen.length-2)=="n"||screen.charAt(screen.length-2)=="p"||screen.charAt(screen.length-2)=="s"
    ||screen.charAt(screen.length-2)=="g"){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(0, screen.length - 4)
        counterBracket--
    }else if(screen.charAt(screen.length-2)=="v"){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(0, screen.length - 7)
        counterBracket--
    }else if(screen.charAt(screen.length-2)=="N"){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(0, screen.length - 3)
        counterBracket--
    }else if(screen.charAt(screen.length-2)=="√"){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(0, screen.length - 2)
        counterBracket--
    }else{
        if(screen.charAt(screen.length-1)=="("){
            counterBracket--
        }
        if(screen.charAt(screen.length-1)==")"){
            counterBracket++
        }
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(0, screen.length - 1)
    }
    Inv2()
}
function divide() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"||screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"||screen.charAt(0)==""||screen.charAt(screen.length-1)=="("){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'÷'
    }    
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function multiply() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"||screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"||screen.charAt(0)==""||screen.charAt(screen.length-1)=="("){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'×'
    } 
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function Subtract() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="-"){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'-'
    }  
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function summation() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"||screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"||screen.charAt(0)==""||screen.charAt(screen.length-1)=="("){
        document.getElementById('screen').innerHTML=screen
    }else{
        document.getElementById('screen').innerHTML = screen+'+'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function dot() {
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="."){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×.'
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'.'
    }  
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function equal(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=='E'){
        document.getElementById('screen').innerHTML = screen+'0'
    }
    while(counterBracket!=0){
        if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"){
            document.getElementById('screen').innerHTML=screen+'0'
        }else if(screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"){
            document.getElementById('screen').innerHTML=screen+'1'
        }else closeBracket()
    }
    
        screen=document.getElementById('screen').innerHTML
        result=screen.replaceAll("%",'/100').replaceAll("×",'*').replaceAll("÷",'/').replaceAll("fact","factorial").
        replaceAll("sin","Math.sin").replaceAll("SinInv","Math.asin").replaceAll("LN","Math.log").
        replaceAll("exp","Math.exp").replaceAll("π","Math.PI").replaceAll("cos","Math.cos").replaceAll("CosInv","Math.acos").
        replaceAll("log","Math.log10").replaceAll("^","**").replaceAll("root(","**(1/").replaceAll("e","Math.E").
        replaceAll("tan","Math.tan").replaceAll("TanInv","Math.atan").replaceAll("√","Math.sqrt").replaceAll("E","*10**")
   
       
    document.getElementById('screenAns').innerHTML = screen+'='
    try{
        document.getElementById('screen').innerHTML = eval(result)
        ans=eval(result)
      }
      catch(SyntaxError){
        document.getElementById('screen').innerHTML = "Error"
      }
    document.getElementById('clearAll').style.display="block"
    document.getElementById('backSpace').style.display="none"
    Inv2()
}
function Inv1() { 
    document.getElementById('inv1').style.display="none"
    document.getElementById('inv2').style.display="block"

    document.getElementById('sin').style.display="none"
    document.getElementById('sinInv').style.display="block"
    
    document.getElementById('cos').style.display="none"
    document.getElementById('cosInv').style.display="block"
    
    document.getElementById('tan').style.display="none"
    document.getElementById('tanInv').style.display="block"

    document.getElementById('ln').style.display="none"
    document.getElementById('lnInv').style.display="block"

    document.getElementById('log').style.display="none"
    document.getElementById('logInv').style.display="block"

    document.getElementById('root').style.display="none"
    document.getElementById('rootInv').style.display="block"

    document.getElementById('ans').style.display="none"
    document.getElementById('rnd').style.display="block"

    document.getElementById('xPower').style.display="none"
    document.getElementById('xRoot').style.display="block"
}
function Inv2() { 
    document.getElementById('inv1').style.display="block"
    document.getElementById('inv2').style.display="none"
    
    document.getElementById('sin').style.display="block"
    document.getElementById('sinInv').style.display="none"
    
    document.getElementById('cos').style.display="block"
    document.getElementById('cosInv').style.display="none"

    document.getElementById('tan').style.display="block"
    document.getElementById('tanInv').style.display="none"

    document.getElementById('ln').style.display="block"
    document.getElementById('lnInv').style.display="none"

    document.getElementById('log').style.display="block"
    document.getElementById('logInv').style.display="none"

    document.getElementById('root').style.display="block"
    document.getElementById('rootInv').style.display="none"

    document.getElementById('ans').style.display="block"
    document.getElementById('rnd').style.display="none"

    document.getElementById('xPower').style.display="block"
    document.getElementById('xRoot').style.display="none"
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function fact(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×fact('
        counterBracket++
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'fact('
        counterBracket++
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function sin(){
    screen=document.getElementById('screen').innerHTML
    if(deg){
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×sin((π÷180)*'
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'sin((π÷180)*'
            counterBracket++
        }
    }else{
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×sin('
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'sin('
            counterBracket++
        }
    }
    
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function sinInv(){
    screen=document.getElementById('screen').innerHTML
    if(deg){
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×SinInv((π÷180)*'
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'SinInv((π÷180)*'
            counterBracket++
        }
    }else{
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×SinInv('
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'SinInv('
            counterBracket++
        }
    }
    
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function ln(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×LN('
        counterBracket++
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'LN('
        counterBracket++
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function exp(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×exp('
        counterBracket++
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'exp('
        counterBracket++
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function pi(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×π'
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'π'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function cos(){
    screen=document.getElementById('screen').innerHTML
    if(deg){
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×cos((π÷180)*'
            counterBracket++
            
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'cos((π÷180)*'
            counterBracket++
            
        }
    }else{
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×cos('
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'cos('
            counterBracket++
        }
    }
   
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function cosInv(){
    screen=document.getElementById('screen').innerHTML
    if(deg){
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×CosInv((π÷180)*'
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'CosInv((π÷180)*'
            counterBracket++
        }
    } else{
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×CosInv('
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'CosInv('
            counterBracket++
        }
    }
    
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function log(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×log('
        counterBracket++
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'log('
        counterBracket++
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function tenPow(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×10^'
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'10^'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function euler(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×e'
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'e'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function tan(){
    screen=document.getElementById('screen').innerHTML
    if(deg){
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"){
            document.getElementById('screen').innerHTML = screen+'×tan((π÷180)*'
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'tan((π÷180)*'
            counterBracket++
        }
    }else {
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"){
            document.getElementById('screen').innerHTML = screen+'×tan('
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'tan('
            counterBracket++
        }
    }
    
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function tanInv(){
    screen=document.getElementById('screen').innerHTML
    if(deg){
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×TanInv((π÷180)*'
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'TanInv((π÷180)*'
            counterBracket++
        }
    }else{
        if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
            document.getElementById('screen').innerHTML = screen+'×TanInv('
            counterBracket++
        }else if(screen.charAt(screen.length-1)=="E"){
            document.getElementById('screen').innerHTML = screen
        }else{
            document.getElementById('screen').innerHTML = screen+'TanInv('
            counterBracket++
        }
    }
    
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function sqr(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"){
        document.getElementById('screen').innerHTML = screen+'×√('
        counterBracket++
    }else {
        document.getElementById('screen').innerHTML = screen+'√('
        counterBracket++
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function square(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"||screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"||screen.charAt(0)==""||screen.charAt(screen.length-1)=="("||screen.charAt(screen.length-1)=="^"){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'^2'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function Ans(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×ans'
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'ans'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function Rnd(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×'+(String)(Math.random()).substring(1,9)
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+(String)(Math.random()).substring(1,9)
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function EXP(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"){
        document.getElementById('screen').innerHTML = screen+'E'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function exponentiation(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)=="+"||screen.charAt(screen.length-1)=="-"||screen.charAt(screen.length-1)=="×"||screen.charAt(screen.length-1)=="÷"||screen.charAt(0)==""||screen.charAt(screen.length-1)=="("||screen.charAt(screen.length-1)=="^"){
        document.getElementById('screen').innerHTML=screen
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'^'
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
}
function rootx(){
    screen=document.getElementById('screen').innerHTML
    if(screen.charAt(screen.length-1)==")"||screen.charAt(screen.length-1)>="0"&&screen.charAt(screen.length-1)<="9"||screen.charAt(screen.length-1)=="e"||screen.charAt(screen.length-1)=="π"||screen.charAt(screen.length-1)=="ans"){
        document.getElementById('screen').innerHTML = screen+'×root('
        counterBracket++
    }else if(screen.charAt(screen.length-1)=="E"){
        document.getElementById('screen').innerHTML = screen
    }else{
        document.getElementById('screen').innerHTML = screen+'root('
        counterBracket++
    }
    document.getElementById('clearAll').style.display="none"
    document.getElementById('backSpace').style.display="block"
    Inv2()
}
function Rad(){
    rad=false
    deg=true
    document.getElementById('rad').style.display="none"
    document.getElementById('deg').style.display="block"
}
function Deg(){
    rad=true
    deg=false
    document.getElementById('deg').style.display="none"
    document.getElementById('rad').style.display="block"
}
