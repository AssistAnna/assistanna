<template>
    <div class="footer flex">
        <div class="titles">
            <h1>AssistAnna</h1>
            <h2>Création de site internet</h2>
            <div class="socials flex">
                <nuxt-link to="/"><img src="/icons/icon-github-white.png" alt="icon social github"></nuxt-link>
                <nuxt-link to="/"><img src="/icons/icon-linkedin-white.png" alt="icon social linkedin"></nuxt-link>
            </div>
        </div>
        <div class="pages flex">
            <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
            <nuxt-link to="/politique-confidentialite">Politique de confidentialité</nuxt-link>

        </div>
        <!--
            <div class="button">
            <button class="box-shadow">Découvrez mon portefolio</button>
        </div>
        -->
        <div class="button2">
            <p>Un projet Web ?</p>
            <button @click="$router.push('/contact')" class="box-shadow">Contactez-moi !</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.footer {
    background-color: var(--blue-dark);
    justify-content: space-between;
    align-items: center;
    color: white;
    .titles {
        font-family: 'magra-regular';
        margin: 1.5rem;
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
    .button2 {
        color: white;
        margin-right: 1.5rem;

        p {
            font-family: 'magra-regular';
            font-size: 1.1rem;
            margin-bottom: 0.4rem;
            text-align: center;
        }
        button {
            background-color: var(--orange);
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
    .pages {
        flex-direction: column;

        a {
            color: white;
            font-family: 'mada-regular';
            transition: all 0.3s ease-in-out;
            margin-bottom: 1rem;
            &:hover {
                text-decoration: underline;
                text-underline-offset: 0.4rem;
            }
        }
        
    }
}
/*version mobile */

@media screen and (max-width: 550px) {
        .footer {
            flex-direction: column;
            align-items: center;
            .titles {
                width: 80%;
                h1 {
                    font-size: 1.2rem;
                }
                h2 {
                    font-size: 0.8rem;
                }
                .socials {
                    img {
                        height: 2.2rem;
                    }
                }
            }
            .pages {
                width: 84%;
                margin-bottom: 1rem;
                a {
                    margin-bottom: 1rem;
                    
                }
            }
            .button2 {
                width: 78%;
                margin-bottom: 1rem;
                p {
                    font-size: 1rem;
                    margin-bottom: 0.6rem;
                    text-align: left;
                    margin-top: 0;
                }
                button {
                    font-size: 0.7rem;
                    color: white;
                    padding: 1rem 1.5rem;
                    font-weight: bold;
                }
            }
            
        }
    }
/* version tablette */

    @media (min-width: 551px) and (max-width: 1124px) {
        
    }
</style>