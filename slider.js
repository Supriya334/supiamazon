
function slideshow(images){
    
    let immi= document.getElementById("slider")
    immi.innerhtml={}
    let image=document.createElement("img")
    image.src=images
    immi.append(image)


}
let movImages=[
    "https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/op/hero/Starting_99_3000x1200._CB592765519_.jpg"
]
window.addEventListener("load",function(){
    let index=0
    slideshow(movImages[index])
   setInterval(()=>{
    index++
    if (index > 2){
        index=0
    }
    slideshow(movImages[index])
   },3000)
 
})
console.log("yash")