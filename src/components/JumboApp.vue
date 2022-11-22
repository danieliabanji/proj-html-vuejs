<template>
    <section>
        <div class="container wrapper ">
            <div>
                <h3>
                    Certified fitness professional
                </h3>
                <h1>
                    Take control of your healt
                </h1>
                <img src="/img/zigzag.png" alt="zigzag">
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>
                <button class="btn-blue"><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</button>
                <button class="btn-black"> Buy Avada today &rightarrow;</button>
            </div>

            <div class="">
                <a href="#"><i class="fa-solid fa-play play"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'JumboApp'
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

section {
    // background-image: url('/img/slider82x-scaled.jpg');
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 45%, rgba(255, 255, 255, 0) 70%, ), url('/img/slider82x-scaled.jpg');

    // height: 500px;
    background-size: cover;
}

.wrapper {
    padding: 180px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        color: $burntsienna;
    }

    h1 {
        font-size: 80px;
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
        padding: 15px 30px;
    }

    .btn-black {
        background-color: $codgray;
        border: 2px solid $jumbo;
        color: $silver;
        font-weight: 400;
        border-radius: 50px;
        font-size: 20px;
        padding: 15px 30px;
        margin-left: 15px;


        &:hover {

            background-color: $white;
            border: none;
            color: $codgray;
        }

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
</style>