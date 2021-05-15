class MyObject {
  costructor(x, y, width, height, color, imagePath) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    if (imagePath ) {
      this.image = loadImage(imagePath);
    }
    this.color = color;
    this.active = true;
  }
  display() {
    if (this.image) {
      push();
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    } else {
      push();
      stroke("grey");
      strokeWeight(3);
      //fill(this.color);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
      console.log("rect")
      pop();
    }
  }
}
