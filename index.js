document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
});
 
function updateDOM() {
    document.getElementById('text')
        .textContent = ("This is really cool!")}

// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   )