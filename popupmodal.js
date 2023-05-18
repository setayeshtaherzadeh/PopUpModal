const button = document.querySelector('button')
const modalParent = document.querySelector('.modal-parent')
const x = document.querySelector('.X')
const sectionelem=document.querySelector('section')
function showmodal(){
    modalParent.style.display='block'
    sectionelem.style.filter='blur(10px)'   //tar kardan background
    button.blur()
}
// zarbdar bastan
function hidemodalwithx(){
    modalParent.style.display = 'none'
    sectionelem.style.filter='blur(0px)'
}
function hidemodalwithesc(evet){
    if(evet.keyCode==='27'){
    modalParent.style.display = 'none'
    sectionelem.style.filter='blur(0px)'}
}

button.addEventListener('click',showmodal)
x.addEventListener('click',hidemodalwithx)   //zarbdar bastan 
document.body.addEventListener('keydown',hidemodalwithesc)
