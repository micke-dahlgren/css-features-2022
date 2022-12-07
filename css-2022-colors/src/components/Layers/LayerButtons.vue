<template>
  <section class="space-between">

    <div class="small-buttons">
      <button class="button orange">                             
        Small
      </button>
    </div>

    <button class="button orange">Custom</button> 

  </section>
</template>

<style scoped>
  @layer base, utilities;

  @layer utilities{
    .orange{
      background-color: orange;
      color:black;
    }
  }

  @layer base{
    button{
      font-size:2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.25em;
    }
  
    .small-buttons > .button {
      font-size:1.5rem;
      background-color: gray;
      color:white;
      padding: .1em .25em;
    }
  
    .button{
      background-color: gray;
      color:white;
      padding: .5em 1em;
    }
  }


</style>