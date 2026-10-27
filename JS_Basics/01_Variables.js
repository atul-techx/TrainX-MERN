const accountId = 22112003;
let accountEmail = "atulgangwar@gmail.com"
var accountPassword = "112233"  // Prefer not to use var bacause of issue in block scope and functional scope
accountCity = "Bareilly"        // we should not declare variables in this type

console.log(accountId);

/*
accountId = 265693      // Not allowed -> We can not change the const variable

console.log(accountId);
*/

// we can change these variables -> let, var
accountEmail = "Gangwar@email.com"
accountPassword = "1212"
accountCity = "Rudrapur"

console.table([accountId, accountEmail, accountPassword, accountCity])
