var get = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new window.XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText);
                }else{
                    reject(xhr);
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    });
}

var getPosts = function() {
    return new Promise(function(resolve, reject) {
        get('./assets/datas.json').then(function(response) {
            var datas = JSON.parse(response);
            resolve(datas);
        }).catch(function(error) {
            console.error(error);
        });
    });
};