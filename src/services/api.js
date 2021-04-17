const api = {}

api.url = "http://localhost:8080/api/";

api.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

api.postHeaders={
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'method':'POST'
}

api.getRooms = async () => {
    try {
        const res = await fetch(`${api.url}rooms`, api.headers);
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
        throw (err);
    }
}

api.getRoomDetails = async (id) => {
    try {
        const res = await fetch(`${api.url}rooms/${id}`, api.headers);
        const result = await res.json();
      //  api.postRoomMessages();
        return result;
    } catch (err) {
        console.log(err);
        throw (err);
    }
}


api.getRoomMessages = async (id) => {
    try {
        const res = await fetch(`${api.url}rooms/${id}/messages`, api.headers);
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
        throw (err);
    }
}

api.postRoomMessages = async () => {
    try {
        let obj = {};
        obj['name']='aaaa';
        obj['message']= 'this is test message';
        api.postHeaders['body']= JSON.stringify(obj);
        const res = await fetch(`${api.url}rooms/0/messages`, api.postHeaders);
        const result = await res.json();
        console.log('post', result);
        return result;
    } catch (err) {
        console.log(err);
        console.log('post', err);
        throw (err);
    }
}



export default api;
