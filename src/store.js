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

    ]


});