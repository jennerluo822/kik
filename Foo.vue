<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 10">{{ n }}</li>
        </ul>
    </div>
</template>
123456
<script>
    export default {
        data () {
            return {
                msg: 'Hello World! test1'
            }
        }
    }
</script>

<style scoped>
    #example {
        background: red;
        height: 100vh;
    }
</style>