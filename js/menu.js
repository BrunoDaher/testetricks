function menuClear(){
    let menu = document.querySelectorAll('.headMenu');
        menu.forEach(item => item.classList.remove('active'));
}

function menuInit(){    
    //monta um array com o seletor .headMenu    
    let isHeadMenu = document.querySelectorAll('.headMenu');       
    if(isHeadMenu){
        let menu = document.querySelectorAll('.headMenu');
        //itera o array e add uma action pra cada elemento
        menu.forEach(item => addAction(item));   
    }
}

function toggle(div){
    document.querySelector('.' + div).classList.toggle('active');
}

function addAction(item){                
    item.addEventListener('click', event => {                        
        menuClear();
        item.classList.add('active');        
        document.title = item.innerText;                
        loadFrag(item.getAttribute('_target'),'main');
      })
}

function subMenuBox(str){
    let obj =  criaComp('div','head ',false);
    let a = cria('a');
    a.append(str);    
    str == 'Fechar' ? obj.addEventListener('click', toggleMenu):"";
    obj.append(a);
    return obj;
}

function sumario(){
    //cria o menu
    let submenu = criaComp('div','floatMenu','submenu');    
    submenu.append(subMenuBox('Sumário'));    
    document.querySelector('main').prepend(submenu);

    let menu = document.querySelectorAll('legend');        
        menu.forEach(item => subMenuBuild(item, submenu));            
    submenu.append(subMenuBox('Fechar'));    
    //actions
    document.querySelector('.btnSumario').addEventListener('click', toggleMenu);
}

function toggleMenu(){
    let statsFloatMenu = document.querySelector('#submenu').style.display;
            let isShow = statsFloatMenu != 'grid' ? false:true;     
          let _isShow  = isShow ? 'none':'grid';
    document.querySelector('#submenu').style.display = _isShow;
    isShow = !isShow;
}

function subMenuBuild(item,submenu){
    let _id = "nav_" + item.innerText.toLowerCase();
    item.id= _id;
    let div = cria('div');
    let a = cria('a')
    a.href = `#${_id}`;
    a.append(item.innerText);
    div.append(a);
    submenu.appendChild(div);
}