var fs = require("fs");
fs.readdir("D:/Software/Sysinternals", (err, files) => {
    console.log(files)
    if(files[0].endsWith("exe")){

    }
    files.sort().forEach(file =>{
        if(file.endsWith("exe")){
            console.log(file.replace('.exe',''))
        }
    })
    // console.log(files[0].endsWith("exe"))
});