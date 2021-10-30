<template>
    <div id="app">
        <button class="back-fixed" @click="$router.go(-1)">Back</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "kkk",
};
</script>

<style>
/* CSS */

button.back-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: aqua;
    padding: 5px;
}
</style>
