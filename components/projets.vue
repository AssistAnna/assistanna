<template>
    <div class="projets">
        <div v-for="projet in projets" :key="projet.id">
            <nuxt-link class="projet flex":to="projet.linkUrl">
                <NuxtImg class="box-shadow" preload :src="projet.urlImg"/>
                <h3>{{ projet.name }}</h3>
                <p>{{ projet.description }}</p>
            </nuxt-link>
        </div>

    </div>
</template>

<script setup lang="ts">
const projets = [
    {
        id: 0,
        name: "Studio Byno",
        description: "Agence de sound design et communication audiovisuelle",
        urlImg: "/projets/studio-byno.png",
        linkUrl: "projets/studio-byno"
    },
    {
        id: 1,
        name: "Formulaire de contact",
        description: "Module de formulaire de contact responsive et sécurisé",
        urlImg: "/projets/formulaire-contact.jpg",
        linkUrl: "projets/studio-byno"
    }
]
</script>

<style lang="scss" scoped>
.projets {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 6rem 1rem;
    .projet {
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        padding: 1rem;
        img {
            min-width: 23vw;
            height: 36vh;
            border-radius: 2px;
            transition: all 0.3s ease-in-out;
        }
        h3 {
            font-family: 'mada-regular';
            color: var(--blue-dark);
            font-size: 1.3rem;
            text-align: center;
            margin: 0.8rem 0;
            transition: all 0.3s ease-in-out;
        }
        p {
            font-family: 'mada-light';
            color: var(--blue-dark);
            font-size: 1rem;
            margin: 0;
            max-width: 23vw;
            text-align: center;
            transition: all 0.35s ease-in-out;
        }
        &:hover {
            img {
                transform: scale(1.03);
            }
            h3 {
                color: var(--blue-medium);
            }
            p {
                font-weight: bold;
            }
        }
    }
}

</style>