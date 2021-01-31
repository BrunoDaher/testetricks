

function getFrag(url,divName){

    let path = url != "index.html"? "frags/":"";

    fetch(path + url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string   
        let _divTarget = document.querySelector(divName);
        _divTarget.innerHTML = html; 
        url=='menu.html' ? init():"";
    }).catch(function (err) {
        // There was an error
        //console.warn('Something went wrong.', err);
    });
    
}


getFrag('menu.html', 'header');




