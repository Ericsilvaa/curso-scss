<template>
   <div>
        <div class="menu-item">
            <img src="../assets/img/prato-1.png" alt="Prato 1">
            <h2>Entradas</h2>
            <ul>
                <li v-for="entrada in entrada" :key="entrada.name">
                    <span>{{entrada.price}}</span> 
                    {{entrada.name}}
                </li>

            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        entrada: {
            type: Array
        },
    }

}
</script>

<style>

</style>