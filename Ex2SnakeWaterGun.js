//create a game of snake, water and gun. The game should ask u to enter s, w or g. The computer should be able to randomly generate s,w or g and declare win or lose using alert. use confirm and prompt whatever required.

let arr = ['s','w','g']

let yono;
// let chances = 0
do{
    let randomNum = Math.floor(Math.random()*arr.length) 
    // console.log(randomNum)

    let input = prompt("Enter any one of these\nS for Snake, W for water, G for gun.")
    let comp = arr[randomNum]
    if(input === comp){
        alert(`You chose ${input} and computer chose ${comp}\n Nobody wins!`)
        yono = confirm("Do you want to play again?")
    }
    if (input== 's' && comp == 'w'){
        alert(`You chose ${input} and computer chose ${comp}\n You win`)
        yono = confirm("Do you want to play again?")
    }
    else if(input== 's' && comp == 'g'){
        alert(`You chose ${input} and computer chose ${comp}\nYou lose`)
        yono = confirm("Do you want to play again?")
    }
    else if(input== 'w' && comp == 's'){
        alert(`You chose ${input} and computer chose ${comp}\nYou lose`)
        yono = confirm("Do you want to play again?")
    }
    else if(input== 'w' && comp == 'g'){
        alert(`You chose ${input} and computer chose ${comp}\nYou win`)
        yono = confirm("Do you want to play again?")
    }
    else if(input== 'g' && comp == 's'){
        alert(`You chose ${input} and computer chose ${comp}\nYou win`)
        yono = confirm("Do you want to play again?")
    }
    else if(input== 'g' && comp == 'w'){
        alert(`You chose ${input} and computer chose ${comp}\n You lose`)
        yono = confirm("Do you want to play again?")
    }
    

}while (yono != false)