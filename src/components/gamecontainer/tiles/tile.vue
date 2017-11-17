<template>
<div 
class='tile' 
:class="{'new': typeof tile === 'string', 'merged': merged}" 
:style="style" >
{{tile ? tile : ''}}
</div>
</template>

<script type='text/babel'>
export default {
    data(){
        return {
            merged:false,
            colormap: {
                2: "#eee4da",
                4: "#ede0c8",
                8: "#f2b179",
                16: '#f59563',
                32: '#f67c5f',
                64: '#f65e3b',
                128: '#edcf72',
                256: '#edcc61',
                512: '#edc850',
                1024: '#edc53f',
                2048: '#edc22e',
                4096: '#3c3a32',
                8192: '#3c3a32',
            }
        }
    },
    props: ['tile'],
    computed:{
        style(){
            return {
                backgroundColor: this.colormap[this.tile] , 
                color: this.tile>4 ? '#f9f6f2' : '#333',
                fontSize: this.tile>1000 ? '36px' : '48px'
            }
        }
    },
    watch: {
        tile(now, prev){
            if(now && prev && now !== prev){
                this.merged = true
                setTimeout(()=> this.merged = false, 100)
            }
        }
    }
}
</script>

<style>

</style>