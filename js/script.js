const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            classes : 'text-white bg-dark p-5 text-center'
        }
    },

    methods: {
        funzione(){
            this.message = 'cosa nuova';
        }
    },

}).mount('#app');

