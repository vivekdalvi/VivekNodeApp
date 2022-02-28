const fs = require('fs');


class FileStorage {

    constructor(filepath) {
        this.FilePath = filepath;
    }

    async ReadFile() {
        try {
            const data = await fs.promises.readFile(this.FilePath, { encoding: 'utf-8', });
            //console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async WriteFile(entry) {
        try {
            await fs.promises.appendFile(this.FilePath, entry + "\n");
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = FileStorage;