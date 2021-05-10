var dropdownBtn = document.getElementById("dropdown")
var dropdownMenu = document.getElementById("dropdown-menu")
console.log(dropdownBtn)

// dropdownBtn.onclick = function() {
//   dropdownMenu.style.display = "flex"   
// }
dropdownBtn.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show')
})