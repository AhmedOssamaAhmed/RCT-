import axios from "axios";

let url = "http://localhost/code/rct/";

function post(route, data, headers, callback){
  axios.post(url+route, data, {'headers': headers}).then((response) =>{callback(response);});
}

function get(route, headers, callback){
  axios.get(url+route,{'headers': headers}).then((response) =>{callback(response);});
}

export {post, get};
