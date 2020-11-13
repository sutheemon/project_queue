<template>
    <div class="department" style="padding-top: 60px; margin: 1px;">
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">แผนก</h2>
                    <h3 class="section-subheading text-muted">แผนกในโรงพยาบาลที่ให้บริการ</h3>
                </div>
                <div class="row">

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <span class="portfolio-link" data-toggle="modal">
                                <img class="img-fluid" src="https://static.wixstatic.com/media/3b1f25_2932027e7d1e4ce29e3ca2a48f186178.jpg/v1/fill/w_339,h_204,al_c,q_80,usm_0.66_1.00_0.01/3b1f25_2932027e7d1e4ce29e3ca2a48f186178.webp" alt="" />
                            </span>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">แผนกหัวใจ</div><br>
                                <button @click="openModal(0)">Read Me</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <img class="img-fluid" src="https://static.wixstatic.com/media/3b1f25_d6aeb137f2ce4a4fb5af06fbba6a47b5.jpg/v1/fill/w_336,h_204,al_c,q_80,usm_0.66_1.00_0.01/3b1f25_d6aeb137f2ce4a4fb5af06fbba6a47b5.webp" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">แผนกประสาท</div><br>
                                <button @click="openModal(1)">Read Me</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <img class="img-fluid" src="https://static.wixstatic.com/media/3b1f25_3ad1fb681f7c49bf90bf814e7bfa9d60.jpg/v1/fill/w_339,h_204,al_c,q_80,usm_0.66_1.00_0.01/3b1f25_3ad1fb681f7c49bf90bf814e7bfa9d60.webp" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">แผนกศัลยกรรมกระดูก</div><br>
                                <button @click="openModal(2)">Read Me</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div class="portfolio-item" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <img class="img-fluid" src="https://static.wixstatic.com/media/d2a4e0_5259f4dc7f4045fb929ee66bbd2c7a52~mv2.jpg/v1/fill/w_339,h_204,al_c,q_80,usm_0.66_1.00_0.01/Frauenheilkunde.webp" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">แผนสูตินารี</div><br>
                                <button @click="openModal(3)">Read Me</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div class="portfolio-item" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <img class="img-fluid" src="https://static.wixstatic.com/media/d2a4e0_da68be482732410085cd6b46180633ee~mv2.jpg/v1/fill/w_339,h_204,al_c,q_80,usm_0.66_1.00_0.01/ophthalmology-and-optometry-2x.webp" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">แผนกตา หู คอ จมูก</div><br>
                                <button @click="openModal(4)">Read Me</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6">
                        <div class="portfolio-item" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <img class="img-fluid" src="https://static.wixstatic.com/media/d2a4e0_56de1d50ed934601af4b98009e8b5fcf~mv2.jpg/v1/fill/w_339,h_204,al_c,q_80,usm_0.66_1.00_0.01/neonatology-665x494.webp" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">แผนกเด็ก</div><br>
                                <button @click="openModal(5)">Read Me</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <ModalDepartment :is-open="isOpen" :data="data" @emit-close="offModal" />
    </div>
</template>

<script>
import ModalDepartment from '@/components/ModalDepartment.vue'
import data from '../../database/index.json'

export default {
    components: {
        ModalDepartment,
    },
    data() {
        return {
            isOpen: false,
            data: {}
        };
    },
  methods: {
      offModal(value) {
          this.isOpen = !value;
      },

      openModal(id) {
          this.data = data.department[id];
          this.isOpen = true;
      }
  },
}
</script>

<style scoped src="@/css/styles.css">

</style>