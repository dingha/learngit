export const allData=new Set([]);
export const carData=((sum=0)=>{allData.forEach(item=>{
    const price=item.querySelector('.food-price').textContent;
    const number=item.querySelector('.food-number').value;
    sum=sum+price*number;
});return sum;
});
export const redData=((sum=0)=>{allData.forEach(item=>{
    const number=Number(item.querySelector('.food-number').value);
    sum=sum+number;
});return sum;
})