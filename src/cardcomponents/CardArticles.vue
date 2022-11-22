<template>
    <div class="card my-card border-card ">
        <a href="#"><img :src="articles.img" class=" border-card card-img " alt=""></a>
        <div class="overlay">
        </div>
        <div class=" overlay-card ">
            <h3 class="card-title"><a href="#">{{ articles.title }}</a></h3>
            <p class="card-text">By <a href="#">admin</a> | November 26th, 2019 |<a href="#"> Gym</a></p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CardArticles',
    props: {
        articles: Object
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

    .overlay-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: start;
        padding: 2rem;

        h3 {
            color: $codgray;
            font-size: 2rem;

            a {
                text-decoration: none;
                color: $codgray;

                &:hover {
                    color: $royalblue;

                }

            }
        }

        p {
            color: $jumbo;
            font-size: 1.25rem;

            a {
                text-decoration: none;
                color: $codgray;

                &:hover {
                    color: $royalblue;

                }
            }
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 65%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background: linear-gradient(0deg, rgba(0, 22, 218, 0.3) 20%, rgba(255, 255, 255, 0) 100%);
    }

    &:hover .overlay {
        opacity: 1;
    }

}

.border-card {
    border: none;
    border-radius: 0;
}
</style>