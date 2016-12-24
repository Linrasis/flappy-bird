import { HILLS_RESET, HILLS_MOVE_LEFT } from '../constants/hills'

export function reset() {
    return {
        type: HILLS_RESET
    }
}

export function moveLeft() {
    return {
        type: HILLS_MOVE_LEFT,
        amount: 1
    }
}
