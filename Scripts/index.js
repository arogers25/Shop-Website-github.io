//alert("You made it to index.html!");
let numItems = 0;
if (localStorage.getItem("totalItems") == null) localStorage.setItem("totalItems", 0);
numItems = parseInt(localStorage.getItem("totalItems"));

let totalPriceVar = 0;
if (localStorage.getItem("totalPrice") == null) localStorage.setItem("totalPrice", 0);
totalPriceVar = parseInt(localStorage.getItem("totalPrice"));

document.getElementById('itemsAmount').innerHTML = numItems;
function isValid(number)
{
  if (number == "")
  {
    alert("Please enter an amount");
    return false;
  }
  if (number <= 0)
  {
    alert("Please enter an amount greater than 0");
    return false;
  }
  if (isNaN(number))
  {
    alert("Please enter a valid amount");
    return false;
  }
  return true;
}

function addToCart(amount, price)
{
  if (isValid(amount))
  {
    numItems += parseInt(amount);
    totalPriceVar += parseInt(amount)*parseInt(price);
    localStorage.setItem("totalItems", numItems);
    localStorage.setItem("totalPrice", totalPriceVar)
    document.getElementById('itemsAmount').innerHTML = numItems;
  }
}

function resetItems()
{
  numItems = 0;
  localStorage.setItem("totalItems", numItems);
  document.getElementById('itemsAmount').innerHTML = numItems;
}
