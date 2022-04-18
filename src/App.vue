<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-light"
      v-bind:style="{ background: 'white', transition: 'all ease 0.3s 0s' }"
    >
      <div class="container">
        <a class="navbar-brand title nav_title" href="#"
          >DoD GitHub Use Campaign</a
        >
        <!-- <button
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
        </div> -->
      </div>
    </nav>
    <article class="main c_article">
      <div class="py-5 text-center h-100 align-items-center d-flex">
        <div class="container py-5">
          <div class="row">
            <div class="mx-auto col-lg-8 col-md-10">
              <vue-typer
                class="Main_title"
                :text="['What is Github?', 'Why Github ', 'Enjoy Github!']"
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
              <p class="lead mb-5 Main_subtitle" style="font">
                우리가 사용하지 않지만 개발자들 사이에서는 많이 사용하는
                깃허브.. <br />
                깃허브는 어떤 것이고 무었인지 한번 알아볼까요?
              </p>
              <a class="btn btn-lg mx-1 btn-primary" href="#main">Let's Go!</a>
            </div>
          </div>
        </div>
      </div>
    </article>
    <!-- What is Github? -->
    <article id="main" class="what_color c_article">
      <div class="py-5 text-center align-items-center d-flex">
        <div class="container py-4 py-xl-5">
          <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center py-deit mx-auto">
              <h2 class="what_main_title">What is GitHub?</h2>
              <h2 class="what_main_sub_title">깃허브는 대체 무엇일까?</h2>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="d-flex flex-column flex-lg-row">
                <div class="w-100">
                  <img class="what_sub_img" src="./assets/img/git_github.png" />
                </div>
                <div class="py-4 py-lg-0 px-lg-4">
                  <h4 class="what_title">GitHub X Git</h4>
                  <p>
                    깃허브는 분산 버전 컨트롤 소프트웨어 깃(Git)을 기반으로 소스
                    코드를 호스팅하고 협업 지원 기능들을 지원하는 웹서비스
                    입니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="d-flex flex-column flex-lg-row">
                <div class="w-100">
                  <img class="what_sub_img" src="./assets/img/opensouce.jpg" />
                </div>
                <div class="py-4 py-lg-0 px-lg-4">
                  <h4 class="what_title">OpenSource</h4>
                  <p>
                    깃허브는 개발자들이 많이 쓰는 사이트입니다. 그러다 보니
                    개발자들이 소스를 많이 사람들이 쓰거나 볼수 있게 오픈소스로
                    많이 공개합니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="d-flex flex-column flex-lg-row">
                <div class="w-100">
                  <img
                    class="what_sub_img_large"
                    src="./assets/img/wallpaper.jpg"
                  />
                </div>
                <div class="py-4 py-lg-0 px-lg-4">
                  <h4 class="what_title">Code management</h4>
                  <p>
                    위에 말한거 같이 깃허브는 깃이라는 프로그램을 쓰기 때문에
                    코드를 올릴떄 마다 변경점을 찾을수 있어서 코드 관리에 매우
                    유용합니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="d-flex flex-column flex-lg-row">
                <div class="w-100">
                  <img
                    class="rounded img-fluid w-100 fit-cover"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                    style="height: 200px"
                  />
                </div>
                <div class="py-4 py-lg-0 px-lg-4">
                  <h4 class="font-weight-bold">Lorem libero donec</h4>
                  <p>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article class="c_article why_color">
      <div class="py-5 text-center align-items-center d-flex">
        <div class="container py-4 py-xl-5">
          <div class="row mb-4">
            <div class="col-md-8 col-xl-8 text-center mx-auto py-deit">
              <h2 class="what_main_title_white">Why use Github?
              </h2>
              <p class="w-lg-50">
                Curae hendrerit donec commodo hendrerit egestas tempus, turpis
                facilisis nostra nunc. Vestibulum dui eget ultrices.
              </p>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col mb-4">
              <div class="card">
                <img
                  class="card-img-top w-100 d-block fit-cover"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                />
                <div class="card-body p-4">
                  <p class="text-primary mb-0">Article</p>
                  <h4 class="font-weight-bold card-title">
                    Lorem libero donec
                  </h4>
                  <p class="card-text">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img
                  class="card-img-top w-100 d-block fit-cover"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                />
                <div class="card-body p-4">
                  <p class="text-primary mb-0">Article</p>
                  <h4 class="font-weight-bold card-title">
                    Lorem libero donec
                  </h4>
                  <p class="card-text">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img
                  class="card-img-top w-100 d-block fit-cover"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                />
                <div class="card-body p-4">
                  <p class="text-primary mb-0">Article</p>
                  <h4 class="font-weight-bold card-title">
                    Lorem libero donec
                  </h4>
                  <p class="card-text">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>
