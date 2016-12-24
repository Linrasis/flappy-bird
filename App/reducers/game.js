import { LOAD_GAME } from '../constants/actionTypes'
import { WIDTH, HEIGHT, GRAVITY, LC_WAITING } from '../constants/game'

const initialState = {
    width: WIDTH,
    height: HEIGHT,
    gravity: GRAVITY,
    lifeCycle: LC_WAITING
}

function game(state = initialState, action) {
    switch(action.type) {
        case LOAD_GAME:
            return state
        default:
            return state
    }
}

export default game
