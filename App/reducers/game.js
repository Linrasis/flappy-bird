import { CHANGE_LIFECYCLE } from '../constants/game'
import { WIDTH, HEIGHT, GRAVITY, LC_WAITING } from '../constants/game'

const initialState = {
    width: WIDTH,
    height: HEIGHT,
    gravity: GRAVITY,
    lifeCycle: LC_WAITING
}

function game(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LIFECYCLE:
            return {...state,
                lifeCycle: action.lifeCycle
            }
        default:
            return state
    }
}

export default game
