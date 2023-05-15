const url = 'https://ergast.com/api/f1/2013/driverstandings.json'

let pos = document.querySelector('.pos')
let driver = document.querySelector('.driver')
let skor = document.querySelector('.point')
let constructor = document.querySelector('.constructor')

const displayStandings = (standings) => {

    console.log(standings)

    for (i = 0; i < 23; i++) {
        driver.innerHTML += `${standings.MRData.StandingsTable.StandingsLists.at(0).DriverStandings.at(i).Driver.givenName} ${standings.MRData.StandingsTable.StandingsLists.at(0).DriverStandings.at(i).Driver.familyName}<br>`
        constructor.innerHTML += `${standings.MRData.StandingsTable.StandingsLists.at(0).DriverStandings.at(i).Constructors.at(0).name}<br>`
        skor.innerHTML += `${standings.MRData.StandingsTable.StandingsLists.at(0).DriverStandings.at(i).points}<br>`
    }

}

let query = url
fetch(query)
.then(result => {
    return result.json()          
})
.then(displayStandings)


