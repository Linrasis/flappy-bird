import { RESET, MOVE_LEFT } from '../constants/hills'

export function reset() {
    return {
        type: RESET
    }
}

export function moveLeft() {
    return {
        type: MOVE_LEFT,
        amount: 1
    }
}
