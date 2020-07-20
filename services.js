const mainUrl = "https://randomuser.me/api/?results=50"
async function getAllUsers() {
    try {
        const users = await $.ajax({
            url: `${mainUrl}`,
            method: "GET"
        })
        return users.results;
    }
    catch (err) {
        alert(err.message)
    }

}



// async function getUsersLanguage() {
//     try {
//         const language = await $.ajax({
//             url: "https://restcountries.eu/rest/v2/lang/es",
//             method: "GET"
//         })
//         return language;
//     }
//     catch (err) {
//         alert(err.message)
//     }

// }
