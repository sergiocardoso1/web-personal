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
   if(contador > 4){
      contador = 1;
   }
 },4000)