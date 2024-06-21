<template>
    <div class="all-site">
        <Navbar/>
        <NuxtPage/>
        <CookieControl locale="fr"/>
        <Footer/>       
    </div>
  </template>
<script setup lang="ts">
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>
  
<style lang="scss">
   
    body {
        margin: 0px;
        --blue-medium: #567BDA;
        --blue-light: #86D7F3;
        --blue-dark: #1F2346;
        --orange: #FEB858;
        --beige: #FCF2E3;
        text-decoration: none;
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    .flex {
        display: flex;
    }
    .box-shadow{
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    .title-h2 {
        font-family: 'mada-regular';
        color: var(--blue-dark);
        font-size: 2.8rem;
        text-align: center;
        text-decoration: underline;
        text-underline-offset: 1.1rem;
        text-decoration-color: var(--blue-light);
    }
    @media screen and (max-width: 894px) {
        .title-h2 {
            text-underline-offset: 0.8rem;
        }
    }
 
/*pages transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* bar cookie */
.cookieControl__BarContainer {
  h2 {
    font-size: 1.1rem;
  }
  p {
    font-family: 'mada-light';
    font-size: 0.9rem;
    margin-right: 1rem;
  }
  button {
    padding: 0.8rem 1.2rem;
  }
}
</style>