let display=document.querySelectorAll('.display')
var counter=0;
display.forEach((display,index)=>{
    display.style.left=`${index*100}%`
})

function toPrev(){
    counter--;
    displayImages();
}
function toNext(){
    counter++;
    displayImages()
}

function displayImages(){
    if(counter>=display.length){
        counter=0;
    }
    if(counter<0){
       counter=display.length-1;
    }
    display.forEach((display)=>{
        display.style.transform=`translateX(-${counter*100}%)`
    })
}

let button=document.querySelectorAll('.button');

button.forEach((button)=>{
    button.addEventListener("mouseover",(e)=>{
       let buttonID=e.currentTarget.dataset.id 
       display.forEach((display)=>{
        let imageID=display.getAttribute('id')
        // console.log(buttonID)
        if(imageID==buttonID){
            if(buttonID>2){
                counter=buttonID-1;
                displayImages();
            }
            else if(buttonID==1){
                counter=buttonID;
                displayImages();
            }
            else{
                counter=0;
                displayImages();
            }
        }
       })
    })
})