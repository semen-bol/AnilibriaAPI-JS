/*
/ 100% javascript. Made with Love 
/ Axios module :D
/ 100% javascript. Made with Love 
*/

const axios = require("axios")

headers = {
    "Content-Type": "application/json",
    validateStatus: status => (status >= 200 && status < 500)
}

// this a test req, may be need in tests....
async function testReq(url) {
    let request = await axios.get(url, headers)
    let data = request.data

    if(request.status == 200){
        return data
    } else if(data.error){
        return data.error
    } else {
        return data
    }
}

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

async function postReq (url, method, body){
    let newUrl = url + method

    let request = await axios.post(newUrl, body, headers)
    let data = request.data

    if(request.status == 200){
        return data.response
    } else if(data.error){
        return data.error
    } else {
        return data
    }
}

module.exports = { 
    testReq: testReq,
    getReq: getReq, 
    postReq: postReq }
