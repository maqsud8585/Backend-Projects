const fs = require("fs");

fs.writeFile("Newmessage.txt","Hello! World form Nodejs",(err) => {
    if (err) throw err;
    console.log("The file has been saved");
});

fs.readFile("./Newmessage.txt", "utf8", (err, data) => {
if (err) throw err;
console.log(data);}
);