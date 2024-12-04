/*
@Title - Final Assignment
@Authors - Monkhouse, Braidan P, Svetlana Bedareva, Jamie Bascin
@Updated - November 12, 2024
*/

//Loads initial script function after the page has loaded.
window.addEventListener('load', LoadProductPage());

/*
@Function LoadProductPage - Loads the product page and creates event listeners for the list options.
*/
function LoadProductPage() {
    LoadProductSortOptionControls();
    DisplayProductList();
}

/*
@Function LoadProductSortOptionControls - Creates event listeners for the product page sort options.
*/
function LoadProductSortOptionControls() {
    let SortOrderElement = document.querySelector('#SORT-ORDER');
    if (SortOrderElement != null) {
        SortOrderElement.addEventListener('change', (Event) => DisplayProductList());
    }
    let MinimumPriceNumberElement = document.querySelector('#MINIMUM-PRICE');
    if (MinimumPriceNumberElement != null) {
        MinimumPriceNumberElement.addEventListener('input', (Event) => DisplayProductList());
    }
    let MaximumPriceNumberElement = document.querySelector('#MAXIMUM-PRICE');
    if (MaximumPriceNumberElement != null) {
        MaximumPriceNumberElement.addEventListener('input', (Event) => DisplayProductList());
    }
}

/*
@Function MakeCardHtml - Generates html code for each product card.
@Param ProductInformation - Provides a js object containing the information for that product.
@Return CardHtml - Returns the html code for that product card.
*/
function MakeCardHtml(ProductInformation) {
    let CardHtml = '';
    if (ProductInformation != null) {
        CardHtml = `
        <div class="product-card">
        <img src="${ProductInformation.ImageUrl}" alt="${ProductInformation.Title}">
        <h4>${ProductInformation.Title}</h4>
        <p class="product-price">$${ProductInformation.Price}</p>
        <p>${ProductInformation.Description}</p>
        <p><button id="PRODUCT-${ProductInformation.Id}" onclick="AddProductToCart(this)">Add to Cart</button></p>
        </div>`;
    }
    return CardHtml;
}


/*
@Function DisplayProductList - Displays the list of walkmans to the products page.
*/
function DisplayProductList() {
    let ProductListWrapper = document.querySelector('#PRODUCTS-WRAPPER');
    if (ProductListWrapper != null) {
        ProductListWrapper.innerHTML = '';
        let MinimumPrice = 0;
        let MaximumPrice = 10000;
        MinimumPrice = DetermineMinimumPrice();
        MaximumPrice = DetermineMaximumPrice();

        let SortedProductList = [];

        SortedProductList = GetSortedProductList();

        let NumberOfProducts = SortedProductList.length;
        let NumberOfProductResults = 0;
        for (let x = 0; x < NumberOfProducts; x++) {
            if (SortedProductList[x].Price <= MaximumPrice && SortedProductList[x].Price >= MinimumPrice) {
                ProductListWrapper.innerHTML += MakeCardHtml(SortedProductList[x]);
                NumberOfProductResults++;
            }
        }

        let NumberOfProductsElement = document.querySelector('#NUM-PRODUCTS');
        if (NumberOfProductsElement != null) {
            if (NumberOfProductResults == 1) {
                NumberOfProductsElement.innerHTML = `${NumberOfProductResults} Product`;
            } else {
                NumberOfProductsElement.innerHTML = `${NumberOfProductResults} Products`;
                if (NumberOfProductResults == 0) {
                    ProductListWrapper.innerHTML = '<p>No products found</p>';
                }
            }
        }
    }
}


