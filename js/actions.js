function menuInit(){
    let menu = document.querySelectorAll('.headMenu');
    menu.forEach(item => addAction(item));   
}

function addAction(item){            
    item.addEventListener('click', event => {                        
        release();
        item.classList.add('active');        
        document.title = item.innerText;                
        getFrag(item.getAttribute('_target'),'main');
      })
}

function release(){
    let menu = document.querySelectorAll('.headMenu');
        menu.forEach(item => item.classList.remove('active'));
}

function attListener(msg){
    let menu = document.querySelectorAll('.headMenu');
    console.log(msg);
    menu.forEach(item => remAction(item));            
}

let dragIsOn = false;

function menuDragInit(){        
    let tgButton = document.querySelector('.head');
    tgButton.addEventListener('click', ()=> toggleEvent(tgButton));
}

function toggleEvent(tgButton){
    let main = document.querySelector('main');
    
    dragIsOn = !dragIsOn;

    if(dragIsOn){
        main.addEventListener('mouseover', test);
    }
    else{
        main.addEventListener('click', myRemoveFunct());
    }
}

function test(){
    var e = window.event;
    console.log(e.clientX);
    let floatMenu = document.querySelector('#submenu');    
    floatMenu.style.opacity = 0.2;
    floatMenu.style.left = (e.clientX + 10)  + 'px';
    floatMenu.style.top = (e.clientY + 10) + 'px';
}

function myRemoveFunct() {  
    let main = document.querySelector('main');
    main.removeEventListener('mouseover', test);
  }



  