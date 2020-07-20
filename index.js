let users = [];
// let usersLanguage = []
DOM = {};
const displayFunctions = {
    "table": drawRow,

};

(async function () {
    users = await getAllUsers()
    // usersLanguage = await getUsersLanguage()
    DOM.containerDiv = $('#containerDiv')
    DOM.tBody = $("#mainTbody")
    console.log(users)
    // console.log(usersLanguage)
    draw(users, DOM.tBody, "table")

}())

function draw(data, container, displayType) {
    if (!Array.isArray(data)) return
    if (typeof container !== "object") return
    if (typeof displayType !== "string") return
    const relevantFunction = displayFunctions[displayType]
    data.forEach(user => {
        container.append(relevantFunction(user))
    })

}

function drawRow(userData) {
    const { gender, name, email, location } = userData
    const { first, last } = name
    const { city, country } = location



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


    return mainTr
}


// <tr>
//     <td>user.name</td>
//     <td>user.lastName</td>
//     <td>user.gender</td>
// </tr>

