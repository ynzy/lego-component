<template>
<HelloWorld/>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted } from 'vue';
export interface TestProps {
  name: string;
}

export default defineComponent({
  name: 'App',
  components: {
    
  },
  setup() {
    console.log(inject('test'));
    
    onMounted(()=>{
      getCurrentInstance()?.appContext.config.globalProperties.$echo()
    })
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
