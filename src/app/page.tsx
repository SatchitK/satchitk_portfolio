"use client";
import { useState } from "react"; 
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Code2, 
  Dna, 
  Gamepad2, 
  Bot, 
  BookOpen,
  Trophy,
  Sun,
  Moon,
  X,
  ExternalLink,
  ChevronRight,
  Star,
  Briefcase,
  Heart,
  Users,
  Layers
} from "lucide-react";

// --- DATA: EXPERIENCE (With Correct Logos) ---
const EXPERIENCE_DATA = [
  {
    id: "encore",
    title: "Encore Automation",
    role: "Software Engineering Intern (AI/ML)",
    period: "May 2025 - Present",
    category: "AI • LLMs • RAG",
    stat: "RAG & LLM Pipeline",
    statColor: "text-blue-400",
    description: "Developing RAG pipelines and deploying YOLO models for manufacturing.",
    fullDetails: [
      "Engineering and fine-tuning Large Language Models (LLMs) to significantly improve domain-specific data parsing and extraction capabilities.",
      "Designing and implementing a custom Retrieval-Augmented Generation (RAG) pipeline to automate data ingestion, indexing, and retrieval for more contextually relevant model responses.",
      "Deploying and optimizing open-source LLMs, integrating them into a cohesive system that delivers accurate and coherent answers to complex user queries.",
      "Collaborating with a fast-paced team at Encore Automation to drive the development of innovative, AI-powered automation solutions in a dynamic environment.",
      "Streamlining dataset preparation, dataset annotation, and dataset validation.",
      "Validating a custom built Object Detection CNN Model using SOTA validation techniques.",
      "Ground up contribution in developing an in-house CNN based Segmentation Model to segment vehicle paint defect detection dataset.",
      "Coordinating with 3+ team members, including offshore annotation contractors to manage project resources effectively."
    ],
    tech: ["RAG", "LLMs", "YOLOv8", "TensorRT", "Python", "PyTorch"],
    logo: "/encore.png", 
  },
  {
    id: "inovision",
    title: "Inovision, Inc.",
    role: "Software Engineering Intern (AI/ML)",
    period: "May 2024 - Apr 2025", 
    category: "Computer Vision • Deep Learning",
    stat: "50k+ Image Dataset",
    statColor: "text-orange-400",
    description: "Built real-time Object Detection models for paint defect detection analysis.",
    fullDetails: [
      "Contributed to the ground-up development of an in-house Computer Vision based Deep Learning real-time Object Detection model to distinguish paint defects during assembly line manufacturing in the automotive industry.",
      "Curated and analyzed a dataset of over 50,000+ training images sourced from multiple General Motors plants around Michigan.",
      "Designed and optimized over 10 Deep Learning Algorithms, along with over 25 scripts to streamline AI Model Development, from training to testing and validation.",
      "Experimented with additional utilities designed for defect classification based on results from real-time object detection.",
      "Conducted on-site visits to local General Motors plant to retrieve paint defect data and perform extensive testing with assembly line inspection enclosure.",
      "Improved AI model’s accuracy by implementing custom scripts for automated image data augmentations during the training of the model.",
      "Documented project milestones, methodologies, and outcomes for comprehensive reporting and knowledge sharing for future coding.",
      "Part-time intern at Inovision working on improving Object Detection Model for paint defect detection analysis.",
      "Contributed to a project aimed at developing an in-house image segmentation model to automate labeling, improve workflow, and lead to faster development times.",
      "Model evaluation project - exploring a standardized approach to model evaluation based on custom parameters we wish to compare."
    ],
    tech: ["Computer Vision", "Deep Learning", "Python", "Data Augmentation"],
    logo: "/inovision.png", 
  },
  {
    id: "bio",
    title: "Bioinformatics Research",
    role: "Undergraduate Research Assistant",
    period: "Aug 2023 - Feb 2025",
    category: "Data Science Research",
    stat: "UROP Poster",
    statColor: "text-purple-400",
    description: "Simulating 'virtual meta-control' mice to reduce lab costs.",
    fullDetails: [
      "Conducted data analysis research reviewing differential gene expression amongst mice from different control groups collected from previous lab experiments, successfully simulating a 'virtual meta-control' mouse to provide a baseline control group for future lab experiments, saving costs and time associated with mice breeding.",
      "Employed Python and R libraries for comprehensive data analysis and visualization.",
      "Presented findings at the annual Undergraduate Research Symposium (UROP) at the University of Michigan."
    ],
    tech: ["Python", "R", "Seaborn", "Data Analysis"],
    logo: "/bioinformatics.jpg", // <--- Fixed filename
  }
];

