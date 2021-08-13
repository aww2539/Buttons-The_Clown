import { ServiceForm } from "./Form.js"
import { Requests } from "./Requests.js"


export const ButtonsTheClown = () => {
    return `
        <h1>Clown Rental Service</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>
        <section class="serviceRequests">
            <h2>Rental Request</h2>
            ${Requests()}
        </section>
    `
}