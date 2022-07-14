import JSConfetti from 'js-confetti'
const coiniconurl = "https://www.leftovercurrency.com/app/uploads/2016/11/500-japanese-yen-coin-gold-coloured-obverse-1.jpg";
const billiconurl = "https://upload.wikimedia.org/wikipedia/commons/f/ff/1000_yen_Natsume_Soseki.jpg";

const jsConfetti = new JSConfetti()
const btncoin = document.getElementById('btn-coin');
const btnbill = document.getElementById('btn-bill');
const walletElement = document.getElementById('wallet');

const min = Math.ceil(5000);
const max = Math.floor(10000);
const targetmoney = Math.floor(Math.random() * (max-min) + min);
console.log(`targetmoney = ${targetmoney}`);

function updateMoney (value) {
  const savingmoneyElement = document.getElementById("saving-money");
  const currentValue = parseInt(savingmoneyElement.textContent);

  let newvalue = currentValue + value;
  savingmoneyElement.textContent = newvalue;

  if (newvalue > targetmoney) {
    jsConfetti.addConfetti();
  }
}

btncoin.addEventListener("click", function() {
  console.log("click")
  let iconelementhtml = `<img class="coincss" src="${coiniconurl}"/>`;
  walletElement.insertAdjacentHTML("beforeend", iconelementhtml);

  updateMoney(500)
});

btnbill.addEventListener("click", function() {
  console.log("bill")
  let iconelementhtml = `<img class="billcss" src="${billiconurl}"/>`;
  walletElement.insertAdjacentHTML("beforeend" , iconelementhtml);
  updateMoney(1000)
});