// --- DATA: PROJECTS ---
const PROJECT_DATA = [
  {
    id: "kestrel",
    title: "Kestrel Chess Engine",
    category: "High Performance Computing",
    stat: "Top 3% on Lichess",
    statColor: "text-green-400",
    description: "A 2300 ELO chess engine using Monte Carlo Tree Search and Alpha-Beta pruning.",
    fullDetails: [
      "Inspired by the groundbreaking research behind AlphaZero and a passion for the strategic depth of chess, I dedicated my summer to a personal challenge: building a competitive chess engine from the ground up.",
      "The result is Kestrel, a Python-based engine that uses a Monte Carlo Tree Search guided by a neural network.",
      "This project was a deep dive into reinforcement learning, algorithm optimization, and the practical challenges of replicating state-of-the-art AI research.",
      "I'm proud to say that Kestrel has achieved a peak performance rating of over 2300, with an average rating of 1800.",
      "It can consistently beat my personal benchmark, the 1600-rated Isabel bot on Chess.com."
    ],
    tech: ["C++", "CUDA", "PyTorch", "Python", "Tkinter"],
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
  },
  {
    id: "snake",
    title: "Snake-DQN",
    category: "Reinforcement Learning",
    description: "Deep Q-Network solver achieving 70+ avg snake length.",
    fullDetails: [
      "As part of an internal internship presentation on Genetic Algorithms & Reinforcement Learning, I took on the challenge of teaching an AI to master the classic game of Snake.",
      "This project was a practical dive into reinforcement learning, where I developed an agent from scratch using Deep Q-Learning (DQN) in Python.",
      "I trained two distinct models using GPU acceleration: one navigating to a single target, and a more complex version designed to handle multiple targets simultaneously.",
      "Core Achievement: The primary model successfully learned to play the game, demonstrating the ability to generalize its training on a 400x400 grid to perform effectively on a larger 640x640 grid.",
      "Advanced Challenge: The multi-target model highlighted a classic AI challenge: efficient pathfinding. While it learned basic mechanics, it struggled with optimal routing, presenting a clear opportunity to implement more advanced pathfinding algorithms."
    ],
    tech: ["PyTorch", "PyGame", "RL", "CUDA"],
    icon: <Gamepad2 className="w-8 h-8 text-emerald-400" />,
  }
];

