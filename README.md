# 💰 CryptoVista – Real-Time Cryptocurrency Web App

---

## 📽️ Demo

> Explore the core features of the **CryptoVista App** in this walkthrough:

https://github.com/user-attachments/assets/f8d5b57f-3c6d-4ec4-814f-82ee11de520b

---

## 🧾 Overview

**CryptoVista** is a sleek and lightweight cryptocurrency tracking web application built with **HTML**, **CSS**, and **JavaScript**. It provides real-time data about trending cryptocurrencies such as **Bitcoin**, **Ethereum**, **Dogecoin**, and more—fetched from public APIs. The intuitive layout and visually-rich UI make this app ideal for beginners looking to explore crypto stats quickly and effectively.

---

## ✨ Features

📈 Real-Time Data Display – View the latest values of popular cryptocurrencies.  
💎 Currency Cards – Visual cards for Bitcoin, Ethereum, Dogecoin, and others.  
🖼️ Dynamic Icons – Crypto-themed icons for easy recognition.  
📱 Responsive Design – Seamlessly works across desktop, tablet, and mobile.  
🎨 Clean UI – Engaging card layout with a modern touch.  
⚡ Lightning Fast – Loads quickly without frameworks.

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)  
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)  
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)  

---

## 📁 Folder Structure

```plaintext
Crypto-Currency-Web-App/
├── index.html           # Main HTML structure
├── style.css            # All styles and layout
├── script.js            # JavaScript logic to render currency cards
├── images/              # Contains all crypto icons and assets
│   ├── bitcoin.png
│   ├── ethereum.png
│   ├── dogecoin.png
│   ├── background.png
│   └── logo.png
├── README.md            # Project documentation
```

---

## 💻 Installation

1. **Clone the repository:**

```bash
$ git clone https://github.com/UrstrulyBhavana/Crypto-Currency-Web-App.git
$ cd Crypto-Currency-Web-App
```

2. **Run the App:**

Just open the `index.html` file in any browser — no server setup needed.

---

## 🧩 Functionalities Recap

1. Displays popular cryptocurrencies with custom visuals.
2. Offers up-to-date crypto data and stylish presentation.
3. Uses simple JavaScript DOM manipulation and static assets.
4. Fully optimized for smaller screens and devices.
5. Encourages visual understanding of crypto trends.

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


---


## 🙋‍♀️ Author

**Linga Bhavana** – Frontend Developer

- 📧 **Email**: [urstrulybhavana1432@gmail.com](mailto:urstrulybhavana1432@gmail.com)  
- 🐙 **GitHub**: [UrstrulyBhavana](https://github.com/UrstrulyBhavana)

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
