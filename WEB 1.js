function toggleSections() {
  const sections = document.querySelector('.n-nav');
  sections.style.width = sections.style.width === '250px' ? '0' : '250px';
  const closeButton = document.getElementById('close');
  closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';
}
function toggleSection() {
  const sections = document.querySelector('.a-nav');
  sections.style.width = sections.style.width === '250px' ? '0' : '250px';
  const closeButton = document.getElementById('a-close');
  closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';
}
const username = localStorage.getItem('username');
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

document.getElementById('username').innerText = username;
document.getElementById('Infousername').innerText = "username:" + " " + username;
document.getElementById('password').innerText = "password:" + " " + password;
document.getElementById('email').innerText = "email:" + " " + email;
document.getElementById('name').innerText = "name:" + " " + name;
