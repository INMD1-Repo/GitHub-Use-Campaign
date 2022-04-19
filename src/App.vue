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
      <div data-aos="fade-up">
        <div class="py-5 text-center align-items-center d-flex">
          <div class="text-center py-deit mx-auto">
            <h2 class="what_main_title_white">What is GitHub?</h2>
            <h2 class="what_main_sub_title_white">깃허브는 대체 무엇일까?</h2>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="4000">
        <div class="row what_row">
          <div class="col-md-6 col-xl-4 mb-4">
            <div class="p-xl-3 m-xl-3">
              <img
                class="what_img rounded img-fluid w-100"
                src="./assets/img/git_github.png"
              />
            </div>
          </div>
          <div class="col-md-6 d-md-flex align-items-md-center mb-4">
            <div style="max-width: 500px">
              <h2 class="what_col_title_white">GitHub X Git</h2>
              <p class="what_text_body_white my-3">
                깃허브는 분산 버전 컨트롤 소프트웨어 깃(Git)을 기반으로 소스
                코드를 호스팅하고 협업 지원 기능들을 지원하는 웹서비스 입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="4000">
        <div class="row what_row d-flex flex-row-reverse">
          <div class="col-md-6 col-xl-4 mb-4">
            <div class="p-xl-3 m-xl-3">
              <img
                class="what_img rounded img-fluid w-100"
                src="./assets/img/opensouce.jpg"
              />
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-row-reverse align-items-md-center mb-4"
          >
            <div style="max-width: 500px">
              <h2 class="what_col_title_white">OpenSource</h2>
              <p class="what_text_body_white my-3">
                깃허브는 개발자들이 많이 쓰는 사이트입니다.
                그래서 코드나 아이더가 풍부하고 일부 코드는 오픈소스로 풀어져 있어서 
                소스를 보거나 참조할수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="4000">
        <div class="row what_row">
          <div class="col-md-6 col-xl-4 mb-4">
            <div class="p-xl-3 m-xl-3">
              <img
                class="what_img rounded img-fluid w-100"
                src="./assets/img/wallpaper.jpg"
              />
            </div>
          </div>
          <div class="col-md-6 d-md-flex align-items-md-center mb-4">
            <div style="max-width: 500px">
              <h2 class="what_col_title_white">Code management</h2>
              <p class="what_text_body_white my-3">
                위에 말한거 같이 깃허브는 깃이라는 프로그램을 쓰기 때문에 코드를
                올릴떄 마다 변경점을 찾을수 있어서 코드 관리에 매우 유용합니다.
              </p>
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
              <p class="what_main_title_white">Why Use Github?</p>
              <p></p>
              <h3 class="what_main_sub_title_white">
                우리가 깃허브를 이용하면 이런것들을 이용할수 있습니다.
              </h3>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col mb-4">
              <div class="card">
                <img
                  class="card-img-top w-100 d-block fit-cover"
                  src="./assets/img/Github_action.png"
                />
                <div class="card-body p-4">
                  <p class="text-primary mb-0">개발도구</p>
                  <h4 class="font-weight-bold card-title">Github actions</h4>
                  <p class="card- text">
                    깃허브 액션은 빌드, 테스트 및 배포 파이프라인을 자동화 할수
                    있는 CL/CD입니다. 그래서 이걸 이용해서 파일을 배포가
                    가능하고 Gihub Page에 사이트를 배포 할수 있습니다.
                  </p>
                  <a
                    href="https://github.com/features/actions"
                    class="btn btn-secondary"
                    ><i class="bi bi-github"></i> 페이지 방문</a
                  >
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img
                  class="card-img-top w-100 d-block fit-cover"
                  src="./assets/img/github_student.png"
                />
                <div class="card-body p-4">
                  <p class="text-primary mb-0">혜택</p>
                  <h4 class="font-weight-bold card-title">
                    Github Student Pack
                  </h4>
                  <p class="card-text">
                    깃허브 학생 팩은 학생이 재학동안 IDE, 도메인등 프로그램을
                    무료로 제공하는 패키지입니다. 이걸 사용하는 방법은 먼저
                    대학교 이메일을 통해서 인증하면 됨니다.
                  </p>
                  <div class="d-grid gap-2 d-lg-flex justify-content-center">
                    <a
                      href="https://education.github.com/pack"
                      class="btn btn-secondary"
                      ><i class="bi bi-github"></i> 페이지 방문</a
                    >
                    <a
                      href="https://education.github.com/discount_requests/student_application"
                      class="btn"
                      style="background-color: #79dfc1"
                      >대학교 이메일 인증하기</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img
                  class="card-img-top w-100 d-block fit-cover"
                  src="./assets/img/github_Page.png"
                />
                <div class="card-body p-4">
                  <p class="text-primary mb-0">호스팅</p>
                  <h4 class="font-weight-bold card-title">GitHub Page</h4>
                  <p class="card-text">
                    깃허브에서는 정적 사이트 호스트를 지원합니다. 그래서 별도의
                    서버가 필요없습니다.
                  </p>
                  <a
                    href="https://github.com/INlg1/deu_food_gui"
                    class="btn btn-secondary"
                    ><i class="bi bi-github"></i> 페이지 방문</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article style="background-color: #9FC088">
        <section class="py-4 py-xl-5">
          <div class="container">
            <div class="text-center p-4 p-lg-5">
              <h1 class="end_title">
                Enjoy! GitHub
              </h1>
              <p class="end_sub">이때까지 깃허브에 대해서 알아보았어요.이제 한번 써보도록 할까요?</p>
              <a
                class="btn btn-primary btn-lg mr-2 py-2 px-4"
                role="button"
                href="https://github.com/"
                >Github</a
              >
            </div>
          </div>
        </section>
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
