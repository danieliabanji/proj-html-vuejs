<template>
    <header>
        <div class="container wrapper p-4">
            <div>
                <img src="/img/logo.png" alt="">
            </div>
            <div class="d-flex align-items-center">
                <nav class="">
                    <ul>
                        <li v-for="(item, index) in store.linkHeader" :key="index">
                            <a :href="item.url" :class="{ 'active': item.current, 'new': item.new }">{{ item.text
                            }}</a>
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
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

header {
    background-color: $codgray;
    // height: 100px;
    // justify-content: space-between;
}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    font-size: 1.25rem;

    ul {
        display: flex;
        align-items: center;
        margin-bottom: unset;


        li {
            list-style: none;

        }


    }

}

a {
    text-decoration: none;
    color: $silver;
    margin: 0 0.75rem;

    &.active,
    &:hover {
        color: $white;
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