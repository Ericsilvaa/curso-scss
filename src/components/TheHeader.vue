<template>
    <section>
        <div class="cabecalho">
            <img src="../assets/img/lescone-icone.png" alt="Le Scone Icone">
            <nav>
                <ul class="nav"><li>Menu</li><li>Contato</li></ul>
            </nav>
        </div>
    </section>
  
</template>

<script>
export default {
    name: "Header"

}
</script>

<style scoped>
    .cabecalho {
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin:0px 10px;
    }

    .nav {
        display: flex;
        gap: 10px;
    }
</style>