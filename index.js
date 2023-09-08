const fs = require('fs').promises;

const fileName = process.env.npm_config_fileName;
const packageJsonPath= "./package.json";

async function updateProject() {
    try {
        const data = await fs.readFile(packageJsonPath, "utf8");
        const packageJsonData = JSON.parse(data);
        
        if (fileName === undefined) {
            console.log("Current Project file is: &{packageJsonData.currentProject}");
            console.log("Please use --fileName= flag to change the project.");
        }
        else {
            packageJsonData.currentProject = fileName;
            packageJsonData.scripts.start = "tsc --outDir dist/  ./src/" + fileName + ".ts && node ./dist/" + fileName + ".js";
        
            fs.writeFile(packageJsonPath, JSON.stringify(packageJsonData, null, 2));
    
            console.log("Project File has been updated!");
            console.log("To run the project use 'npm run start'");
        }
    }
    catch (err) {
        console.log("Cannot handle the operation:&{err}");
    }
}

updateProject();