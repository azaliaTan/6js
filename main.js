'use strict';
//1 
console.log(document.querySelector('div'));
console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('li')[1]);

//2
const a = document.querySelectorAll('li');

a.forEach(lia => {
    lia.classList.add('list-item');
    console.log(lia); 
  });

//3

let number=Number(prompt('введите цифру',''));

if(number && number>0){
const container = document.createElement('div');
container.className='container'
  
for(let i=0;i<number;i++){
    const block=document.createElement('div');
    block.className='block';
    block.style.backgroundColor='aquamarine';
    block.style.height='50px';
    block.style.width='50px';
    block.style.margin='20px'
    container.appendChild(block);
}
document.body.appendChild(container);
}else{
    alert('введите другое число');
}


//4

let forma=document.createElement('forma');

forma.style.display='flex';
forma.style.flexDirection='column';
forma.style.gap='35px';
forma.style.width='350px';

let inpEmail=document.createElement('input');
inpEmail.style.padding='25px';
inpEmail.placeholder='введиту почтц';


let inpName=document.createElement('input');
inpName.style.padding='25px';
inpName.placeholder='введиту имя';


let btnSub=document.createElement('button');
btnSub.innerHTML='отправить';
btnSub.style.backgroundColor='aquamarine';
btnSub.style.fontSize='20px';
btnSub.style.padding='25px';
forma.append(inpName, inpEmail, btnSub);


document.body.appendChild(forma);



















