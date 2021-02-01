
const menu = document.querySelectorAll('.headMenu');

function menuInit(){
    let menu = document.querySelectorAll('.headMenu');
    menu.forEach(item => handl(item));
}

function handl(item){
    item.addEventListener('click', event => {        
        release();
        item.parentNode.classList.add('active');        
        document.title = item.innerText;        
        getFrag(item.target,'main');
      })
}

let sheet = document.styleSheets[0];
    let rules = sheet.cssRules || sheet.rules;
    
    console.log(rules);
    

function release(){
    

    let menu = document.querySelectorAll('.headMenu');
        menu.forEach(item => item.parentNode.classList.remove('active'));
}
