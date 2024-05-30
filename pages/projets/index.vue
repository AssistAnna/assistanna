<template>
    <div class="portefolio">
        <h2>Portefolio</h2>
        <p>Voici quelques une de mes créations. Vous y trouverez des sites webs complets suite à de précédentes collaborations ainsi que quelques modules créés en interne.</p>
        <div class="button flex">
            <p>Besoin d'un devis ?</p>
            <nuxt-link to="/contact">
                <button class="box-shadow">Contactez-moi !</button>
            </nuxt-link>
        </div>
        <projets/>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .portefolio {
        padding-top: 5rem;
        h2 {
            font-family: 'magra-regular';
            color: var(--blue-dark);
            font-size: 3.5rem;
            text-align: center;
            margin-top: 4rem;
        }
        p {
            font-family: 'mada-regular';
            color: var(--blue-dark);
            font-size: 1.6rem;
            text-align: center;
            padding: 0 8rem;
        }
        .button {
            flex-direction: column;
            align-items: center;
        p {
            font-family: 'magra-regular';
            color: var(--blue-dark);
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
        }
        button {
            background-color: var(--blue-light);
            font-size: 1.1rem;
            color: white;
            padding: 1rem 2.4rem;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                transform: scale(1.03);
            }
        }
    }
    }
</style>