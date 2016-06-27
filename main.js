var disp = document.querySelector('.display');
var but1 = document.querySelector('.button1');
var but2 = document.querySelector('.button2');
var but3 = document.querySelector('.button3');
var but4 = document.querySelector('.button4');
var but5 = document.querySelector('.button5');
var but6 = document.querySelector('.button6');
var but7 = document.querySelector('.button7');
var but8 = document.querySelector('.button8');
var but9 = document.querySelector('.button9');
var but0 = document.querySelector('.button0');
var butAdd = document.querySelector('.buttonAdd');
var butSub = document.querySelector('.buttonSub');
var butDiv = document.querySelector('.buttonDiv');
var butMul = document.querySelector('.buttonMul');
var butEqu = document.querySelector('.buttonEqu');
var butC = document.querySelector('.buttonC');
var act;
var input1;
var input2;

but1.addEventListener('click', function(){ disp.textContent += 1;});
but2.addEventListener('click', function(){ disp.textContent += 2;});
but3.addEventListener('click', function(){ disp.textContent += 3;});
but4.addEventListener('click', function(){ disp.textContent += 4;});
but5.addEventListener('click', function(){ disp.textContent += 5;});
but6.addEventListener('click', function(){ disp.textContent += 6;});
but7.addEventListener('click', function(){ disp.textContent += 7;});
but8.addEventListener('click', function(){ disp.textContent += 8;});
but9.addEventListener('click', function(){ disp.textContent += 9;});
but0.addEventListener('click', function(){ disp.textContent += 0;});
butAdd.addEventListener('click',
  function(){
    act = 'add';
    input1 = disp.textContent;
    disp.textContent = '';
  });
butSub.addEventListener('click',
  function(){
    act = 'sub';
    input1 = disp.textContent;
    disp.textContent = '';
  });
butDiv.addEventListener('click',
  function(){
    act = 'div';
    input1 = disp.textContent;
    disp.textContent = '';
  });
butMul.addEventListener('click',
  function(){
    act = 'mul';
    input1 = disp.textContent;
    disp.textContent = '';
  });
butC.addEventListener('click', function(){ disp.textContent = '';});
butEqu.addEventListener('click',
  function(){
    if(act === 'add') {
      input2 = disp.textContent;
      disp.textContent = Number(input1) + Number(input2);
    } else if(act === 'sub') {
      input2 = disp.textContent;
      disp.textContent = Number(input1) - Number(input2);
    } else if(act === 'div') {
      input2 = disp.textContent;
      disp.textContent = Number(input1) / Number(input2);
    } else if(act === 'mul') {
      input2 = disp.textContent;
      disp.textContent = Number(input1) * Number(input2);
    }
  });
