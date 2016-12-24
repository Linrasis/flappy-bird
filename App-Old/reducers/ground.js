import { GROUND_WIDTH, GROUND_HEIGHT, GROUND_X, GROUND_Y } from '../constants/ground'

const initialState = {
    groundWidth: GROUND_WIDTH,
    groundHeight: GROUND_HEIGHT,
    groundX: GROUND_X,
    groundY: GROUND_Y
}

function ground(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}

export default ground
