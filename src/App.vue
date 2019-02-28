<template>
  <div id="app">
    <div>
      <img src=".\assets\logo.png"> 
    </div>
    <div>
      <label>Name :</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">
          <div v-if="!personName.edit">
            <p>{{ personName.name }}</p>
            <button @click="removeName(personName['.key'])">Remove</button>
            <button @click="setEditName(personName['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';

export default {
  data() {
    return {
      name: 'Paul'
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false});
      this.name = '';
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false });
    },
    saveEdit(person) {
      const key = person['.key'];
      namesRef.child(key).set({ name: person.name, edit: false });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin-left: 15%;
  margin-right: 15%;
  justify-items: center;
  justify-content: center;
  padding-top: 50px;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
