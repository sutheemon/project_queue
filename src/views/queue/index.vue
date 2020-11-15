<template>
    <div class="queue" style="padding-top: 101px; margin: 1px;">
      {{ inf_patient }}
      <div v-if="step === 0">
              <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
                  <div class="col-md-8 order-md-1">
            <h4 class="mb-3">ข้อมูลผู้ป่วย</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">ชื่อ</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" v-model="inf_patient.Fname" required>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">นามสกุล</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" v-model="inf_patient.Lname" required>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div class="row">
                  <div class="col-md-6 mb-3">
                      <label for="email">Email</label>
                      <input type="text" class="form-control" id="email" v-model="inf_patient.email">
                      <div class="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                      </div>
                  </div>

                  <div class="col-md-6 mb-3">
                      <label for="tel">โทรศัพท์</label>
                      <input type="number" class="form-control" id="tel" v-model="inf_patient.tel">
                      <div class="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6 mb-3">
                      <label for="birthday">วันเกิด</label>
                      <input type="text" class="form-control" id="birthday" placeholder="01/01/1990" v-model="inf_patient.birthday">
                      <div class="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                      </div>
                  </div>

                  <div class="col-md-6 mb-3">
                      <label for="idCard">หมายเลขประจำตัวประชาชน</label>
                      <input type="text" class="form-control" id="idCard" v-model="inf_patient.idCard">
                      <div class="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                      </div>
                  </div>
              </div>

              <h6 class="mb-3 ">เพศ</h6>

              <div class="d-block my-3 ml-3">
                  <input type="radio" id="male" name="gender" value="ชาย" v-model="inf_patient.sex">
                  <label for="male" class="ml-2">Male</label><br>
                  <input type="radio" id="female" name="gender" value="หญิง" v-model="inf_patient.sex">
                  <label for="female" class="ml-2">Female</label><br>
                  <input type="radio" id="other" name="gender" value="อื่นๆ" v-model="inf_patient.sex">
                  <label for="other" class="ml-2">Other</label>
              </div>
              <div class="mb-3">
                <label for="symptom">อาการและปัญหาสุขภาพของคุณ</label>
                <input type="text" class="form-control" id="symptom" v-model="inf_patient.symptom">
              </div>
              <hr class="mb-4">
              <a @click="step++" class="btn btn-primary btn-lg" type="submit">Continue</a>
            </form>
          </div>
              </div>
      </div>

      <div v-else-if="step === 1">
        <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
          <div class="container">
            <h2 class="mb-3 ">มาใช้บริการอะไร</h2>
            <div class="ml-5">
                  <input type="radio" id="heal" name="service" value="มารักษา" v-model="inf_patient.use_service">
                  <label for="heal" class="ml-2">มารักษา</label><br>
                  <input type="radio" id="donate" name="service" value="มาบริจาค" v-model="inf_patient.use_service">
                  <label for="donate" class="ml-2">มาบริจาค</label><br>
                  <input type="radio" id="other" name="service" value="อื่น ๆ" v-model="inf_patient.use_service">
                  <label for="other" class="ml-2">อื่น ๆ</label>
            </div>
                <a @click="step--" class="btn btn-secondary btn-lg" type="submit">back</a>
                <a @click="step++" class="btn btn-primary btn-lg ml-3" type="submit">Continue</a>
                
          </div>
        </div>
      </div>

      <div v-else-if="step === 2">
            <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
                <div class="col-md-8 order-md-1">
          <h4 class="mb-3">ข้อมูลสุขภาพเบื้องต้น</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="weight">น้ำหนัก</label>
                <input type="number" class="form-control" id="weight" required v-model="inf_patient.weight">
              </div>
              <div class="col-md-6 mb-3">
                <label for="height">ส่วนสูง</label>
                <input type="number" class="form-control" id="height" required v-model="inf_patient.height">
              </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="temperature">อุณหภูมิ</label>
                    <input type="number" class="form-control" id="temperature" v-model="inf_patient.temperature">
                </div>

                <div class="col-md-6 mb-3">
                    <label for="pressure">ความดัน</label>
                    <input type="text" class="form-control" id="pressure" v-model="inf_patient.pressure">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="pulse">ชีพจร</label>
                    <input type="number" class="form-control" id="pulse" v-model="inf_patient.pulse">
                </div>

                <div class="col-md-6 mb-3">
                    <label for="disease">โรคประจำตัว</label>
                    <input type="text" class="form-control" id="disease" v-model="inf_patient.disease">
                </div>
            </div>
            <hr class="mb-4">
            <a @click="step--" class="btn btn-secondary btn-lg " type="submit">Back</a>
            <a @click="insertInfPatient()" class="btn btn-success btn-lg ml-3" type="submit">Send</a>
          </form>
        </div>
            </div>
      </div>

      <div v-else-if="step === 3">
        <div class="mt-5" style="display: flex; align-items: center; justify-content: center;">
          <div class="container">
            <div class="card-deck mb-3 text-center">
              <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                      <h4 class="my-0 font-weight-normal">คิวของท่าน</h4>
                  </div>
                  <div class="card-body">
                      <h1 class="card-title pricing-card-title">พบแพทย์</h1>
                      <h5>อาคาร ส.ธ.(ผู้สูงอายุ)ชั้น 14</h5><br>
                      <ul class="list-unstyled mt-3 mb-4">
                          <h5><li>แพทย์ พญ.นฤมล ศรีกล่ำ</li></h5>
                          <h5><li>แผนก จักษุ ห้องตรวจหมายเลข 12</li></h5><br>
                          <h3><li>คิวเข้าตรวจ</li></h3>
                          <li>น้อยกว่า 10 คิว</li>
                      </ul>
                </div>
                
              </div>
              <a href="/" class="btn btn-success btn-lg btn-block" type="submit">Success</a>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            inf_patient: {
              "Fname": "",
              "Lname": "",
              "email": "",
              "tel": "",
              "birthday": "",
              "idCard": "",
              "sex": "",
              "symptom": "",

              "use_service": "",

              "weight": "",
              "height": "",
              "temperature": "",
              "pressure": "",
              "pulse": "",
              "disease": ""
            },

            step: 0,
        };
    },
  methods: {
    async insertInfPatient() {
      
      const { data } = await axios.post(
          'http://localhost:3000/queue', this.inf_patient);
      this.step++ ;
      return data;
    },
  },
}
</script>

<style scoped>

</style>
