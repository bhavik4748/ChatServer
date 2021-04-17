const api = {}

api.url = "http://localhost:8080/api/";

api.headers = {
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/vnd.guidepoint.app+json'
    },
    'method': 'GET'
}

api.postHeaders = {
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/vnd.guidepoint.app+json'
    },
    'method': 'POST'
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

api.postRoomMessages = async (roomId, user, message) => {
    try {
        let data = new URLSearchParams();
        data.append('name', user);
        data.append('message', message);
        api.postHeaders['body'] = data;
        const res = await fetch(`${api.url}rooms/${roomId}/messages`, api.postHeaders);
        const result = await res.json();
        return result;
    } catch (err) {
        console.error(err);
        throw (err);
    }
}

export default api;
