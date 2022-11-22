<template>
    <div class="card my-card">
        <img :src="team.img" class="card-img-top" alt="">
        <div class="card-body">
            <h4>{{ team.title }}</h4>
            <h5>{{ team.subTitle }}</h5>
            <p class="card-text">{{ team.text }}</p>
            <div class="d-flex align-items-center justify-content-center ">
                <a href="#" class="btn">{{ team.btn }} </a>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'CardTeam',
    props: {
        team: Object
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.my-card {
    text-align: center;
    background-color: $codgray;
    border: 5px solid $royalblue;
    padding: 50px;
    margin: 50px 20px;

    &:hover {
        transform: scale(1.05);
        transition: 0.5s;
    }

    img {
        margin: 2.5rem auto 1.5rem;
        width: 25%;
    }

    h4 {
        color: $white;
        font-size: 2rem;
    }

    h5 {
        color: $yellow;
        margin-bottom: 2.5rem;
    }

    p {
        color: $silver;
        font-size: 1.25rem;
    }

    a {
        color: $white;
        font-size: 1.25rem;
        font-weight: 500;
        // margin-bottom: 2.5rem;


    }

    i {
        color: $white;
        font-size: 0.75rem;
        // margin-left: 10px;
        margin-top: 0.25rem;
    }

}
</style>