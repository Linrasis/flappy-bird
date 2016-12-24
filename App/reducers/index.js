import game from './game'
import ground from './ground'
import hills from './hills'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    game,
    ground,
    hills
})

export default rootReducer
