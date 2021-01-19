const app = Vue.createApp({
    data() {
        return {
            word: ''
        }
    },
    computed : {
        getStyle() {
            if (this.word.length % 2 == 0) {
                return 'red'
            }
            return 'green'
        }
    }
})

app.mount('#app')