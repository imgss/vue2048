import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    score: 0
};
let getters = {
    score: state => state.score
}
let actions = {}
let mutations = {
    addScore(st, score) {
        st.score += score;
    }

}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})