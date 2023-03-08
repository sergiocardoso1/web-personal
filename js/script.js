 //menu
 const btnMobile = document.getElementById('btn-mobile');
 const btnMenu = document.getElementById('btn-menu')
 const btnMenu2 = document.getElementById('btn-menu2')
 const btnMenu3 = document.getElementById('btn-menu3')
 const btnMenu4 = document.getElementById('btn-menu4')


 function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
 }

 btnMobile.addEventListener('click', toggleMenu);

 btnMenu.addEventListener('click',function(){
   nav.classList.toggle('active');
 });

 btnMenu2.addEventListener('click',function(){
   nav.classList.toggle('active');
 });

 btnMenu3.addEventListener('click',function(){
   nav.classList.toggle('active');
 });

 btnMenu4.addEventListener('click',function(){
   nav.classList.toggle('active');
 });


//slider
 let contador = 1;

 setInterval(function(){
   document.getElementById('slide' + contador).checked = true;
   contador++;
   if(contador > 5){
      contador = 1;
   }
 },4000)

 //paragrafo

 const btnParagrafo1 = document.getElementById('paragrafo1');
 const btnParagrafo2 = document.getElementById('paragrafo2');
 const btnParagrafo3 = document.getElementById('paragrafo3');
 const btnParagrafo4 = document.getElementById('paragrafo4');

 btnParagrafo1.addEventListener('click', function(){
    const textoparagrafo1 = document.getElementById('textoparagrafo1');
    textoparagrafo1.classList.toggle('active');
 });

 btnParagrafo2.addEventListener('click', function(){
  const textoparagrafo1 = document.getElementById('textoparagrafo2');
  textoparagrafo2.classList.toggle('active');
});

btnParagrafo3.addEventListener('click', function(){
  const textoparagrafo1 = document.getElementById('textoparagrafo3');
  textoparagrafo3.classList.toggle('active');
});

btnParagrafo4.addEventListener('click', function(){
  const textoparagrafo1 = document.getElementById('textoparagrafo4');
  textoparagrafo4.classList.toggle('active');
});
 