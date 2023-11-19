let a = []
const addinfotot = (data)=>{

    const tbody = document.querySelector("tbody")
tbody.innerHTML=data.map(
    (info,ind)=>
`<tr>
    
    <td>${info.name}</td>
    <td>${info.lname}</td>
    <td>${info.address}</td>
    <td>${info.pincode}</td>
    <td>${info.gender}</td>
    <td>${info.food1}</td>
    <td>${info.food2}</td>
    <td>${info.state}</td>
    <td>${info.country}</td>
    </tr>`
).join("") }

var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var address = document.getElementById('address')
const pincode = document.getElementById("pincode");
const male = document.getElementById("male")
const female = document.getElementById("female")
const food1 = document.getElementById("food1");
const food2 = document.getElementById("food2");
const food3 = document.getElementById("food3");
const food4 = document.getElementById("food4");
const food5 = document.getElementById("food5");
const state = document.getElementById("state");
const country = document.getElementById("country");
const submit = document.getElementById("submit");
const reset = document.getElementById("form");

submit.addEventListener("click",()=>{

    let selectedFoods=[]
    if (food1.checked) selectedFoods.push(food1.value);
    if (food2.checked) selectedFoods.push(food2.value);
    if (food3.checked) selectedFoods.push(food3.value);
    if (food4.checked) selectedFoods.push(food4.value);
    if (food5.checked) selectedFoods.push(food5.value);
  
    // Check if exactly two food items are selected
    if (selectedFoods.length !== 2) {
      alert("Please select exactly two food items.");
      return;
    }


    let selectedGender = "";
    if (male.checked) {
      selectedGender = male.value;
    } else if (female.checked) {
      selectedGender = female.value;
    } else {
      alert("Please select a gender.");
      return;
    }


  let obj = {
    name: firstName.value,
    lname: lastName.value,
    address: address.value,
    pincode: pincode.value,
    gender: selectedGender,
    food1: selectedFoods[0],
    food2: selectedFoods[1],
    state: state.value,
    country: country.value,
    }

a.push(obj)
console.log(a)
addinfotot(a)
reset.reset();
})