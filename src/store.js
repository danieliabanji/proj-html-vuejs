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
    ],

    cardAdvice: [
        {
            img: '/img/video2-2x.jpg',
            title: 'Thighs & glute workout',
            text: 'Increase your mobility'
        },
        {
            img: '/img/video7-2x.jpg',
            title: 'Lift, firm & perk up',
            text: 'Feel ypung again'
        },
        {
            img: '/img/video9-2x.jpg',
            title: 'Slim & trim your waist',
            text: 'Shed those extra pounds'
        },
    ],

    cardTeam: [
        {
            img: '/img/smartwatch.png',
            title: 'Team training',
            subTitle: 'Find a partner',
            text: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            btn: 'Find a partner '
        },
        {
            img: '/img/dumbell.png',
            title: 'Crossfit workout',
            subTitle: 'Push your limits',
            text: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            btn: 'Learn about Crossfit '
        },
        {
            img: '/img/weight-loss.png',
            title: 'Weight loss plan',
            subTitle: 'Shed those pounds',
            text: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            btn: `Schedule a workout `,
        },
    ],
    cardArticles: [
        {
            img: '/img/blog4-2x.jpg',
            title: 'The best protein shake',
            // text: 'By admin|November 26th, 2019|Gym'
        },
        {
            img: '/img/blog1-2x.jpg',
            title: 'Ultimate cardio workout',
            // text: 'By admin|November 26th, 2019|Gym'
        },
        {
            img: '/img/blog3-2x.jpg',
            title: 'New juices available now',
            // text: 'By admin|November 26th, 2019|Gym'
        },
    ],

    webCard: [
        {
            img: '/img/yogastudio.png',
            text: 'Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.',
            link: 'Visit Yoga Studio',
            wave: '/img/zigzag-blue.png'
        },
        {
            img: '/img/fitnesscenter.png',
            text: 'Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.',
            link: 'Join Fitness Center',
            wave: '/img/zigzag-blue.png'

        },
        {
            img: '/img/fitnessclub.png',
            text: 'Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.',
            link: 'Learn about FC',
            wave: '/img/zigzag-blue.png'

        },
        {
            img: '/img/powergym.png',
            text: 'Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.',
            link: 'Visit Power Gym',
            wave: '/img/zigzag-blue.png'

        },
    ]

});