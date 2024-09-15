const request = require("../utils/request.js")
const Request = require("../utils/class_request.js").Request

// ***********
// Можете не смотреть, все равно тут ничего не понятно ... ))))))
// lol
// ***********

class anilibria {
    #_token; #_apiUrl; #_base_params
    constructor({token, //v = 3 | currently is not supported old versions  |  i mne kstati pizdec kak lenb
        url = "https://api.anilibria.tv/"}) {

        this.#_token = token;
        this.version = 3;

        this.#_apiUrl = url + `v${this.version}/`;
        this.#_base_params = ``
    } 
    _dev_utils = {
        test: async ({id, code, torrent_id, filter, remove, include, description_type, playlist_type}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                //typeOfRequest = "GET" str | and standart = get!
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
                method: "title",
                args: {id, code, torrent_id, filter, remove, include, description_type, playlist_type}
                })
            return await s.dealRequest()
        },
        list: async ({id_list, code_list, torrent_id_list, filter, remove, include, description_type, playlist_type, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/list",
                args: {id_list, code_list, torrent_id_list, filter, remove, include, description_type, playlist_type, page, items_per_page}
                })
            return await s.dealRequest()
        },
        updates: async ({filter, remove, include, limit, since, description_type, playlist_type, after, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/updates",
                args: {filter, remove, include, limit, since, description_type, playlist_type, after, page, items_per_page}
                })
            return await s.dealRequest()
        },
        changes: async ({filter, remove, include, limit, since, description_type, playlist_type, after, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/changes",
                args: {filter, remove, include, limit, since, description_type, playlist_type, after, page, items_per_page}
                })
            return await s.dealRequest()
        },
        schedule: async ({filter, remove, include, days, description_type, playlist_type}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/schedule",
                args: {filter, remove, include, days, description_type, playlist_type}
                })
            return await s.dealRequest()
        },
        random: async ({filter, remove, include, description_type, playlist_type}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/random",
                args: {filter, remove, include, description_type, playlist_type}
                })
            return await s.dealRequest()
        },
        search: async ({search, year, type, season_code, genres, team, voice, translator, editing, decor, timing, filter, remove, include, description_type, playlist_type, limit, after, order_by, sort_direction, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/search",
                args: {search, year, type, season_code, genres, team, voice, translator, editing, decor, timing, filter, remove, include, description_type, playlist_type, limit, after, order_by, sort_direction, page, items_per_page}
                })
            return await s.dealRequest()
        },
        search_advanced: async ({query, simple_query, filter, remove, include, description_type, playlist_type, limit, after, order_by, sort_direction, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/search/advanced",
                args: {query, simple_query, filter, remove, include, description_type, playlist_type, limit, after, order_by, sort_direction, page, items_per_page}
                })
            return await s.dealRequest()
        },
        franchises: async ({id, filter, remove}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "title/franchises",
                args: {id, filter, remove}
                })
            return await s.dealRequest()
        }
    }

    franchise = {
        list: async ({filter, remove, limit, after, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "franchise/list",
                args: {filter, remove, limit, after, page, items_per_page}
                })
            return await s.dealRequest()
        }
    }

    torrent = {
        seed_stats: async ({users, filter, remove, limit, after, sort_by, order, page, items_per_page}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "torrent/seed_stats",
                args: {users, filter, remove, limit, after, sort_by, order, page, items_per_page}
                })
            return await s.dealRequest()
        },
        rss: async ({rss_type, session, limit, since, after}) => {
            let s = new Request({
                url: this.#_apiUrl, 
                method: "torrent/rss",
                args: {rss_type, session, limit, since, after}
            })
            return await s.dealRequest()
        },
    }

    // User ... 
    /*user = {
        get: async () => {

        },
        // get  |  put  |  delete ...
        favorites: async () => {

        },
    } */ // user auth is going to hell ( not working on site and nothing in docs v3 )

    async youtube({filter, remove, limit, since, after, page, items_per_page}){
        let s = new Request({
            url: this.#_apiUrl, 
            method: "youtube",
            args: {filter, remove, limit, since, after, page, items_per_page}
            })
        return await s.dealRequest()
    }

    async feed({filter, remove, include, limit, since, description_type, playlist_type, after, page, items_per_page}){
        let s = new Request({
            url: this.#_apiUrl, 
            method: "feed",
            args: {filter, remove, include, limit, since, description_type, playlist_type, after, page, items_per_page}
            })
        return await s.dealRequest()
    }

    async years({ _NO_ARGS_ }){
        let s = new Request({
            url: this.#_apiUrl, 
            method: "years",
            args: {}
            })
        return await s.dealRequest()
    }

    async genres({ _NO_ARGS_ }){
        let s = new Request({
            url: this.#_apiUrl, 
            method: "genres",
            args: {}
            })
        return await s.dealRequest()
    }

    async team({ _NO_ARGS_ }){
        let s = new Request({
            url: this.#_apiUrl, 
            method: "team",
            args: {}
            })
        return await s.dealRequest()
    }
}

module.exports = { anilibria, request }
