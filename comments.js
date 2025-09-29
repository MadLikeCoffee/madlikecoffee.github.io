/*const asd = document.getElementsByClassName('comment-container')*/

/*
const parent = document.getElementsByClassName('comment-reply')
console.log(parent.item(0).parentElement.children.item(3))
console.log(parent.item(0).parentElement.children.item(parent.item(0).parentElement.children.length-1))
console.log(parent.item(0).parentElement.children.item(3))
*/



/*
for(let i = 0; i <= asd.length -1; i++ ){
    asd.item(i).children.item(1).addEventListener("click", () => {
    if(asd.item(i).children.item(asd.item(i).children.length-1).classList.contains('hidden') == true){
        //console.log('contains')
        asd.item(i).children.item(asd.item(i).children.length-1).classList.remove('hidden')
    }
    else if(asd.item(i).children.item(asd.item(i).children.length-1).classList.contains('hidden') == false){
        asd.item(i).children.item(asd.item(i).children.length-1).classList.add('hidden')
    }
    
})
}
*/


function commentsection(e){
    //console.log(e)
    //console.log(e.parentElement)
    //console.log(e.parentElement.children)
    //console.log(e.parentElement.children.item(3))
    //console.log(e.parentElement.children.item(3).classList.contains('hidden'))
    //e.parentElement.children.item(3).classList.remove('hidden')

    if(e.parentElement.children.item(e.parentElement.children.length-1).classList.contains('hidden') == true){
        e.parentElement.children.item(e.parentElement.children.length-1).classList.remove('hidden')
    }
    else if(e.parentElement.children.item(e.parentElement.children.length-1).classList.contains('hidden') == false){
        e.parentElement.children.item(e.parentElement.children.length-1).classList.add('hidden')
    }

}