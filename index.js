let users = [];
let countriesFlags = {}
// let usersLanguage = []
DOM = {};
const displayFunctions = {
    "table": drawRow,

};

(async function () {
    countriesFlags = await getAllCountries()
    console.log(countriesFlags)
    DOM.selectNumberOfUsers = document.getElementById("selectNumberOfUsers")
    let selectedNumber = getFromLocalStorage("selectedNumber")
    DOM.selectNumberOfUsers.value = selectedNumber
    users = await getUsers(selectedNumber)
    DOM.containerDiv = $('#containerDiv')
    DOM.tBody = $("#mainTbody")
    DOM.selectNumberOfUsers.addEventListener("change", async (e) => {
        const { value } = e.target
        users = await getUsers(value)
        saveToLocalStorage("selectedNumber", value)
        draw(users, DOM.tBody, "table")
    })
    draw(users, DOM.tBody, "table")

}())

function draw(data, container, displayType) {
    if (!Array.isArray(data)) return
    if (typeof container !== "object") return
    if (typeof displayType !== "string") return
    clearDom()
    const relevantFunction = displayFunctions[displayType]
    data.forEach(user => {
        container.append(relevantFunction(user))
    })
}

function clearDom() {
    DOM.tBody.html("")
}

function drawRow(userData) {
    const { gender, name, email, location } = userData
    const { first, last } = name
    const { city, country } = location
    const flag = countriesFlags[country] ? countriesFlags[country] : "./src/noImage.jpg"

    let mainTr = document.createElement('tr')
    DOM.tBody.append(mainTr)

    let mainTd = document.createElement('td')
    mainTd.innerHTML = first
    mainTr.append(mainTd)

    let mainTd1 = document.createElement('td')
    mainTd1.innerHTML = last
    mainTr.append(mainTd1)

    let mainTd2 = document.createElement('td')
    mainTd2.innerHTML = gender
    mainTr.append(mainTd2)

    let mainTd3 = document.createElement('td')
    mainTd3.innerHTML = email
    mainTr.append(mainTd3)

    let mainTd4 = document.createElement('td')
    mainTd4.innerHTML = city
    mainTr.append(mainTd4)

    let mainTd5 = document.createElement('td')
    mainTd5.innerHTML = country
    mainTr.append(mainTd5)

    let mainTd6 = document.createElement("td")
    mainTr.append(mainTd6)

    let countryFlag = document.createElement("img")
    countryFlag.src = flag
    countryFlag.style = "width:30px;height:30px"

    mainTd6.append(countryFlag)

    return mainTr
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key)
}
