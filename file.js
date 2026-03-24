let cf = document.querySelector('.menu button:nth-child(1)');
let fc = document.querySelector('.menu button:nth-child(2)');
let kc = document.querySelector('.menu button:nth-child(3)');
let kf = document.querySelector('.menu button:nth-child(4)');
let fk = document.querySelector('.menu button:nth-child(5)');
let ck = document.querySelector('.menu button:nth-child(6)');

let meb = document.querySelector('.meb>button');
let input = document.getElementById('input');
let result = document.querySelector('.outp');
let convert = document.querySelector('.sec1 button')

let men = document.querySelector('.men');
let htxt = document.getElementById('head');
let sspan = document.querySelector('.sec1 span');

meb.addEventListener('click',() => {
    men.classList.toggle('disp');
})

cf.addEventListener('click',() => {
    input.removeAttribute('disabled');
    input.focus();
    convert.removeAttribute('onclick');
    convert.setAttribute('onclick','CtoF()');
    htxt.innerHTML = 'Celsius to Fahrenheit';
    sspan.innerHTML = '℃';
    input.value = ' ';
    result.innerHTML = ' ';

    cf.classList.remove('bst');
    cf.classList.add('active')

    let obj = [kc,fc,kf,fk,ck];
    for (let t = 0; t < obj.length; t++) {
        const element = obj[t];
        element.classList.remove('active');
        element.classList.add('bst')
        
    }
})
fc.addEventListener('click',() => {
    input.removeAttribute('disabled');
    input.focus()
    convert.removeAttribute('onclick');
    convert.setAttribute('onclick','FtoC()')
    htxt.innerHTML = 'Fahrenheit to Celsius'
    sspan.innerHTML = '℉'
    input.value = ' '
    result.innerHTML = ' '

    fc.classList.remove('bst');
    fc.classList.add('active')

    let obj = [kc,ck,kf,fk,cf];
    for (let t = 0; t < obj.length; t++) {
        const element = obj[t];
        element.classList.remove('active');
        element.classList.add('bst')
        
    }
})
kc.addEventListener('click',() => {
    input.removeAttribute('disabled');
    input.focus()
    convert.removeAttribute('onclick');
    convert.setAttribute('onclick','ktoc()')
    htxt.innerHTML = 'Kelvin to Celsius'
    sspan.innerHTML = 'K'
    input.value = ' '
    result.innerHTML = ' '

    kc.classList.remove('bst');
    kc.classList.add('active')

    let obj = [ck,fc,kf,fk,cf];
    for (let t = 0; t < obj.length; t++) {
        const element = obj[t];
        element.classList.remove('active');
        element.classList.add('bst')
        
    }
})
kf.addEventListener('click',() => {
    input.removeAttribute('disabled');
    input.focus()
    convert.removeAttribute('onclick');
    convert.setAttribute('onclick','ktof()')
    htxt.innerHTML = 'Kelvin to Fahrenheit'
    sspan.innerHTML = 'K'
    input.value = ' ';
    result.innerHTML = ' ';

    kf.classList.remove('bst');
    kf.classList.add('active')

    let obj = [kc,fc,ck,fk,cf];
    for (let t = 0; t < obj.length; t++) {
        const element = obj[t];
        element.classList.remove('active');
        element.classList.add('bst')
        
    }
})
fk.addEventListener('click',() => {
    input.removeAttribute('disabled');
    input.focus()
    convert.removeAttribute('onclick');
    convert.setAttribute('onclick','ftok()')
    htxt.innerHTML = 'Fahrenheit to Kelvin'
    sspan.innerHTML = '℉';
    input.value = ' ';
    result.innerHTML = ' ';

    fk.classList.remove('bst');
    fk.classList.add('active')

    let obj = [kc,fc,kf,ck,cf];
    for (let t = 0; t < obj.length; t++) {
        const element = obj[t];
        element.classList.remove('active');
        element.classList.add('bst')
        
    }
})
ck.addEventListener('click',() => {
    input.removeAttribute('disabled');
    input.focus()
    convert.removeAttribute('onclick');
    convert.setAttribute('onclick','ctok()')
    htxt.innerHTML = 'Celsius to Kelvin'
    sspan.innerHTML = '℃'
    input.value = ' '
    result.innerHTML = ' '

        ck.classList.remove('bst');
        ck.classList.add('active')

    let obj = [kc,fc,kf,fk,cf];
    for (let t = 0; t < obj.length; t++) {
        const element = obj[t];
        element.classList.remove('active');
        element.classList.add('bst')
        
    }

    
})

function CtoF() {
    if (input.value.includes('+')) {
        window.prompt('ml')
    }
    result.innerHTML = Number((1.8*input.value) + 32)
    if (result.innerHTML.toString().includes('.') == false) {
        result.innerHTML = Number(result.innerHTML).toFixed(0) + ' ' + '℉'
    }else{
        result.innerHTML = Number((1.8*input.value) + 32).toFixed(2) + ' ' + '℉'
    }
    if(result.innerHTML.toString().length > 9){
        result.innerHTML = Number((1.8*input.value) + 32).toPrecision(3)
    }
}
function FtoC() {
    result.innerHTML = Number((input.value - 32)/1.8)
    if (result.innerHTML.toString().includes('.') == false) {
        result.innerHTML = Number(result.innerHTML).toFixed(0) + ' ' + '℃'
    }else{
        result.innerHTML = Number((input.value - 32)/1.8).toFixed(2) + ' ' + '℃'
    }
    if(result.innerHTML.toString().length > 9){
        result.innerHTML = Number((input.value - 32)/1.8).toPrecision(3)
    }
}
function ktoc() {
    result.innerHTML = Number(input.value - 273)
    if (result.innerHTML.toString().includes('.') == false) {
        result.innerHTML = Number(result.innerHTML).toFixed(0) + ' ' + '℃'
    }else{
        result.innerHTML = Number(input.value - 273).toFixed(2) + ' ' + '℃'
    }
    if(result.innerHTML.toString().length > 9){
        result.innerHTML = Number(input.value - 273).toPrecision(3)
    }
}
function ktof() {
    result.innerHTML = (Number(1.8*(input.value - 273)) + 32)
    if (result.innerHTML.toString().includes('.') == false) {
        result.innerHTML = Number(result.innerHTML).toFixed(0) + ' ' + '℉'
    }else{
        result.innerHTML = Number(Number(1.8*(input.value - 273)) + 32).toFixed(2) + ' ' + '℉'
    }
    if(result.innerHTML.toString().length > 9){
        result.innerHTML = (Number(1.8*(input.value - 273)) + 32).toPrecision(3)
    }
}
function ftok() {
    result.innerHTML = Number(((input.value - 32)/1.8) + 273);
    if (result.innerHTML.toString().includes('.') == false) {
        result.innerHTML = Number(result.innerHTML).toFixed(0) + ' ' + 'K'
    }else{
        result.innerHTML = Number(((input.value - 32)/1.8) + 273).toFixed(2) + ' ' + 'K'
    }
    if(result.innerHTML.toString().length > 9){
        result.innerHTML = Number(((input.value - 32)/1.8) + 273).toPrecision(3)
    }
}
function ctok() {
    result.innerHTML = Number(Number(input.value) + 273);
    if (result.innerHTML.toString().includes('.') == false) {
        result.innerHTML = Number(result.innerHTML).toFixed(0) + ' ' + 'K'
    }else{
        result.innerHTML = Number(Number(input.value) + 273).toFixed(2) + ' ' + 'K'
    }
    if(result.innerHTML.toString().length > 9){
        result.innerHTML = Number(Number(input.value) + 273).toPrecision(3)
    }
}



