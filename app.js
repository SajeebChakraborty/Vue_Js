var app=new Vue({
    el: '#app',
    data: {

        log:{

            x:0,
            y:0,

        },
        count: 0,
        link: 'https://www.google.com',
        message: 'Hello Vue!',
        welcome: 'Welcome to Vue.js',
        classes: ['one', 'two'],
        name: 'Sajeeb Chakraborty',
        items:[

            {name: 'item1', price: 100, quantity: 10},
            {name: 'item2', price: 200, quantity: 20},
            {name: 'item3', price: 300, quantity: 30},

        ]
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
        },
        over(event)
        {
            this.log.x=event.offsetX;
            this.log.y=event.offsetY;
        },
        show(e)
        {
            console.log(e.target.value);
        },
        show2(e)
        {
            console.log(e.target.value);
        },
        message2()
        {
            console.log("this is a message");
        }


    }
})