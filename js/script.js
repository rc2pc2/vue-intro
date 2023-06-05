const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            classes : 'text-white bg-dark p-5 text-center',
            imageSrc : './img/paperella.webp',
        }
    },

    methods: {
        testingFunction(){
            this.message = 'How to edit data fields from a function';
        }
    },

}).mount('#app');

