if(document.body.clientWidth > 425){
    document.body.style.overflow = 'hidden';
    let div = document.createElement('div');
    let span = document.createElement('span');
    div.id = "displayNotValid";
    span.innerHTML = "Le display que vous utilisez n'est pas adapté pour ce site, veuillez passer sur smartphone. 😉"
    div.append(span);
    document.body.prepend(div);
}