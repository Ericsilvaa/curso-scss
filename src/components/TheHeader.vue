<template>
    <header>
        <div class="cabecalho">
            <img src="../assets/img/lescone-icone.png" alt="Le Scone Icone">
            <nav>
                <ul class="nav">
                    <li>Menu</li>
                    <li>Contato</li></ul>
            </nav>
        </div>
    </header>
  
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
         margin:0px 20px;
    }

    .nav {
        display: flex;
        gap: 15px;
    }
</style>