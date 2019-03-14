console.log()

function changeName(){
  console.log('changing name');
  let newname= window.prompt("New Name");
  document.getElementById("name").innerText=newname;
}
let button=document.getElementById("change-name");
button.onclick=changeName;

function changeLocation(){
    console.log('changing location');
    let newlocation= window.prompt("New Location");
    document.getElementById("location")
    .innerText=newlocation
}
 document.getElementById('change-location').onclick=changeLocation

 let counter=0
document.getElementById("counter").innerText=0
function add1(){
  console.log('changenumber')
  counter = counter + 1
  console.log('the new counter value is: ' + counter)
  document.getElementById("counter").innerText=counter;
}
let addButton=document.getElementById("add1")
addButton.onclick=add1

counter = counter - 1
