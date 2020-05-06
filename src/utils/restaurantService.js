const BASE_URL = '/api/restaurants/';

function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Something Went Wrong');
    })
}

export default {
    create
};