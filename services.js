
const urls = {
    usersMainUrl: "https://randomuser.me/api/?results=",
    countriesUrl: "https://restcountries.eu/rest/v2/",

}
async function getUsers(numberOfUsers) {
    try {
        const users = await $.ajax({
            url: `${urls.usersMainUrl}${numberOfUsers}`,
            method: "GET"
        })
        return users.results;
    }
    catch (err) {
        alert(err.message)
    }
}

async function getAllCountries() {
    try {
        const countries = await $.ajax({
            url: `${urls.countriesUrl}all`,
            method: "GET"
        })
        // const higher = countries.filter(country => {
        //     return country.population > 5000
        // })
        // const result = countries.map((country) => {
        //     const { name, flag } = country
        //     return { [name]: flag }
        // });
        // const israelFlag = result.find(country=>{
        //     return country["Israel"]
        // })
        const result = countries.reduce((obj, country) => {
            const { name, flag } = country
            return { ...obj, [name]: flag }
        }, {})
        return result
    }
    catch (err) {
        alert(err.message)
    }
}

// const test = [1, 5, 8, 9, 6, 3, 1, 5, 6, 8, 9, 5, 56, 6]
// const result = test.reduce((sum, currentNumber) => {
//     return sum + currentNumber
// }, 0)




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
