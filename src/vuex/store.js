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
let actions = {
    save ({commit}) {
        commit('saveState')
    },
    init ({commit}) {
        commit('init')
    }
}
let mutations = {
    addScore (state, score) {
        state.score += score;
        if(state.score > state.bestScore){
            state.bestScore = state.score
        }
    },
    saveState(state){
        console.log(state)
        localStorage.setItem('state', JSON.stringify(state))
    },
    init(state){
        let savedState = JSON.parse(localStorage.getItem('state'));
        if(savedState){

            let {score, bestScore} = savedState;
            state.score = score
            state.bestScore = bestScore
        }
    }

}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})