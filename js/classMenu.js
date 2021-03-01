export class Menu {

    menu = document.querySelectorAll('.headMenu');

     menuClear() {
         console.log('menuClear')
        //let menu = document.querySelectorAll('.headMenu');
            menu.forEach(item => item.classList.remove('active'));
     }
  
     menuInit(){
        //let menu = document.querySelectorAll('.headMenu');
        menu.forEach(item => addAction(item));   
     }


    subMenuBox(str){
        let obj =  criaComp('div','head ',false);
        let a = cria('a');
        a.append(str);    
        str == 'Fechar' ? obj.addEventListener('click', toggleMenu):"";
        obj.append(a);
        return obj;
    }

    sumario(){
        //cria o menu
        let submenu = criaComp('div','floatMenu','submenu');    
        submenu.append(subMenuBox('Sumário'));
        
        document.querySelector('main').prepend(submenu);

        let legend = document.querySelectorAll('legend');        
            legend.forEach(item => subMenuBuild(item, submenu));            
        submenu.append(subMenuBox('Fechar'));    
        //actions
        document.querySelector('.btnSumario').addEventListener('click', toggleMenu);
    }

    toggleMenu(){
        let statsFloatMenu = document.querySelector('#submenu').style.display;
                let isShow = statsFloatMenu != 'grid' ? false:true;     
            let _isShow  = isShow ? 'none':'grid';
        document.querySelector('#submenu').style.display = _isShow;
        isShow = !isShow;
    }

    subMenuBuild(item,submenu){
        let _id = "nav_" + item.innerText.toLowerCase();
        item.id= _id;
        let div = cria('div');
        let a = cria('a')
        a.href = `#${_id}`;
        a.append(item.innerText);
        div.append(a);
        submenu.appendChild(div);
    }
}


export default Menu;