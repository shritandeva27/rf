nameofpizzaarray=[];

function submit()
{
var displaynameofpizzaarray=[];

for  (var j=1;j <= 4;j++)
{
    var nameofpizza=document.getElementById("NameOftypeofpizza"+j).value
    console.log(nameofpizza);                                                       
    nameofnameofpizzaarray.push(nameofpizza);
}
console.log(nameofpizzaarray);
var lenthofnameofpizzaarray=nameofpizzaarray.length;
console.log(lenthofnameofpizzaarray);
for (var k=0;k < lenthofnameofpizzaarray;k++)
{
    displaydisplaynameofpizzaarray.push("<h4>NAME-"+nameofpizzaarray[k] +"</h4>")
}
console.log(displaynameofpizzaarray)
document.getElementById("displaynamewithcommas").innerHTML=nameofpizzaarray;
var removecommas=displaynameofpizzaarray.join("")
console.log(removecommas)
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sorting()
{
nameofdisplaynameofpizzaarray.sort();
console.log(nameofdisplaynameofpizzaarray);
document.getElementById("displaypizza").innerHTML=nameofnameofpizzaarray;
}