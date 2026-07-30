const accountId = 123456
let accountemail = "rishav@gmail.com";
var accountPassword = "123456";
accountcity="Delhi";
 
// accountId = 789012; // This will throw an error because accountId is a constant
console.log(accountId); // This will log 123456
accountemail = "hc@domain.com"; // This will update the value of accountemail
accountPassword= "newpassword"; // This will update the value of accountPassword
accountcity="Mumbai"; // This will update the value of accountcity
console.table([  accountemail, accountPassword, accountcity ]); // This will log the updated values of the variables
// Note: The use of var is generally discouraged in modern JavaScript due to its function-scoped nature and potential for hoisting issues. It's recommended to use let or const instead.

