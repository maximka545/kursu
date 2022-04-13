class PositionalImage{
  constructor(x, y, imgSrc){
    this.x = x
    this.y = y
    this.imgSrc = imgSrc
  }
  setCoordinates(){
    this.img.style.left = newX + "px";
    this.img.style.top = newY+ "px";
    }

  changePosition(newX, newY){
    this.newX = newX
    this.newY = newY
    this.setCoordinates()
  }

  movePosition(deltaX, deltaY){
    this.changePosition(this.x+deltaX, this.y+deltaY)
  }

  render(containerId){
    const container = document.getElementById(containerId)
    const img = document.createElement('img')
    this.img.setAttribute('src', this.imgSrc)
    this.img.style.position = 'absolute'
    this.img.style.left = this.x + "px";
    this.img.style.top = this.y + "px";
    container.appendChild()

  }
}

function(){
  const img = new PositionalImage(100, 100)
}



class MovableImage extends PositionalImage {
  constructor(x, y, imgSrc, maxStepX, maxStepY, delay){
    super(x,y,imgSrc)
    this.maxStepX = maxStepX;
    this.maxStepY = maxStepY;
    this.delay = delay;
  }
  move(){
    const deltaX=-this.maxStepX + Math.floor(Math.random()*2*this.maxStepX);
    const deltaY=-this.maxStepY + Math.floor(Math.random()*2*this.maxStepY);
    this.movePosition(deltaX,deltaY)

  }
  render(containerId){
    super.render(containerId)
    this.intervalId = setInterval(() => this.move(), this.delay);
  }
}
