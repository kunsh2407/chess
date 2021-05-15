class King extends MyObject{
    constructor(x,y,color){
if (color==="white"){
    var imagePath="../imageas/car1.png"
}
else{
    var imagePath="../imageas/kingb.png"
}
super(x,y,30,45,color,imagePath)
    }
}