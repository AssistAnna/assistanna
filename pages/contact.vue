<template>
  <div class="contact">
    <div class="bloc flex">
        <div class="bloc-left">
            <h2 class="title-h2">Contact</h2>
            <h4>Un projet ? Une demande d'information ?</h4>
            <h4>Vous souhaitez un devis ?</h4>
            <p>Pour toute question sur la création ou la refonte de site internet, vous pouvez me contacter via le formulaire.</p>
            <p>A bientôt!</p>
        </div>
        <div class="bloc-right box-shadow">
            <form @submit.prevent="submitEmail" class="formulaire flex">
                <div class="inputs flex">
                    <input
                v-model="form.name"
                type="text"
                placeholder="Nom, Prénom"
                class="marge-right"
                />
                <input
                v-model="form.email"
                type="text"
                placeholder="Email"
                class="marge-right"
                />
                <input
                v-model="form.phone"
                type="text"
                placeholder="Téléphone"
                />
                </div>
                <input
                v-model="form.objet"
                type="text"
                placeholder="Objet de votre demande"
                class="objet"
                />
                <textarea rows="5" width="100" name="message" placeholder="Votre message" v-model="form.message"></textarea>
            
            <div class="red-text"> <span>&#9888;</span>Vous devez remplir tous les champs</div>
            <div  class="button">
                <button
                v-if="sent === false"
                type="submit"
                class="box-shadow"
                > Envoyer
                </button>
                <div class="sent-message" v-if="sent === true">
                    <p>Message envoyé avec succès !</p>
                    <div class="retour-accueil" @click="retourAccueil">
                        <p>Retour à l'accueil</p>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const router = useRouter();

let sent = false;


const form = ref({
  access_key: 'a38da9f7-ca6f-4527-9d8e-df4fc00be1e2',
  subject: "Contact sur assistanna.fr",
  name: "",
  phone: "",
  email: "",
  objet: "",
  message: "",

});


const result = ref("");
const status = ref("");

const submitEmail = async () => {
  result.value = "Please wait...";
  if (form.value.name !== "" && form.value.phone !== "" && form.value.email !== "" && form.value.message !== "") {
   
    try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: form.value,
    });
    result.value = response.message;

    if (response.status === 200) {
      console.log("succes", response);
      status.value = "success";
    } 
    
    else{
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = '';
    form.value.email = '';
    form.value.phone = '';
    form.value.objet = '';
    form.value.message = '';
    sent = true;

    // Clear result and status after 7 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 7000);
  }
  } else {
    console.log('le message ne peut pas etre envoyé')
  }
  
};

const retourAccueil = async () => {
  sent = false;
  router.push({ path: "/" })
};
</script>

<style lang="scss" scoped>
.contact {
    padding-top: 4rem;
    height: 80vh;
    .bloc {
        margin: 1rem 3rem;
        padding: 2rem;
        border-radius: 4px;
        justify-content: space-between;
        h2 {
            text-align: left;
        }
        .bloc-left {
            border-radius: 2px;
            padding: 1rem 2rem;
            width: 30%;
            

            h4 {
                font-family: 'mada-semiBold';
                color: var(--orange);
                font-size: 1.1rem;
                margin: 0;
            }
            p {
                font-family: 'mada-regular';
                font-size: 0.9rem;
                color: var(--blue-dark);
            }
        }
        .bloc-right {
            display: flex;
            background-color: var(--orange);
            padding: 1.5rem 2rem;
            .formulaire {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                input {
                        font-family: 'mada-semiBold';
                        color: var(--blue-dark);
                        min-height: 2.2rem;
                        margin-bottom: 1rem;
                        border-radius: 2px;
                        border: none;
                        font-weight: bold;
                        padding-left: 0.7rem;
                        font-size: 1rem;
                    }
                    .objet {
                        width: 98%;
                        padding-left: 2%;
                    }
                .inputs { 
                    justify-content: space-between;
                    .marge-right {
                        margin-right: 1rem;
                    }
                }
                textarea {
                    font-family: 'mada-semiBold';
                    font-size: 1rem;
                    padding-top: 0.7rem;
                    padding-left: 2%;
                    border: none;
                    border-radius: 2px;
                    resize: none;
                    width: 98%;
                }
                
                .red-text {
                    color: rgb(237, 59, 59);
                    margin: 1rem 0;
                    font-family: 'mada-semiBold';
                    
                }
                .button {
                    height: 7vh;
                }
                button {
                    font-family: 'mada-semiBold';
                    font-weight: bold;
                    background-color: var(--blue-medium);
                    color: white;
                    border: none;
                    font-size: 1.2rem;
                    padding: 0.7rem 1.5rem;
                    border-radius: 2px;
                    cursor: pointer;

                }
                .sent-message {
                    display: flex;
                    font-family: 'mada-regular';
                    text-align: center;
                    color: white;
                    p {
                        font-size: 1.1rem;
                        margin-right: 1rem;
                    }
                    .retour-accueil {
                        p {
                            text-decoration: underline;
                            text-underline-offset: 0.4rem;
                            cursor: pointer;
                        }
                        
                    }
                }

            }
        }
    }
}
</style>