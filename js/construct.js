function cria(tipo){
    let obj = document.createElement(tipo);
    return obj;
}

function criaComp(tipo,nomeClasse,id){
    let obj = cria(tipo);
    id ? obj.id = id:"";
    obj.className = nomeClasse;
    return obj;
}

function headFootBox(str){
    let obj =  criaComp('div','head ',false);
    let a = cria('a');
    a.append(str);    
    str == 'Fechar' ? obj.addEventListener('click', toggleMenu):"";
    obj.append(a);
    return obj;
}

function subMenu(){
    //cria o menu
    let submenu = criaComp('div','floatMenu','submenu');    
    submenu.append(headFootBox('Sumário'));
    
    document.querySelector('main').prepend(submenu);

    let menu = document.querySelectorAll('legend');        
        menu.forEach(item => subMenuBuild(item, submenu));            
    submenu.append(headFootBox('Fechar'));    
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
