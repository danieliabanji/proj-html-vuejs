<template>
    <section>
        <div class="container ">
            <div class="d-flex">
                <div v-for="(item, index) in store.cardWorkout" :key="index">
                    <CardType :type="item" />
                </div>
            </div>
            <div class="text-center py-5">
                <p class="midle-title">
                    "How you respond to the challenge in the second half will determine what you become after the game,
                    whether you are a winner or a loser."
                </p>
                <img src="/img/zigzag.png" alt="zigzag">
                <div class="coach">
                    <img src="/img/avatar-1-2x.jpg" class="img-avatar" alt="">
                    <p class="c-white">Brad Johnson</p>
                    <p class="c-gray">Las Vegas</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { store } from '../store'
import CardType from './CardType.vue';

export default {
    name: "TypeWorkout",
    components: { CardType },
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
    background: linear-gradient(162deg, rgba(0, 22, 218, 1) 10%, rgba(216, 0, 13, 1) 85%);

    .midle-title {
        color: $white;
        font-size: 50px;
        margin-top: 150px;
        font-weight: 500;
        padding: 0 180px;
    }

    img {
        width: 5%;
    }

    .coach {
        padding-bottom: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .img-avatar {

        border-radius: 50%;
    }

    p {
        font-size: 25px;
    }

    .c-white {
        color: $white;
        padding: 0 25px;
    }

    .c-gray {
        color: $silver;
    }


}
</style>