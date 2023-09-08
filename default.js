const fs = require('fs').promises;

const packageJsonPath = "./package.json";

async function updateJSON(){
    try {
        const data = await fs.readFile(packageJsonPath, "utf8");
        const packageJsonData = JSON.parse(data);
        
        packageJsonData.currentProject = "index";
        packageJsonData.scripts.start = "tsc --outDir dist/  ./src/${fileName}.ts && node ./dist/${fileName}.js";
        
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJsonData, null, 2));

        console.log("package.json set to default!");
    }
    catch (err){
        console.error("Cannot handle the operation:&{err}");
    }
}

updateJSON();
