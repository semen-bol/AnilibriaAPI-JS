const { get } = require("https");
const req = require("./request.js")

class request {
    #_url; #_typeOfRequest 
    constructor({args = {}, method = "", url = "", typeOfRequest = "GET"}) {
        this.args = args
        this.method = method

        this.#_url = url
        this.#_typeOfRequest = typeOfRequest
    }
    
    async dealRequest(){
        return await this._dealRequest(this.args, this.method, this.#_url, this.#_typeOfRequest)
    }

    async _dealRequest(args, method, url, typeOfRequest){
        if(typeOfRequest == "GET"){
            await this._validateArgs() // validate args for prompt ( "?code=1&title=1" )
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
            prompt += `&${first[i]}=${second[first[i]]}`
        }

        this.args = prompt; return
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