// dom element
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const main = document.querySelector('.background')
const list_item_dom = document.querySelector('.background .list')
const thumbnail = document.querySelector('.background .thumbnail')
let timeRunning = 2500

// check if card or prev or next has been clicked
next.addEventListener('click',()=>show_slider('next'));
prev.addEventListener('click',()=>show_slider('prev'));
thumbnail.addEventListener('click',(e)=>showtarget(e.target.parentElement))


// handle next and previous probability
function show_slider(type){
    const list_items = list_item_dom.querySelectorAll('.item');
    const thumbnail_items = thumbnail.querySelectorAll('.item');

    if(type === 'next'){
        list_item_dom.appendChild(list_items[0]);
        thumbnail.appendChild(thumbnail_items[0]);
    }else{
        list_item_dom.prepend(list_items[list_items.length-1])
        thumbnail.prepend(thumbnail_items[thumbnail_items.length-1])
    }
    animaiton(type)

}

// function to pick target clicked element and show it 
function showtarget(ele){
    // check if the target not last element
    if(ele == thumbnail.children[thumbnail.children.length-1]) return

    const list_items = list_item_dom.querySelectorAll('.item');
    const thumbnail_items = thumbnail.querySelectorAll('.item');
    let index = [...thumbnail.children].indexOf(ele);

    thumbnail.prepend(thumbnail_items[thumbnail_items.length-1])
    thumbnail.appendChild(ele)
    list_item_dom.prepend(list_items[index+1])
    animaiton('prev')
}

// animation
function animaiton(type){
    main.classList.add(type)

    // wait until animaiton finnish to activate the next,prev buttons 
    clearTimeout(time_active);
    var time_active = setTimeout(()=>{
        main.classList.remove(type)
    },timeRunning)
}
