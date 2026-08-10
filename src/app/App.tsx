import { useState, useEffect, useRef } from "react";
import { ChevronDown, Star, Clock, Globe, Telescope, BookOpen, Menu, X, Github, Linkedin, Mail } from "lucide-react";

const contributors = [
  {
    name: "Ana Beatriz Souza",
    role: "Pesquisa Histórica",
    specialty: "Astronomia Antiga e Mesopotâmia",
    bio: "Doutoranda em História da Ciência pela USP. Especializada em registros cuneiformes babilônicos e sua influência sobre a astronomia ocidental.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&auto=format",
    github: "#",
    linkedin: "#",
    email: "ana@exemplo.com",
    contributions: ["Mesopotâmia", "Egito", "Linha do Tempo"],
  },
  {
    name: "Carlos Mendes",
    role: "Arqueologia e Cultura",
    specialty: "Civilizações Mesoamericanas",
    bio: "Arqueólogo com 12 anos de experiência em sítios maias no México e Guatemala. Publicou três livros sobre arqueoastronomia pré-colombiana.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
    github: "#",
    linkedin: "#",
    email: "carlos@exemplo.com",
    contributions: ["Civilização Maia", "Astrônomos"],
  },
  {
    name: "Fatima Al-Rashid",
    role: "Astronomia Islâmica",
    specialty: "Período Áureo do Islã",
    bio: "Professora de História da Matemática e Ciências na Universidade de Coimbra. Tradutora de textos astronômicos árabes medievais para o português.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&auto=format",
    github: "#",
    linkedin: "#",
    email: "fatima@exemplo.com",
    contributions: ["Islã Medieval", "Grandes Astrônomos"],
  },
  {
    name: "Rafael Chen",
    role: "Astronomia Oriental",
    specialty: "Registros Astronômicos Chineses",
    bio: "Pesquisador do Instituto Butantan e do Observatório Nacional. Trabalha na correlação entre registros astronômicos chineses antigos e dados astrofísicos modernos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format",
    github: "#",
    linkedin: "#",
    email: "rafael@exemplo.com",
    contributions: ["China Antiga", "Linha do Tempo"],
  },
  {
    name: "Mariana Oliveira",
    role: "Design e Curadoria Visual",
    specialty: "Comunicação Científica",
    bio: "Designer de informação e jornalista científica. Responsável pela identidade visual do projeto e pela curadoria de conteúdo acessível ao público geral.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format",
    github: "#",
    linkedin: "#",
    email: "mariana@exemplo.com",
    contributions: ["Conteúdo Editorial", "Design"],
  },
  {
    name: "Pedro Alves",
    role: "Astronomia Grega",
    specialty: "Filosofia Natural Antiga",
    bio: "Professor de Filosofia Antiga na UNICAMP. Especializou-se no pensamento científico grego e na transição do mito à astronomia matemática.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
    github: "#",
    linkedin: "#",
    email: "pedro@exemplo.com",
    contributions: ["Grécia Antiga", "Grandes Astrônomos"],
  },
];

