<template>
    <div class="card my-card border-card">
        <img :src="type.img" class="card-img border-card" alt="">
        <div class="card-img-overlay overlay-card ">
            <img :src="type.wave" class="wave" alt="">
            <h3 class="card-title">{{ type.title }}</h3>
            <p class="card-text">{{ type.text }}</p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CardType',
    props: {
        type: Object
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.my-card {
    // background-image: url('/public/img/service6-2x.jpg');
    // background-size: cover;
    margin: -50px 20px;
    // border: none;

    .card-img {
        filter: brightness(70%) !important;
        height: 450px;
        box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
        transition: transform ease 0.5s, box-shadow ease 0.5s;



    }

    &:hover .card-img {
        transform: scale(1.05);
        // transition: 0.5s;
        box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.75);


    }


    .wave {
        width: 15%;
    }

    .overlay-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 2rem;

        h3 {
            color: $white;
            font-size: 35px;
        }

        p {
            color: $yellow;
            font-size: 30px;
        }
    }
}

.border-card {
    border-bottom-right-radius: 40px;
    border: none;
}
</style>