import { GROUND_RESET, GROUND_MOVE_LEFT } from '../constants/ground'

export function reset() {
    return {
        type: GROUND_RESET
    }
}

export function moveLeft() {
    return {
        type: GROUND_MOVE_LEFT,
        amount: 1
    }
}
