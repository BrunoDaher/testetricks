//abertura da pagina
inicio();

function inicio(){
    loadFrag('menu', 'header');    
}

function loadFrag(url,divName){
    let path = url != "index"? "frags/":"";

    //console.log(path + url + ".html");
    fetch(path + url + ".html").
        then( response =>   {
        // The API call was successful!                
            return response.ok ? response.text():false;            
            })
            .then( html =>  
            {
                loadHtml(html, divName, url);
                // ^nesse momento o conteúdo já foi carregado                
                url=='menu' || url=='inicio'? "":sumario();    
            })
            .catch(function (e) {        
                console.log('Something went wrong. Descrição');
                console.log(e);
            });

    setTimeout( ()=> { syncMenuInit(url)} , 10);       
}


function loadHtml(html,divName,url){
    let _divTarget = document.querySelector(divName);                                
        _divTarget.innerHTML = html;         
        url=='menu' ? menuInit():"";                 
}

//loadFrag('inicio.html', 'main');
function syncMenuInit(url){
    //console.log('atualizando menus -> ' + url );
    let link = document.querySelectorAll('.link');         
    link ? link.forEach(item => addAction(item)):false;      
}
///attListener();

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