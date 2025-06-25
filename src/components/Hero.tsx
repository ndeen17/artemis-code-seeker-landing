
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
      'git commit -m "talent"'
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

    // Create floating code snippets
    for (let i = 0; i < 15; i++) {
      floatingCodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 8 + 12
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Assess Software Engineers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              skill level by analyzing code
            </span>
            <span className="block text-white">in their portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Artemis AI analyzes and ranks software engineers' skill levels directly from their codebases. 
            Simply plug and play to GitHub or Visual Studio - our software will read the code and identify 
            if an engineer is skilled enough to undertake your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Demo
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
