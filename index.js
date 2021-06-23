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
    westTeams.textContent = info.team.full_name}else
    if (info.team.conference === 'East'){
      eastTeams.textContent = info.team.full_name}
  west.append(westTeams)
  east.append(eastTeams)
  }
  // div.addEventListener('click',()=>playerInfo(info))
  // const table = document.createElement('table')
  // const tableHeader = document.createElement('thead')
  // const row = document.createElement('tr')
  // const name = document.createElement('td')
  // name.textContent = info.first_name + ' ' + info.last_name
  // name.addEventListener('click',()=>playerInfo(info))
  // const team = document.createElement('td')
  // team.textContent = info.team.full_name
  // row.append(name,team)
  // tableHeader.append(row)
  // table.append(tableHeader)
  // div.append(table)
  // body.append()
// }

const playerInfo = info =>{
  // console.log(info)
  const teams = document.querySelectorAll('div')
  if (teams.textContent === 'Indiana Pacers'){
    teams.textContent = ''
    teams.textContent = info.first_name + ' ' + info.last_name}else{return teams.textContent = ''}
  }