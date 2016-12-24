import { CHANGE_LIFECYCLE } from '../constants/actionTypes'

export function changeLifeCycle(lifeCycle) {
    return {
        type: CHANGE_LIFECYCLE,
        lifeCycle: lifeCycle
    }
}
