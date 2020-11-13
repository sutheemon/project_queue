<template>
    <div class="whyqueue" style="padding-top: 101px; margin: 1px;">
        <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
            <div class="col-md-8 order-md-1">
      <h4 class="mb-3">ข้อมูลสุขภาพเบื้องต้น</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="weight">น้ำหนัก</label>
            <input type="text" class="form-control" id="weight" placeholder="" value="" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="height">ส่วนสูง</label>
            <input type="text" class="form-control" id="height" placeholder="" value="" required>
          </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="temperature">อุณหภูมิ</label>
                <input type="text" class="form-control" id="temperature">
            </div>

            <div class="col-md-6 mb-3">
                <label for="pressure">ความดัน</label>
                <input type="tel" class="form-control" id="pressure">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="pulse">ชีพจร</label>
                <input type="text" class="form-control" id="pulse">
            </div>

            <div class="col-md-6 mb-3">
                <label for="disease">โรคประจำตัว</label>
                <input type="text" class="form-control" id="disease">
            </div>
        </div>
        <hr class="mb-4">
        <a href="/queue/wait" class="btn btn-primary btn-lg btn-block" type="submit">Continue</a>
      </form>
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
