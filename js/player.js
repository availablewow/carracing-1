class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;

        }

    getCount(){
        //read playerCount from database
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val();
        })

    }

    updateCount(count){
 //update player count
        database.ref('/').update({
            playerCount : count
        })
    }


    update(){
    var playerIndex = "players/player" +  player.index;
    //write in database
    database.ref(playerIndex).set({
    Name : this.name,
    distance : this.distance
    })
}
  static  getPlayerInfo(){
     database.ref('players').on("value",function(data){
       allPlayers = data.val();
})
}

    
    }
    