document.addEventListener('DOMContentLoaded',()=>{
  getInfo()
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

const getInfo = () =>{
  // for(let i = 0; i < 36; i++)
  fetch(`https://www.balldontlie.io/api/v1/players?per_page=25`)
  .then(res=>res.json())
  .then(data=>data.data.forEach(createTable))
}

const createTable = info =>{
  const west = document.querySelector('#WEST')
  const east = document.querySelector('#EAST')
  const westTeams = document.createElement('div')
  const eastTeams = document.createElement('div')
  if (info.team.conference === 'West'){
    westTeams.textContent = info.team.full_name}else{
      eastTeams.textContent = info.team.full_name}
  west.append(westTeams)
  east.append(eastTeams)
  }