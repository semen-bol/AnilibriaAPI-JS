const req = require("./request.js")

// ***
// ru - вы можете брать данный файл как пример/просто брать и юзать, но оставльйте авторство в начале файлика
// en - u can grab this file for example or work with him but type my name as author
// ***
// By sbolandr (Semen Bolotov)
// ***

class request {
    #_typeOfRequest;
    constructor({args = {}, method = "", url = "", typeOfRequest = "GET"}) {
        this.args = args
        this.method = method
        this.prompt = ""

        this.url = url
        this.#_typeOfRequest = typeOfRequest
    }
    
    async dealRequest(){
        await this._validateArgs() // validate args for prompt ( "?code=1&title=1" )
        return await this._dealRequest(this.args, this.method, this.url, this.#_typeOfRequest)
    }

    async _dealRequest(args, method, url, typeOfRequest){
        if(typeOfRequest == "GET"){
            return await req.getReq(url, method, args)
        } else {
            return "Unknown method of type request!"
        }
    }

    async _validateArgs(){
        let first = await this._getNameOfArgs(this.args)
        let second = await this._getValuesOfArgs(this.args)
        let prompt = ``

        for(let i = 0; i < first.length; i++){
            if(first.length == 0) break;

            if(i == 0){
                prompt += `?${first[i]}=${second[first[i]]}`
            } else {
                prompt += `&${first[i]}=${second[first[i]]}`
            }
        }

        this.args = prompt; 
        console.log(this.args)
    }

    async _getNameOfArgs(obj){
        return Object.keys(obj).filter(key => obj[key] !== undefined);
    }

    async _getValuesOfArgs(obj){
        return Object.fromEntries(
            Object.entries(obj).filter(([_, value]) => value !== undefined)
        );
    }
}

module.exports = {
    Request: request
}