const skills = [
  'JAVA',
  'SPRING BOOT',
  'PYTHON',
  'MACHINE LEARNING',
  'REST APIs',
  'ARDUINO',
  'IoT',
  'EMBEDDED C',
  'MySQL',
  'DOCKER',
];

const MarqueeRow = ({ direction = 'left', speed = 30 }: { direction?: 'left' | 'right'; speed?: number }) => {
  const text = skills.join('  ◆  ') + '  ◆  ';
  const cls = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  const strokeCls = direction === 'left' ? 'text-stroke' : 'text-stroke-fill';

  return (
    <div className="group flex overflow-hidden whitespace-nowrap py-4 sm:py-6">
      <div className={`flex shrink-0 ${cls} group-hover:[animation-duration:15s]`} style={{ animationDuration: `${speed}s` }}>
        <span className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider ${strokeCls} px-4`}>{text}</span>
        <span className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider ${strokeCls} px-4`}>{text}</span>
      </div>
    </div>
  );
};

export const Marquee = () => (
  <section id="marquee" className="relative py-8 sm:py-12 overflow-hidden border-y border-white/5">
    <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
    <MarqueeRow direction="left" speed={35} />
    <MarqueeRow direction="right" speed={40} />
  </section>
);
