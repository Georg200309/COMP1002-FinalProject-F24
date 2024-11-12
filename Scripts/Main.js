/*
@Title - Final Assignment
@Authors - Monkhouse, Braidan P, Svetlana Bedareva, Jamie Bascin
@Updated - November 12, 2024
*/
const HeaderCode = `<ul>
<li><a href="./index.html">Home</a></li>
<li><a href="./about.html">About</a></li>
<li><a href="./contact.html">Contact</a></li>
</ul>`;

const FooterCode = `<ul>
<li><a href="./index.html">Home</a></li>
<li><a href="./about.html">About</a></li>
<li><a href="./contact.html">Contact</a></li>
</ul>`;

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