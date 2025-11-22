"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Github, Linkedin, Mail, ExternalLink, Palette, Brush, Wrench, Award, Video } from "lucide-react";
import Chat from "./components/chat";

export default function Page() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Elijah Taguinod Alonzo
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#certifications" className="text-gray-300 hover:text-white transition">Certifications & Training</a>
            <a href="#experiences" className="text-gray-300 hover:text-white transition">Experiences</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Elijah Taguinod Alonzo</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Information Technology Student | Web Designer | Developer
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                An information technology student with a passion for learning and developing skills in software development, networking, and cybersecurity. Eager to contribute to real-world projects and gain hands-on experience in the IT industry.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">2</div>
                  <p className="text-gray-400 text-sm">Years HTML/CSS</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">3</div>
                  <p className="text-gray-400 text-sm">Major Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">2</div>
                  <p className="text-gray-400 text-sm">Certifications</p>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setShowChat(true)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Ask My Digital Twin
                </button>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold rounded-lg transition"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/elicakessss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-400 hover:text-white transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/elijah-alonzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-400 hover:text-white transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:elijahalonzo.me@gmail.com"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-400 hover:text-white transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-96">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-2xl"></div>
                {/* Image Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Elijah Taguinod Alonzo"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 rounded-3xl"></div>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                  Web Developer & Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Hard Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Web Development</p>
                  <div className="flex flex-wrap gap-2">
                    {['Frontend & Backend Development', 'REST API Development', 'Responsive UI/UX Implementation'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Graphic Editing</p>
                  <div className="flex flex-wrap gap-2">
                    {['Photo Retouching', 'Color Correction', 'Layout & Composition'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Video Editing</p>
                  <div className="flex flex-wrap gap-2">
                    {['Cutting & Sequencing', 'Color Grading', 'Audio Cleanup', 'Motion Graphics'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Languages & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {['PHP', 'Python', 'JavaScript', 'Java', 'Laravel', 'React', 'Next.js', 'Django'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Databases</p>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'PostgreSQL', 'SQLite', 'MariaDB', 'MongoDB'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {['Adobe Photoshop', 'Adobe Premiere', 'Canva'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Communication', 'Public Speaking'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Certifications & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-semibold text-orange-400">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-white font-medium">ITS Databases</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-semibold text-green-400">Training & Seminars</h3>
              </div>
              <div className="space-y-2">
                {[
                  'TCON 2023 – The Ultimate Tech Event in the North',
                  'SPUP CyberSummit 2023',
                  'SPUP CyberSummit 2024',
                  'SPUP CyberSummit 2025',
                  'SPUP CyberSecurity RoadShow 2025'
                ].map((training, index) => (
                  <div key={index} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <p className="text-gray-300 text-sm">{training}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Hard Skills Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">Project Lead and Developer</h4>
                  <p className="text-gray-400 text-sm">Paulinian Student Government E-Portfolio and Ranking System</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">IT Department Leader and Developer</h4>
                  <p className="text-gray-400 text-sm">Collaborative Online International Learning (COIL) Program</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">3rd Place</h4>
                  <p className="text-gray-400 text-sm">2023 SPUP–PATHWAY Hackathon</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Soft Skills Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">Senator</h4>
                  <p className="text-gray-400 text-sm">Paulinian Student Government (2022–2023)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">Assistant P.R.O.</h4>
                  <p className="text-gray-400 text-sm">Paulinian Student Government (2023–2024)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">Secretary</h4>
                  <p className="text-gray-400 text-sm">Paulinian Student Government (2023–2024)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">3rd Year Representative</h4>
                  <p className="text-gray-400 text-sm">Junior Philippine Computer Society (2023–2024)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold mb-1">Member</h4>
                  <p className="text-gray-400 text-sm">Multimedia Committee, Rotaract Club of Tuguegarao (2023–2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Digital Twin */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition group shadow-lg hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="h-48 bg-gradient-to-br from-cyan-900 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Digital Twin</h3>
                <p className="text-gray-400 mb-4 text-sm">An AI-powered digital twin chatbot that provides information about my background, skills, and experiences using RAG technology.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['AI', 'RAG', 'Chatbot'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elicakessss/digital-twin.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Equal Learn */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition group shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Equal Learn</h3>
                <p className="text-gray-400 mb-4 text-sm">An educational video hosting website designed for kids and teachers to access and share learning content.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['Education', 'Video Hosting', 'Learning Platform'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elicakessss/EqualLearn.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* PSG E-Portfolio */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-green-500/50 transition group shadow-lg hover:shadow-xl hover:shadow-green-500/10">
              <div className="h-48 bg-gradient-to-br from-green-900 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Paulinian Student Government E-Portfolio and Ranking System</h3>
                <p className="text-gray-400 mb-4 text-sm">A comprehensive system for managing student portfolios and rankings within the student government.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['Laravel', 'Portfolio', 'Management'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elicakessss/app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Gem Catcher */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition group shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <div className="h-48 bg-gradient-to-br from-purple-900 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Gem Catcher</h3>
                <p className="text-gray-400 mb-4 text-sm">A 2D arcade-style game where players catch gems to gain points and achieve high scores.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['Game', '2D', 'Arcade'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elicakessss/GemCathcer.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                I'm always excited to discuss AI projects, robotics innovations, or potential collaborations. Whether you're looking for an AI developer, data analyst, or just want to chat about technology, feel free to reach out!
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 backdrop-blur-sm hover:border-purple-500/50 transition">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:elijahalonzo.me@gmail.com" className="text-gray-300 hover:text-purple-400 transition">
                        elijahalonzo.me@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 backdrop-blur-sm hover:border-purple-500/50 transition">
                  <div className="flex items-start gap-4">
                    <Linkedin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com/in/elijah-alonzo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition flex items-center gap-2">
                        linkedin.com/in/elijah-alonzo <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 backdrop-blur-sm hover:border-purple-500/50 transition">
                  <div className="flex items-start gap-4">
                    <Github className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">GitHub</h3>
                      <a href="https://github.com/elicakessss" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition flex items-center gap-2">
                        github.com/elicakessss <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 rounded-xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 z-30"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-end p-4">
          <div className="w-full max-w-md md:max-w-lg h-[600px] md:h-[650px] bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl shadow-2xl border border-slate-700/50 flex flex-col overflow-hidden hover:border-slate-600/50 transition">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-5 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Virtual Elijah</h3>
                  <p className="text-sm text-blue-100">Ask me anything about my background</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition transform hover:scale-110"
                aria-label="Close chat"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-b from-slate-900/50 to-slate-950/50">
              <Chat />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
