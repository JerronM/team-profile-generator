const generateHTML = function (teamstr) {

    console.log("Inside gen html");
    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <style>
   body {
    background-image: linear-gradient(120deg, #ff4576, #f5a30c);
    background-size: 100% 100%;
    color: #black;
    font-family: "Raleway", sans-serif;
    min-height: 100vh;
   }

   .header {
        min-height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Raleway", sans-serif;
   }

   .container-body {
       display: flex;
       justify-content: space-evenly;
   }

   .card {
       background-color:rgb(255, 255, 255);
       margin-top: 4%;
       border: solid black;
       font-size: x-large;
       color: black;
       box-shadow: 5px 10px;

   }
   .card-header{
       margin: 10%;
   }
   .card-body{
       margin: 5%;
       color: black;
   }
</style>

</head>

<body>
<div class=header>
   <h1> My Team </h1>
</div>
<div class="container-body">

     ${teamstr} 

     </div>
</body>

</html>`

}

//arr is the employee object and looking for the properties in that class
const generateCard = function (arr) {
    //if else statement
    let roleInfo;

    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInfo = `Github Username: ${arr.github}`
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${arr.name}</h2>  
<h2><i class="far fa-user"></i> ${arr.title}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${arr.id}</li>
    <li>Email: ${arr.email}</li>
    <li>${roleInfo} </li>
</ul>
</div>
</div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;