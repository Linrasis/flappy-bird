import game from './game'
import bird from './bird'
import ground from './ground'
import hills from './hills'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    game,
    bird,
    ground,
    hills
})

export default rootReducer
