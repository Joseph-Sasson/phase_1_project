document.addEventListener('DOMContentLoaded',()=>{
  getInfo()
})

const getInfo = () =>{
  fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
  .then(res=>res.json())
  .then(data=>data.data.forEach(createTable))
}

const createTable = info =>{
  const body = document.querySelector('body')
  const div = document.createElement('div')
  div.id = 'table-div'
  const table = document.createElement('table')
  const tableHeader = document.createElement('thead')
  const row = document.createElement('tr')
  const name = document.createElement('td')
  name.textContent = info.first_name + ' ' + info.last_name
  const team = document.createElement('td')
  team.textContent = info.team.full_name
  row.append(name,team)
  tableHeader.append(row)
  table.append(tableHeader)
  div.append(table)
  body.append(div)
}

