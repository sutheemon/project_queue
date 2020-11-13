<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <span class="navbar-brand js-scroll-trigger">Medical Queuing</span>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <router-link to="/"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">หน้าแรก</a></li></router-link>
                        <router-link to="/about"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">เกี่ยวกับเรา</a></li></router-link>
                        <router-link to="/department"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">แผนก</a></li></router-link>
                        <router-link to="/map"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">การเดินทาง</a></li></router-link>
                    </ul>
                </div>
            </div>
        </nav>
    
    <router-view/>
  </div>
</template>

<style scoped src="@/css/styles.css">
</style>
