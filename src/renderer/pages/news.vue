<template>
    <div class="index">
        <button @click="doPrint">doPrint</button>
        <electron-vue-printer
            ref="electronVuePrinter"
            :show="true"
            :silent="false"
        ></electron-vue-printer>
    </div>
    <!-- <div>name   </div> -->
</template>

<script>
import electronVuePrinter from "electron-vue-printer";
export default {
    name: "index",
    components: {
        electronVuePrinter
    },
    methods: {
        doPrint() {
            this.$refs.electronVuePrinter.print(
                "https://cdn.pixabay.com/photo/2017/06/10/07/29/printer-2389244_960_720.png"
            );
            // or base64
            // this.$refs.electronVuePrinter.print('data:image/png;base64,iVBORw0KGgoAAAANt7U2lJh......')
        }
    }
};
</script>

<style></style>
