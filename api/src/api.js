const request = require("../utils/request.js")
const Request = require("../utils/class_request.js").Request

class api {
    #_token; #_version; #_apiUrl; #_base_params
    constructor({token, v = 3, url = "https://api.anilibria.tv/"}) {
        this.#_token = token;
        this.#_version = v;

        this.#_apiUrl = url + `v${v}/`;
        this.#_base_params = ``
    } 
    dev_utils = {
        test: async () => {
            let s = new Request({
                url: this.#_apiUrl, 
                //typeOfRequest = "GET" str | and standart its get!
                method: "title",
                args: {id, code, torrent_id, filter, remove, include, description_type, playlist_type}
                })
            return await s.dealRequest()
        }
    }

    title = {
        title: async ({id, code, torrent_id, filter, remove, include, description_type, playlist_type}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                //typeOfRequest = "GET" str | and standart its get!
                method: "title",
                args: {id, code, torrent_id, filter, remove, include, description_type, playlist_type}
                })
            return await s.dealRequest()
        },
        list: async (id) => {
            
        },
        updates: async (id) => {
            
        },
        changes: async (id) => {
            
        },
        schedule: async (id) => {
            
        },
        random: async (id) => {
            
        },
        search: async (id) => {
            
        },
        search_advanced: async (id) => {
            
        },
        franchises: async (id) => {
            
        }
    }

    franchise = {
        list: async () => {
            
        }
    }

    torrent = {
        seed_stats: async () => {

        },
        rss: async () => {

        },
    }

    // User ... 
    user = {
        get: async () => {

        },
        // get  |  put  |  delete ...
        favorites: async () => {

        },
    }

    async youtube(){}

    async feed(){}

    async years(){}

    async genres(){}

    async team(){}
}

module.exports = { api, request }