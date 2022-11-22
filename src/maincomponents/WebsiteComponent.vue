<template>
    <section>
        <div class="d-flex container">
            <div v-for="(item, index) in store.webCard" :key="index">
                <CardWeb :web="item" />
            </div>

        </div>
    </section>
</template>

<script>
import { store } from '../store.js';
import CardWeb from '../cardcomponents/CardWeb.vue';

export default {
    name: "WebsiteComponent",
    components: { CardWeb },
    data() {
        return {
            store
        };
    },
}
</script>

<style lang="scss" scoped>

</style>