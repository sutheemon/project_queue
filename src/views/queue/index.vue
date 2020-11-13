<template>
    <div class="queue" style="padding-top: 101px; margin: 1px;">
        <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
            <div class="col-md-8 order-md-1">
      <h4 class="mb-3">ข้อมูลผู้ป่วย</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">ชื่อ</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">นามสกุล</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <label for="tel">โทรศัพท์</label>
                <input type="tel" class="form-control" id="tel">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="birthday">วันเกิด</label>
                <input type="birthday" class="form-control" id="birthday" placeholder="01/01/1990">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <label for="idCard">หมายเลขประจำตัวประชาชน</label>
                <input type="idCard" class="form-control" id="idCard">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
        </div>

        <h6 class="mb-3 ">เพศ</h6>

        <div class="d-block my-3 ml-3">
          <input type="radio" id="male" name="gender" value="male">
            <label for="male" class="ml-2">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female" class="ml-2">Female</label><br>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other" class="ml-2">Other</label>
        </div>
        <div class="mb-3">
          <label for="symptom">อาการและปัญหาสุขภาพของคุณ</label>
          <input type="text" class="form-control" id="symptom">
        </div>
        <hr class="mb-4">
        <a href="/queue/why" class="btn btn-primary btn-lg btn-block" type="submit">Continue</a>
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
