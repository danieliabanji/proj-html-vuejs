<template>
    <section>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="text-center info social col">
                        <img src="/public/img/logo.png" alt="">
                        <p class="my-4">
                            Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque
                            consectetur
                            amet
                            purus ultrices mauris.
                        </p>
                        <ul>
                            <li v-for="(item, index) in store.socials" :key="index"><a :href="item.url"><i
                                        :class="item.social"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="text-center info list-posts col">
                        <h4>
                            RECENT POSTS
                        </h4>
                        <ul>
                            <li v-for="(item, index) in store.posts" :key="index"><a :href="item.url"
                                    class="text-center">
                                    <i :class="item.icon"></i>
                                    {{ item.link }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="text-center info contact col" v-for="(item, index) in store.contact" :key="index">
                        <h4>
                            {{ item.title }}
                        </h4>
                        <p class="gray">
                            {{ item.address }}
                        </p>
                        <p>
                            {{ item.phone }}
                        </p>
                        <p>
                            {{ item.mail }}
                        </p>
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container Copyright">

            <p>© Copyright 2012 - 2022 | Avada Theme by <a href="#">ThemeFusion</a> | All Rights Reserved | Powered by
                <a href="a">WordPress</a>
            </p>

        </div>
    </section>
</template>

<script>
import { store } from '../store'
export default {
    name: 'FooterComponent',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

section {
    background-color: $codgray;

    ul {
        padding-left: unset;
    }

    .wrapper {
        border-bottom: 1px solid rgb(49, 49, 49);

        .info {
            margin: 100px 20px;
            // padding: 50px;
        }

        p {
            color: $silver;
            font-size: 1.25rem;
        }

        .social {
            font-weight: 500;
            line-height: 2rem;

            ul {
                display: flex;
                list-style: none;
                // align-items: center;
                // text-align: center;
                justify-content: center;
                margin-top: 2rem;



                a {
                    color: $burntsienna;
                    font-size: 1.25rem;
                    margin: 0 15px;

                    &:hover {
                        color: $jumbo;
                        transition: 0.5s;
                    }
                }
            }


        }

        .list-posts {
            color: $white;
            line-height: 3rem;

            h4 {
                font-size: 1.5rem;
            }

            ul {
                display: flex;
                flex-direction: column;
                list-style: none;
                // align-items: center;
                justify-content: center;
                margin-top: 2rem;

                i {
                    font-size: 1rem;
                }

                a {
                    text-decoration: none;
                    color: $white;
                    font-size: 1.35rem;
                    // margin: 0 15px;

                    &:hover {
                        color: $dodgerblue;
                        transition: 0.5s;
                    }
                }
            }
        }

        .contact {
            color: $white;
            line-height: 3rem;
            font-weight: 500;


            h4 {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }

            p {
                line-height: 1rem;
                color: $white;
            }

            .gray {
                color: $jumbo;
                margin: 2rem 0;
            }

        }
    }
}

.Copyright {
    color: $jumbo;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    padding: 40px;

    a {
        color: $white;
        text-decoration: none;

        &:hover {
            color: $dodgerblue;
            transition: 0.5s;
        }
    }
}
</style>