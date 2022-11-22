<template>
    <section>
        <div class="container py-5">
            <div class="text-center py-5 ">
                <p class="midle-title">
                    "I’ve failed over and over again in my life. And that is why I succeed."
                </p>
                <img src="/img/zigzag.png" alt="zigzag">
                <p>
                    Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in
                    ipsum eros, tristique. Gravida suspendisse etiam in iaculis
                </p>
                <button class="btn-blue "> Buy Avada today <i class="fa-solid fa-chevron-right"></i></button>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'BuyComponent'
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;


section {
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0) 70%, ), url('/img/banner2-2x.jpg');
    background-position: center;
    background-size: cover;
    font-weight: 500;


    .midle-title {
        color: $white;
        font-size: 58px;
        margin-top: 150px;
        // font-weight: 500;
        padding: 0 240px;
    }

    img {
        width: 5%;
    }

    p {
        color: $jumbo;
        font-size: 1.5rem;
        padding: 0 240px;
        // font-weight: 500
    }

    .btn-blue {
        @include btnblue;
        // padding: .75rem;
        font-size: 20px;
        font-weight: 500;
        padding: 15px 45px;
        // text-align: center;
        position: relative;

        i {
            font-size: 0.75rem;
            margin-left: 12px;
            position: absolute;
            top: 45%;



        }
    }




}
</style>