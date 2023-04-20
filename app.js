var app=new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        myOutcome() {
            return "good";
        },
        myAge() {
            return '${this.message} . js';
        }
    }
})