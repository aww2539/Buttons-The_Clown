import { sendRequest } from "./dataAccess.js"


export const ServiceForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parentName">Parent Name</label>
    <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="childName">Child Name</label>
    <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="numOfChildren">Number of Children</label>
    <input type="text" name="numOfChildren" class="input" />
    </div>
    <div class="field">
    <label class="label" for="rentalAddress">Address</label>
    <input type="text" name="rentalAddress" class="input" />
    </div>
    <div class="field">
    <label class="label" for="partyLength">Party Length (in hours)</label>
    <input type="number" name="partyLength" class="input" />
    </div>
    <div class="field">
    <label class="label" for="partyDate">Party Date</label>
    <input type="date" name="partyDate" class="input" />
    </div>
    
    <button class="button" id="submitRequest">Submit Request</button>
    `
    
    return html
}

const mainContainer = document.querySelector("#container")




mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumOfChildren = document.querySelector("input[name='numOfChildren']").value
        const userRentalAddress = document.querySelector("input[name='rentalAddress']").value
        const userPartyLength = document.querySelector("input[name='partyLength']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value


        const dataToSendToAPI = {
            parentName: userName,
            childName: userChildName,
            numOfChildren: parseInt(userNumOfChildren),
            address: userRentalAddress,
            partyLength: parseInt(userPartyLength),
            partyDate: userPartyDate
        }

        sendRequest(dataToSendToAPI)
    }
})