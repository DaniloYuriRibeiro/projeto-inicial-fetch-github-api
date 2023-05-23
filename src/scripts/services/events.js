import { baseUrl, eventsQuantity } from "/src/scripts/variables.js"

async function getEventUser(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { getEventUser }