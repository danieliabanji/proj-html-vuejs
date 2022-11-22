<template>
    <div class="card my-card ">
        <img :src="web.img" class="card-img" alt="">
        <div class="card-body">
            <img :src="web.wave" class="wave" alt="">
            <p class="card-text">{{ web.text }}</p>
            <div class="d-flex align-items-center justify-content-center ">
                <a href="#" class="btn">{{ web.link }} </a>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardWeb',
    props: {
        web: Object
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.my-card {
    text-align: center;
    // padding: 20px;
    margin: 100px 20px;
    border: none;

    .wave {
        max-width: 20%;
        max-height: 45px;

    }

    .card-img {
        margin: 0rem auto;
        width: 60%;
        max-height: 70px;
    }


    p {
        color: $jumbo;
        font-size: 1.25rem;
        margin-top: 1rem;
    }

    a {
        color: $codgray;
        font-size: 1.25rem;
        font-weight: 500;
        // margin-bottom: 2.5rem;


    }

    i {
        color: $codgray;
        font-size: 0.75rem;
        // margin-left: 10px;
        margin-top: 0.25rem;
    }

}
</style>