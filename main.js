let incrementbtn = document.querySelector('#increment'); 
let decrementbtn = document.querySelector('#decrement'); 
let field = document.querySelector('#field');

incrementbtn.addEventListener('click',()=>{
    field.value = parseInt(field.value) + 1;
});
decrementbtn.addEventListener('click',()=>{
   if (field.value <= 0){
       field.value = 0;
   }
   else{
       field.value = parseInt(field.value) -1;
   }
});