const civilizations = [
  {
    id: "mesopotamia",
    name: "Mesopotâmia",
    period: "3500–500 a.C.",
    region: "Atual Iraque",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=400&fit=crop&auto=format",
    color: "#c9922a",
    contributions: [
      "Criaram o primeiro calendário lunar (354 dias)",
      "Identificaram os planetas visíveis a olho nu",
      "Desenvolveram a matemática base 60 (nossos 60 minutos)",
      "Previram eclipses com precisão notável",
    ],
    description:
      "Os sumérios e babilônios foram os primeiros observadores sistemáticos do céu. Construíram zigurates como observatórios e documentaram movimentos celestes em tábuas de argila por milênios.",
    famous: "Enuma Anu Enlil — 7.000 presságios astronômicos registrados em argila",
  },
  {
    id: "egypt",
    name: "Egito Antigo",
    period: "3100–30 a.C.",
    region: "Vale do Nilo",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=400&fit=crop&auto=format",
    color: "#d4a017",
    contributions: [
      "Alinharam as pirâmides com precisão astronômica",
      "Criaram o calendário solar de 365 dias",
      "Usaram estrelas para orientação náutica",
      "Identificaram 36 constelações (decanos)",
    ],
    description:
      "Para os egípcios, o céu era sagrado. A orientação das pirâmides de Gizé em relação aos pontos cardeais e à estrela Polar reflete um domínio astronômico extraordinário.",
    famous: "Texto das Pirâmides — mapas celestes esculpidos em pedra há 4.500 anos",
  },
  {
    id: "greece",
    name: "Grécia Antiga",
    period: "600 a.C.–400 d.C.",
    region: "Mar Mediterrâneo",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
    color: "#a8c5e8",
    contributions: [
      "Eratóstenes calculou a circunferência da Terra (±2% de precisão)",
      "Hiparco catalogou 850 estrelas e descobriu a precessão",
      "Aristarco propôs o heliocentrismo em 270 a.C.",
      "Ptolomeu sistematizou a astronomia no Almagesto",
    ],
    description:
      "Os gregos transformaram a astronomia em ciência racional. Abandonaram explicações míticas e buscaram leis geométricas para o cosmos, lançando fundamentos que duraram 1.400 anos.",
    famous: "Mecanismo de Antikítera — primeiro computador analógico, 150 a.C.",
  },
  {
    id: "maya",
    name: "Civilização Maia",
    period: "2000 a.C.–1500 d.C.",
    region: "América Central",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop&auto=format",
    color: "#4db87a",
    contributions: [
      "Calcularam o ano venusiano com erro de 14 segundos",
      "Desenvolveram o calendário de 365 dias (Haab)",
      "Previram eclipses lunares com precisão notável",
      "Construíram pirâmides alinhadas a eventos solares",
    ],
    description:
      "Os maias possuíam uma obsessão sagrada com o tempo e o céu. Seus sacerdotes-astrônomos calcularam ciclos astronômicos complexos sem instrumentos ópticos, apenas com observação pura.",
    famous: "Códice de Dresden — tabelas astronômicas de Vênus sobreviventes aos conquistadores",
  },
  {
    id: "islam",
    name: "Islã Medieval",
    period: "750–1300 d.C.",
    region: "Oriente Médio e Pérsia",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format",
    color: "#e8856a",
    contributions: [
      "Preservaram e aprimoraram os textos gregos",
      "Al-Battani refinou as órbitas do Sol e da Lua",
      "Inventaram o astrolábio em sua forma moderna",
      "Nomearam centenas de estrelas (Algol, Aldebaran, Betelgeuse)",
    ],
    description:
      "Durante a Idade das Trevas europeia, os astrônomos islâmicos mantiveram vivo o conhecimento astronômico e fizeram avanços decisivos. Mais de 200 estrelas têm nomes de origem árabe.",
    famous: "Casa da Sabedoria de Bagdá — maior centro científico do mundo medieval",
  },
  {
    id: "china",
    name: "China Antiga",
    period: "2000 a.C.–1600 d.C.",
    region: "Leste Asiático",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop&auto=format",
    color: "#e85555",
    contributions: [
      "Registros de supernovas, cometas e eclipses por 4.000 anos",
      "Inventaram o relógio astronômico (Su Song, 1092 d.C.)",
      "Catalogaram 1.464 estrelas em 283 constelações",
      "Primeiros registros de manchas solares (28 a.C.)",
    ],
    description:
      "A China manteve os registros astronômicos mais contínuos da história. Seus arquivos de 4.000 anos são fontes inestimáveis para a astrofísica moderna rastrear ciclos e eventos celestes.",
    famous: "Observatório de Dengfeng — erguido em 1276 d.C., ainda de pé hoje",
  },
];

const timeline = [
  { year: "3500 a.C.", event: "Sumérios registram constelações em tábuas de argila", civ: "Mesopotâmia" },
  { year: "3100 a.C.", event: "Egípcios alinham Stonehenge e pirâmides com estrelas", civ: "Egito" },
  { year: "2000 a.C.", event: "Maias iniciam observações sistemáticas de Vênus", civ: "Maias" },
  { year: "585 a.C.", event: "Tales de Mileto prevê o eclipse solar — primeiro na história", civ: "Grécia" },
  { year: "270 a.C.", event: "Aristarco propõe que a Terra orbita o Sol", civ: "Grécia" },
  { year: "240 a.C.", event: "Eratóstenes mede a circunferência da Terra com vara e sombra", civ: "Grécia" },
  { year: "150 d.C.", event: "Ptolomeu publica o Almagesto, compilando 500 anos de astronomia", civ: "Grécia" },
  { year: "827 d.C.", event: "Al-Khwarizmi traduz e expande obras astronômicas gregas", civ: "Islã" },
  { year: "1054 d.C.", event: "Astrônomos chineses registram a supernova que criou a Nebulosa do Caranguejo", civ: "China" },
  { year: "1543 d.C.", event: "Copérnico publica o modelo heliocêntrico, iniciando a Revolução Científica", civ: "Europa" },
];

