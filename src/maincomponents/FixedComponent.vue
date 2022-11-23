<template>
    <div class="wrapper">
        <a href="#">
            <div class="my-card text-center">
                <img src="/img/inbox.png" class="card-img-top slide-left" alt="inbox">
                <img src="/img/inbox.png" class="card-img-top-h slide-right" alt="inbox">
                <p class="my-text">Demos</p>
            </div>
        </a>

        <a href="#">
            <div class="my-card text-center">
                <div class="slide-left-b d-flex">
                    <img src="/img/dollar-symbol.png" class="card-img-bot" alt="dollar-symbol">
                    <p class="cost">
                        39
                    </p>
                </div>
                <img src="img/shopping-cart.png" class="card-img-top-h slide-right-b" alt="shopping-cart">
                <p class="my-text">On Sale</p>
            </div>
        </a>

    </div>

</template>

<script>
export default {
    name: 'FixedComponent'
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.wrapper {
    position: fixed;
    right: 0;
    margin: 45px 15px;
    z-index: 999;



    .my-card {
        width: 70px;
        height: 70px;
        margin: 10px 0px;
        background-color: $white;
        border-radius: 10px;
        box-shadow: 0 -5px 20px 5px rgb(0, 0, 0, 0.15);
        position: relative;
        overflow: hidden;

        .card-img-top {
            max-width: 50%;
            max-height: 50%;
            margin-top: 10px;
        }

        .card-img-top-h {
            max-width: 50%;
            max-height: 50%;
            margin-top: 10px;
        }

        .slide-left {
            position: absolute;
            left: 18px;
            transition: 0.2s;
        }

        &:hover .slide-left {
            transition: 0.2s;
            left: -70px;
        }

        .slide-right {
            position: absolute;
            right: -70px;
            transition: 0.2s;
        }

        &:hover .slide-right {
            transition: 0.2s;
            right: 18px;
        }

        .my-text {
            text-align: center;
            color: $jumbo;
            font-weight: 500;
            margin-top: -10px;
            position: absolute;
            bottom: -12px;
            left: 15px;
        }

        .card-img-bot {
            max-width: 50%;
            max-height: 50%;
            height: 20px;
            margin-top: 10px;


        }

        .slide-left-b {
            position: absolute;
            left: 5px;
            transition: 0.2s;
        }

        &:hover .slide-left-b {
            transition: 0.2s;
            left: -70px;
        }

        .slide-right-b {
            position: absolute;
            right: -70px;
            transition: 0.2s;
        }

        &:hover .slide-right-b {
            transition: 0.2s;
            right: 15px;
        }

        .cost {
            font-size: 35px;
            font-weight: 600;
            margin-bottom: unset;
            color: $green;
            margin-right: 15px;
        }
    }
}
</style>