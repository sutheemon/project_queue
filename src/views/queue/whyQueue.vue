<template>
    <div class="whyqueue" style="padding-top: 101px; margin: 1px;">
        <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
  <div class="container">
    <h2 class="mb-3 ">มาใช้บริการอะไร</h2>
    <div class="ml-5">
        <input type="radio" id="heal" name="service" value="heal">
          <label for="heal" class="ml-2">มารักษา</label><br>
          <input type="radio" id="donate" name="service" value="donate">
          <label for="donate" class="ml-2">มาบริจาค</label><br>
          <input type="radio" id="other" name="service" value="other">
          <label for="other" class="ml-2">อื่น ๆ</label>
    </div>
        <a href="/queue/checkup" class="btn btn-primary btn-lg btn-block" type="submit">Continue</a>
  </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
