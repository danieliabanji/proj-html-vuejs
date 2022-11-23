<template>
    <section>
        <div class="d-flex justify-content-around">
            <div class="position d-flex">
                <img src="/img/service15-2x.jpg" class="img-advice" data-aos="fade-right" alt="">
                <a href="#"><i class="fa-solid fa-play play"></i></a>
                <div class="text " data-aos="fade-left">
                    <h3>
                        Tune up your workouts
                    </h3>
                    <h2 class="my-5">
                        The best health &amp; fitness advice online
                    </h2>
                    <div class="d-flex youtube">
                        <img src="/img/unnamed.jpg" class="" alt="unnamed">
                        <div>
                            <p>ThemeFusion</p>
                            <button class="btn-youtube"><i class="fa-brands fa-youtube mx-2"></i>Youtube</button>
                            <button>999+</button>
                        </div>
                    </div>
                    <p class="my-5">
                        Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer
                        sit
                        pellentesque.
                    </p>
                    <button class="btn-red"><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</button>
                </div>
            </div>
        </div>
        <div class="container video my-5">
            <div class="d-flex justify-content-between align-items-center my-5">
                <h2>
                    Featured playlist
                </h2>
                <p>
                    View all videos <i class="fa-solid fa-chevron-right"></i>
                </p>
            </div>
            <div class="d-flex" data-aos="fade-up">
                <div v-for="(item, index) in store.cardAdvice" :key="index">
                    <CardAdvice :advice=item />
                </div>
            </div>
        </div>


    </section>
</template>

<script>
import { store } from '../store'

import CardAdvice from '../cardcomponents/CardAdvice.vue';

export default {
    name: "AdviceComponent",
    components: { CardAdvice },
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

section {

    .position {
        position: relative;

        .play {
            position: absolute;
            top: 50%;
            left: 25%;
            transform: translate(-50%, -50%);
            background-color: $white;
            padding: 40px;
            border-radius: 50%;
            font-size: 20px;
            margin-right: 90px;
            margin-bottom: 90px;

            &:hover {
                color: $burntsienna;
                transition: 0.3s;
            }

        }

        .img-advice {
            width: 50%;
            border-bottom-right-radius: 40px;
            border-top-right-radius: 5px;
            margin-top: -50px;



        }
    }

    .text {
        padding: 120px;
        padding-right: 80px;
        line-height: 2.5rem;

        h3 {
            color: $dodgerblue;
        }

        h2 {
            font-size: 73px;
        }

        p {
            color: $jumbo;
            font-size: 25px;

        }

        .btn-red {
            color: $white;
            background-color: $red;
            // padding: .75rem;
            border: none;
            border-radius: 50px;
            font-size: 20px;
            padding: 5px 40px;

            &:hover {
                opacity: 70%;
            }
        }
    }

    .youtube {
        align-items: center;

        p {
            font-size: 23px;
            // margin-bottom: -px;

        }

        img {
            width: 10%;
            // width: 48px;
            // height: 48px;
            margin: 0 15px;
        }

        button {
            border: 1px solid $silver;
            font-size: 20px;
            padding: 0px 10px;
        }

        .btn-youtube {
            background-color: #e62117;
            border: 1px solid #e62117;
            // border: none;
            color: $white;
            font-size: 20px;
            padding: 0px 10px;
            // width: 100px;
        }
    }

    .video {
        padding-bottom: 50px;

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



}
</style>