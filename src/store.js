import { reactive } from "vue";

export const store = reactive({


    linkHeader: [
        {
            text: 'Home',
            url: '#',
            current: true
        },
        {
            text: 'Services',
            url: '#',
            current: false
        },
        {
            text: 'About',
            url: '#',
            current: false
        },
        {
            text: 'Videos',
            url: '#',
            current: false
        },
        {
            text: 'Blog',
            url: '#',
            current: false
        },
        {
            text: 'Store',
            url: '#',
            current: false,
        },
        {
            text: 'new',
            url: '#',
            new: true
        }

    ],

    cardWorkout: [
        {
            img: '/img/service6-2x.jpg',
            title: 'Crossfit workout',
            text: 'Push your limits',
            wave: '/img/zigzag-white.png'
        },
        {
            img: '/img/box1-2x.jpg',
            title: 'New gym apparel',
            text: 'Look good, feel good',
            wave: '/img/zigzag-white.png'
        },
        {
            img: '/img/box3-2x.jpg',
            title: 'Team training',
            text: 'Find a partner',
            wave: '/img/zigzag-white.png'
        }
    ]


});