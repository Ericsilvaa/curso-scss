<template>
    <div class="menu-item">
            <img class="foto-02" src="../assets/img/prato-2.png" alt="Prato 2">
            <h2>Pratos Principais</h2>
            <ul>
                <li v-for="principal in principais" :key="principal.name">
                    <span>{{principal.price}}</span>
                    {{principal.name}}
                </li>

            </ul>
        </div>
  
</template>

<script>
export default {
    props: {
        principais: {
            type: Array
        }
    }
}
</script>

<style>

</style>