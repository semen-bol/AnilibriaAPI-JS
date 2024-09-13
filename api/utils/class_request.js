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
            await this.validateArgs()

            let s = await req.getReq(url, method, args)

            return s
        } else {
            return "Unknown method of type request!"
        }
    }

    async validateArgs(){
        let first = await this.getNameOfArgs(this.args)
        let second = await this.getValuesOfArgs(this.args)

        let prompt = ``

        for(let i = 0; i < first.length; i++){
            prompt += `&${first[i]}=${second[first[i]]}`
        }
        this.args = prompt
    }

    async getNameOfArgs(obj){
        return Object.keys(obj).filter(key => obj[key] !== undefined);
    }

    async getValuesOfArgs(obj){
        return Object.fromEntries(
            Object.entries(obj).filter(([_, value]) => value !== undefined)
        );
    }
}

module.exports = {
    Request: request
}