class Form{
constructor(){
    this.input =createInput("NAME");
    this.button=createButton("play")
    this.greeting=createElement("h2");
    }
    hide(){
      this.input.hide();
      this.greeting.hide();
      this.button.hide();
    }
 display(){
     var title=createElement("h1");
     title.html("Car Racing Game");
     title.position(130,0)
     
     this.input.position(130,160)
     
     this.button.position(260,200)

     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();

         player.name = this.input.value();
         playerCount+=1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         
        
         this.greeting.html("hello" +  player.name);
         this.greeting.position(120,160);
     })
 }
    
}