<template>
<div>
<h1>Without Action</h1>
<br>
<br>
<h1 id="withoutActionFileName"> Filename: {{imageName}}</h1>
<br>
<br>
<input @change="loadFile" id="withoutActionInput" style="visibility: hidden;" type="file">
<br>
<button id="withoutActionButton" @click="setUpload"> Load image </button>
</div>
</template>

<script>

export default {
  name: "withoutAction",
    data() {
        return {
                imageName: ''
        } 
    },
  methods: {
      loadFile(){
      this.imageName = '';
      let file = document.getElementById('withoutActionInput');
      this.imageName = file.files[0].name;
    },
    setUpload(){
        let fileInput = document.getElementById('withoutActionInput');
        fileInput.click();
    }
  }
};
</script>
