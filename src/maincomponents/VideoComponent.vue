<template>
    <section>
        <div class="container py-5 ">
            <div class="text-center py-5 ">
                <div class="">
                    <a href="#"><i class="fa-solid fa-play play"></i></a>
                </div>
                <h2 class="midle-title">
                    Crossfit workout of the the day
                </h2>
                <p>
                    November 15th, 2019
                </p>
                <button class="btn"> View all videos &rightarrow;</button>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'VideoComponent'
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;


section {
    background: linear-gradient(140deg, rgba(4, 27, 235, 0.25) 35%, rgba(226, 9, 99, 0.3) 95%), url('/img/banner14-2x.jpg');
    filter: contrast(130%);
    background-position: center;
    background-size: cover;
    font-weight: 500;
    padding: 60px;


    .midle-title {
        color: $white;
        font-size: 58px;
        margin-top: 20px;
        padding: 0 240px;
    }



    p {
        color: $yellow;
        font-size: 2.5rem;

    }


    button {
        color: $white;
        font-size: 1.5rem;
    }

    .play {
        background-color: $white;
        padding: 40px;
        border-radius: 50%;
        font-size: 20px;


        &:hover {
            color: $burntsienna;
        }

    }


}
</style>