/*
@Function GetSortedProductList - Gets the sorted product list as per the users selected sort option.
@Return SortedProductList - Returns an array of the product objects sorted per the users setting.
*/
function GetSortedProductList() {
    let SortOrder = '';
    let SortedProductList = [];
    SortedProductList = ProductInformation;
    SortOrder = DetermineSortOrder();
    if (SortOrder == 'Alphabetical') {
        SortedProductList.sort(function(a, b){
            if(a.Title < b.Title) { return -1; }
            if(a.Title > b.Title) { return 1; }
            return 0;
        });
    } else if (SortOrder == 'Reverse') {
        SortedProductList.sort(function(a, b){
            if(b.Title < a.Title) { return -1; }
            if(b.Title > a.Title) { return 1; }
            return 0;
        });
    } else if (SortOrder == 'LowToHigh') {
        SortedProductList.sort(function(a, b){
            if(a.Price < b.Price) { return -1; }
            if(a.Price > b.Price) { return 1; }
            return 0;
        });
    } else if (SortOrder == 'HighToLow') {
        SortedProductList.sort(function(a, b){
            if(b.Price < a.Price) { return -1; }
            if(b.Price > a.Price) { return 1; }
            return 0;
        });
    } else if (SortOrder == 'OldestToNewest') {
        SortedProductList.sort(function(a, b){
            if(a.Age < b.Age) { return -1; }
            if(a.Age > b.Age) { return 1; }
            return 0;
        });
    } else if (SortOrder == 'NewestToOldest') {
        SortedProductList.sort(function(a, b){
            if(b.Age < a.Age) { return -1; }
            if(b.Age > a.Age) { return 1; }
            return 0;
        });
    } else {
        SortedProductList = ProductInformation;
    }
    return SortedProductList;
}


/*
@Function DetermineSortOrder - Determines what way the user selected to sort the products.
@Return SortOrder - Returns the option the user selected to sort the products.
*/
function DetermineSortOrder() {
    let SortOrderElement = document.querySelector('#SORT-ORDER');
    let SortOrder = '';
    let DefaultSortOrder = 'Alphabetical';
    if (SortOrderElement != null) {
        if (SortOrderElement.value != null) {
            SortOrder = SortOrderElement.value;
        } else {
            SortOrder = DefaultSortOrder;
        }
    } else {
        SortOrder = DefaultSortOrder;
    }
    return SortOrder;
}


/*
@Function DetermineMinimumPrice - Determines what the minimum price the user has entered is.
@Return MinimumPrice - Returns the minimum price to determine what products to show.
*/
function DetermineMinimumPrice() {
    let MinimumPrice = 0;
    let MinimumPriceNumberElement = document.querySelector('#MINIMUM-PRICE');
    if (MinimumPriceNumberElement != null) {
        if (MinimumPriceNumberElement.value != null) {
            MinimumPrice = MinimumPriceNumberElement.value;
        } else {
            MinimumPrice = 0;
        }
    }
    return MinimumPrice;
}


/*
@Function DetermineMaximumPrice - Determines what the maximum price the user has entered is.
@Return MaximumPrice - Returns the maximum price to determine what products to show.
*/
function DetermineMaximumPrice() {
    let MaximumPrice = 0;
    let MaximumPriceNumberElement = document.querySelector('#MAXIMUM-PRICE');
    if (MaximumPriceNumberElement != null) {
        if (MaximumPriceNumberElement.value != null && MaximumPriceNumberElement.value != 0) {
            MaximumPrice = MaximumPriceNumberElement.value;
        } else {
            MaximumPrice = 100000000;
        }
    }
    return MaximumPrice;
}


/*
@Function AddProductToCart - Adds the product to the users cart.
@Param Event - The event that is fired by the onclick event listener.
*/
function AddProductToCart(Event) {
    if (Event != null) {
        if (Event.id != null) {
            let ProductId = Event.id;
            ProductId = ProductId.replace('PRODUCT-','');
            let NumberOfItems = 0;
            NumberOfItems = localStorage.getItem(ProductId);
            if (NumberOfItems != null) {
                NumberOfItems++;
            } else {
                NumberOfItems = 1;
            }
            localStorage.setItem(ProductId,NumberOfItems);
            ToggleAddToCartButton(ProductId);
        }
    }
}


/*
@Function ToggleAddToCartButton - Toggles the add to cart button after being clicked.
@Param ProductId - Provides the id of the product add to cart button that is being clicked.
*/
function ToggleAddToCartButton(ProductId) {
    let AddToCartButtonElement = document.querySelector('#PRODUCT-'+ProductId);
    if (AddToCartButtonElement != null) {
        AddToCartButtonElement.innerHTML = "✓ Added to cart";
        setInterval(ResetAddToCartButtonText, 2000);
        /*
        @Function ResetAddToCartButtonText - Resets the add to cart button text.
        */
        function ResetAddToCartButtonText() {
            AddToCartButtonElement.innerHTML = "Add to Cart";
        }
    }
}