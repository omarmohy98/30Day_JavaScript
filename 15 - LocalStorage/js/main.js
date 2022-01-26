const orderInput = document.querySelector(".order-input");
const btn = document.querySelector(".btn");
const displayContainer = document.querySelector(".order-container");
const btnsContainer = document.querySelector(".btns-container");
class Order {
    constructor(name, done = false) {
        this.name = name;
        this.done = done;
    }
}

//
// save order in localStorage
function saveOrder() {
    const orderName = orderInput.value.trim();
    if (orderName === "") return;
    let orderItem = [];
    const newOrder = new Order(orderName);
    if (JSON.parse(window.localStorage.getItem("order")) === null) {
        orderItem.push(newOrder);
        window.localStorage.setItem("order", JSON.stringify(orderItem));
    } else {
        orderItem = JSON.parse(window.localStorage.getItem("order"));
        orderItem.push(newOrder);
        window.localStorage.setItem("order", JSON.stringify(orderItem));
    }
}
btn.addEventListener("click", saveOrder);

//
// Display Orders
function display() {
    let displayItem = JSON.parse(window.localStorage.getItem("order"));
    let html = [];
    displayItem.forEach((order, index) => {
        let check = "";
        if (order.done) check = "checked";
        html.push(
            `<div class="order">
                <input type="checkbox" ${check} id="${order.name}-${index}" name="order-name" />
                <label for="${order.name}-${index}">${order.name}</label>
                <i id="${order.name}-${index}" class="fas fa-trash-alt delete"></i>
            </div>`
        );
    });
    let btnHtml = `
        <div class="btn-container">
            <button class="btns check-all">Check All</button>
            <button class="btns uncheck-all">Uncheck All</button>
            <button class="btns clear">Clear All</button>
        </div>
    `;
    btnsContainer.innerHTML = btnHtml;
    displayContainer.innerHTML = html.join("");
    if (displayContainer.innerHTML == "") {
        btnsContainer.innerHTML = "";
    }
}
// Display Old Orders First
if (JSON.parse(window.localStorage.getItem("order")) !== null) display();
// Display when new order Add
btn.addEventListener("click", display);

//
// Update & Save Order Status
function updateStatus(event) {
    const nameValue = event.target.id.slice(0, event.target.id.length - 2);
    const order = JSON.parse(window.localStorage.getItem("order"));
    order.forEach((order) => {
        if (order.name === nameValue) order.done = !order.done;
    });
    window.localStorage.setItem("order", JSON.stringify(order));
}
displayContainer.addEventListener("change", updateStatus);

//
// Delete Order
function deleteOrder(event) {
    if (event.target.classList.contains("delete")) {
        const nameValue = event.target.id;
        const order = JSON.parse(window.localStorage.getItem("order"));
        const update = order.filter((order, index) => {
            return `${order.name}-${index}` !== nameValue;
        });
        window.localStorage.setItem("order", JSON.stringify(update));
        display();
    }
}
displayContainer.addEventListener("click", deleteOrder);

//
// Control OrderList Using Check All & Uncheck All & Clear All Button
function controlButtons(event) {
    // Clear all Orders when use ClearAll Button
    if (event.target.classList.contains("clear")) {
        window.localStorage.removeItem("order");
        displayContainer.innerHTML = "";
        btnsContainer.innerHTML = "";
    }
    // Check all Orders when use CheckAll Button
    if (event.target.classList.contains("check-all")) {
        const order = JSON.parse(window.localStorage.getItem("order"));
        order.forEach((order) => {
            order.done = true;
        });
        window.localStorage.setItem("order", JSON.stringify(order));
        display();
    }
    // Uncheck all Orders when use UncheckAll Button
    if (event.target.classList.contains("uncheck-all")) {
        const order = JSON.parse(window.localStorage.getItem("order"));
        order.forEach((order) => {
            order.done = false;
        });
        window.localStorage.setItem("order", JSON.stringify(order));
        display();
    }
}
btnsContainer.addEventListener("click", controlButtons);
