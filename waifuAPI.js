const waifupicturedisplay = document.querySelector('.bubbleicon > img');
const waifubutton = document.getElementById('generatemywaifu');

//console.log(waifubutton)
//console.log(waifupicturedisplay)

var firsttime = 0;
//Can be SFW or NSFW
var waifutype = 'sfw'
var waifucategory = 'blush'
//URL for the API
//const apiURL = `https://api.waifu.pics/${waifutype}/${waifucategory}`
const apiURL = "https://api.waifu.pics/"
//console.log(apiURL)

async function waifu(waifutype, waifucategory) {
    const response = await fetch(apiURL + `${waifutype}/${waifucategory}`);
    var data = await response.json();

    waifupicturedisplay.setAttribute("src", `${data.url}`)
    //console.log(data.url);
    if(firsttime == 1){
        setTimeout(() => {
        document.querySelector('.bubbleicon > img').scrollIntoView({behavior: "smooth"})
    }, 300);
    }
    firsttime = 1;
}
function scrolltogenerate(){
    setTimeout(() => {
        document.querySelector('.bubbleicon > img').scrollIntoView({behavior: "smooth"})
    }, 300);
}

waifu(waifutype, waifucategory)
waifubutton.addEventListener("click", () => {
    if(document.getElementById('SFW').checked == true){ 
        waifutype = 'sfw'
        //console.log(waifutype)
    }
    else if (document.getElementById('NSFW').checked == true){
        waifutype = 'nsfw'
        //console.log(waifutype)
        //document.getElementById('waifucategories').setAttribute("class", "democlass")
    }
    waifucategory = document.getElementById('waifucategories').value

    waifu(waifutype, waifucategory)
    scrolltogenerate()
    
})