const astronomers = [
  {
    name: "Aristarco de Samos",
    dates: "310–230 a.C.",
    title: "O Primeiro Heliocentrismo",
    contribution: "Propôs que o Sol, não a Terra, era o centro do universo — 1.800 anos antes de Copérnico.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Hiparco de Niceia",
    dates: "190–120 a.C.",
    title: "O Pai da Astronomia Observacional",
    contribution: "Catalogou 850 estrelas, descobriu a precessão dos equinócios e criou a escala de magnitudes estelares.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Al-Battani",
    dates: "858–929 d.C.",
    title: "O Copérnico Árabe",
    contribution: "Calculou o ano solar com precisão de segundos. Seus trabalhos influenciaram Copérnico e Galileu diretamente.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Eratóstenes de Cirene",
    dates: "276–194 a.C.",
    title: "O Medidor da Terra",
    contribution: "Usou dois poços e a geometria solar para medir a circunferência da Terra com apenas 2% de erro.",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=300&h=300&fit=crop&auto=format",
  },
];

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const stars: { x: number; y: number; r: number; a: number; speed: number }[] = [];
    for (let i = 0; i < 280; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.008 + 0.002,
      });
    }
    let frame = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a = 0.3 + 0.7 * Math.abs(Math.sin(frame * s.speed));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 215, 245, ${s.a})`;
        ctx.fill();
      });
      frame++;
      requestAnimationFrame(render);
    };
    render();
    const handle = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ["Origens", "Civilizações", "Linha do Tempo", "Astrônomos", "Mapa Estelar", "Colaboradores"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "linear-gradient(to bottom, rgba(7,8,15,0.95) 0%, transparent 100%)" }}>
      <div className="flex items-center gap-3">
        <Star className="text-sky-400 w-5 h-5" />
        <span className="font-cinzel text-sky-300 tracking-[0.2em] text-sm font-semibold uppercase">
          Astronomia
        </span>
      </div>
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="font-dm text-xs tracking-widest uppercase text-sky-100/60 hover:text-sky-300 transition-colors duration-300">
            {l}
          </a>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden text-sky-300">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#07080f]/98 px-8 py-6 flex flex-col gap-5 md:hidden border-b border-sky-500/10">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="font-dm text-xs tracking-widest uppercase text-sky-100/60 hover:text-sky-300 transition-colors">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <StarField />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,158,222,0.06) 0%, transparent 70%)"
      }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-dm text-xs tracking-[0.4em] uppercase text-sky-500/70 mb-8">
          Uma jornada através do tempo e das estrelas
        </p>
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-black text-sky-100 leading-none tracking-tight mb-8"
          style={{ textShadow: "0 0 80px rgba(74,158,222,0.3)" }}>
          A História da<br />
          <span className="text-sky-400">Astronomia</span>
        </h1>
        <p className="font-crimson text-xl md:text-2xl text-sky-100/60 italic leading-relaxed max-w-2xl mx-auto mb-14">
          Há dez mil anos, nossos ancestrais levantaram os olhos ao céu e começaram a fazer perguntas. Essa é a história de como a humanidade aprendeu a ler o universo.
        </p>
        <a href="#origens" className="inline-flex flex-col items-center gap-3 text-sky-400/50 hover:text-sky-400 transition-colors group">
          <span className="font-dm text-xs tracking-widest uppercase">Explorar</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }} />
    </section>
  );
}

function Origins() {
  return (
    <section id="origens" className="py-32 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-sky-500/70 mb-5">O Começo</p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-sky-100 leading-tight mb-8">
            Como Tudo<br />Começou
          </h2>
          <div className="w-16 h-px bg-sky-500/40 mb-10" />
          <p className="font-crimson text-lg text-sky-100/70 leading-relaxed mb-6">
            A astronomia é a mais antiga das ciências. Antes mesmo da escrita, os seres humanos observavam os padrões do céu para sobreviver — as estações, as chuvas, a caça e o plantio dependiam da leitura das estrelas.
          </p>
          <p className="font-crimson text-lg text-sky-100/70 leading-relaxed mb-6">
            O que começou como necessidade prática tornou-se obsessão filosófica. Por que o Sol segue o mesmo caminho? Por que certas estrelas nunca se movem? Os primeiros astrônomos eram também os primeiros filósofos.
          </p>
          <p className="font-crimson text-lg text-sky-100/70 leading-relaxed">
            Das planícies da Mesopotâmia às selvas maias, dos desertos egípcios às cidades-estado gregas, cada civilização desenvolveu seu próprio modo de compreender o cosmos — e todos contribuíram para o conhecimento que herdamos hoje.
          </p>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=750&fit=crop&auto=format"
              alt="Céu estrelado sobre paisagem antiga"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, #07080f 0%, transparent 50%)"
            }} />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-sky-500/20 p-6 max-w-xs">
            <p className="font-cinzel text-3xl font-bold text-sky-400 mb-1">10.000+</p>
            <p className="font-dm text-xs tracking-widest uppercase text-sky-100/50">Anos de observação astronômica registrada</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border border-sky-500/10" style={{ background: "rgba(74,158,222,0.1)" }}>
        {[
          { icon: Globe, label: "Civilizações", value: "12+" },
          { icon: Star, label: "Estrelas Catalogadas", value: "3.000+" },
          { icon: Clock, label: "Anos de Registros", value: "5.000" },
          { icon: BookOpen, label: "Textos Antigos", value: "400+" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-card p-8 text-center">
            <Icon className="w-6 h-6 text-sky-500/60 mx-auto mb-4" />
            <p className="font-cinzel text-3xl font-bold text-sky-300 mb-2">{value}</p>
            <p className="font-dm text-xs tracking-widest uppercase text-sky-100/40">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CivilizationCard({ civ, index }: { civ: typeof civilizations[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="group bg-card border border-sky-500/10 hover:border-sky-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img src={civ.image} alt={civ.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0e1020 0%, transparent 60%)" }} />
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 border" style={{ borderColor: `${civ.color}40` }}>
          <span className="font-dm text-xs tracking-widest uppercase" style={{ color: civ.color }}>{civ.period}</span>
        </div>
      </div>
      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-cinzel text-xl font-bold text-sky-100 mb-1">{civ.name}</h3>
            <p className="font-dm text-xs tracking-widest uppercase text-sky-100/40">{civ.region}</p>
          </div>
          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: civ.color }} />
        </div>
        <p className="font-crimson text-base text-sky-100/60 leading-relaxed mb-5">{civ.description}</p>
        {expanded && (
          <div className="border-t border-sky-500/10 pt-5 mt-2">
            <p className="font-dm text-xs tracking-widest uppercase text-sky-500/60 mb-4">Principais Contribuições</p>
            <ul className="space-y-2">
              {civ.contributions.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: civ.color }} />
                  <span className="font-crimson text-sm text-sky-100/70">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-4 border-l-2" style={{ borderColor: `${civ.color}60`, background: `${civ.color}08` }}>
              <p className="font-crimson italic text-sm text-sky-100/60">{civ.famous}</p>
            </div>
          </div>
        )}
        <button className="mt-4 font-dm text-xs tracking-widest uppercase transition-colors" style={{ color: civ.color }}>
          {expanded ? "Menos detalhes ↑" : "Ver contribuições ↓"}
        </button>
      </div>
    </div>
  );
}

function Civilizations() {
  return (
    <section id="civilizações" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-sky-500/70 mb-5">Os Povos do Céu</p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-sky-100 mb-6">Civilizações que<br />Moldaram o Cosmos</h2>
          <div className="w-16 h-px bg-sky-500/40 mx-auto mb-8" />
          <p className="font-crimson text-xl text-sky-100/50 italic max-w-xl mx-auto">
            Clique em cada civilização para explorar suas descobertas e legado astronômico
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {civilizations.map((civ, i) => (
            <CivilizationCard key={civ.id} civ={civ} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="linha do tempo" className="py-32 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #07080f, #0a0c1a, #07080f)" }}>
      <div className="absolute inset-0 opacity-30">
        <StarField />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-sky-500/70 mb-5">Cronologia</p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-sky-100 mb-6">Linha do Tempo<br />da Astronomia</h2>
          <div className="w-16 h-px bg-sky-500/40 mx-auto" />
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sky-500/20 -translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className={`inline-block bg-card border border-sky-500/20 p-5 hover:border-sky-500/40 transition-colors`}>
                    <p className="font-cinzel text-sky-400 font-semibold text-sm mb-2">{item.year}</p>
                    <p className="font-crimson text-sky-100/80 leading-relaxed text-base">{item.event}</p>
                    <p className="font-dm text-xs tracking-widest uppercase text-sky-500/40 mt-2">{item.civ}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 border-2 border-sky-900 z-10 top-5" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Astronomers() {
  return (
    <section id="astrônomos" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-sky-500/70 mb-5">As Mentes por Trás das Estrelas</p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-sky-100 mb-6">Grandes Astrônomos<br />da Antiguidade</h2>
          <div className="w-16 h-px bg-sky-500/40 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {astronomers.map((a) => (
            <div key={a.name} className="group flex gap-6 bg-card border border-sky-500/10 hover:border-sky-500/25 p-7 transition-colors duration-400">
              <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-sm border border-sky-500/20">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <p className="font-dm text-xs tracking-widest uppercase text-sky-500/60 mb-1">{a.dates}</p>
                <h3 className="font-cinzel text-lg font-bold text-sky-100 mb-1">{a.name}</h3>
                <p className="font-crimson italic text-sky-400/70 text-sm mb-3">{a.title}</p>
                <p className="font-crimson text-sky-100/60 leading-relaxed text-sm">{a.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="py-28 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0e1020 0%, #131828 50%, #0e1020 100%)" }}>
      <div className="absolute inset-0 opacity-20">
        <StarField />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="text-6xl text-sky-500/30 font-cinzel mb-6 leading-none">"</div>
        <blockquote className="font-crimson text-2xl md:text-3xl italic text-sky-100/80 leading-relaxed mb-8">
          A astronomia nos compele a olhar para cima e nos transporta deste mundo para outro.
        </blockquote>
        <p className="font-cinzel text-sm text-sky-400/70 tracking-widest uppercase">Platão, A República, 380 a.C.</p>
      </div>
    </section>
  );
}

const constellations = [
  {
    name: "Órion",
    culture: "Grega / Universal",
    mythology: "O grande caçador da mitologia grega, colocado no céu por Zeus após sua morte. Reconhecível pelas três estrelas alinhadas que formam seu cinturão.",
    stars: [
      { x: 52, y: 20, r: 3.5, name: "Betelgeuse", mag: 0.4 },
      { x: 72, y: 22, r: 2.8, name: "Bellatrix", mag: 1.6 },
      { x: 48, y: 42, r: 2.2, name: "Mintaka", mag: 2.2 },
      { x: 57, y: 46, r: 2.4, name: "Alnilam", mag: 1.7 },
      { x: 66, y: 50, r: 2.2, name: "Alnitak", mag: 1.8 },
      { x: 45, y: 68, r: 2.0, name: "Saiph", mag: 2.1 },
      { x: 72, y: 72, r: 3.8, name: "Rigel", mag: 0.1 },
      { x: 57, y: 30, r: 1.5, name: "θ¹ Ori", mag: 3.8 },
    ],
    lines: [[0,1],[0,2],[1,3],[2,3],[3,4],[4,6],[2,5],[5,6],[0,7],[1,7]],
  },
  {
    name: "Ursa Maior",
    culture: "Grega / Árabe",
    mythology: "Calisto, transformada em ursa por Hera enciumada. Zeus a colocou no céu, e as sete estrelas brilhantes formam a famosa 'Colher Grande', usada para encontrar o Norte.",
    stars: [
      { x: 18, y: 55, r: 2.5, name: "Dubhe", mag: 1.8 },
      { x: 28, y: 62, r: 2.2, name: "Merak", mag: 2.4 },
      { x: 40, y: 58, r: 2.0, name: "Phecda", mag: 2.4 },
      { x: 48, y: 50, r: 2.0, name: "Megrez", mag: 3.3 },
      { x: 60, y: 42, r: 2.3, name: "Alioth", mag: 1.8 },
      { x: 72, y: 35, r: 2.1, name: "Mizar", mag: 2.1 },
      { x: 85, y: 25, r: 2.4, name: "Alkaid", mag: 1.9 },
    ],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
  },
  {
    name: "Escorpião",
    culture: "Grega / Maia",
    mythology: "O escorpião enviado pelos deuses para matar Órion. Os maias o chamavam de Lamat e associavam seu aparecimento à estação das chuvas.",
    stars: [
      { x: 40, y: 15, r: 3.6, name: "Antares", mag: 0.9 },
      { x: 35, y: 28, r: 2.0, name: "σ Sco", mag: 2.9 },
      { x: 45, y: 35, r: 1.8, name: "τ Sco", mag: 2.8 },
      { x: 55, y: 40, r: 2.1, name: "ε Sco", mag: 2.3 },
      { x: 62, y: 50, r: 2.0, name: "μ Sco", mag: 3.0 },
      { x: 68, y: 62, r: 1.9, name: "ζ Sco", mag: 3.6 },
      { x: 72, y: 75, r: 2.2, name: "Shaula", mag: 1.6 },
      { x: 78, y: 80, r: 2.0, name: "Lesath", mag: 2.7 },
      { x: 30, y: 18, r: 1.7, name: "δ Sco", mag: 2.3 },
      { x: 28, y: 10, r: 1.6, name: "π Sco", mag: 2.9 },
    ],
    lines: [[9,8],[8,0],[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
  },
  {
    name: "Cruz do Sul",
    culture: "Indígena / Navegadores",
    mythology: "A constelação mais icônica do hemisfério sul. Povos indígenas brasileiros a chamavam de 'Emu no céu' e a usavam para marcar as estações do plantio.",
    stars: [
      { x: 50, y: 15, r: 2.8, name: "Gacrux", mag: 1.6 },
      { x: 50, y: 75, r: 3.2, name: "Acrux", mag: 0.8 },
      { x: 20, y: 45, r: 2.2, name: "δ Cru", mag: 2.8 },
      { x: 80, y: 45, r: 2.9, name: "Mimosa", mag: 1.3 },
      { x: 62, y: 62, r: 1.6, name: "ε Cru", mag: 3.6 },
    ],
    lines: [[0,1],[2,3],[4,1]],
  },
  {
    name: "Leão",
    culture: "Babilônica / Egípcia",
    mythology: "Para os babilônios, marcava a passagem do Sol no verão. Os egípcios associavam ao período das cheias do Nilo. A estrela Régulo era chamada de 'o Coração do Leão'.",
    stars: [
      { x: 75, y: 35, r: 3.0, name: "Régulo", mag: 1.4 },
      { x: 62, y: 28, r: 1.8, name: "η Leo", mag: 3.5 },
      { x: 52, y: 22, r: 2.0, name: "γ Leo", mag: 2.0 },
      { x: 42, y: 25, r: 1.7, name: "ζ Leo", mag: 3.4 },
      { x: 35, y: 32, r: 2.0, name: "μ Leo", mag: 3.9 },
      { x: 38, y: 42, r: 1.8, name: "ε Leo", mag: 3.0 },
      { x: 50, y: 60, r: 2.3, name: "Denébola", mag: 2.1 },
      { x: 62, y: 48, r: 1.6, name: "δ Leo", mag: 2.6 },
    ],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,2],[0,7],[7,6]],
  },
];

function StarMapCanvas({ constellation }: { constellation: typeof constellations[0] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    // Background star field
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 0.8 + 0.2;
      const a = Math.random() * 0.5 + 0.1;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,215,245,${a})`;
      ctx.fill();
    }

    // Draw constellation lines
    constellation.lines.forEach(([a, b]) => {
      const sa = constellation.stars[a];
      const sb = constellation.stars[b];
      const x1 = (sa.x / 100) * W;
      const y1 = (sa.y / 100) * H;
      const x2 = (sb.x / 100) * W;
      const y2 = (sb.y / 100) * H;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "rgba(74,158,222,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw stars
    constellation.stars.forEach((s) => {
      const x = (s.x / 100) * W;
      const y = (s.y / 100) * H;
      const isHov = hovered === s.name;

      // Glow
      const grd = ctx.createRadialGradient(x, y, 0, x, y, s.r * (isHov ? 10 : 6));
      grd.addColorStop(0, `rgba(74,158,222,${isHov ? 0.6 : 0.3})`);
      grd.addColorStop(1, "rgba(74,158,222,0)");
      ctx.beginPath();
      ctx.arc(x, y, s.r * (isHov ? 10 : 6), 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Star core
      ctx.beginPath();
      ctx.arc(x, y, s.r * (isHov ? 1.6 : 1), 0, Math.PI * 2);
      ctx.fillStyle = isHov ? "#93d5f8" : "#b4d7f5";
      ctx.fill();

      // Label
      if (isHov) {
        ctx.font = "11px 'DM Sans', sans-serif";
        ctx.fillStyle = "rgba(147,213,248,0.9)";
        ctx.fillText(s.name, x + s.r * 2 + 4, y + 4);
      }
    });
  }, [constellation, hovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    const found = constellation.stars.find((s) => {
      const dx = s.x - mx;
      const dy = s.y - my;
      return Math.sqrt(dx * dx + dy * dy) < 4;
    });
    setHovered(found ? found.name : null);
  };

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={380}
      className="w-full h-full cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
    />
  );
}

