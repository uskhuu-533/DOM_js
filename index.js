
const element = document.createElement("div")
element.style.height = "1000px"
element.style.width = "100vw"
element.style.background = "white" 
element.id = "element"
element.style.display = "flex"
element.style.flexDirection = "column"
element.style.justifyContent = "center"
element.style.alignItems = "center"
element.innerHTML 

const element1 = document.createElement("div")
element1.style.height = "800px"
element1.style.width = "400px"
element1.style.background = "white" 
element1.id = "element1"
element1.style.display = "flex"
element1.style.flexDirection = "column"
element1.style.justifyContent = "center"
element1.style.alignItems = "center"
element1.style.border = "solid"
element1.innerHTML 

const email = document.createElement("p")
email.innerHTML = "Email"

const input1 = document.createElement("input");
input1.style.height = "20px";
input1.style.width = "100px";
input1.type = "email"
input1.id = "email"
input1.innerHTML

const firstName = document.createElement("p");
firstName.innerHTML = "firstname"

const firstNameInput = document.createElement("input")
firstNameInput.style.height = "20px";
firstNameInput.style.width = "100px"
firstNameInput.innerHTML

const lastName = document.createElement("p");
lastName.innerHTML = "lastname"

const lastNameInput = document.createElement("input");
lastNameInput.style.height = "20px"
lastNameInput.style.width = "100px"

const input = document.createElement("input");
input.style.height = "20px";
input.style.width = "100px";
input.type = "password"
input.id = "pass"

const pass = document.createElement("p")
pass.innerHTML = "Password" 

const button = document.createElement("button");
button.style.width = "100px";
button.style.height = "30px";
button.style.marginTop = "20px"
button.innerHTML = "Sign In"
button.id = "button"

const forgot = document.createElement("p");
forgot.style.color = "grey";
forgot.style.fontSize = "90%";
forgot.style.marginTop = "100px"
forgot.innerHTML = "forgot password ?"

const signIn = document.createElement("h1");
signIn.innerHTML = "Sign in"



document.getElementById("demo").appendChild(element)
document.getElementById("element").appendChild(element1)
document.getElementById("element1").appendChild(signIn)
document.getElementById("element1").appendChild(email)
document.getElementById("element1").appendChild(input1)
// document.getElementById("element1").appendChild(firstName)
// document.getElementById("elemetn1").appendChild(firstNameInput)
// document.getElementById("element1").appendChild(lastName)
// document.getElementById("element1").appendChild(lastNameInput)
document.getElementById("element1").appendChild(input)
document.getElementById("element1").appendChild(pass)
document.getElementById("element1").appendChild(input)
document.getElementById("element1").appendChild(button)
document.getElementById("element1").appendChild(forgot)

document.getElementById("button").addEventListener("click", myFunct)
// document.getElementById("pass").addEventListener("input", myFunct )
// document.getElementById("email").addEventListener("input", myFunct)

function myFunct(){
    let x = document.getElementById("pass").value;
    let y =document.getElementById("email").value;
   console.log(x)
   console.log(y)
    
    const data1 = [
    {
        email : "aa",
        password : 12345678,
        age : 18,
        gender : "male"
    },
    {
        email : "bb",
        password : 87654321
    },
    {
        email : "cc",
        password : 12348765
    }
]

    for (let i = 0; i <=data1.length; i++){
        if (data1[i].email == y && data1[i].password == x){
            console.log(data1[i].email, data1[i].password)
            
        }else{
            const wrong = document.createElement("div")
            wrong.style.background = "rgb(255,0,0,0.5)"
            wrong.style.width = "500px"
            wrong.style.height ="200px"
            wrong.style.color = "white"
            wrong.style.position = "absolute"
            wrong.style.fontSize = "300%"
            wrong.style.display = "flex"
            wrong.style.alignItems ="center"
            wrong.style.justifyContent ="center"
            wrong.innerHTML = "Wrong password !!!"
            document.getElementById("element1").appendChild(wrong)
        }
    }
}
