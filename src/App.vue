<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-light"
      v-bind:style="{ background: topcolor, transition: 'all ease 0.3s 0s' }"
    >
      <div class="container">
        <a class="navbar-brand title" href="#">DoD GitHub Use Campaign</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="navbar-nav">
            <a class="nav-item nav-link menu" href="#home">Home</a>
            <a class="nav-item nav-link menu" href="#about">About</a>
            <a class="nav-item nav-link menu" href="#project">project</a>
            <a class="nav-item nav-link menu" href="#skill">Skill</a>
          </div>
        </div>
      </div>
    </nav>
    <div id="fullpage">
      <div class="section">
        <div class="py-5 text-center h-100 align-items-center d-flex">
          <div class="container py-5">
            <div class="row">
              <div class="mx-auto col-lg-8 col-md-10">
                <vue-typer
                  style="font-size: 300%; font-weight: bold"
                  :text="['What Github?', 'How Github?', 'Enjoy Github!']"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="5000"
                  :erase-delay="250"
                  erase-style="select-all"
                  :erase-on-complete="false"
                  caret-animation="blink"
                ></vue-typer>
                <p class="lead mb-5">
                  우리가 사용하지 않지만 개발자들 사이에서는 많이 사용하는
                  깃허브.. <br />
                  깃허브는 어떤 것이고 무었인지 한번 알아볼까요?
                </p>
                <a class="btn btn-lg mx-1 btn-outline-primary" href="#what"
                  >Let's Go</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">Some section</div>
      <div class="section">Some section</div>
      <div class="section">Some section</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      topcolor: "#00ff0000",
      scrollPostion: 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if(window.pageYOffset < 5){
        this.topcolor = "#00ff0000"
      }else if(window.pageYOffset > 5){
        this.topcolor = "white"
      }
    }
  }
};
</script>