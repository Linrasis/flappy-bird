import { Dimensions } from 'react-native'

export const CHANGE_LIFECYCLE = "CHANGE_LIFECYCLE"

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const GRAVITY = 0.6
export const LC_WAITING = 0
export const LC_PLAYING = 1
export const LC_ENDED = 2
