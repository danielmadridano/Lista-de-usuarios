const table = document.getElementById('table')
const tooltip = document.getElementById('tooltip')
const selectedUser = document.getElementById('user')
const usersURL = 'https://reqres.in/api/users'
let usersData

fetch(usersURL)
  .then(res => res.json())
  .then(data => {
    usersData = data.data
    for (let i = 0; i < usersData.length; i++) {
      table.innerHTML += `<tr class='users' onclick='showUserImage(usersData[${i}])'>
        <td>${usersData[i].id}</td>
        <td>${usersData[i].first_name}</td>
        <td>${usersData[i].last_name}</td>
        <td>${usersData[i].email}</td>
      </tr>`
    }
  })
 
function showUserImage(user) {
  selectedUser.style.opacity = 1
  selectedUser.innerHTML = `
      <img src='${user.avatar}' alt='${user.first_name} ${user.last_name}'>
      <p>Nombre: ${user.first_name}</p>
      <p>Apellido: ${user.last_name}</p>
      <p>Email: ${user.email}</p>
    `
}

table.addEventListener('mousemove', (event) => {
  tooltip.style.opacity = 1
  tooltip.innerHTML = '<p>Haga click para ver el usuario de manera detallada</p>'
  tooltip.style.left = `${event.pageX + 7}px`
  tooltip.style.top = `${event.pageY - 15}px`
})

table.addEventListener('mouseout', () => {tooltip.style.opacity = 0})