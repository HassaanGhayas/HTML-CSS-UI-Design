
const sidebar = document.querySelector(".sidebar")

function ShowMenu() {
    sidebar.style.display = "flex"
}
function HideMenu() {
    sidebar.style.display = "none"
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) { 
        sidebar.style.display = 'none'; 
    }
});