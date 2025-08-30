const fs = require('fs')
const path = require('path')

// define a foldedr and file path
const folderPath = path.join(__dirname,'studentsFolder')
const filePath = path.join(folderPath, 'studentsLists.pdf')

//create a directory if it doesnt exists 
if(!fs.existsSync(folderPath)){
    // create the folder
    fs.mkdirSync(folderPath)
    console.log('Folder created')
}

// create and write to a file
fs.writeFileSync(filePath,'Lists of students')
