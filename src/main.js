import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

let app = new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
window.onload = function(){
    app.$store.dispatch('init')
}
window.onbeforeunload = function(){
    app.$store.dispatch('save')
    return true
}