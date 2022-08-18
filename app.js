const initialPrice = document.querySelector ("#initial-price");

const quantityOfStocks = document.querySelector ("#quantity-of-stocks");
const currentPrice = document.querySelector ("#current-price");
const tellMeButton = document.querySelector ("#tell-me-button");
const result = document.querySelector ("#result");
tellMeButton.addEventListener ("click" , clickHandler);

function clickHandler () {
    calculateProfitAndLoss (initialPrice.value, quantityOfStocks.value, currentPrice.value);
}

function calculateProfitAndLoss (initial, quantity, current) {
    
    if (initial === "" || quantity === "" || current === "") {
        result.innerText = "Please enter all the values in fields.";
    }
    else {
        if (initial < current) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / initial) * 100;
            result.style.color = "green";
            result.innerText = `Your profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)}%`;
        }
        else if (initial > current) {
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / initial) * 100;
            result.style.color = "red";
            result.innerText = `Your loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)}%`;
        }
        else {
            result.style.color = "white";
            result.innerText = "Neither profit nor loss.";
        }
    }
}