import GameField from './GameField';
import GameState from './GameState';

const main = () => {

    const app = document.getElementById('app');
    const players=['user', 'computer'];    
    GameState.placeShips(players[0]);
    GameState.placeShips(players[1]);
    app.append(GameField(players[0]));
    app.append(GameField(players[1]));
    
    GameState.startGame();
}

main();