import { createStore } from "redux"

const initialState = {
    players:[],
    starters:[],
    substitute:[],

}

const reducerTeam = (state = initialState, action) => {
    return state
}

export default createStore(reducerTeam)