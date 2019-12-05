var database=[{

username :"akhilnlb",
password :"Akhil0862!"

},
{

username :"Sashank",
password :"1243!"

},

{

username :"sahaj",
password :"1234!"

}

];

var newsfeed = [

{  
username:"akhilnlb",
timeline:"So tired from all that learning!"
},

{  
username:"Sashank",
timeline:"javascript is so cool!"
},

{  
username:"sahaj",
timeline:"javascript is preeetyy cool!"
}

];


var usernamePromt= prompt("What is ur username?");
var passwordPromt= prompt("What is ur password?");

function IsUsertrue(user,pass){
for (var i=0; i<database.length; i++)
	{
		if (user===database[0].username&&pass===database[0].password)
		{
			return true;
		} else return false;

}}
function SignIn(user,pass){

	
		if (IsUsertrue(user,pass))
		{
			console.log(newsfeed);
		}
		else {
			alert("Wrong username and password");
		}


}


SignIn(usernamePromt,passwordPromt);