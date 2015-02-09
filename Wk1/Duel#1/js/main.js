/**
 Name- Aaron Peachey
 Date - February 7th, 2015
 Assignment - Analyze Duel #1
*/

// self-executing function
(function(){ //auto function starts the game when page is actuvated

    console.log("FIGHT!!!"); //writes to the browser console

    //player name
    var playerOneName = "Spiderman"; //variable designating player 1 name
    var playerTwoName = "Batman"; //variable designating player 2 name

    //player damage
    var player1Damage = 20; //var designating damage player 1 can deal
    var player2Damage = 20; //var designating damage player 2 can deal

    //player health
    var playerOneHealth = 100; //var designating health player 1 starts with
    var playerTwoHealth = 100; //var designating health player 2 starts with

    //initiate round
    var round=0; //var designating the round in which play begins

    function fight(){ //calling the function to start the game
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //alert pop up stating health of players
        for (var i = 0; i < 10; i++) //a for loop showing that it will only go for 10 cycles
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; //var designating minimum damage player 1 will sustain
            var minDamage2 = player2Damage * .5; //var designating minimum damage player 2 will sustain
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //var designating the program to deal damage at random intervals using at least the minimum damage for player 1
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //var designating the program to deal damage at random intervals using at least the minimum damage for player 2

            //inflict damage
            playerOneHealth-=f1; //using the assigned variable to determine player 1 health after each round
            playerTwoHealth-=f2; //using the assigned variable to determine player 2 health after each round

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //printing to the console the players names and health

            //check for victor
            var result = winnerCheck(); // var designating a check to the player health to determine a winner
            console.log(result); // printing to console the results of health check
            if (result==="no winner") //if statement used to determine true or false a winner based on health points.
            {
                round++; //using assigned variable to increment rounds
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //alert pop up notifying user of current round status

            } else{
                alert(result); //else statement showing results if statement above was not true.
                break; //break out of the loop is this else statement is utilized.
            };

          };
    };

    function winnerCheck(){ //calling the winnercheck function to determine a winner
        var result="no winner"; //var designating result as no winner
        if (playerOneHealth<1 && playerTwoHealth<1) //if statement used to determine that is health is less than 1 they both die.
        {
            result = "You Both Die"; //result if the above was true
        } else if(playerOneHealth<1){ //determining if player 1 had health less than 1
            result =playerTwoName+" WINS!!!" //declares player two the winner
        } else if (playerTwoHealth<1) //determining if player 1 had health less than 1
        {
            result = playerOneName+" WINS!!!" //declares player 1 the winner
        };
       return result; //returning the value of this variable to the placeholder.
    };

    /*******  The program gets started below *******/
    fight(); //calling the fight function

})();