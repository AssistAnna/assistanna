<template>
    <div class="section3 flex">
        <div class="left">
            <h4>Mon profil</h4>
            <li>Le travail de création de site internet se situe à l'intersection entre le développement web, le webdesign et la rédaction de contenu.</li>
            <li>Mon objectif est d'aider les entreprises à atteindre leurs objectifs en utilisant l'espace digital.</li>
            <li>Je conçois et développe des sites internet ayant un impact sur vos ventes et votre image.</li>
        </div>
        <div class="right">
            <img class="box-shadow"src="/img-acceuil-section3.jpg" alt="des idées pour vous">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .section3 {
        align-items: center;
        justify-content: center;
        height: 60vh;
        margin: 8rem 4rem;
        .left {
            background-color: var(--blue-medium);
            height: 100%;
            width: 60%;
            padding: 5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            li{
                font-family: 'mada-regular';
                color: white;
                font-size: 1.3rem;
                padding-bottom: 1rem;
            }
            h4 {
                font-family: 'mada-regular';
                color: white;
                font-size: 2rem;
                text-decoration: underline;
                text-underline-offset: 0.7rem;
            }

        }
        .right {
            background-color: var(--blue-medium);
            height: 100%;
            flex: 1 1 auto;
            padding: 5rem;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            img {
                width: 20vw;
                height: 100%;
                border-radius: 4px;
            }


        }
        
        
    }
    /*version mobile */

    @media screen and (max-width: 550px) {
          .section3 {
            flex-direction: column;
            height: 100%;
            margin: 0;
            .left {
                padding: 1rem;
                width: 80%;
                margin: 1rem 1rem 3rem 1rem;
                h4 {
                    text-align: center;
                    margin: 2rem 0;
                    font-size: 1.7rem;
                }
                li {
                    font-size: 0.8rem;
                }
            }
            .right {
               display: none;
            }
          }
    }
/* version tablette */

    @media (min-width: 551px) and (max-width: 1124px) {
        
    }
</style>