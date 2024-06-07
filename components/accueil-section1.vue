<template>
    <div class="section1">
        <div class="img-title flex">
            <div class="left">
                <h2>Création de <br/> site internet</h2>
                <div class="title-h3 flex">
                    <h3>Site vitrine</h3>
                    <p>&</p>
                    <h3>refonte graphique</h3>
                </div>
                <div class="button">
                    <p>Un projet Web ?</p>
                    <button @click="$router.push('/contact')" class="box-shadow">Contactez-moi !</button>
                </div>
            </div>
            <div class="right">
                <img class="box-shadow" src="/me.png" alt="">
            </div>
        </div>
       
       
    </div>

</template>

<script setup lang="ts">
    const router = useRouter()
</script>

<style lang="scss" scoped>
.section1  {
    margin: 2rem 0;

    
    .img-title {
        justify-content: space-around;
         align-items: center;
         h2 {
            font-family: 'magra-regular';
            color: var(--blue-dark);
            font-size: 4rem;
            text-transform: uppercase;
            margin-bottom: 0;
        }
        .title-h3 {
            align-items: center;
        }
        h3 {
            font-family: 'mada-semiBold';
            color: var(--blue-light);
            font-size: 1.6rem;
            text-transform: uppercase;
            margin-top: 0;
        }
        p {
            margin-top: 0;
            padding: 0 0.4rem;
            font-family: 'mada-semiBold';
            color: var(--orange);
            font-size: 1.6rem;
            text-transform: uppercase;
        }
        .right {
            img {
                height: 50vh;
                border-radius: 5px;
            }
        }
    }
    .button {
        p {
            font-family: 'magra-regular';
            color: var(--blue-dark);
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
        }
        button {
            background-color: var(--blue-medium);
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
/*version mobile  */
@media screen and (max-width: 894px) {
    .section1 {
    }
    .img-title {
        flex-direction: column;
        justify-content: center;
        h2 {
            text-align: center;
            font-size: 2.2rem !important;
        }
        .title-h3 {
            h3 {
                font-size: 1rem;
            }
            p {
                font-size: 1rem;

            }
        }
        .button {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1.5rem 0;
            p {
                font-size: 1rem;
            }
            button {
                font-size: 0.9rem;
                font-weight: bold;
                padding: 0.8rem 2rem;
            }
            
        }
        .right {
            img {
                height: 28vh !important;
            }
        }
    }
}

/*version tablette*/
@media (min-width: 895px) and (max-width: 1250px) {
    
}
    
</style>