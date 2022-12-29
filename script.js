let color = "lightgrey"
let image1 = "switchon.png"
let label1 = "Lights on!"
function light() {
     color = "lightgrey"
     image1 = "switchon.png"
     label1 = "Lights on!"
    
    console.log(label1)
    
    document.getElementById("card").style.backgroundcolor = color
    document.getElementById("icon").src = image1
    document.getElementById("label").innerText = label1
}

let color1 = "lightgrey"
let image2 = "switchoff.png"
let label2 = "Lights off!"
function dark() {
    color1 = "lightgrey"
    image2 = image2
    label2 = label2
    
    console.log(label2)
    
    document.getElementById("card").style.backgroundcolor = color1
    document.getElementById("icon").src = image2
    document.getElementById("label").innerText = label2
}