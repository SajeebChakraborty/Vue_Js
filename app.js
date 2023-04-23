var app=new Vue({
    el: '#app',
    data: {
        count: 0,
        link: 'https://www.google.com',
        message: 'Hello Vue!',
        welcome: 'Welcome to Vue.js',
        classes: ['one', 'two'],
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
        },
        amount(data)
        {

            return this.count+=data;

        }
    }
})