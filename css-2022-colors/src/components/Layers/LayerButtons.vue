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

  .orange{
    background-color: orange;
    color:black;
  }

  /* Move the above css inte the layers below this comment to see @layers in action */
  @layer base, colors;


  @layer colors{
    
  }


  @layer base{
    
  }



</style>