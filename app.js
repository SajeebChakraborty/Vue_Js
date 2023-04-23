var app=new Vue({
    el: '#app',
    data: {
        link: 'https://www.google.com',
        message: 'Hello Vue!',
        welcome: 'Welcome to Vue.js',
    },
    methods: {
        myOutcome() {
            return "good";
        },
        myAge() {
            return `${this.welcome} . good`;
        },
        myAge2(age) {
            return `${age} . good`;
        }
    }
})