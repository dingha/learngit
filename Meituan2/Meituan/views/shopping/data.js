export const allData=new Set([]);
export const carData=((sum=0)=>{allData.forEach(
    item=>{
        const price=item.querySelector('.food-price').textContent;
        const number=item.querySelector('.food-number').textContent;
        sum=sum+price*number;
    }
    );return sum;
});
allData.forEach(item=>{
    if(item.querySelector('.food-number'))
        item.querySelector('.food-number').innerHTML=item.numberData;
    console.log(item.querySelector('.food-number'))
})