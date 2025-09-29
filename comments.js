const asd = document.getElementsByClassName('comment-container')


for(let i = 0; i <= asd.length -1; i++ ){
    asd.item(i).children.item(1).addEventListener("click", () => {
    if(asd.item(i).children.item(3).classList.contains('hidden') == true){
        /*console.log('contains')*/
        asd.item(i).children.item(3).classList.remove('hidden')
    }
    else if(asd.item(i).children.item(3).classList.contains('hidden') == false){
        asd.item(i).children.item(3).classList.add('hidden')
    }
    
})
}