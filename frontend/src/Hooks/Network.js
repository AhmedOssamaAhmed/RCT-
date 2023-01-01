import axios from "axios";

let url = "http://172.20.10.7/code/rct/";

function post(route, data, headers, callback){
  axios.post(url+route, data, {'headers': headers}).then((response) =>{callback(response);});
}

function get(route, headers, callback){
  axios.get(url+route,{'headers': headers}).then((response) =>{callback(response);});
}

export {post, get};
