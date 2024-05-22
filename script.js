// script.js
document.addEventListener('DOMContentLoaded', () => {
    const usdBtn = document.getElementById('usd-btn');
    const eurBtn = document.getElementById('eur-btn');
    const tiers = document.querySelectorAll('.tier');
  
    usdBtn.addEventListener('click', () => {
      usdBtn.classList.add('active');
      eurBtn.classList.remove('active');
      updateCurrency('USD');
    });
  
    eurBtn.addEventListener('click', () => {
      eurBtn.classList.add('active');
      usdBtn.classList.remove('active');
      updateCurrency('EUR');
    });
  
    function updateCurrency(currency) {
      tiers.forEach((tier) => {
        const cost = tier.getAttribute(`data-cost`);
        const costInCurrency = parseFloat(cost) * currencyRates[currency];
        tier.querySelector('.cost').textContent = costInCurrency.toFixed(2);
      });
    }
  
    const currencyRates = {
      USD: 1,
      EUR: 0.85,
    };
  
    updateCurrency('USD');
  });