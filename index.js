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
  const roster = document.createElement('h3')
  roster.id ="ROSTER"
  // const playerNames = document.createElement('p')
  // playerNames.id = "PLAYERS"
  body.append(header,west,east, roster)
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
  westTeams.addEventListener('click', teamButtonClicker)
  const eastTeams = document.createElement('div')
  eastTeams.addEventListener('click', teamButtonClicker)
  if (info.team.conference === 'West'){
    westTeams.textContent = info.team.full_name}else{
      eastTeams.textContent = info.team.full_name}
  west.append(westTeams)
  east.append(eastTeams)
  // westTeams.className = "western"
  }
  

// const teamButtonClicker = () => {
// btn = document.querySelector('.western');
// btn.addEventListener("click", myFunc);
// }


const renderPlayerNames = (info) => {
  const roster = document.querySelector('#ROSTER')
  const playerNames = document.createElement('div')
  playerNames.textContent = info.first_name + " " + info.last_name
  roster.append(playerNames) 
  console.log(info.first_name + " " + info.last_name)
}

const teamButtonClicker = info => {
  console.log('hello');
  fetch(`https://www.balldontlie.io/api/v1/players?per_page=25`)
  .then(res=>res.json())
  .then(data=>data.data.forEach(renderPlayerNames))


}
