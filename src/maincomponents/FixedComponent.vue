<template>
    <div class="wrapper">
        <div class="my-card text-center">
            <img src="/public/img/inbox.png" class="card-img-top" alt="inbox">
            <p>Demos</p>
        </div>
        <div class="my-card text-center">
            <div class="card-img-bot">
                <img src="/public/img/dollar-symbol.png" class="" alt="dollar-symbol">
                <p class="cost">
                    39
                </p>
            </div>
            <p class="my-text">On Sale</p>
        </div>

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
    // position: sticky;
    right: 0;
    margin: 45px 15px;



    .my-card {
        // width: 100%;
        width: 70px;
        height: 70px;
        margin: 10px 0px;
        background-color: $white;
        border-radius: 10px;
        box-shadow: 0 -5px 20px 5px rgb(0, 0, 0, 0.15);
        // padding: 2px 0;

        .card-img-top {
            max-width: 50%;
            // padding: 5px;
            margin-top: 10px;

        }

        p {
            color: $jumbo;
        }

        .my-text {
            color: $jumbo;
            // margin-bottom: 10px;
            // padding-bottom: 10px;
            margin-top: -10px;
        }

        .card-img-bot {
            // max-width: 25%;
            display: inline-block;
            display: flex;

            img {
                margin-top: 10px;
                margin-left: 5px;
                width: 20px;
                height: 20px;
            }

            .cost {
                font-size: 35px;
                font-weight: 600;
                margin-bottom: unset;
                color: $green;
                // margin-top: -15px;
            }

        }
    }
}
</style>