const form =  document.querySelector('#f');
const d = document.querySelector('#tableResult');
var updateCoin;
const time = new Date();
form.addEventListener('submit' , (e)=>{
e.preventDefault();
if(updateCoin){
    clearTimeout(updateCoin);
}
const ctype = form.elements.coinType.value;
console.log(ctype);
fetchPrice(ctype);
});
const fetchPrice = async(ctype) =>{
    const x = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(x);
    const base = x.data.coin.symbol;
    const price =x.data.coin.price;
    const volume = x.data.coin.volume;
    const change1 = x.data.coin.priceChange1d;
   
    
//     re1.innerHTML =`${base}`;
//     re2.innerHTML =`${price}`;
//     re4.innerHTML =`${volume}`;
//     re6.innerHTML =`${change1}`;
//     re8.innerHTML = `${time}`;
d.innerHTML =`  <thead class="bg-primary">
<tr>
    <th>Property</th>
    <TH>Value</TH>
</tr>
</thead>
<tbody>
<tr>
    <th >${base}</th>
    <td id="p1">${price} USD</td>
</tr>
<tr>
    <th id="">Volume(24hrs)</th>
    <td id="v2">${volume}</td>
</tr>
<tr>
    <th id="ch">Change(24hrs)</th>
    <td id="v3">${change1}</td>
</tr>
<tr>
    <th id="la">Last Update</th>
    <td id="v4">${time}</td>
</tr>
</tbody>`;
updateCoin = setTimeout(()=>fetchPrice(ctype), 100000);
} 
