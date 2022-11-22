<template>
    <div class="card my-card border-card ">
        <img :src="advice.img" class=" border-card card-img " alt="">
        <div class=" overlay-card ">
            <h3 class="card-title">{{ advice.title }}</h3>
            <p class="card-text">{{ advice.text }}</p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CardAdvice',
    props: {
        advice: Object
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;


.my-card {
    // background-image: url('/public/img/service6-2x.jpg');
    // background-size: cover;
    margin: 0 20px;
    // border: none;
    position: relative;

    .play {
        position: absolute;
        top: 30%;
        left: 45%;
        transform: translate(-30%, -45%);
        background-color: $white;
        padding: 25px;
        border-radius: 50%;
        font-size: 15px;
        margin-right: 90px;
        margin-bottom: 90px;

        &:hover {
            color: $burntsienna;
        }

    }

    .img-advice {
        width: 50%;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 5px;
        margin-top: -50px;



    }



    .overlay-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        padding: 2rem;

        h3 {
            color: $codgray;
            font-size: 30px;
        }

        p {
            color: $royalblue;
            font-size: 25px;
        }
    }
}

.border-card {
    border-bottom-right-radius: 40px;
    border: none;
}
</style>