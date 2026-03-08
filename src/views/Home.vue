<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <header :class="['fixed w-full top-0 z-50 transition-all duration-500', scrolled ? 'bg-white shadow-2xl' : 'bg-primary-darker shadow-lg']">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <router-link to="/" class="relative group">
            <span :class="['text-xl md:text-2xl font-bold tracking-wide transition-all duration-300', scrolled ? 'text-gray-900' : 'text-white']">
              <span class="relative">
                EDUARDO 
                <span class="relative ml-2">
                  <span :class="scrolled ? 'bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent' : 'text-white'">NUNES</span>
                </span>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </span>
          </router-link>
          
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            :class="['md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300', scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10']">
            <div class="relative w-6 h-5 flex flex-col justify-between">
              <span :class="['absolute h-0.5 w-full bg-current transform transition-all duration-300', mobileMenuOpen ? 'rotate-45 top-2' : 'top-0']"></span>
              <span :class="['absolute h-0.5 w-full bg-current transition-all duration-300 top-2', mobileMenuOpen ? 'opacity-0' : 'opacity-100']"></span>
              <span :class="['absolute h-0.5 w-full bg-current transform transition-all duration-300', mobileMenuOpen ? '-rotate-45 top-2' : 'top-4']"></span>
            </div>
          </button>
        
          <ul class="hidden md:flex items-center space-x-2">
            <li>
              <a href="#" 
                 :class="['relative no-underline px-4 py-2 font-semibold transition-all duration-300 rounded-lg group', scrolled ? 'text-gray-700 hover:text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10']"
                 @click.prevent="scrollToTop">
                <span class="relative z-10">HOME</span>
                <span :class="['absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-3/4 transition-all duration-300', scrolled ? '' : 'bg-white']"></span>
              </a>
            </li>
            <li>
              <a href="#resumo" 
                 :class="['relative no-underline px-4 py-2 font-semibold transition-all duration-300 rounded-lg group', scrolled ? 'text-gray-700 hover:text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10']">
                <span class="relative z-10">RESUMO</span>
                <span :class="['absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-3/4 transition-all duration-300', scrolled ? '' : 'bg-white']"></span>
              </a>
            </li>
            <li>
              <a href="#contato" 
                 :class="['relative no-underline px-4 py-2 font-semibold transition-all duration-300 rounded-lg group', scrolled ? 'text-gray-700 hover:text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10']">
                <span class="relative z-10">CONTATO</span>
                <span :class="['absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-3/4 transition-all duration-300', scrolled ? '' : 'bg-white']"></span>
              </a>
            </li>
            <li class="ml-2">
              <a href="#contato" 
                 class="no-underline inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                <span>FALE COMIGO</span>
                <i class="fa fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
            </li>
          </ul>
        </div>
        
        <div 
          :class="['md:hidden overflow-hidden transition-all duration-500 ease-in-out', mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0']">
          <ul class="flex flex-col space-y-1 pt-4">
            <li>
              <a href="#" 
                 @click.prevent="scrollToTop(); mobileMenuOpen = false" 
                 :class="['no-underline block px-4 py-3 font-semibold transition-all duration-300 rounded-lg', scrolled ? 'text-gray-700 hover:bg-primary/5 hover:text-primary' : 'text-white hover:bg-white/10']">
                <i class="fa fa-home w-6"></i>
                HOME
              </a>
            </li>
            <li>
              <a href="#resumo" 
                 @click="mobileMenuOpen = false" 
                 :class="['no-underline block px-4 py-3 font-semibold transition-all duration-300 rounded-lg', scrolled ? 'text-gray-700 hover:bg-primary/5 hover:text-primary' : 'text-white hover:bg-white/10']">
                <i class="fa fa-file-text w-6"></i>
                RESUMO
              </a>
            </li>
            <li>
              <a href="#contato" 
                 @click="mobileMenuOpen = false" 
                 :class="['no-underline block px-4 py-3 font-semibold transition-all duration-300 rounded-lg', scrolled ? 'text-gray-700 hover:bg-primary/5 hover:text-primary' : 'text-white hover:bg-white/10']">
                <i class="fa fa-envelope w-6"></i>
                CONTATO
              </a>
            </li>
            <li class="pt-2">
              <a href="#contato" 
                 @click="mobileMenuOpen = false"
                 class="no-underline block px-4 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg shadow-lg text-center group">
                <i class="fa fa-paper-plane mr-2"></i>
                FALE COMIGO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <section class="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div class="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 20" :key="i" 
             class="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
             :style="getParticleStyle()"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center order-1 lg:order-1" data-aos="fade-right">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-gray-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              
              <div class="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500 w-full max-w-md mx-auto bg-white">
                <img :src="personalImage" alt="Eduardo Nunes" class="w-full h-auto object-cover" style="max-height: 550px;">
              </div>
              
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        
          <div class="order-2 lg:order-2" data-aos="fade-left">
            <div class="relative">
              <div class="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
              
              <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 transform hover:shadow-3xl transition-all duration-500 border border-white/20">
                <div class="inline-block mb-4">
                  <span class="relative px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-xs md:text-sm rounded-full uppercase tracking-wider shadow-lg">
                    <span class="relative z-10">Olá, eu sou o</span>
                    <span class="absolute inset-0 bg-white/20 rounded-full blur animate-pulse"></span>
                  </span>
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent animate-gradient-text">
                  Eduardo Nunes
                </h1>
                
                <div class="mb-6 h-12 flex items-center">
                  <h2 class="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {{ typedRole }}<span class="animate-blink">|</span>
                  </h2>
                </div>
                
                <p class="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                  Sempre gostei de criar soluções por mais simples que fossem. E quando descobri essa vasta área de desenvolvimento web,
                  empreguei todo meu tempo e dedicação em aprender novas tecnologias. E atualmente sou Desenvolvedor Web
                </p>
                
                <div class="grid grid-cols-3 gap-4 mb-8">
                  <div class="text-center p-4 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div class="text-2xl md:text-3xl font-bold text-primary">6+</div>
                    <div class="text-xs md:text-sm text-gray-600">Anos</div>
                  </div>
                  <div class="text-center p-4 bg-gradient-to-br from-blue-500/10 to-gray-400/10 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div class="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                    <div class="text-xs md:text-sm text-gray-600">Projetos</div>
                  </div>
                  <div class="text-center p-4 bg-gradient-to-br from-gray-500/10 to-primary/10 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div class="text-2xl md:text-3xl font-bold text-gray-600">10+</div>
                    <div class="text-xs md:text-sm text-gray-600">Tecnologias</div>
                  </div>
                </div>
                
                <div class="space-y-3 mb-8">
                  <a href="tel:+5592995375239" class="flex items-center group no-underline">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i class="fa fa-phone text-white"></i>
                    </div>
                    <span class="ml-3 text-gray-700 group-hover:text-primary transition-colors text-sm md:text-base">(92) 999537-5239</span>
                  </a>
                  <a href="mailto:nunes.eduardo1993@gmail.com" class="flex items-center group no-underline">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-gray-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i class="fa fa-envelope text-white"></i>
                    </div>
                    <span class="ml-3 text-gray-700 group-hover:text-blue-600 transition-colors text-sm md:text-base">nunes.eduardo1993@gmail.com</span>
                  </a>
                  <div class="flex items-center group">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i class="fa fa-map-marker text-white"></i>
                    </div>
                    <span class="ml-3 text-gray-700 group-hover:text-gray-600 transition-colors text-sm md:text-base">Manaus-AM</span>
                  </div>
                </div>
                
                <div class="flex space-x-3">
                  <a href="https://www.instagram.com/enunes.lima/?hl=pt-br" target="_blank"
                     class="no-underline relative group w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg overflow-hidden">
                    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <i class="fa fa-instagram text-xl relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></i>
                  </a>
                  <a href="https://github.com/Endl13593" target="_blank"
                     class="no-underline relative group w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center shadow-lg overflow-hidden">
                    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <i class="fa fa-github text-xl relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/eduardo-nunes-0b541915b" target="_blank"
                     class="no-underline relative group w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-lg overflow-hidden">
                    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <i class="fa fa-linkedin text-xl relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></i>
                  </a>
                  <a href="#contato" 
                     class="no-underline relative group flex-1 px-6 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white flex items-center justify-center shadow-lg overflow-hidden font-semibold hover:shadow-2xl transition-all duration-300">
                    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span class="relative z-10">Entre em Contato</span>
                    <i class="fa fa-arrow-right ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="resumo" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resumo</h2>
          <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div v-for="skill in skills" :key="skill.name" class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-lg font-semibold text-gray-800">{{ skill.name }}</h3>
              <span class="text-primary font-bold">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-primary to-primary-dark h-full rounded-full transition-all duration-1000 ease-out"
                   :style="`width: ${skill.level}%`"></div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-primary to-primary-dark rounded-2xl shadow-2xl overflow-hidden">
          <div class="flex border-b border-white/20">
            <button @click="activeTab = 'experience'" 
                    :class="activeTab === 'experience' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white'"
                    class="flex-1 px-6 py-4 text-base md:text-lg font-semibold transition-all duration-300">
              Experiência
            </button>
            <button @click="activeTab = 'education'"
                    :class="activeTab === 'education' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white'"
                    class="flex-1 px-6 py-4 text-base md:text-lg font-semibold transition-all duration-300">
              Formação Acadêmica
            </button>
          </div>
          
          <div v-show="activeTab === 'experience'" class="p-8 md:p-12">
            <div class="relative pl-8 border-l-4 border-white/30">
              <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white"></div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="text-white/80 font-semibold mb-2 text-sm md:text-base">FEV - 2022 / Atual</div>
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">DevSquad</h3>
                <p class="text-white/90 text-base md:text-lg">Engenheiro de Software - TALL Stack (Tailwind, Alpine, Laravel, Livewire)</p>
              </div>
            </div>

            <div class="relative pl-8 border-l-4 border-white/30">
              <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white"></div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="text-white/80 font-semibold mb-2 text-sm md:text-base">DEZ - 2018 / FEV - 2022</div>
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">Afline Mulserviços</h3>
                <p class="text-white/90 text-base md:text-lg">Desenvolvedor FullStack - Laravel, VueJS, Android</p>
              </div>
            </div>
          </div>
          
          <div v-show="activeTab === 'education'" class="p-8 md:p-12">
            <div class="space-y-8">
              <div class="relative pl-8 border-l-4 border-white/30">
                <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white"></div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div class="text-white/80 font-semibold mb-2 text-sm md:text-base">SET - 2018</div>
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">Faculdade Martha Falcão - Wyden</h3>
                  <p class="text-white/90 text-base md:text-lg">Análise e Desenvolvimento de Sistemas - Manaus, AM</p>
                </div>
              </div>

              <div class="relative pl-8 border-l-4 border-white/30">
                <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white"></div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div class="text-white/80 font-semibold mb-2 text-sm md:text-base">DEZ - 2012</div>
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">CETAM - AM</h3>
                  <p class="text-white/90 text-base md:text-lg">Curso Técnico em Programação WEB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contato" class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contato</h2>
          <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <a href="https://api.whatsapp.com/send?phone=5592995375239" target="_blank"
             class="no-underline group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fa fa-whatsapp text-white text-3xl"></i>
              </div>
              <h3 class="text-gray-800 font-semibold text-lg group-hover:text-primary transition-colors">(92) 9 9537-5239</h3>
            </div>
          </a>

          <a href="mailto:nunes.eduardo1993@gmail.com" target="_blank"
             class="no-underline group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fa fa-envelope text-white text-3xl"></i>
              </div>
              <h3 class="text-gray-800 font-semibold text-lg group-hover:text-primary transition-colors">nunes.eduardo1993@gmail.com</h3>
            </div>
          </a>
          
          <a href="https://github.com/Endl13593" target="_blank"
             class="no-underline group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fa fa-github text-white text-3xl"></i>
              </div>
              <h3 class="text-gray-800 font-semibold text-lg group-hover:text-primary transition-colors">Endl13593</h3>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/eduardo-nunes-0b541915b" target="_blank"
             class="no-underline group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fa fa-linkedin text-white text-3xl"></i>
              </div>
              <h3 class="text-gray-800 font-semibold text-lg group-hover:text-primary transition-colors">eduardo-nunes-0b541915b</h3>
            </div>
          </a>
          
          <a href="https://www.instagram.com/enunes.lima/?hl=pt-br" target="_blank"
             class="no-underline group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fa fa-instagram text-white text-3xl"></i>
              </div>
              <h3 class="text-gray-800 font-semibold text-lg group-hover:text-primary transition-colors">@enunes.lima</h3>
            </div>
          </a>
        </div>
      </div>
    </section>

    <button @click.prevent="backToTop" 
            id="btnTop"
            class="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center">
      <i class="fa fa-arrow-circle-up text-2xl"></i>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      personalImage: require('@/assets/img/personal.jpg'),
      mobileMenuOpen: false,
      activeTab: 'experience',
      typedRole: '',
      fullRole: 'Engenheiro de Software',
      typeIndex: 0,
      scrolled: false,
      skills: [
        { name: 'HTML', level: 99 },
        { name: 'CSS', level: 99 },
        { name: 'Javascript', level: 85 },
        { name: 'PHP', level: 90 },
        { name: 'Laravel', level: 95 },
        { name: 'Livewire', level: 95 },
        { name: 'Vue JS', level: 70 },
        { name: 'Android', level: 40 },
        { name: 'Docker', level: 60 },
        { name: 'Git', level: 100 },
      ]
    }
  },
  methods: {
    scroller() {
      let button = document.getElementById('btnTop')
      if (document.documentElement.scrollTop > 70) {
        button.style.display = "flex"
      } else {
        button.style.display = "none"
      }
      
      this.scrolled = document.documentElement.scrollTop > 50;
    },
    backToTop() {
      document.documentElement.scrollTop = 0;
      this.$router.push('/')
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.$router.push('/')
    },
    typeRole() {
      if (this.typeIndex < this.fullRole.length) {
        this.typedRole += this.fullRole.charAt(this.typeIndex);
        this.typeIndex++;
        setTimeout(this.typeRole, 100);
      }
    },
    getParticleStyle() {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 20}s`
      };
    }
  },
  mounted() {
    let vm = this
    window.onscroll = () => {
      vm.scroller()
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', () => {
        this.mobileMenuOpen = false
      })
    })

    setTimeout(() => {
      this.typeRole();
    }, 500);
  }
}

</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-100px) translateX(50px);
  }
}

@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: 0% 50%;
  }
  50% {
    background-size: 200% 200%;
    background-position: 100% 50%;
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes gradient-text {
  0%, 100% {
    background-size: 200% 200%;
    background-position: 0% 50%;
  }
  50% {
    background-size: 200% 200%;
    background-position: 100% 50%;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animate-float {
  animation: float linear infinite;
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

.animate-gradient-text {
  animation: gradient-text 3s ease infinite;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>
