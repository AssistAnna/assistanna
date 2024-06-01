<template>
    <div class="section4 flex">
        <div class="button">
            <p>Un projet Web ?</p>
            <button @click="$router.push('/contact')" class="box-shadow">Contactez-moi !</button>
        </div>
        <h2>Les étapes : de la conception à la mise en ligne</h2>
        <div class="etapes flex">
            <div class="etape box-shadow" v-for="step in steps" :key="step.title">
                <img :src="step.url" :alt="step.title">
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                steps: [
                    {
                        title: "Planification",
                        description: "Prise en compte des besoins et objectifs, mise en place du planning, nom de domaine,...",
                        url: "/icons/icon-step1.png"
                    },
                    {
                        title: "Création maquette",
                        description: "A partir de votre charte graphique, je vous propose une maquette de votre site. Nous voyons ensemble les modifications à apporter.",
                        url: "/icons/icon-step2.png"
                    },
                    {
                        title: "Développement web",
                        description: "Après validation de la maquette, le travail de développement du site internet commence.Régulièrement, je vous informe de l'avancée du projet.",
                        url: "/icons/icon-step3.png"
                    },
                    {
                        title: "Mise en ligne du site",
                        description: "Dernière étape : votre site internet est mis en ligne après validation des tests en terme de fonctionnement et responsive design.",
                        url: "/icons/icon-step4.png"
                    },
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.section4 {
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    h2 {
        font-family: 'mada-regular';
        color: var(--blue-dark);
        font-size: 2rem;
        text-align: center;
        padding: 2rem 0;
    }
    .etapes {
        margin: 1rem 3rem;
        .etape {
            border-radius: 4px;
            margin: 0.6rem;
            text-align: center;
            border: 4px solid var(--blue-light);
            padding: 1rem 1.8rem;
            width: 20%;
            h4 {
                font-family: 'mada-regular';
                color: var(--blue-medium);
                font-size: 1.1rem;
            }
            p {
                font-family: 'mada-medium';
                color: var(--blue-dark);
                font-size: 0.9rem;
            }
        }
    }
    .button {
        margin-top: 2rem;
        p {
            font-family: 'magra-regular';
            color: var(--blue-dark);
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
            text-align: center;
        }
        button {
            background-color: var(--blue-light);
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

@media screen and (max-width: 550px) {
        .section4 {
            .button {
                margin-top: 0;
                p {
                    font-size: 1.2rem;
                }
                button {
                    font-size: 0.9rem;
                    font-weight: bold;
                    padding: 1rem 2rem;                    
                }
            }
            h2 {
                font-size: 1.2rem;
                text-align: center;
                padding: 2rem;
            }
            .etapes {
                flex-direction: column;
                align-items: center;
                .etape {
                    margin: 0.6rem;
                    padding: 1rem 1.8rem;
                    width: 80%;
                    h4 {
                        font-size: 1.2rem;
                        margin: 1rem 0;
                    }
                }
            }
        }
    }
/* version tablette */

    @media (min-width: 551px) and (max-width: 1124px) {
        
    }
</style>