Vue.createApp({
    data() {
      return {
        word: '',
        wordLenght:'',
        show:false
      }
    },
    methods:{
        calculateWordLenght(){
            this.wordLenght=this.word.length;
            this.show=true;
        }
    }
  }).mount('#app')