<template>
  <div id="app">
    <div>
      <label>Name :</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>
    
  </div>
</template>

<script>
import { namesRef } from './component/firebase';

export default {
  data() {
    return {
      name: 'Paul'
    }
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false})
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
