const inputs = document.querySelectorAll('input');
const depositBtn = document.querySelector('.deposit');
const transferBtn = document.querySelector('.transfer');
const secondPage = document.querySelector('.secondPage');
const lastPage = document.querySelector('.thirdPage');
const backBtns = document.querySelectorAll('.backBtn');
const change = document.querySelector('.change');
const changeColor = document.getElementById('currencyAmountIII');
const thirdBtn = document.querySelector('.thirdPageBtn');






if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
         .then(registration => {
            console.log('Service worker registered:', registration);
         })
         .catch(error => {
            console.error('Service worker registration failed:', error);
         });
   });
}



function funInput(){
   inputs.forEach(input => {
      input.addEventListener('input', () => {
         input.style.width = `${input.scrollWidth}px`;
      })
   })
}

function deposit() {
   depositBtn.addEventListener('click', (e)=>{
      secondPage.style.display = 'block';
   })
   
   transferBtn.addEventListener('click', (e)=>{
      lastPage.style.display = 'block';
   })
   
   thirdBtn.addEventListener('click', (e)=>{
      lastPage.style.display = 'none';
   })
}

function back() {
   backBtns.forEach(backBtn => {
      backBtn.addEventListener('click', (e)=>{
         secondPage.style.display = 'none';
         lastPage.style.display = 'none';
      })
   })
}

function cngColor() {
   change.addEventListener('click', (e)=>{
      if (changeColor.style.color == 'red') {
         changeColor.style.color = '#22b796';   
         
      }else{
      changeColor.style.color = 'red';
      }
      
   })

}
      

cngColor();
funInput();
deposit();
back();