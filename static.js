//const myFirstName = "zahra";
//const myFirstName2 = `hello my name is ${myFirstName}`;
//const myFirstName3 = "hello my name is " + myFirstName;
//const myFirstName4 = 'hello my name is' + myFirstName;
//console.log(myFirstName2);
//console.log(myFirstName3);
//console.log(myFirstName4);

//const weight=prompt("how is your weight in kg",60);
// const height=prompt("how is your height in meter",1.5);
//const BMI= weight/(height*height);

//alert ( `your BMI is : ${BMI}`);



//if (BMI >=25){
//alert ( "Please exercise more");
//}
//else if(BMI< 25 && BMI>=18){
    //alert ("it is okey");

//}
 //else{
 //alert("asdgd")};
//const numberguests =prompt("how many guests",10);
//let i =1;
//while(i<+ numberguests) {   const nameofguests =prompt("please eneter there names");
//}

//const firstName = prompt("Enter your first name: ");

//const lastName = prompt("Enter your last name: ");

//const totalLength = firstName.length + lastName.length;
//console.log("The sum of the lengths of the two names is: " + totalLength);
 ////Prompt the user for a number
 //Function to count the number of positive even numbers



//const n = parseInt(prompt("Enter a number:"));

//let count = 0;

//for (let i = 0; i <= n; i++) {
  //if (i % 2 === 0 && i > 0) {
    //count++;
 // }
//}

//console.log(`The number of positive even numbers from 0 to ${n} is: ${count}`);

// Function to check if a number is prime
//function isPrime(number) {
    //if (number <= 1) {
     // return false;
    //}
    //if (number <= 3) {
     // return true;
   // }
    
    //if (number % 2 === 0 || number % 3 === 0) {
    //  return false;
    //}
    
    //for (let i = 5; i * i <= number; i += 6) {
     // if (number % i === 0 || number % (i + 2) === 0) {
      //  return false;
      //}
  //  }
    
   // return true;
  //}
  
  //const n = parseInt(prompt("Enter a number:"));
  
  //if (isPrime(n)) {
   // console.log(`${n} is a prime number.`);
  //} else {
//console.log(`${n} is not a prime number.`);
  //}

  <!DOCTYPE html>
<html>
<head>
    <title>Reverse Username</title>
</head>
<body>
    <h1>Reverse Username</h1>
    <label for="username">Enter your username:</label>
    <input type="text" id="usernameInput">
    <button onclick="reverseUsername()">Reverse</button>
    <p id="output"></p>

    <script>
        function reverseUsername() {
            // Get the username input value
            const username = document.getElementById('usernameInput').value;

            // Reverse the username character by character
            const reversedUsername = username.split('').reverse().join('');

            // Display the reversed username
            document.getElementById('output').textContent = "Reversed Username: " + reversedUsername;
        }
    </script>
</body>
</html>

  
