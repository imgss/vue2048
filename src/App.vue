<template>
  <div class='container'>
    <gamehead></gamehead>
    <gamecontainer></gamecontainer>
  </div>
</template>

<script>
    import gamehead from "./components/gamehead"
    import gamecontainer from "./components/gamecontainer"
    export default {
        name: 'app',
        components: {
            gamehead,
            gamecontainer

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 500px;
        margin: 0 auto;
    }
    
    .container {
        width: 500px;
        margin: 0 auto;
    }
    
    h1,
    h2 {
        font-weight: normal;
        color: #776e65;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>