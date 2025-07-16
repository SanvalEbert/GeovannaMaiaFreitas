import React from 'react';
import './App.css';
import geoPhoto from './assets/geovanna-photo.png';
import { Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap, Star, Linkedin, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-green-50">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-green-100/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={geoPhoto} 
                  alt="Geovanna Maia Freitas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-300 rounded-full opacity-60"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-2">
                Geovanna <span className="font-script text-rose-500">Maia</span> Freitas
              </h1>
              <p className="text-xl text-gray-600 mb-6">Estudante de Psicologia & Pesquisadora</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  Salvador, Bahia
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-400" />
                  +55 71 99712-4253
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-400" />
                  geomaiafreitas@gmail.com
                </div>
                <a href="https://www.linkedin.com/in/geovanna-maia-freitas-45b94725a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                  <Linkedin className="w-4 h-4 text-rose-400" />
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/geovannaa.maia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600">
                  <Instagram className="w-4 h-4 text-rose-400" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            
            {/* About Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-rose-400" />
                Sobre Mim
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Estudante de Psicologia com experiência em iniciação científica e atuação como estagiária em empresas. 
                Possui formação complementar em Controle de Qualidade e certificações em atendimento ao público e 
                introdução às Ciências de Dados. Habilidades em organização, criatividade, resolução de problemas 
                e trabalho em equipe, com interesse em desenvolvimento acadêmico e profissional.
              </p>
            </section>

            {/* Skills Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habilidades</h2>
              <div className="space-y-3">
                {[
                  'Criatividade',
                  'Pensamento Crítico',
                  'Organização e Gestão de Tempo',
                  'Excelente Comunicação',
                  'Trabalho em Equipe',
                  'Resolução de Problemas',
                  'Tomada de Decisão',
                  'Dados para Decisões Estratégicas',
                  'Inteligência Artificial',
                  'Engenharia de Prompt para IA'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Experience Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-rose-400" />
                Experiência Profissional
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-rose-300 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">Pesquisadora</h3>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      11/2023 - 02/2024
                    </span>
                  </div>
                  <p className="text-rose-600 font-medium mb-2">SENAI CIMATEC - Salvador, BA</p>
                  <p className="text-gray-600">
                    Iniciação Científica: Caracterização de Compósitos de Celulose Bacteriana e Biocerâmicas. 
                    Pesquisa e práticas laboratoriais focadas na caracterização de compósitos de celulose bacteriana 
                    e hidroxiapatita, com ênfase em suas propriedades e potencial aplicação em biomateriais.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-300 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">Trainee</h3>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      09/2023 - 02/2024
                    </span>
                  </div>
                  <p className="text-green-600 font-medium mb-2">CIMATEC Jr. - Salvador, Bahia, Brasil</p>
                  <p className="text-gray-600">
                    Participação em projeto na área de alimentos, colaborando no desenvolvimento de soluções 
                    inovadoras, aplicando conhecimentos de engenharia e tecnologia.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-rose-400" />
                Formação Acadêmica
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-rose-300 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800">Bacharelado em Psicologia</h3>
                  <p className="text-rose-600 font-medium">Universidade Católica do Salvador - UCSal</p>
                  <p className="text-gray-600">Cursando o segundo semestre</p>
                </div>
                
                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800">Bacharelado em Engenharia Química</h3>
                  <p className="text-gray-600 font-medium">SENAI CIMATEC - Salvador, Bahia</p>
                  <p className="text-gray-500">Curso Trancado</p>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-rose-400" />
                Certificações
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'WCM: Controle de Qualidade', org: 'Voitto', date: '09/2023' },
                  { name: 'Atendimento ao Público', org: 'Fundação Bradesco', date: '11/2024' },
                  { name: 'Microsoft Excel 2016', org: 'Fundação Bradesco', date: '02/2025' },
                  { name: 'Introdução à Ciência de Dados', org: 'CISCO', date: '02/2025' }
                ].map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-rose-50 to-green-50 p-4 rounded-lg border border-rose-100">
                    <h4 className="font-semibold text-gray-800 text-sm">{cert.name}</h4>
                    <p className="text-rose-600 text-sm">{cert.org}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-rose-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2025 Geovanna Maia Freitas. Desenvolvido com ❤️ para apresentar minha jornada profissional.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

