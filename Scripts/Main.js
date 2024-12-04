/*
@Title - Final Assignment
@Authors - Monkhouse, Braidan P, Svetlana Bedareva, Jamie Bascin
@Updated - November 12, 2024
*/
const HeaderCode = `
<a href="index.html" class="logo-wrapper"><img class="logo" src="Images/logo.png" alt="Logo"><h2 class="title">Walkman Players</h2></a>

<div>
    <div class="menu-icon" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <ul class="nav-links" id="nav-links">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./product.html">Product</a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
</div>
`;

const FooterCode = `<ul>
<li><a href="./index.html">Home</a></li>
<li><a href="./about.html">About</a></li>
<li><a href="./product.html">Product</a></li>
<li><a href="./contact.html">Contact</a></li>
</ul>
<copyright>Copyright Walkman Sony LLC, All Rights Reserved.</copyright>

`;

//Loads initial script function after the page has loaded.
window.addEventListener('load', OnLoadScript());

/*
@Function OnLoadScript - Loads the global header and footer on page load.
*/
function OnLoadScript() {
    let Header = document.querySelector('#HEADER');
    let Footer = document.querySelector('#FOOTER');
    if (Header != null) {
        Header.innerHTML = HeaderCode;
    }
    if (Footer != null) {
        Footer.innerHTML = FooterCode;
    }
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    navLinks.parentElement.classList.toggle('active');
}