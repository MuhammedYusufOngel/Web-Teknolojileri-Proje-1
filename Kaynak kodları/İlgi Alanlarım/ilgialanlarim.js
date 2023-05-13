const url = 'https://ergast.com/api/f1/'


document.getElementById("ilgiAlanlarim").onclick = function () {
    let query = `https://ergast.com/api/f1/2013/driverstandings.json`
    fetch(query)
    .then(result => {
        return result.json()
    })
    .then (displayResult)
}

const displayResult = (result) => {
    console.log(result)
    let driver = document.querySelector('.driver')
    driver.innerHTML = `${result.MRData.StandingsTable.StandingsLists.at(0).DriverStandings.at(0).Driver.familyName}, ${result.MRData.StandingsTable.StandingsLists.at(0).DriverStandings.at(0).Driver.givenName}`

}