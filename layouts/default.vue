<template>
    <div class="all-site">
        <Navbar/>
        <NuxtPage/>
        <Footer/>       
    </div>
  </template>
  <script>
  
  export default {
    
  
  }
  </script>
  
<style>
    /* font Magra */
    @font-face {
        font-family: 'magra-regular';
        src: url('/fonts/Magra-Regular.ttf') format('opentype'),
    }
    /* font Mada */
    @font-face {
        font-family: 'mada-medium';
        src: url('/fonts/Mada-Medium.ttf') format('opentype'),
    }
    @font-face {
        font-family: 'mada-regular';
        src: url('/fonts/Mada-Regular.ttf') format('opentype'),
    }
    @font-face {
        font-family: 'mada-semiBold';
        src: url('/fonts/Mada-SemiBold.ttf') format('opentype'),
    }
    @font-face {
        font-family: 'mada-light';
        src: url('/fonts/Mada-Light.ttf') format('opentype'),
    }
    body {
        margin: 0px;
        --blue-medium: #567BDA;
        --blue-light: #86D7F3;
        --blue-dark: #1F2346;
        --orange: #FEB858;
        --beige: #FCF2E3;
        text-decoration: none;
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
 
/*pages transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 
media queries
version mobile
    @media screen and (max-width: 550px) {
            
    }

version tablette
    @media (min-width: 551px) and (max-width: 1124px) {
        
    }
    
*/
</style>