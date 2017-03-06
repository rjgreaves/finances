export function createLink({ topicId, url, description }) {
    return fetch(`http://localhost:3000/api/topics/${topicId}/links`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url,
            description,
            topicId,
        }),
    }).then(response => response.json());
}

export function loginOLD(email, password) {
    return fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    }).then(response => response.json());
}

export function login(email, password) {

    let config = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${email}&password=${password}`
    }

    return fetch('http://localhost:3000/api/login', config)
        .then(response => response.json());
}