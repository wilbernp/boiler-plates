const { Router } = require("express");
const { readdir } = require("fs/promises")

const router = Router()

function removeExtension(fileName){
    return fileName.split(".")[0]
}

async function generateFiles() {
    try {
        let files = await readdir(__dirname)
        
        files.forEach(file => {
            const removedExt = removeExtension(file)
            const skype = ["index"].includes(removedExt)
            if (!skype) {
                router.use(`/${removedExt}`, require(`./${file}`))
            }
        })
    } catch (error) {
        console.log(error)
    }

}

generateFiles()

module.exports = router