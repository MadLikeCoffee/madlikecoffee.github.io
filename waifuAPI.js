const waifupicturedisplay = document.querySelector('.bubbleicon > img');
const waifubutton = document.getElementById('generatemywaifu');

const sfwradio = document.getElementById('SFW')
const nsfwradio = document.getElementById('NSFW')


//console.log(waifubutton)
//console.log(waifupicturedisplay)

var firsttime = 0;
//Can be SFW or NSFW
var waifutype = 'sfw'
var waifucategory = 'waifu'
//URL for the API
//const apiURL = `https://api.waifu.pics/${waifutype}/${waifucategory}`
const apiURL = "https://api.waifu.pics/"
//console.log(apiURL)

async function waifu(waifutype, waifucategory) {
    try {
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
    catch(err){
        console.log(err);
        document.querySelector('.bubbleicon').innerHTML = "Error occured"
    }
    
}


waifu(waifutype, waifucategory)
waifubutton.addEventListener("click", () => {
    
    waifucategory = document.getElementById('waifucategories').value
    waifu(waifutype, waifucategory)
    
})