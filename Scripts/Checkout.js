/*
@Title - Final Assignment
@Authors - Monkhouse, Braidan P, Svetlana Bedareva, Jamie Bascin
@Updated - November 12, 2024
*/

//Loads initial script function after the page has loaded.
window.addEventListener('load', DisplayCheckoutPage());


/*
@Function MakeCheckoutListItemHtml - Generates html code for each product checkout list item.
@Param ProductInformation - Provides a js object containing the information for that product.
@Param ItemQuantity - Number of items the user added to their cart.
@Param ItemTotal - The total cost of the item based on the quantity ordered.
@Return CardHtml - Returns the html code for that product list item.
*/
function MakeCheckoutListItemHtml(ProductInformation,ItemQuantity,ItemTotal) {
    let CardHtml = '';
    if (ProductInformation != null) {
        CardHtml = `
        <div class="checkout-card">
        <img src="${ProductInformation.ImageUrl}" alt="${ProductInformation.Title}">
        <div class="checkout-card-inner-wrapper">
        <p class="checkout-card-title">${ProductInformation.Title}</p>
        <p class="checkout-card-price">Quantity: <span>${ItemQuantity}</span> Price <span>$${ProductInformation.Price}</span></p>
        <p class="checkout-card-subtotal">Subtotal: <span>$${ItemTotal}</span></p>
        <p class="checkout-card-description">Product Description: ${ProductInformation.Description}</p>
        </div>
        </div>`;
    }
    return CardHtml;
}

/*
@Function DisplayCheckoutPage - Displays the checkout page and updates it with all the relevenat information.
*/
function DisplayCheckoutPage() {
    let CheckoutListWrapper = document.querySelector('#CHECKOUT-WRAPPER');
    let ListContents = '';
    if (CheckoutListWrapper != null) {
        CheckoutListWrapper.innerHTML = '';
        let Subtotal = 0;
        let SalesTaxes = 0;
        let GrandTotal = 0;
        let ListContents = '';

        let NumberOfProducts = ProductInformation.length;
        let NumberOfProductResults = 0;
        for (let x = 0; x < NumberOfProducts; x++) {
            let CartItemQuantity = 0;
            CartItemQuantity = localStorage.getItem(ProductInformation[x].Id);
            if (CartItemQuantity != null && CartItemQuantity > 0) {
                let ItemTotal = 0;
                ItemTotal = ProductInformation[x].Price * CartItemQuantity;
                CheckoutListWrapper.innerHTML += MakeCheckoutListItemHtml(ProductInformation[x],CartItemQuantity,ItemTotal);
                NumberOfProductResults++;
                Subtotal = Subtotal + ItemTotal;
            }
        }

        if (Subtotal != 0) {
            SalesTaxes = Subtotal * 0.13;
        }
        SalesTaxes = SalesTaxes.toFixed(2);

        GrandTotal = Subtotal + SalesTaxes;
        GrandTotal = parseFloat(GrandTotal).toFixed(2);


        let CheckoutSummaryInformation = `<p class="checkout-subtotal">Subtotal: <span>$${Subtotal}</span></p>
        <p class="checkout-salestaxes">Sales Taxes: <span>$${SalesTaxes}</span></p>
        <p class="checkout-total">Grand Total: <span>$${GrandTotal}</span></p>

        <select class="checkout-pay-method">
        <option value="Amex">American Express</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Visa">Visa</option>
        </select>
        <button class="checkout-purchase-button">Proceed to Purchase</button>
        
        
        `;


        CheckoutListWrapper.innerHTML += CheckoutSummaryInformation;


        let NumberOfProductsElement = document.querySelector('#NUM-PRODUCTS');
        if (NumberOfProductsElement != null) {
            if (NumberOfProductResults == 1) {
                NumberOfProductsElement.innerHTML = `${NumberOfProductResults} Items in your Cart`;
            } else {
                NumberOfProductsElement.innerHTML = `${NumberOfProductResults} Items in your Cart`;
                if (NumberOfProductResults == 0) {
                    CheckoutListWrapper.innerHTML = '<p>No items in cart.</p>';
                }
            }
        }

    }
}