<template>
<div>
 <h1>With Action</h1>
 <br>
 <br>
 <h1 id="withActionFileName"> Filename: {{imageName}}</h1>
<br>
<br>
 <input id="withActionInput" type="file">
 <br>
 <br>
 <button id="withActionButton" @click="submitFile"> Submit </button>

 </div>
</template>

<script>

export default {
  name: "withAction",
  data() {
    return {
            imageName: ''
    } 
  },
  methods: {
    submitFile(){
      this.imageName = '';
      let fileInput = document.getElementById('withActionInput');
      this.imageName = fileInput.files[0].name;
    }
  }
};
</script>

