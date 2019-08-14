const api = process.env.REACT_APP_API;

let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllPortifolio = () =>
    fetch(`${api}/portfolio/`, {
        headers
    }).then(res => res.json());

export const postFramework = (entity) =>
    fetch(`${api}/portfolio/framework/`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entity)
    }).then(res => res.json());