// --- DATA: VOLUNTEERING (With Crevolution Logo) ---
const VOLUNTEER_DATA = [
  {
    id: "first",
    title: "FIRST Robotics Mentor",
    role: "Software and Strategy Mentor",
    period: "Sep 2023 - Present",
    category: "Education & Mentorship",
    description: "Mentoring high school students in Java programming, control systems, and software architecture.",
    fullDetails: [
      "Previous Alumni turned mentor for my high school robotics team, Crevolution Robotics #2851.",
      "Educating a programming and software team of over 10 people in learning Java for the FIRST Robotics Programming Context.",
      "As a mentor, helped the team reach the FIRST Robotics World Championship two years in a row."
    ],
    tech: ["Java", "Mentorship", "Strategy", "Leadership"],
    logo: "/crevolution.png", // <--- Added Logo
    icon: <Heart className="w-8 h-8 text-red-400" />, 
  }
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const themeClasses = isDarkMode 
    ? "bg-[#050505] text-white selection:bg-purple-500/30" 
    : "bg-gray-50 text-gray-900 selection:bg-blue-200";

  const cardBg = isDarkMode 
    ? "bg-zinc-900/50 border-white/10" 
    : "bg-white border-gray-200 shadow-sm";

  return (
    <main className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      
      {/* --- MODAL (Detailed View) --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-8 border shadow-2xl ${isDarkMode ? 'bg-zinc-900 border-white/10' : 'bg-white border-gray-200'}`}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {/* Modal Logo Handling */}
                <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-black/30' : 'bg-gray-100'}`}>
                   {selectedItem.logo ? (
                      <div className="relative w-12 h-12">
                        <Image src={selectedItem.logo} alt="logo" fill className="object-contain" />
                      </div>
                   ) : (
                      selectedItem.icon
                   )}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{selectedItem.title}</h3>
                  {selectedItem.role && (
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedItem.role}</p>
                  )}
                  <span className={`text-sm font-mono uppercase tracking-wider ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {selectedItem.fullDetails.map((detail: string, i: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-3"
                  >
                    <ChevronRight className={`flex-shrink-0 mt-1 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`} size={18} />
                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{detail}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {selectedItem.tech.map((t: string) => (
                  <span key={t} className={`px-3 py-1 rounded-md text-xs font-bold border ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING THEME TOGGLE --- */}
      <motion.button 
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl backdrop-blur-md transition-all border
          ${isDarkMode 
            ? 'bg-zinc-800/80 border-white/10 text-yellow-400 hover:bg-zinc-700 hover:shadow-yellow-400/20' 
            : 'bg-white/80 border-gray-200 text-indigo-600 hover:bg-gray-50 hover:shadow-indigo-500/20'
          }`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? '#333' : '#cbd5e1'} 1px, transparent 0)`, 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* --- HERO SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`font-mono text-xl mb-2 block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Hello, I am
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
              Satchit <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-white to-gray-500' : 'from-gray-900 to-gray-500'}`}>
                Kulkarni
              </span>
            </h1>

            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Building AI that <span className="text-blue-500">thinks</span> and <span className="text-emerald-500">sees</span>.
            </h2>
            
            <p className={`text-lg leading-relaxed max-w-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              CS Student at UMich (3.9 GPA). Specializing in High-Performance Computing, 
              Computer Vision, and Reinforcement Learning. Currently optimizing manufacturing at Encore Automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <SocialBtn darkMode={isDarkMode} href="https://github.com/SatchitK" icon={<Github size={20}/>} label="GitHub" />
              <SocialBtn darkMode={isDarkMode} href="https://linkedin.com/in/satchitk" icon={<Linkedin size={20}/>} label="LinkedIn" />
              <SocialBtn darkMode={isDarkMode} href="mailto:satchitk@umich.edu" icon={<Mail size={20}/>} label="Contact" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className={`absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse ${!isDarkMode && 'opacity-20'}`} />
              <div className={`relative w-full h-full rounded-3xl overflow-hidden border-2 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ${isDarkMode ? 'border-white/10 bg-zinc-900/50' : 'border-white bg-white'}`}>
                <Image src="/profile.jpg" alt="Satchit Kulkarni" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- EDUCATION --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <BookOpen className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8`} />
            <h2 className="text-3xl font-bold">Education & Coursework</h2>
          </div>

          <div className={`p-8 rounded-3xl border ${cardBg} transition-colors duration-300`}>
            <div className="flex flex-col md:flex-row justify-between mb-8 items-start md:items-center">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2 border border-gray-200 overflow-hidden shadow-sm">
                  <Image src="/umich.png" alt="University of Michigan" fill className="object-contain"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">University of Michigan</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>B.S. Computer Science</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <div className={`inline-block px-4 py-2 rounded-lg font-bold ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                  GPA: 3.9/4.0
                </div>
                <p className={`text-sm mt-2 font-mono ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Aug 2023 - May 2026</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">Core Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Computer Vision", "Artificial Intelligence", "Machine Learning", "NLP", 
                    "CUDA Programming", "Data Structures", "Operating Systems", 
                    "Computer Architecture", "Theory of Computation", "Computer Networks",
                    "Software Engineering", "Mobile App Development", "Calculus I/II/III",
                    "Linear Algebra"
                  ].map(course => (
                    <span key={course} className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${isDarkMode ? 'bg-zinc-800 border-zinc-700 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'}`}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">Honors & Awards</h4>
                <ul className="space-y-3">
                  <AwardItem title="Michigan EV Scholar" desc="Awarded July 2024" isDarkMode={isDarkMode} icon={Trophy} />
                  <AwardItem title="Dean's List Recipient" desc="F23 • W24 • F24 • W25" isDarkMode={isDarkMode} icon={Star} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Briefcase className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} w-8 h-8`} />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {EXPERIENCE_DATA.map((item) => (
              <WideCard 
                key={item.id}
                item={item}
                isDarkMode={isDarkMode}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Cpu className={`${isDarkMode ? 'text-purple-500' : 'text-purple-600'} w-8 h-8`} />
            <h2 className="text-3xl font-bold">Technical Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECT_DATA.map((project) => (
              <ProjectCard 
                key={project.id}
                item={project}
                isDarkMode={isDarkMode}
                onClick={() => setSelectedItem(project)}
              />
            ))}
          </div>
        </section>

        {/* --- VOLUNTEERING SECTION --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Users className={`${isDarkMode ? 'text-pink-400' : 'text-pink-600'} w-8 h-8`} />
            <h2 className="text-3xl font-bold">Community & Volunteering</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {VOLUNTEER_DATA.map((item) => (
              <WideCard 
                key={item.id}
                item={item}
                isDarkMode={isDarkMode}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

// --- REUSABLE COMPONENTS ---

function AwardItem({ title, desc, isDarkMode, icon: Icon }: any) {
  return (
    <li className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${isDarkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}>
      <div className={`mt-0.5 p-1.5 rounded-full ${isDarkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
        <Icon size={16} />
      </div>
      <div>
        <span className={`block text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{title}</span>
        <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{desc}</span>
      </div>
    </li>
  )
}

function SocialBtn({ href, icon, label, darkMode }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center gap-2 px-5 py-3 border rounded-full transition-all group ${darkMode ? 'bg-zinc-900/80 border-white/10 hover:bg-zinc-800' : 'bg-white border-gray-200 hover:bg-gray-50 shadow-sm'}`}
    >
      <span className="group-hover:text-blue-500 transition-colors">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </a>
  );
}

