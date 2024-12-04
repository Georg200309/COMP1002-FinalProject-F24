/*
@Title - Final Assignment
@Authors - Monkhouse, Braidan P, Svetlana Bedareva, Jamie Bascin
@Updated - November 12, 2024
*/

const CurrentYear = GetCurrentYear();

const CompanyEmailAddress = 'support@walkmanplayers.com';


const HeaderCode = `
<a href="index.html" class="logo-wrapper"><img class="logo" src="Images/logo.png" alt="Walkman Players Logo"><h2 class="title">Walkman Players</h2></a>

<div>
    <div id="MENU-ICON" class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <ul class="nav-links" id="nav-links">
        <li><a tabindex="0" href="./index.html">Home</a></li>
        <li><a tabindex="0" href="./about.html">About</a></li>
        <li><a tabindex="0" href="./products.html">Products</a></li>
        <li><a tabindex="0" href="./checkout.html">Checkout</a></li>
        <li><a tabindex="0" href="./contact.html">Contact</a></li>
    </ul>
</div>
`;

const FooterCode = `<ul>
<li><a href="./index.html">Home</a></li>
<li><a href="./about.html">About</a></li>
<li><a href="./products.html">Products</a></li>
<li><a href="./checkout.html">Checkout</a></li>
<li><a href="./contact.html">Contact</a></li>
</ul>
<p class="footer-contact-email">Email us at: <a href="mailto:${CompanyEmailAddress}">${CompanyEmailAddress}</a></p>
<copyright><i>${CurrentYear} © Copyright Walkman Sony LLC, All Rights Reserved.</i></copyright>

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
    AddMainMenuButtonEventListener();
}


/*
@Function AddMainMenuButtonEventListener - Adds event listener for the main menu button.
*/
function AddMainMenuButtonEventListener() {
    let MainMenuButton = document.querySelector('#MENU-ICON');
    if (MainMenuButton != null) {
        MainMenuButton.addEventListener('click', (Event) => ToggleMainMenu());
    }
}


/*
@Function ToggleMainMenu - Toggles the main hamburger menu when clicked.
*/
function ToggleMainMenu() {
    const navLinks = document.querySelector('#nav-links');
    navLinks.classList.toggle('active');
    navLinks.parentElement.classList.toggle('active');
}


/*
@Function GetCurrentYear - Gets the current year to display on the footer.
@Return CurrentYear - Returns the current year.
*/
function GetCurrentYear() {
    let CurrentYear = new Date().getFullYear();
    return CurrentYear;
}

