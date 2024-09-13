/*
/ 100% javascript. Made with Love 
/ Axios module :D
/ u can grab this module for your targets...
/ 100% javascript. Made with Love 
*/

const axios = require("axios")

headers = {
    timeout: 1000 * 2,
    "Content-Type": "application/json",
    validateStatus: status => (status >= 200 && status < 500)
}

// f to testReq  :(

async function getReq (url, method, params){ 
    let newUrl = url + method + params

    let request = await axios.get(newUrl, headers)
    let data = request.data

    if(request.status == 200){
        return data
    } else if(data.error){
        return data.error
    } else {
        return data
    }
}

// f to postReq

module.exports = { 
    //testReq: testReq, dont touch me!
    getReq: getReq, 
    //postReq: postReq dont touch me!
}