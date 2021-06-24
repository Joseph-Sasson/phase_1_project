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
  main.append(header,west,east)
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
  const eastTeams = document.createElement('div')
  if (info.conference === 'West'){
    westTeams.textContent = info.full_name}
    else {eastTeams.textContent = info.full_name}
  west.append(westTeams)
  east.append(eastTeams)
  }