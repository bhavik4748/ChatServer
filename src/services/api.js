const api = {}

api.url = "http://localhost:8080/api/";

api.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
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


export default api;
