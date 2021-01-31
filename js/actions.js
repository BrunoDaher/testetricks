
function init(){

    let menu = document.querySelectorAll('.headMenu');
    menu.forEach(item => handl(item));
}

function handl(item){
    item.addEventListener('click', event => {        
        getFrag(item.target,'main');
      })
}