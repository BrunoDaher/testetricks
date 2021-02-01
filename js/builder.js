

function getFrag(url,divName){
    
    let path = url != "index"? "frags/":"";

    fetch(path + url + ".html").
        then( response =>   {
        // The API call was successful!                
            console.log(response);
            return response.ok ? response.text():false;
            })
            .then( html =>  
            {
                let _divTarget = document.querySelector(divName);                
                _divTarget.innerHTML = html;                 
                url=='menu' ? menuInit():"";             
            })
            .catch(function () {        
                console.log('Something went wrong.');
            });

    setTimeout( ()=> { syncMenuInit(url)} , 10);   
    
}

function getFrag2(url,divName){
    
    let path = url != "index"? "frags/":"";

    fetch(path + url + ".html").then( 
        function (response) {
        // The API call was successful!                
                    response.ok;
                    return response.ok ? response.text():"não carregado";                
            }).then(function (html) {
                // This is the HTML from our response as a text string   
                let _divTarget = document.querySelector(divName);
                //na div correspondente o retorno HTML
                _divTarget.innerHTML = html; 
                //caso inicio não inicia listener 
                url=='menu' ? menuInit():"";     
        //attListener('fase2');
                }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.');
    });

    setTimeout( ()=> { syncMenuInit(url)} , 10);   
    
}

getFrag('menu', 'header');

//getFrag('inicio.html', 'main');
function syncMenuInit(url){
    console.log('atualizando menus -> ' + url );
    let link = document.querySelectorAll('.link');         
    link ? link.forEach(item => addAction(item)):false;  
    
}
///attListener();



