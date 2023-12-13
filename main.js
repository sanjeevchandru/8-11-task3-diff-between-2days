document.write("Find different between two days"+"<br>");
document.write("---------------------------------------------"+"<br>");
let a=parseInt(prompt("Enter the year"));
let b=parseInt(prompt("Enter the month"));
let c=parseInt(prompt("Enter the date"));
function test9(){
    var today=new Date();
    var xm=new Date(a,b,c);
    var x=1000*60*60*24;    
    return "Different between two Days  : "+Math.ceil((xm.getTime()-today.getTime())/x)+"  ";
}
document.write(test9()+"<br><br>");
