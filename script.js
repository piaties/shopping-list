window.onload = function () {
    initShoppingList();
};

function  initShoppingList() {
    let form = document.getElementById("item-form")
    console.log(form);
    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}
function handleItemForm(event, formRef) {
    if(event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();

    return false;
}

function addItemToShoppingList(){
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");

    let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
    console.log("Item Html: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function createListItemHtml(itemName, itemAmount){
    return '<li>  ${itemName} - ${itemAmount} </li>'

            ;
}