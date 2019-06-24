new Vue({
    el:"#app",
    data:{
        greeting:"Hello world",
        age: 22,
        func: () =>{
            return "Message from function"
        },
        obj:{
            name:"Gabriel"
        },
        src: 'imgs/ao-dai-beautiful-beauty-1308881.jpg',
        alt:'another images',
        userAge:23,
        allowed: 25,
    },
    methods:{
        welcome(){
            return this.greeting;
        }

    }
});