document.addEventListener('DOMContentLoaded',()=>{
const body = document.querySelector('body')
const header = document.createElement('h1')
header.textContent = 'NBA Team Profile'
body.append(header)
  getTable()
  getTeamNames()
})

const getTable = () =>{
  const body = document.querySelector('body')
  const table = document.createElement('table')
  const eastHead = document.createElement('thead')
  const eastHeadRow = document.createElement('tr')
  const eastName = document.createElement('th')
  eastName.textContent = 'EAST'
  eastHeadRow.append(eastName)
  eastHead.append(eastHeadRow)
  const eastBody = document.createElement('tbody')
  const eastDivisionRow = document.createElement('tr')
  const atlantic = document.createElement('td')
  atlantic.textContent = 'ATLANTIC'
  const central = document.createElement('td')
  central.textContent = 'CENTRAL'
  const southeast = document.createElement('td')
  southeast.textContent = 'SOUTHEAST'
  eastDivisionRow.append(atlantic,central,southeast)
  eastBody.append(eastDivisionRow)
  const westHead = document.createElement('thead')
  const westHeadRow = document.createElement('tr')
  const westName = document.createElement('th')
  westName.textContent = 'WEST'
  westHeadRow.append(westName)
  westHead.append(westHeadRow)
  const westBody = document.createElement('tbody')
  const westDivisionRow = document.createElement('tr')
  const northwest = document.createElement('td')
  northwest.textContent = 'NORTHWEST'
  const pacific = document.createElement('td')
  pacific.textContent = 'PACIFIC'
  const southwest = document.createElement('td')
  southwest.textContent = 'SOUTHWEST'
  westDivisionRow.append(northwest,pacific,southwest)
  westBody.append(westDivisionRow)
  table.append(eastHead,eastBody,westHead,westBody)
  body.append(table)
}

const getTeamNames = () =>{
  fetch(`https://www.balldontlie.io/api/v1/teams`)
  .then(res=>res.json())
  .then(info=>info.data.forEach(renderNames))
}

const renderNames = info =>{
  const conference = info.conference
  const teamName = info.full_name
  const west = document.querySelector('#WEST')
  const east = document.querySelector('#EAST')
  const westTeams = document.createElement('div')
  const eastTeams = document.createElement('div')
  if (conference === 'West'){
    westTeams.textContent = teamName}else
      {eastTeams.textContent = teamName}
  west.append(westTeams)
  east.append(eastTeams)
  if (westTeams.textContent === ''){westTeams.remove()}
  if (eastTeams.textContent === ''){eastTeams.remove()}
}


// const getTable = () =>{
  const body = document.querySelector('body')
  const header = document.createElement('h1')
  header.textContent = 'My Player Profile'
//   const west = document.createElement('h1')
//   west.id = 'WEST'
//   west.textContent = 'West'
//   const northwest = document.createElement('h6')
//   northwest.textContent = 'NORTHWEST'
//   const pacific = document.createElement('h6')
//   pacific.textContent='PACIFIC'
//   const southwest = document.createElement('h6')
//   southwest.textContent ='SOUTHWEST'
//   west.append(northwest,pacific,southwest)
//   const east = document.createElement('h1')
//   east.id = 'EAST'
//   east.textContent = 'East'
//   const atlantic = document.createElement('h6')
//   atlantic.textContent = 'ATLANTIC'
//   const central = document.createElement('h6')
//   central.textContent = 'CENTRAL'
//   const southeast = document.createElement('h6')
//   southeast.textContent = 'SOUTHEAST'
//   east.append(atlantic,central,southeast)
//   body.append(header,west,east)
// }