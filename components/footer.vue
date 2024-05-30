<template>
    <div class="footer flex">
        <div class="titles">
            <h1>Anna Flourou</h1>
            <h2>Création de site internet</h2>
            <div class="socials flex">
                <nuxt-link to="/"><img src="/icons/icon-github-white.png" alt="icon social github"></nuxt-link>
                <nuxt-link to="/"><img src="/icons/icon-linkedin-white.png" alt="icon social linkedin"></nuxt-link>
            </div>
        </div>
        
        <div class="button">
            <button class="box-shadow">Découvrez mon portefolio</button>
        </div>
        <div class="button2">
            <p>Un projet Web ?</p>
            <button class="box-shadow">Contactez-moi !</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer {
    background-color: var(--blue-dark);
    width: 100%;
    justify-content: space-around;
    align-items: center;
    color: white;
    .titles {
        font-family: 'magra-regular';
        margin: 1.5rem 0;
        h1 {
            font-size: 1.6rem;
            margin: 0;

        }
        h2 {
            font-size: 1rem;
            margin: 0;
            color: var(--blue-light);
        }
        .socials {
            margin: 0.5rem 0;

            img {
                height: 2.5rem;
            }
        }
    }
    .button {
        button {
            margin: 3rem 0;
            background-color: var(--orange);
            font-size: 0.9rem;
            color: white;
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                transform: scale(1.03);
            }
        }
    }
    .button2 {
        color: white;
        p {
            font-family: 'magra-regular';
            font-size: 1.1rem;
            margin-bottom: 0.4rem;
            text-align: center;
        }
        button {
            background-color: var(--blue-medium);
            font-size: 0.9rem;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                transform: scale(1.03);
            }
        }
    }
}
</style>