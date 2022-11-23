<template>
    <section class="py-5">
        <div class="container my-5" data-aos="fade-right">
            <div class="d-flex justify-content-between align-items-center my-4">
                <h2>
                    Latest articles
                </h2>
                <p>
                    Read all articles <i class="fa-solid fa-chevron-right"></i>
                </p>
            </div>
            <div class="d-flex">
                <div v-for="(item, index) in store.cardArticles" :key="index">
                    <CardArticles :articles=item />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store.js';

import CardArticles from '../cardcomponents/CardArticles.vue';

export default {
    name: 'ArticleComponent',
    components: { CardArticles },
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


section {

    p {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: unset;

        &:hover {
            color: $royalblue;
        }

        i {
            font-size: 1rem;
        }
    }
}
</style>