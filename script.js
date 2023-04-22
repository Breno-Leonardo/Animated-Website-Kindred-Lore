let div = document.getElementById('scroll-container')
let man = document.getElementById('man')
let masks = document.getElementById('masks')
let lambMask = document.getElementById('lamb-mask')
let wolfMask = document.getElementById('wolf-mask')
let kindred = document.getElementById('kindred')
let fog = document.getElementById('fog')
let music = document.getElementById('music')

div.addEventListener('scroll', function () {
    let value = parseInt(100 * div.scrollTop / (div.scrollHeight - div.clientHeight))
    // console.log("Value:" + value)
    
    //man
    if (value < 18) {
        man.style.opacity = 1.0 - (value / 18)
        man.style.display = "block"
        masks.style.display = "none"
    } 
    if (value > 18 ) {
        man.style.display = "none"
        masks.style.display = "block"
        
        
    }
    if (value <= 33) {
        masks.style.opacity = (value / 33)
    }
    if (value <= 57) {
        lambMask.style.marginRight = ((value - 18) * 24) / 39 + "%"
        wolfMask.style.marginLeft = ((value - 18) * 24) / 39 + "%"
    }
    if (value >= 58 && value <= 63) {

        masks.style.opacity = 1.0- 1.0/( 63-value)
    }
    if(value>63){
        kindred.style.display = "block"
        masks.style.display = "none"
    }
    if(value>=64 && value <= 70){
        kindred.style.opacity = 1.0/( 70-value)
       
    }
    if(value>=71 && value <= 95){
        fog.style.opacity = 1.0-1.0/( 95-value)
       
    }
    if(value> 98){
        div.style.opacity = 0;
        
        kindred.style.opacity = 1.0;
        fog.style.opacity = 0;
    }
    else
    div.style.opacity = 1;


    //masks
})