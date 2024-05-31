<template>
    
    <div class="projets" >
        <h2 class="title-h2">Projets</h2>
        <p class="text">Voici quelques une de mes créations. Vous y trouverez des sites webs responsive suite à de précédentes collaborations ainsi que quelques modules créés en interne.</p>
        <nuxt-link v-for="projet in projets" :key="projet.id" target="_blank" class="item box-shadow" :to="projet.linkProjet" :style="' background-color:' + projet.bkgcolor">
            <div class="bloc-left">
                <h4>{{ projet.name }}</h4>
                <p  class="type box-shadow" :style="' background-color:' + projet.typeBkgColor">{{ projet.type }}</p>
                <p class="description">{{ projet.description }}</p>
                <p class="description"><span>Objectif :</span> {{ projet.objectif }}</p>
                <button class="box-shadow">Voir &#8594;</button>
            </div>
            <div class="bloc-right">
                <NuxtImg preload :src="projet.urlImg"/>
            </div>
        </nuxt-link>
        
    </div>
</template>

<script setup lang="ts">
import { SassColor } from 'sass';

const projets = [
    {
        id: 0,
        name: "Studio Byno",
        description: "Agence de sound design et communication audiovisuelle",
        type: "site vitrine",
        typeBkgColor: "var(--orange)",
        bkgcolor: "var(--beige)",
        objectif: "Création d'un site vitrine pour un auto-entrepreneur avec formulaire de contact.",
        urlImg: "/projets/studio-byno-desktop.png",
        linkProjet: "https://www.studio-byno.fr/"
    },
    {
        id: 3,
        name: "Afflua",
        type: "refonte graphique",
        typeBkgColor: "var(--blue-light)",
        bkgcolor: "white",
        description: "Froid commercial et climatisation",
        objectif: "Refonte graphique, le propriétaire du site souhaitait moderniser le design de son site web.",
        urlImg: "/projets/afflua.png",
        linkProjet: "https://aflua.fr/"
    },
    {
        id: 2,
        name: "Le crozet de Saturne",
        type: "site vitrine",
        typeBkgColor: "var(--orange)",
        bkgcolor: "var(--beige)",
        description: "Location de gîtes dans la région des Cévennes",
        objectif: "Sylvie et José souhaitaient améliorer leur visibilité sur le web avec la création d'un site vitrine et liens de redirection vers des applications de réservations de séjours tels que AirBnb ou tripAdvisor",
        urlImg: "/projets/crozet-saturne.png",
        linkProjet: "https://www.parc-naturel-brenne.fr/sejournez/ou-dormir/les-hebergements-coup-de-coeur"
    },
    {
        id: 1,
        name: "Formulaire de contact",
        type: "module",
        typeBkgColor: "var(--blue-medium)",
        bkgcolor: "white",
        description: "Module de formulaire de contact responsive et sécurisé",
        objectif: "Implémenter un moyen de contact entre le visiteur et l'entreprise",
        urlImg: "/projets/formulaire-contact.jpg",
        linkProjet: "https://www.studio-byno.fr/"
    }
]
</script>

<style lang="scss" scoped>

.projets {
    padding-top: 5rem;
    .text {
        text-align: center;
        font-family: 'mada-regular';
        color: var(--blue-dark);
        margin: 2rem 10rem;
        font-size: 1.4rem;
    }
    .item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 3rem 6rem;
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: scale(1.03);
        }
        .bloc-left {
            margin: 2.5rem;
            color: var(--blue-dark);
            h4 {
                font-family: 'mada-regular';
                font-size: 2rem;
                text-decoration: underline;
                text-underline-offset: 0.7rem;
                margin: 2rem 0;
            }
            .type {
                max-width: 10vw;
                text-align: center;
                font-size: 0.8rem;
                padding: 0.5rem 0;
                font-family: 'mada-semiBold';
                color: white;
            }
            .description {
                font-family: 'mada-light';
                font-size: 1rem;
                font-weight: bold;
            }
            span {
                font-family: 'mada-semiBold';
                text-decoration: underline;
                text-underline-offset: 0.2rem;
                margin-right: 0.5rem;
            }
            button {
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                background-color: var(--blue-dark);
                color: white;
                font-family: 'mada-semiBold';
                padding: 0.5rem 1rem;
                border-radius: 2rem;
                &:hover {
                    transform: scale(1.06);
                }
            }

        }
        .bloc-right {
            padding: 2rem;
            img {
                width: 32vw;
                min-height: 15rem;
                height: 100%;
            }
        }
    }
}
</style>