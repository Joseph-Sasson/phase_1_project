document.addEventListener('DOMContentLoaded',()=>{
  getTeamNames()
  const body = document.querySelector('body')
  const header = document.createElement('h1')
  header.textContent = 'My Player Profile'
  const west = document.createElement('h1')
  west.id = 'WEST'
  west.textContent = 'West'
  const east = document.createElement('h1')
  east.id = 'EAST'
  east.textContent = 'East'
  body.append(header,west,east)
})

const getTeamNames = () =>{
  fetch(`https://www.balldontlie.io/api/v1/teams`)
  .then(res=>res.json())
  .then(data=>data.data.forEach(createTable))
}

const createTable = info =>{
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
