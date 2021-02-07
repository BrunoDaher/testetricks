window.addEventListener("load", inicio);

function inicio(){
    
    getFrag('menu', 'header');
    //despacha evento
    window.removeEventListener("load", inicio);

    
}


function getFrag(url,divName){
    let path = url != "index"? "frags/":"";

    //console.log(path + url + ".html");

    fetch(path + url + ".html").
        then( response =>   {
        // The API call was successful!                
            return response.ok ? response.text():false;            
            })
            .then( html =>  
            {
                let _divTarget = document.querySelector(divName);                                
                _divTarget.innerHTML = html; 
                url=='menu' ? menuInit():"";                 
                url=='menu' || url=='inicio'? "":subMenu();     
            })
            .catch(function () {        
                console.log('Something went wrong.');
            });

    setTimeout( ()=> { syncMenuInit(url)} , 10);       
}

//getFrag('inicio.html', 'main');
function syncMenuInit(url){
    //console.log('atualizando menus -> ' + url );
    let link = document.querySelectorAll('.link');         
    link ? link.forEach(item => addAction(item)):false;  
    
}
///attListener();



