 <template>
   <main class="container">
      <section class="container intro">
         <div class="grid-5">
            <img class="logo" src="../assets/img/lescone.png" alt="lescone">
            <div class="intro-">
               <p>De Seg. á Sab. <span class="aberto"></span><br> das 07:00h às 18:00h </p>
               <p>Praia do Rosa, xxx <br> Santa Catarina - SC</p>
            </div>
            <p class="intro-telefone">+55 048 2412-3555</p>
         </div>
   
         <div class="grid-7">
            <img src="../assets/img/foto.png" alt="Foto de Le Scone">
         </div>

      </section>
      

      <MenuView />

      <ContatoView />




   </main>
 </template>
 
 <script>
import MenuView from '@/components/MenuView.vue'
import ContatoView from '@/components/ContatoView.vue'

 export default {
  components: { MenuView, ContatoView},
    name: "Home"
 
 }
 </script>
 
 <style scoped>
 .intro {
   display: flex;
 }
 </style>