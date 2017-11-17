import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    score: 0,
    bestScore: 0
};
let getters = {
    score: state => state.score
}
let actions = {}
let mutations = {
    addScore(state, score) {
        state.score += score;
        if(state.score > state.bestScore){
            state.bestScore = state.score
        }
    }

}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})