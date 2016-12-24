import { BIRD_WIDTH, BIRD_HEIGHT, BIRD_VEL_Y, BIRD_X, BIRD_Y } from '../constants/bird'

const initialState = {
    birdWidth: BIRD_WIDTH,
    birdHeight: BIRD_HEIGHT,
    birdVelY: BIRD_VEL_Y,
    birdX: BIRD_X,
    birdY: BIRD_Y
}

function bird(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}

export default bird
