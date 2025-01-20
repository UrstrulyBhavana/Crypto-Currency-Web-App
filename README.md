# 💰 CryptoExchange: A Modern Cryptocurrency Web App with Real-Time Prices and Conversion


CryptoExchange is a dynamic web application that allows users to view real-time cryptocurrency prices and perform currency conversions seamlessly. This app features an intuitive user interface, a dark mode toggle for enhanced usability, and a smooth scrolling experience. Users can explore current values for Bitcoin, Ethereum, and Dogecoin, and convert currencies effortlessly using live data from the CoinGecko API. Built with modern HTML, CSS, and JavaScript, this project demonstrates interactive and responsive web development.

---

## Features
- 📈 **Live Cryptocurrency Prices:**
  - Displays real-time prices for Bitcoin, Ethereum, and Dogecoin.
- 🔄 **Crypto Converter:**
  - Converts entered cryptocurrency amounts into USD.
- 🌗 **Dark Mode Toggle:**
  - Switch between light and dark themes with a single click.
- 🎨 **Modern UI:**
  - Includes a professional and responsive design with interactive animations.
- 🔗 **Navigation Menu:**
  - Easy navigation to different sections like Market, Features, and About Us.
- 🖥️ **Responsive Design:**
  - Works seamlessly on all devices, including desktops, tablets, and mobile phones.

---

## Technologies Used
- 🎨 **HTML:** Provides the structure for the navigation, content, live prices, and converter.
- 🎨 **CSS:** Styles the app with gradients, hover effects, and responsive design.
- ✨ **JavaScript:**
  - Fetches live cryptocurrency prices using the **CoinGecko API**.
  - Implements dynamic interactions, currency conversion, and dark mode toggle.

---

## How to Use

1. **Live Prices:**
   - View real-time cryptocurrency prices for Bitcoin, Ethereum, and Dogecoin.

2. **Currency Conversion:**
   - Enter the amount in cryptocurrency and select a coin (Bitcoin, Ethereum, or Dogecoin) to convert it to USD.

3. **Dark Mode Toggle:**
   - Switch between light and dark themes using the "Dark Mode" button in the navigation bar.

4. **Explore More Button:**
   - Smoothly scroll to the Crypto Converter section by clicking the "Explore More" button.

---

## Key Code Snippets

### Fetching Live Prices
This snippet fetches real-time cryptocurrency prices using the **CoinGecko API**:
```javascript
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
fetchPrices();
setInterval(fetchPrices, 60000); // Update prices every minute
```

## Demo


https://github.com/user-attachments/assets/9405401b-f326-48a3-9928-01802d22bec2
