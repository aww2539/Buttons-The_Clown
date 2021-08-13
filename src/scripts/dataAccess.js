// ERD Link: https://dbdiagram.io/d/61168db02ecb310fc3caa201

const applicationState = {
    requests: []
}

const API = "http://localhost:8080"
const mainContainer = document.querySelector("#container")



export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            applicationState.requests = serviceRequests
        }
        )
    }


export const sendRequest = (userServiceRequest) => {
    const fetchOptions ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}
