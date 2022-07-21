//Generate Random RGB color by clicking button
window.onload= () =>{
    main();
}


function main(){
       document.getElementById('color-btn').addEventListener('click', function(){
       document.body.style.backgroundColor = generateRGBColor();
    })
    
}

//create random color generator function
function generateRGBColor(){
    const red  = Math.floor(Math.random() * 255);
    const green  = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}