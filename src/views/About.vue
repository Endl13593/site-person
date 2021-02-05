<template>
  <div>
    <div class="container" style="margin-bottom: 20px">
      <div class="row welcome_inner">
        <div class="col-lg-12">
          <div class="welcome_text">
            <h3 style="font-weight: bold; margin-top: 10px">Resumo</h3>
          </div>
          <hr>
          <div class="tools_expert">
            <div class="skill_main">
              <div class="skill_item mb-4">
                <h5>HTML</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 99%" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"><strong>99%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>CSS</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 90%" aria-valuenow="90" aria-valuemax="100"><strong>90%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>Javascript</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 85%" aria-valuenow="85" aria-valuemax="100"><strong>85%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>PHP</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 90%" aria-valuenow="90" aria-valuemax="100"><strong>90%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>Laravel</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 85%" aria-valuenow="85" aria-valuemax="100"><strong>85%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>Vue JS</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 85%" aria-valuenow="85" aria-valuemax="100"><strong>85%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>Android</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 65%" aria-valuenow="65" aria-valuemax="100"><strong>65%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>Docker</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 80%" aria-valuenow="80" aria-valuemax="100"><strong>80%</strong></div>
                  </div>
                </div>
              </div>
              <div class="skill_item mb-4">
                <h5>Git</h5>
                <div class="progress_br">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style=" width: 90%" aria-valuenow="90" aria-valuemax="100"><strong>90%</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background: #347dbe; width: 100%;">
      <div class="tabs_inner container">
        <ul class="nav nav-tabs tab-header" id="myTab" role="tablist">
          <li class="nav-item tab-item" style="margin-right: 10px">
            <a class="nav-link active tab-item" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Experiência</a>
          </li>
          <li class="nav-item tab-item">
            <a class="nav-link tab-item" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Formação Acadêmica</a>
          </li>
        </ul>
        <div class="tab-content resume-area">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-timeline">
                    <div class="timeline">
                      <a href="#" class="timeline-content">
                        <div class="timeline-year">DEZ - 2018 / Atual</div>
                        <div class="timeline-icon"><i class="fa fa-arrows-h"></i></div>
                        <div class="inner-content">
                          <h3 class="title">Afline Mulserviços</h3>
                          <p class="description">
                            Desenvolvedor FullStack - Laravel, VueJS, Android
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-timeline">
                    <div class="timeline">
                      <a href="#" class="timeline-content">
                        <div class="timeline-year">SET - 2018</div>
                        <div class="timeline-icon"><i class="fa fa-arrows-h"></i></div>
                        <div class="inner-content">
                          <h3 class="title">Faculdade Martha falcão - Wyden</h3>
                          <p class="description">
                            Análise e Desenvolvimento de Sistemas - Manaus, AM
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="timeline">
                      <a href="#" class="timeline-content">
                        <div class="inner-content">
                          <h3 class="title">CETAM - AM</h3>
                          <p class="description">
                            Curso Técnico em Programação WEB
                          </p>
                        </div>
                        <div class="timeline-icon"><i class="fa fa-arrows-h"></i></div>
                        <div class="timeline-year">DEZ - 2012</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>