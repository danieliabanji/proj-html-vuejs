<template>
    <header>
        <div class="container wrapper p-4">
            <div>
                <img src="/img/logo.png" alt="">
            </div>
            <div class="d-flex align-items-center">
                <nav id="nav">
                    <ul>
                        <li v-for="(item, index) in store.linkHeader" :key="index">
                            <a :href="item.url" :class="{ 'active': item.current, 'new': item.new }"
                                v-if="!item.dropMenu">
                                {{ item.text }}
                            </a>
                            <span v-else>
                                {{ item.text }}

                                <ul class="dropdown">
                                    <li v-for="menu in item.dropMenu">
                                        <a :href="menu.url">
                                            {{ menu.text }}
                                        </a>
                                    </li>
                                </ul>
                            </span>

                        </li>

                    </ul>
                </nav>
                <button>Schedule a workout</button>

                <div>
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
            </div>




        </div>

    </header>
</template>

<script>
import { store } from '../store'

export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,

        }
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

header {
    background-color: $codgray;

}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    text-decoration: none;
    color: $jumbo;
    margin: 0 0.75rem;

    &.active,
    &:hover {
        color: $white;
    }

}

#nav {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}



span {
    position: relative;
    padding: 20px;
    color: $jumbo;
    cursor: pointer;

    &.active,
    &:hover {
        color: $white;
    }

    &:hover .dropdown {
        display: block;
        transition: 2s;
    }

    &:after {
        content: '▼';
        font-size: 0.75rem;
        margin-left: 5px;
        display: inline-block;

    }
}


.dropdown {
    position: absolute;
    top: 100%;
    left: 10%;
    display: none;
    padding: 0;
    list-style-type: none;
    background-color: $codgray;
    border-radius: 8px;

    li a {
        font-size: 1rem;
        display: block;
        padding: 15px;
        margin: unset;
        color: $white;
        text-decoration: none;

        &:hover {
            background-color: $dodgerblue;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            transition: 1s;
        }
    }
}





.new {
    background-color: #fff941;
    color: black;
    margin-left: -0.5rem;
    padding: 0 8px 4px 8px;
    border-radius: 5px;
    font-size: 1.2rem
}

button {
    @include btnblue;
    margin: 0 1.5rem;
    font-weight: 600;
    padding: 10px 30px;
}
</style>