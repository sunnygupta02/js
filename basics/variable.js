const accountId=12433
let accountEmail="sunnygupta@gmail.com"
var accountPassword="12345"
accountCity="delhi"
console.log(accountCity);
let accountState;
accountEmail="sunny@gmail.com";
accountPassword="234";
/*
prefer not to use var because of issue of block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountId,accountCity]);
console.log(accountState);