
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const codeSnippets = [
      'const ai = new AI();',
      'function analyze(code) {',
      'if (skill > threshold)',
      '{ return qualified; }',
      'import { talent } from "artemis"',
      'engineer.assess()',
      'while (recruiting) {',
      'const result = await scan();',
      'export default talent;',
      'console.log("hiring");',
      'return bestMatch;',
      '} catch (error) {',
      'skills.map(s => s.level)',
      'npm install artemis-ai',
      'git commit -m "talent"',
      'class Engineer {',
      'constructor(skills) {',
      'this.skills = skills;',
      '}',
      'evaluate() {',
      'return this.analyze();',
      'async fetchRepos() {',
      'const response = await',
      'github.getRepos();',
      'for (let i = 0;',
      'i < repos.length; i++) {',
      'analyzeTalent(repo);',
      'let score = 0;',
      'Object.keys(skills)',
      '.forEach(skill => {',
      'if (skill.level > 8) {',
      'hireable = true;',
      'break;',
      'const algorithm = new',
      'TalentMatcher();',
      'return {qualified: true}',
      'await processCandidate()',
      'skills.python += 10;',
      'if (experience > 5) {',
      'senior = true;',
      'debugger;',
      '// TODO: hire this dev',
      'match.confidence = 0.95'
    ];

    const floatingCodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      opacity: number;
      size: number;
    }> = [];

    // Create more floating code snippets for better animation
    for (let i = 0; i < 25; i++) {
      floatingCodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: Math.random() * 0.4 + 0.1,
        size: Math.random() * 6 + 10
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      floatingCodes.forEach(code => {
        code.x += code.vx;
        code.y += code.vy;

        // Bounce off edges
        if (code.x < 0 || code.x > canvas.width - 200) code.vx *= -1;
        if (code.y < 0 || code.y > canvas.height) code.vy *= -1;

        // Draw code snippet
        ctx.font = `${code.size}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(96, 165, 250, ${code.opacity})`;
        ctx.fillText(code.text, code.x, code.y);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Assess Software Engineers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              skill level by analyzing code
            </span>
            <span className="block text-white">in their portfolio</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Artemis AI analyzes and ranks software engineers' skill levels directly from their codebases. 
            Simply plug and play to GitHub or Visual Studio - our software will read the code and identify 
            if an engineer is skilled enough to undertake your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Demo
            </button>
            <button className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </section>
  );
};

export default Hero;
