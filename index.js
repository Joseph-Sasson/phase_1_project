document.addEventListener('DOMContentLoaded',()=>{
  getInfo()
  const main = document.querySelector('#main')
  const header = document.createElement('h1')
  header.textContent = 'My Player Profile'
  const west = document.createElement('h1')
  west.id = 'WEST'
  west.textContent = 'West'
  const east = document.createElement('h1')
  east.id = 'EAST'
  east.textContent = 'East'
  const roster = document.createElement('h3')
  roster.textContent = 'ROSTER'
  // roster.style.textDecoration = 'underline'
  roster.id ="ROSTER"
  roster.style.display = 'none'
  // const playerNames = document.createElement('p')
  // playerNames.id = "PLAYERS"
  main.append(header,west,east,roster)
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
  const main = document.querySelector('#main')
  const loading = document.querySelector('#loading')
  loading.style.display = 'none'
  main.style.display = 'block'
  let allTeams = allPlayers.map(player=>player.team)
  allTeams.forEach(team=>{
    if (!teams.filter(t => t.id === team.id).length > 0){teams.push(team)}
  })
  teams.forEach(createTable)
}

setTimeout(renderPlayers,1500)

const createTable = info =>{
  const west = document.querySelector('#WEST')
  const east = document.querySelector('#EAST')
  const westTeams = document.createElement('div')
  westTeams.addEventListener('click', () => allPlayers.forEach(renderPlayerNames))
  const eastTeams = document.createElement('div')
  eastTeams.addEventListener('click', () => allPlayers.forEach(renderPlayerNames))
  if (info.conference === 'West'){
    westTeams.textContent = info.full_name}
    else {eastTeams.textContent = info.full_name}
  west.append(westTeams)
  east.append(eastTeams)
  }

const renderPlayerNames = info => {
  // console.log(info)
  // console.log(info.first_name)
  const west = document.querySelector('#WEST')
  west.style.display = 'none'
  const east = document.querySelector('#EAST')
  east.style.display = 'none'
  const roster = document.querySelector('#ROSTER')
  roster.style.display = 'block'
  const playerNames = document.createElement('div')
  playerNames.textContent = info.first_name + " " + info.last_name
  roster.append(playerNames) 
  // console.log(info.first_name + " " + info.last_name)
}