function StarMap() {
  const [selected, setSelected] = useState(0);
  const current = constellations[selected];

  return (
    <section id="mapa estelar" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-sky-500/70 mb-5">Cartografia Celeste</p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-sky-100 mb-6">Mapa Estelar</h2>
          <div className="w-16 h-px bg-sky-500/40 mx-auto mb-8" />
          <p className="font-crimson text-xl text-sky-100/50 italic max-w-xl mx-auto">
            As constelações que guiaram civilizações por milênios. Passe o mouse sobre as estrelas para identificá-las.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {constellations.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setSelected(i)}
              className={`font-dm text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                selected === i
                  ? "border-sky-400/60 text-sky-200 bg-sky-500/10"
                  : "border-sky-500/15 text-sky-100/40 hover:border-sky-500/30 hover:text-sky-100/70"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map canvas */}
          <div className="lg:col-span-3 bg-card border border-sky-500/15 overflow-hidden relative"
            style={{ background: "radial-gradient(ellipse at 50% 40%, #060d1a 0%, #03060d 100%)" }}>
            <div className="absolute top-4 left-4 font-dm text-xs tracking-widest uppercase text-sky-400/40 z-10">
              ✦ {current.name}
            </div>
            <div className="absolute top-4 right-4 font-dm text-xs text-sky-400/30 z-10">
              Passe o mouse nas estrelas
            </div>
            <div style={{ height: "380px" }}>
              <StarMapCanvas key={current.name} constellation={current} />
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-card border border-sky-500/15 p-7 flex-1">
              <p className="font-dm text-xs tracking-widest uppercase text-sky-500/60 mb-2">{current.culture}</p>
              <h3 className="font-cinzel text-2xl font-bold text-sky-100 mb-4">{current.name}</h3>
              <div className="w-10 h-px bg-sky-500/30 mb-5" />
              <p className="font-crimson text-base text-sky-100/65 leading-relaxed">{current.mythology}</p>
            </div>

            <div className="bg-card border border-sky-500/15 p-6">
              <p className="font-dm text-xs tracking-widest uppercase text-sky-500/50 mb-4">
                Estrelas Principais — {current.stars.length} identificadas
              </p>
              <div className="space-y-2.5">
                {current.stars.slice(0, 5).map((s) => (
                  <div key={s.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
                      <span className="font-crimson text-sm text-sky-100/70">{s.name}</span>
                    </div>
                    <span className="font-dm text-xs text-sky-400/40 tabular-nums">mag {s.mag.toFixed(1)}</span>
                  </div>
                ))}
                {current.stars.length > 5 && (
                  <p className="font-dm text-xs text-sky-100/25 pt-1">
                    +{current.stars.length - 5} estrelas adicionais no mapa
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContributorCard({ c, index }: { c: typeof contributors[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (detailsRef.current) {
      setHeight(open ? detailsRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className="group bg-card border cursor-pointer overflow-hidden"
      style={{
        borderColor: open ? "rgba(74,158,222,0.35)" : "rgba(74,158,222,0.1)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        boxShadow: open ? "0 0 32px rgba(74,158,222,0.06)" : "none",
        animationDelay: `${index * 80}ms`,
      }}
      onClick={() => setOpen((v) => !v)}
    >
      {/* Header */}
      <div className="flex items-center gap-5 p-6 pb-5">
        <div className="relative flex-shrink-0">
          <div
            className="w-16 h-16 rounded-full overflow-hidden border-2"
            style={{
              borderColor: open ? "rgba(74,158,222,0.5)" : "rgba(74,158,222,0.2)",
              transition: "border-color 0.4s ease",
            }}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.5s ease", transform: open ? "scale(1.08)" : "scale(1)" }}
            />
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border flex items-center justify-center"
            style={{
              background: open ? "rgba(74,158,222,0.3)" : "rgba(74,158,222,0.15)",
              borderColor: "rgba(74,158,222,0.4)",
              transition: "background 0.4s ease",
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full bg-sky-400"
              style={{ opacity: open ? 1 : 0.5, transition: "opacity 0.4s ease" }}
            />
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="font-cinzel text-base font-bold text-sky-100 leading-tight mb-0.5 truncate">{c.name}</h3>
          <p className="font-dm text-xs tracking-widest uppercase text-sky-400/70 mb-1">{c.role}</p>
          <p className="font-crimson text-xs text-sky-100/40 italic truncate">{c.specialty}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="px-6 pb-4">
        <p
          className="font-crimson text-sm text-sky-100/60 leading-relaxed"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: open ? "unset" : 2,
            overflow: "hidden",
            transition: "opacity 0.3s ease",
          }}
        >
          {c.bio}
        </p>
      </div>

      {/* Expandable details */}
      <div
        ref={detailsRef}
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="px-6 pb-6 border-t border-sky-500/10 pt-5 mt-1"
          style={{ opacity: open ? 1 : 0, transition: "opacity 0.35s ease 0.08s" }}
        >
          <p className="font-dm text-xs tracking-widest uppercase text-sky-500/50 mb-3">Seções contribuídas</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {c.contributions.map((tag) => (
              <span key={tag} className="font-dm text-xs px-3 py-1 border border-sky-500/20 text-sky-300/70 tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href={c.github} onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sky-100/40 hover:text-sky-300 transition-colors duration-200">
              <Github size={15} />
              <span className="font-dm text-xs">GitHub</span>
            </a>
            <a href={c.linkedin} onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sky-100/40 hover:text-sky-300 transition-colors duration-200">
              <Linkedin size={15} />
              <span className="font-dm text-xs">LinkedIn</span>
            </a>
            <a href={`mailto:${c.email}`} onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sky-100/40 hover:text-sky-300 transition-colors duration-200">
              <Mail size={15} />
              <span className="font-dm text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Toggle label */}
      <div className="px-6 pb-5">
        <button
          className="font-dm text-xs tracking-widest uppercase transition-colors duration-300"
          style={{ color: open ? "rgba(125,196,240,0.8)" : "rgba(74,158,222,0.45)" }}
        >
          <span style={{ display: "inline-block", transition: "transform 0.35s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
            ↓
          </span>
          {" "}{open ? "Fechar" : "Ver perfil"}
        </button>
      </div>
    </div>
  );
}

function Contributors() {
  return (
    <section id="colaboradores" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-sky-500/70 mb-5">Equipe do Projeto</p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-sky-100 mb-6">
            Colaboradores
          </h2>
          <div className="w-16 h-px bg-sky-500/40 mx-auto mb-8" />
          <p className="font-crimson text-xl text-sky-100/50 italic max-w-xl mx-auto">
            Pesquisadores, historiadores e cientistas que tornaram este projeto possível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((c, i) => (
            <ContributorCard key={c.name} c={c} index={i} />
          ))}
        </div>

        <div className="mt-20 border border-sky-500/10 p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(74,158,222,0.04) 0%, transparent 100%)" }}>
          <p className="font-cinzel text-lg text-sky-100/70 mb-3">Quer contribuir com o projeto?</p>
          <p className="font-crimson text-base italic text-sky-100/40 mb-6 max-w-lg mx-auto">
            Este é um projeto aberto. Se você é pesquisador, historiador ou entusiasta de astronomia, entre em contato.
          </p>
          <a href="mailto:contato@astronomia-historica.org"
            className="inline-flex items-center gap-3 border border-sky-400/30 px-7 py-3 text-sky-300/80 font-dm text-xs tracking-widest uppercase hover:border-sky-400/60 hover:text-sky-200 transition-all">
            <Mail size={14} />
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-sky-500/10 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Telescope className="text-sky-500/60 w-5 h-5" />
          <span className="font-cinzel text-sky-300/60 tracking-[0.2em] text-sm uppercase">Astronomia Histórica</span>
        </div>
        <p className="font-crimson text-sky-100/30 text-sm italic text-center">
          Em memória de todos que levantaram os olhos ao céu e perguntaram: por quê?
        </p>
        <div className="flex gap-6">
          {["Origens", "Civilizações", "Astrônomos", "Colaboradores"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-dm text-xs tracking-widest uppercase text-sky-100/30 hover:text-sky-400 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-crimson { font-family: 'Crimson Pro', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #07080f; }
        ::-webkit-scrollbar-thumb { background: rgba(74,158,222,0.3); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(74,158,222,0.6); }
      `}</style>
      <NavBar />
      <Hero />
      <Origins />
      <Civilizations />
      <Timeline />
      <Astronomers />
      <Quote />
      <StarMap />
      <Contributors />
      <Footer />
    </div>
  );
}
