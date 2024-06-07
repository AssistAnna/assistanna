<template>
    <div class="section2">
        <p >Freelance spécialisée dans la création de site internet, je mets mes compétences et mon savoir-faire au service des entreprises et des projets qui cherchent à se démarquer en ligne.</p>
        <p>Constamment à l'affût des dernières tendances et technologies dans le domaine du web, j'offre à mes clients des solutions modernes et innovantes.</p>
        <div class="button flex">
            <nuxt-link to="/projets">
                <button class="box-shadow">Découvrez mon portefolio</button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.section2 {
    margin-top: 6rem;
    p {
        font-family: 'mada-regular';
        color: var(--blue-dark);
        font-size: 1.6rem;
        text-align: center;
        padding: 0 8rem;
    }
    .button {
        justify-content: center;

        button {
            margin: 3rem 0;
            background-color: var(--orange);
            font-size: 1.1rem;
            color: white;
            padding: 1rem 2.4rem;
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
/*version mobile */

    @media screen and (max-width: 894px) {
            .section2 {
                margin-top: 2rem;
                p {
                    font-size: 1.2rem;
                    padding: 1rem;
                    margin: 0;
                }
                .button {
                    button {
                        font-size: 0.8rem;
                        padding: 1rem 2rem;
                        font-weight: bold;
                        margin: 0.5rem 0 2rem 0;
                    }
                }
            }
    }
/* version tablette */

    @media (min-width: 895px) and (max-width: 1250px) {
        
    }
</style>