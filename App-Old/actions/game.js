import { CHANGE_LIFECYCLE } from '../constants/game'

export function changeLifeCycle(lifeCycle) {
    return {
        type: CHANGE_LIFECYCLE,
        lifeCycle: lifeCycle
    }
}
