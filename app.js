var app=new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        welcome: 'Welcome to Vue.js',
    },
    methods: {
        myOutcome() {
            return "good";
        },
        myAge() {
            return '${this.welcome} . good';
        }
    }
})