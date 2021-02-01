


function menuInit(){
    let menu = document.querySelectorAll('.headMenu');
    menu.forEach(item => addAction(item));   
}

function addAction(item){        
    item.addEventListener('click', event => {        
        release();
        item.parentNode.classList.add('active');        
        document.title = item.innerText;        
        getFrag(item.target,'main');
      })
}

function remAction(item){
    //item.removeEventListener('click');
    
}


function release(){
    let menu = document.querySelectorAll('.headMenu');
        menu.forEach(item => item.parentNode.classList.remove('active'));
}

function attListener(msg){
    let menu = document.querySelectorAll('.headMenu');
    console.log(msg);
    menu.forEach(item => remAction(item.parentNode));        
    //menuInit();
}