<template>
    <div class="Navbar flex box-shadow">
        <nuxt-link to="/">
            <h1>Anna Flourou</h1>
        </nuxt-link>
        <div class="right-side flex">
            <nuxt-link class="nav-item" to="/projets">Portefolio</nuxt-link>
            <nuxt-link class="nav-item" to="/contact">Contact</nuxt-link>
            <div class="socials flex">
                <nuxt-link to="/"><img src="/icons/icon-github-bluedark.png" alt="icon social github"></nuxt-link>
                <nuxt-link to="/"><img src="/icons/icon-linkedin-bluedark.png" alt="icon social linkedin"></nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .Navbar {
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
        }
        h1 {
            font-family: 'magra-regular';
            color: var(--blue-medium);
            padding-left: 2rem;
        }
    }
    
</style>