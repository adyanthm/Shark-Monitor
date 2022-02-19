// get the coin price from coingecko.com
// and log it to the console

function getPrice(coin) {
    //first convert the coin to lowercase
    coin = coin.toLowerCase();
    let url = `https://api.coingecko.com/api/v3/coins/${coin}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //also add a $ symbol before the price
            console.log(addSymbol(data.market_data.current_price.usd));
        })
        .catch(err => console.log(err));
}

//add a $ symbol before the price    

function addSymbol(coinPrice){
    return `$${coinPrice}`;
}

getPrice('Bitcoin');