class Game{
    constructor(){
    
        }

    getState(){
        //read Gamestate from database
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })

    }

    updateState(state){
 //update gamestate
        database.ref('/').update({
           gameState : state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player;
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
     form.hide();
     textSize(30);
     text("GAME START",120,100);
     Player.getPlayerInfo();
     if(allPlayers !== undefined){
         var yposition=130
        for(var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("coral");
                }
                else{
                    fill("black");
                }
               yposition+=25;
               textSize(20)
             text(allPlayers[plr].name + ": " + allPlayers[plr].distance,125,yposition)

        }
     }
    if(keyDown(UP_ARROW) && player.index !==null){
        player.distance +=50;
        player.update();
}
     } 
    }