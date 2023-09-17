const menu = document.getElementById('menu');
const list = document.querySelectorAll('.list')

menu.addEventListener('click', (e) => {
    // console.log(e.target.classList.contains('emoji'));
    // console.log(e.target.parentElement);
    // console.log(e.target.classList);
    if(e.target.classList.contains('emoji')){
        RemoveAll();
        e.target.children[1].classList.toggle('rotate');
        let value = e.target.parentElement
        value.classList.toggle('scale')
    };
    e.stopPropagation();
});


const RemoveAll=()=>{
  for(let index of list){
    index.classList.remove('scale');
    // index.classList.remove('rotate');
  }
}