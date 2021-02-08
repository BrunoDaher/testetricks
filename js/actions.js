function menuInit(){
    let menu = document.querySelectorAll('.headMenu');
    menu.forEach(item => addAction(item));   
}

function addAction(item){                
    item.addEventListener('click', event => {                        
        menuClear();
        item.classList.add('active');        
        document.title = item.innerText;                
        getFrag(item.getAttribute('_target'),'main');
      })
}

function menuClear(){
    let menu = document.querySelectorAll('.headMenu');
        menu.forEach(item => item.classList.remove('active'));
}

function attListener(msg){
    let menu = document.querySelectorAll('.headMenu');
    console.log(msg);
    menu.forEach(item => remAction(item));            
}




  