const btcPrice = document.getElementById("btc");
const ethPrice = document.getElementById("eth");
const dogePrice = document.getElementById("doge");

async function fetchPrices() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
        );
        const data = await response.json();
        btcPrice.textContent = `$${data.bitcoin.usd.toLocaleString()}`;
        ethPrice.textContent = `$${data.ethereum.usd.toLocaleString()}`;
        dogePrice.textContent = `$${data.dogecoin.usd.toLocaleString()}`;
    } catch (error) {
        console.error("Error fetching prices:", error);
    }
}

async function convert() {
    const amount = document.getElementById("amount").value;
    const crypto = document.getElementById("crypto").value;

    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`
        );
        const data = await response.json();
        const converted = (amount * data[crypto].usd).toFixed(2);
        document.getElementById("convertedAmount").innerText = `$${converted}`;
    } catch (error) {
        console.error("Error converting amount:", error);
    }
}

document.getElementById("toggle-dark-mode").addEventListener("click", (e) => {
    e.preventDefault(); 
    document.body.classList.toggle("dark-mode");
});


document.querySelector("#explore-more-btn").addEventListener("click", (e) => {
    e.preventDefault(); 
    const target = document.querySelector("#converter"); 
    if (target) {
        target.scrollIntoView({ behavior: "smooth" }); 
    }
});

fetchPrices();
setInterval(fetchPrices, 60000);



