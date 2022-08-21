const game = (() => {

    // DOM
    const initBtns = document.querySelectorAll('.mode')
    const squareBtns = document.querySelectorAll('.square')
    const display = document.querySelector('.display')


    // Game 

    let player1 
    let player2
    let currentPlayer
    let board = [ 'E', 'E', 'E',
    'E', 'E', 'E',
    'E', 'E', 'E' ];

    function showMove() {
      if (checkWinner() === true) {
        return
      } else {
          if (currentPlayer.id == 'Player 1') {
            display.textContent = 'Player 2, your move'
            } else if (currentPlayer.type === 'human'){
                display.textContent = 'Player 1, your move'
            } else  {
                display.textContent = 'The AI is thinking'
            }
          }
      }
    
 

                // Change current player 
    function changePlayer() {
      if (currentPlayer === player1) {
        currentPlayer = player2
        } else {
          currentPlayer = player1
        }
    }
  


    const checkWinner = () => {
      if ( (board[0] === board[1]) && (board[0] === board[2]) && (board[0] !== 'E')  
        ||(board[0] === board[3]) && (board[0] === board[6]) && (board[0] !== 'E') 
        ||(board[0] === board[4]) && (board[0] === board[8]) && (board[0] !== 'E')
        ||(board[3] === board[4]) && (board[3] === board[5]) && (board[3] !== 'E') 
        ||(board[6] === board[7]) && (board[6] === board[8]) && (board[6] !== 'E') 
        ||(board[6] === board[4]) && (board[6] === board[2]) && (board[6] !== 'E') 
        ||(board[1] === board[4]) && (board[1] === board[7]) && (board[1] !== 'E')
        ||(board[2] === board[5]) && (board[2] === board[8]) && (board[2] !== 'E') ) {

          display.textContent = `${currentPlayer.id} is the winner!`
          console.log(`${currentPlayer.id} is the winner!`)

          return true
        }
        return false
      }
    
   
    const gameboard = (() => {
        'use strict';

        // AddEventListeners for squares
        squareBtns.forEach(btn => {

          let symbolP1 = document.createElement("img");
          symbolP1.setAttribute("src", "./img/sun.png");
          symbolP1.setAttribute("alt", "sun");
          symbolP1.classList.add("sun")
          let symbolP2 = document.createElement("img");
          symbolP2.setAttribute("src", "./img/moon.png");
          symbolP2.setAttribute("alt", "moon");  
          symbolP2.classList.add("moon")



          btn.addEventListener('click', btn => {
            let coords = `${btn.target.id}`
            const coordsElement = document.getElementById(coords)
            console.log('player: ', currentPlayer.id)

            if (board[coords] === 'E') {
              board.splice(coords, 1, `${currentPlayer.symbol()}`)
              coordsElement.classList.remove("square")
                if (currentPlayer === player1) {
                  coordsElement.appendChild(symbolP1)
                  coordsElement.classList.add("sun")
                  } else {
                    coordsElement.appendChild(symbolP2)
                    coordsElement.classList.add("moon")
                }
            } else {
                return
              }



            showMove()
            changePlayer()
            console.log('BOARD AFTER CHANGES: ', board)
          })
        })


        const resetBoard = () => {
        
        }

        
        return {

            resetBoard,
        
        };
      })();

    const displayController = (() => {
        'use strict';

        function clearDisplay() {
          while (display.firstChild) {
            display.removeChild(display.lastChild)
          }
        }
        

            
    

        initBtns.forEach(btn => {
          btn.addEventListener('click', btn => {
            let mode = btn.target.id
      
            currentPlayer = player1
            player1 = Player('Player 1', 'human')
            player2 = Player('Player 2', mode)
            currentPlayer = player1

            clearDisplay()
            display.textContent = 'Player 1, your move'
            return {player1, player2, currentPlayer}
          })
      
    

          return {
            showMove
        
        };

        
      })
      
    })();


    const gameMode = () => {

    }

    const Player = (id, type) => {

        const symbol = () => {
          if (id === 'Player 1') {
            return 'X'
          } else {
            return 'O'
          }
        }
        return {
            id, symbol,type};
      }
      

})();
