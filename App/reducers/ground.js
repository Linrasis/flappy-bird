import { GROUND_RESET, GROUND_MOVE_LEFT, GROUND_WIDTH, GROUND_HEIGHT, GROUND_X, GROUND_Y } from '../constants/ground'

const initialState = {
    groundWidth: GROUND_WIDTH,
    groundHeight: GROUND_HEIGHT,
    groundX: GROUND_X,
    groundY: GROUND_Y
}

function ground(state = initialState, action) {
    switch(action.type) {
        case GROUND_RESET:
            return {...state,
                groundX: initialState.groundX
            }
        case GROUND_MOVE_LEFT:
            return {...state,
                groundX: state.groundX - action.amount
            }
        default:
            return state
    }
}

export default ground
