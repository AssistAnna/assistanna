<template>
    <!-- navbar desktop -->
    <div class="navbar flex box-shadow">
        <nuxt-link to="/">
            <h1>Assist<span>Anna</span></h1>
        </nuxt-link>
        <div class="right-side flex" :class="{ 'active2': showMobileMenu }">
            <nuxt-link to="/" class="mobile-h1">
                <h1>Assist<span>Anna</span></h1>
            </nuxt-link>
            <!--
            <nuxt-link class="nav-item" to="/offre">Site vitrine</nuxt-link>
            -->
            <nuxt-link class="nav-item" to="/projets">Portefolio</nuxt-link>
            <nuxt-link class="nav-item" to="/contact">Contact</nuxt-link>
            <div class="socials flex">
                <nuxt-link to="/"><img src="/icons/icon-github-bluedark.png" alt="icon social github"></nuxt-link>
                <nuxt-link to="/"><img src="/icons/icon-linkedin-bluedark.png" alt="icon social linkedin"></nuxt-link>
            </div>
        </div>
        <img v-show="!showMobileMenu" @click="toggleGsmMenu" class="menu-burger" src="/icons/menu-burger.png" alt="open menu">
        <img v-show="showMobileMenu" @click="toggleGsmMenu" class="cross menu-burger" src="/icons/cross-menu-burger.png" alt="close menu">
    </div>
</template>

<script>
    export default {
        watch: {
            '$route' () {
                this.showMobileMenu = false;
            }
        },
        data() {
            return {
                showMobileMenu: false
            }
        },
        methods: {
            toggleGsmMenu() {
                this.showMobileMenu = !this.showMobileMenu;
            } 
        }
        
    }
</script>

<style lang="scss" scoped>
    .navbar {
        z-index: 100;
        position: fixed;
        width: 100%;
        background-color: white;
        align-items: center;
        justify-content: space-between;
        min-height: 5rem;
        opacity: 1;

        .right-side {
            align-items: center;
            .nav-item {
                padding-right: 2rem;
            }
            a {
                color: var(--blue-dark);
                font-family: 'mada-semiBold';
                font-size: 1.5rem;
                margin-right: 2rem;
                transition: all 0.2s ease-in-out;
                &:hover {
                    transform: scale(1.03);
                    color: var(--blue-medium);
                    text-decoration: underline;
                    text-underline-offset: 0.5rem;
                }
            }
            .socials {
                img {
                    width: 3rem;
                }
                a {
                    margin-right: 0.7rem;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        transform: scale(1.05);
                    }
                }
            }
            .router-link-exact-active {
                transform: scale(1.03);
                color: var(--blue-medium);
                text-decoration: underline;
                text-underline-offset: 0.5rem;
            }
        }
        .mobile-h1 {
            display: none;
        }
        h1 {
            font-family: 'magra-regular';
            color: var(--blue-medium);
            padding-left: 2rem;
            span {
                color: var(--orange);
            }
        }
        .menu-burger {
            display: none;
            height: 2.5rem;
            width: 2.5rem;
            position: absolute;
            right: 12vw;
            animation: fadeInAnimation ease 0.4s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }

        .cross {
            height: 3rem;
            width: 3rem;
            animation: fadeInAnimation ease 0.4s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }

        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }
    /*version mobile  */
    @media screen and (max-width: 894px) {
        .navbar {
            .right-side {
                top: 0;
                left: 0;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 0.281);
                backdrop-filter: blur(7px);
                width: 100%;
                height: 100vh;
                margin-left: -100% ;
                transition: all 0.4s ease;
                .mobile-h1 {
                    display: block;
                }
                .nav-item {
                    font-size: 2.4rem;
                    margin-bottom: 1.6rem;
                    padding-right: 0;
                    margin-right: 0;
                }
                .socials {
                    img {
                        width: 4rem;
                    }
                    a {
                        margin-right: 0;
                    }
                }
            }
            .active2 {
                margin-left: 0;
            }
            .menu-burger {
                display: block;
            }
        }
       
    }

    /*version tablette*/
    @media (min-width: 895px) and (max-width: 1250) {
        
    }
    
</style>