// Updated WideCard: Displays LOGO if available
function WideCard({ item, isDarkMode, onClick }: any) {
  return (
    <motion.div 
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className={`cursor-pointer relative p-8 rounded-3xl border transition-all duration-300 group overflow-hidden flex flex-col md:flex-row gap-6 items-start
        ${isDarkMode 
          ? 'bg-zinc-900/50 border-white/10 hover:border-blue-500/50 hover:bg-zinc-800/80' 
          : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200'
        }`}
    >
      {/* LOGO OR ICON CONTAINER */}
      <div className={`relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center
        ${isDarkMode ? 'bg-white' : 'bg-white border border-gray-100'}`} // Force white bg for logos
      >
        {item.logo ? (
          <Image src={item.logo} alt={item.title} fill className="object-contain p-2" />
        ) : (
          <div className="p-4">{item.icon}</div>
        )}
      </div>

      <div className="flex-grow w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h3 className={`text-2xl font-bold transition-colors ${isDarkMode ? 'group-hover:text-blue-200' : 'text-gray-900 group-hover:text-blue-600'}`}>
            {item.title}
          </h3>
          <span className={`text-sm font-mono mt-1 md:mt-0 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {item.period}
          </span>
        </div>
        
        <p className={`text-md font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {item.role}
        </p>

        <p className={`text-sm leading-relaxed mb-6 max-w-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>

        {/* Footer with Tech Tags + Arrow Icon */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech: string) => (
              <span key={tech} className={`text-xs font-medium px-3 py-1.5 rounded-md border ${isDarkMode ? 'bg-white/5 border-white/5 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                {tech}
              </span>
            ))}
          </div>
          
          <div className={`p-2 rounded-full transition-transform group-hover:-rotate-45 ${isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-100 text-black'}`}>
            <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Used for Projects (Grid)
function ProjectCard({ item, isDarkMode, onClick }: any) {
  return (
    <motion.div 
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      className={`cursor-pointer relative p-8 rounded-3xl border transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full
        ${isDarkMode 
          ? 'bg-zinc-900/50 border-white/10 hover:border-blue-500/50 hover:bg-zinc-800/80' 
          : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200'
        }`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/30 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
            {item.icon}
          </div>
          {item.stat && (
            <span className={`text-xs font-bold px-2 py-1 rounded-lg border ${isDarkMode ? 'bg-black/30 border-white/5' : 'bg-gray-50 border-gray-100'} ${item.statColor}`}>
              {item.stat}
            </span>
          )}
        </div>
        
        <h3 className={`text-xl font-bold mb-2 transition-colors ${isDarkMode ? 'group-hover:text-blue-200' : 'text-gray-900 group-hover:text-blue-600'}`}>
          {item.title}
        </h3>
        
        <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>
      </div>

      <div className="flex justify-between items-end mt-auto">
        <div className="flex flex-wrap gap-2">
          {item.tech.slice(0,3).map((tech: string) => (
            <span key={tech} className={`text-xs font-medium px-3 py-1.5 rounded-md border ${isDarkMode ? 'bg-white/5 border-white/5 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
              {tech}
            </span>
          ))}
        </div>
        <div className={`p-2 rounded-full transition-transform group-hover:-rotate-45 ${isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-100 text-black'}`}>
          <ExternalLink size={16} />
        </div>
      </div>
    </motion.div>
  );
}