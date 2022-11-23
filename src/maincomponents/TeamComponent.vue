<template>
    <section class="bg-img">
        <div class="container wrapper" data-aos="fade-right">
            <div>
                <h3>
                    Join our mailing list today
                </h3>
                <h1>
                    Insider offers &amp; flash sales in your inbox every week.
                </h1>
                <img src="/img/zigzag.png" alt="zigzag">
                <div class="d-flex my-5">
                    <input type="email" class="mail-black form-control" placeholder="Insert your email ...*">
                    <button class="btn-blue"> Subscribe</button>
                </div>
                <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur
                    adipiscing elit sed porttitor lectus.
                </p>
            </div>
        </div>
    </section>
    <section class="bg-black ">
        <div class="d-flex container" data-aos="fade-up">
            <div v-for="(item, index) in store.cardTeam" :key="index">
                <CardTeam :team="item" />
            </div>
        </div>

    </section>



</template>

<script>
import { store } from '../store.js';
import CardTeam from '../cardcomponents/CardTeam.vue';

export default {
    name: "TeamComponent",
    components: { CardTeam },
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

.bg-img {
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 70%, ), url('/img/banner1-2x.jpg');

    // height: 500px;
    background-size: cover;
}

.wrapper {
    padding: 100px 500px 100px 0px;


    h3 {
        color: $burntsienna;
    }

    h1 {
        font-size: 65px;
        color: $white;
    }

    img {
        width: 8%;
    }

    p {
        font-size: 23px;
        color: $jumbo;
        font-weight: 500;
    }

    .btn-blue {
        @include btnblue;
        // padding: .75rem;
        font-size: 20px;
        padding: 0px 100px;
        width: 300px;
        border: none;
    }

    .mail-black {
        background-color: $white;
        // border: 2px solid $jumbo;
        color: $silver;
        // font-weight: 400;
        border-radius: 50px;
        font-size: 20px;
        padding: 10px 30px;
        margin-right: 25px;




    }

}


.play {
    background-color: $white;
    padding: 40px;
    border-radius: 50%;
    font-size: 20px;
    margin-right: 90px;
    margin-bottom: 90px;

    &:hover {
        color: $burntsienna;
    }

}

.bg-black {
    // height: 500px;
    background-color: $codgray;
    padding: 3.5rem 0;
}
</style>