//object_destructuring

//array object
let numbers = [1,3,5,7,9,11];
let [firstNumber, secondNumber, thirdNumber, fourthNumber,
     fifthNumber, sixthNumber] = numbers;// array object destructuring
console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);


//html collection object
let buttons = document.getElementsByClassName("buttons");
let [firstButton, secondButton, thirdButton] = buttons;// html collection object destructuring
console.log(firstButton.textContent);
console.log(secondButton.textContent);
console.log(thirdButton.textContent);

for(let button of buttons) {
    Object.assign(button.style, {
        fontSize: "3vw",
        fontWeight: "bold",
        outline: "none",
        border: "none",
        color: "white",
        backgroundColor: "mediumseagreen",
        padding: "10px",
        borderRadius: "15px",
        cursor: "pointer",
        transition: "all 0.3s ease"
    });
}

//javaScript object
let studentObject = {
    studentName: "Sid",
    age: 23,
    rollNumber: 101,
    gender: "male",
    mobileNumber: 1234567890
};

let studentDataBlock = document.getElementById("student_data_block");
let{studentName, age, rollNumber, gender, mobileNumber} = studentObject;// javaScript object destructuring
studentDataBlock.innerHTML = `
    <p>Name: ${studentName}</p>
    <p>Age: ${age}</p>
    <p>Roll Number: ${rollNumber}</p>
    <p>Gender: ${gender}</p>
    <p>Mobile Number: ${mobileNumber}</p>
`;

//array of objects
let users = [
    {id:100, name: "Sid", age: 23},
    {id:101, name: "John", age: 25},
    {id:102, name: "Alice", age: 22}
];
let [firstUser, secondUser, thirdUser] = users;// array of objects destructuring
let [firstUserId, firstUserName, firstUserAge] = document.getElementsByClassName("users_data");