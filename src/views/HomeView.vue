<template>
    <div class="home align-content-center text-center" >
        <div class="d-flex justify-content-center">
            <div class="parent">
                <img class="image1" alt="logo" src="../assets/logo.png">
                <img class="image2" alt="bonzi" src="../assets/bonzi.gif">
            </div>
        </div>
        <br/>
        <HelloWorld msg="Uppgift 3 med ramverket Vue.js"/>
        <br/>
        <br/>
        <div class="container text-center">
            <p>Denna webbplats handlar om apan Bonzis fritidsintressen i form av lästa kurser.</p>
            <p>Bonzi arbetar som programmerare av realtidsapplikationer på företaget Microsoft.</p>
            <p>Bland apan Bonzis världsberömda projekt bör nämnas självkörande bilar, <br/>
            självkörande fartyg, självkörande flygplan samt självkörande rymdfarkoster.</p>
            <p>Just nu är Bonzi projektansvarig för projektet "Justera Ditt förflutna", som<br/>
                pågår i samarbete med doktor Emmett Brown och forskaren Marty McFly.</p>
                <p>Bonzi håller på att utveckla ett supermodernt användargränssnitt till DeLoreans<br/> 
                fluxkondensator, som numera använder neutrinos ljushastighet som tidaccelerator.
            </p>
        </div>   
    </div>
</template>

<script>
// @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'HomeView',
        components: {
            HelloWorld
        }
    }
</script>
