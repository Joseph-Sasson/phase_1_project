document.addEventListener('DOMContentLoaded',()=>{
  const body = document.querySelector('body')
  const header = document.createElement('h1')
  header.id = 'NBA'
  header.textContent = 'NBA Team Profile'
  header.style.display = 'none'
  body.append(header)
  getInfo()
})

let allPlayers = []
let teams = []

const getInfo = () =>{
  for(let i = 0; i < 36; i++)
  fetch(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`)
  .then(res=>res.json())
  .then(data=>{
    allPlayers = [...allPlayers, ...data.data]})
}

const renderPlayers = () =>{
  const loading = document.querySelector('#loading')
  loading.style.display = 'none'
  const header = document.querySelector('#NBA')
  header.style.display = 'block'
  const main = document.querySelector('#main')
  main.style.display = 'block'
  let allTeams = allPlayers.map(player=>player.team)
  allTeams.forEach(team=>{
    if (!teams.filter(t => t.id === team.id).length > 0){teams.push(team)}
  })
  createTable(teams)
}

setTimeout(renderPlayers,1500)

const createTable = info =>{
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
  atlantic.id = 'atl'
  const central = document.createElement('td')
  central.textContent = 'CENTRAL'
  central.id = 'cen'
  const southeast = document.createElement('td')
  southeast.textContent = 'SOUTHEAST'
  southeast.id = 'sea'
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
  northwest.id = 'nor'
  const pacific = document.createElement('td')
  pacific.textContent = 'PACIFIC'
  pacific.id = 'pac'
  const southwest = document.createElement('td')
  southwest.textContent = 'SOUTHWEST'
  southwest.id = 'swe'
  westDivisionRow.append(northwest,pacific,southwest)
  westBody.append(westDivisionRow)
  table.append(eastHead,eastBody,westHead,westBody)
  body.append(table)
  teams.forEach(getTableInfo)
}

const getTableInfo = info =>{
  const atlantic = document.querySelector('#atl')
  const atlanticTeamRow = document.createElement('tr')
  const atlanticTeams = document.createElement('td')
  if(info.division === 'Atlantic'){atlanticTeams.textContent = info.full_name}
  atlanticTeamRow.append(atlanticTeams)
  atlantic.append(atlanticTeamRow)
  const central = document.querySelector('#cen')
  const centralTeamRow = document.createElement('tr')
  const centralTeams = document.createElement('td')
  if (info.division === 'Central'){centralTeams.textContent = info.full_name}
  centralTeamRow.append(centralTeams)
  central.append(centralTeamRow)
  const southeast = document.querySelector('#sea')
  const southeastTeamRow = document.createElement('tr')
  const southeastTeams = document.createElement('td')
  if (info.division === 'Southeast'){southeastTeams.textContent = info.full_name}
  southeastTeamRow.append(southeastTeams)
  southeast.append(southeastTeamRow)
  const northwest = document.querySelector('#nor')
  const northwestTeamRow = document.createElement('tr')
  const northwestTeams = document.createElement('td')
  if (info.division === 'Northwest'){northwestTeams.textContent = info.full_name}
  northwestTeamRow.append(northwestTeams)
  northwest.append(northwestTeamRow)
  const pacific = document.querySelector('#pac')
  const pacificTeamRow = document.createElement('tr')
  const pacificTeams = document.createElement('td')
  if (info.division === 'Pacific'){pacificTeams.textContent = info.full_name}
  pacificTeamRow.append(pacificTeams)
  pacific.append(pacificTeamRow)
  const southwest = document.querySelector('#swe')
  const southwestTeamRow = document.createElement('tr')
  const southwestTeams = document.createElement('td')
  if (info.division === 'Southwest'){southwestTeams.textContent = info.full_name}
  southwestTeamRow.append(southwestTeams)
  southwest.append(southwestTeamRow)
  if (atlanticTeamRow.textContent === ''){atlanticTeamRow.remove()}
  if (centralTeamRow.textContent === ''){centralTeamRow.remove()}
  if (southeastTeamRow.textContent === ''){southeastTeamRow.remove()}
  if (northwestTeamRow.textContent === ''){northwestTeamRow.remove()}
  if (pacificTeamRow.textContent === ''){pacificTeamRow.remove()}
  if (southwestTeamRow.textContent === ''){southwestTeamRow.remove()}

}

const renderPlayerNames = info => {
  const west = document.querySelector('#WEST')
  west.style.display = 'none'
  const east = document.querySelector('#EAST')
  east.style.display = 'none'
  const roster = document.querySelector('#ROSTER')
  roster.style.display = 'block'
  const playerNames = document.createElement('div')
  playerNames.textContent = info.first_name + " " + info.last_name
  roster.append(playerNames) 
}