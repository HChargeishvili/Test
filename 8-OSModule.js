const OS = require("os");

// Info about User
const User = OS.userInfo();
console.log(User);

// Method returns the system uptime in seconds
console.log(`The system uptime in seconds is ${OS.uptime()}`);

const CurrentOS = {
 Name: OS.type(),
 Release: OS.release(),
 TotalMemory: OS.totalmem(),
 FreeMemory: OS.freemem(),
};

console.log(CurrentOS);
