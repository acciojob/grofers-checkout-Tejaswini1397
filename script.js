// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);

 const table = document.querySelector('table');
 const lastRow = document.createElement('tr');
 const prices = document.querySelectorAll('[data-ns-test=price]');
 let sum = 0;
 for(let i = 0; i < prices.length; i++) {
  sum += parseInt(prices[i].textContent);
 }
 const child = document.createElement("td");
 child.setAttribute('data-ns-test', 'grandTotal');


 child.textContent = sum;
 lastRow.appendChild(child);
 table.appendChild(lastRow);