<template>
    <div class="bloc-5 flex">
        <div class="title-illu flex">
            <h3>Environnement <br/> de développement</h3>
            <div class="illustration"></div>
           
        </div>
        <div class="list-img flex">
            <div class="list">
                <p v-for="item in items" :key="item.title"> {{ item.title }}</p>
            </div>
            <img src="/liste-techs.png" alt="logo technologies">

        </div>
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {title: "Javascript, Php"},
                    {title: "Html, CSS, Scss"},
                    {title: "NodeJs"},
                    {title: "GraphQl, SQLite"},
                    {title: "Bootstrap, Tailwind Css"},
                    {title: "Nuxtjs, Vuejs, Vuex"},
                    {title: "Strapi"},
                    {title: "Figma"},
                    {title: "Slack, Teams, Monday"},
                    {title: "Hébergement sur Hostinger"},
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .bloc-5 {
        flex-direction: column;
        align-items: center;
        margin-bottom: 4rem;
        margin-top: 4rem;
        .title-illu {
            width: 65%;
            justify-content: space-between;
            align-items: center;
            h3 {
                font-family: 'mada-medium';
                color: var(--blue-dark);
                font-size: 2.3rem;
                text-align: left;
            }
        .illustration {
                background-repeat: no-repeat;
                background-image: url("illustrations/bloc4-essai.png");
                background-size: 100%;
                width: 30vw;
                min-height: 50vh;
            }
        }
        .list-img {
            align-items: center;
            justify-content: space-between;
            margin-top: 3rem;
            width: 50%;
            p {
                color: var(--blue-dark);
                font-family: 'mada-regular';
                font-size: 1.2rem;
                margin: 0;
                line-height: 1.8rem;
            }
            img {
                height: 50vh;
            }
        }
     
    }
</style>