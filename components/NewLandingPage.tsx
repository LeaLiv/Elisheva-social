import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { ArrowDown, ArrowLeft, CalendarDays, Camera, Instagram } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=972502092507&text=%D7%94%D7%99%D7%99+%D7%90%D7%9C%D7%99%D7%A9%D7%91%D7%A2,+%D7%A8%D7%95%D7%A6%D7%94+%D7%9C%D7%91%D7%93%D7%95%D7%A7+%D7%90%D7%9D+%D7%94%D7%AA%D7%94%D7%9C%D7%99%D7%9A+%D7%9E%D7%AA%D7%90%D7%99%D7%9D+%D7%9C%D7%A2%D7%A1%D7%A7+%D7%A9%D7%9C%D7%99';

// Reveal-on-scroll wrapper shared by every section on this page.
const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}> = ({ children, className, delay = 0, y = 40 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionNumber: React.FC<{ n: string; label: string }> = ({ n, label }) => {
  const accent = '#79bddc9e';
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-display text-sm tracking-[0.4em]" style={{ color: accent }}>{n}</span>
      <span className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: accent }} />
      <span className="text-[11px] tracking-[0.3em] text-[#1c1a17]/50 uppercase">{label}</span>
    </div>
  );
};

const fears = [
  'את רוצה להגיע לפרויקטים גדולים יותר, אבל מפחדת להשקיע בשיווק ולא לראות תוצאה.',
  'את רוצה להעלות מחירים, אבל חוששת שהלקוחות לא יבינו למה.',
  'יש לך עבודות שאת גאה בהן, אבל את לא יודעת איך להפוך אותן לתוכן שמביא את הלקוחות שאת רוצה.',
  'את מעלה כשיש זמן, מצלמת כשנזכרת, והאינסטגרם נשאר מאחור - למרות שהעסק כבר מזמן התקדם.',
];

const processSteps = [
  {
    n: '01',
    title: 'פגישת אסטרטגיה',
    desc: 'פגישת עומק אישית שבה נבין את העסק שלך, נדייק קהל יעד, שירותים, בידול, מסרים ונבנה יחד אסטרטגיית תוכן מותאמת.',
    image: '/assets/processSteps/1.jpeg',
    imageAlt: 'פגישת עבודה ותכנון אסטרטגי',
    Icon: CalendarDays,
  },
  {
    n: '02',
    title: 'יום צילום + יצירת תוכן',
    desc: 'יום צילום מתוכנן מראש, בהתאם לאסטרטגיה ולמטרות העסק, ליצירת מאגר תוכן איכותי, מקצועי ומדויק.',
    image: '/assets/processSteps/2.jpeg',
    imageAlt: 'מצלמה על חצובה במהלך יום צילום',
    Icon: Camera,
  },
  {
    n: '03',
    title: 'פגישת Instagram + גאנט תוכן',
    desc: 'אחרי שיצרנו את התוכן, הופכים אותו לנוכחות ברורה ומסודרת בעמוד.',
    image: '/assets/processSteps/3.jpeg',
    imageAlt: 'תכנון וארגון תכנים לרשתות החברתיות',
    Icon: Instagram,
  },
];

const videoResults = Array.from({ length: 14 }, (_, i) => 101 + i);

const profilePictures = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const recommendations = [
  { src: '/assets/recomandation/reco1.mov', label: 'אלמוג סוקיטל' },
  { src: '/assets/recomandation/reco2.mov', label: 'תמר רזיאל' },
  { src: '/assets/recomandation/reco3.mov', label: 'קורין אולסמן' },
  { src: '/assets/recomandation/reco4.mov', label: 'יעל נוימן' },
];

const clientTestimonials = [
  {
    quote: 'הגעתי כי רציתי תוכן, אבל מהר מאוד הבנתי שאני צריכה הרבה מעבר לזה. אלישבע עזרה לי להבין איך אני משווקת את העסק שלי בצורה הרבה יותר מדויקת.',
    name: 'ע. זוארץ',
  },
  {
    quote: 'אהובה שלי \nאני חייבת לך תודה ענקית!\nהגעתי ליום הצילומים הזה עם לא מעט חששות, בעיקר מהעמידה מול המצלמה ומהיציאה מאזור הנוחות שלי.\nאבל עם האנרגיות המדהימות שלך, הרגישות והדרך המיוחדת שלך, הצלחת לגרום לי להרגיש כל כך בנוח, להשתחרר ואפילו קצת לאהוב את עצמי מבעד למצלמה \nוזה מבחינתי הרבה מעבר ליום צילומים מוצלח!\nתודה על חוויה מדהימה, על הביטחון שנתת לי ועל מי שאת.\nאיזה כיף שבחרתי בך!\nמחכה כבר לראות את התוצאות ',
    name: 'אירית',
  },
  {
    quote: 'היא הצליחה להוציא ממני דברים שלא חשבתי בכלל שהם חלק מהשיווק שלי. פתאום הבנתי שהסיפור שלי, הדרך שלי והאישיות שלי הם חלק מהמותג.',
    name: 'ק. אולסן',
  },
  {
    quote: 'הרגשתי שסוף סוף מישהו רואה את העסק שלי מבחוץ ויודע לתרגם אותו לשיווק. התוכן הפך להיות הרבה יותר ברור, מקצועי ומדויק.',
    name: 'י.נ.',
  },
  {
    quote: 'מה שהכי אהבתי בתהליך הוא שהיא לא באה רק לצלם. היא באמת נכנסה לעסק שלי, הבינה מי אני, מה אני רוצה לשדר ולמי אני רוצה להגיע. יש לה הבנה אמיתית של עולם העיצוב והשיווק, והיא יודעת לנסח ולתרגם אליי במדויק.',
    name: 'ת. רזיאל',
  },
];

// Testimonials longer than this are shown full-width below the regular ones.
const LONG_TESTIMONIAL_LENGTH = 300;
const shortTestimonials = clientTestimonials.filter((t) => t.quote.length <= LONG_TESTIMONIAL_LENGTH);
const longTestimonials = clientTestimonials.filter((t) => t.quote.length > LONG_TESTIMONIAL_LENGTH);
const displayedTestimonials = [...longTestimonials, ...shortTestimonials];

const TestimonialCard: React.FC<{ testimonial: { quote: string; name: string }; long?: boolean }> = ({
  testimonial,
  long,
}) => (
  <figure className={`group relative flex ${long ? 'h-full' : ''} flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-3 text-right shadow-[0_8px_24px_rgba(28,26,23,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(28,26,23,0.13)] md:p-4`}>
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#a9781f]/70 via-[#9bc3de]/70 to-transparent" />
    <span aria-hidden="true" className="mb-1 font-display text-5xl leading-none text-[#a9781f]/60">“</span>
    <blockquote
      className={`whitespace-pre-line font-light text-[#1c1a17]/85 ${
        long ? 'text-sm leading-relaxed md:text-base' : 'text-sm leading-relaxed'
      }`}
    >
      {testimonial.quote}
    </blockquote>
    <figcaption className="mt-4 flex items-center gap-2 border-t border-[#1c1a17]/10 pt-3 text-sm font-bold text-[#1c1a17]">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#a9781f]" />
      {testimonial.name}
    </figcaption>
  </figure>
);

// Add a reel's view count here when available.
const instagramReels: { id: string; views?: string }[] = [
  { id: 'DbOYB90IQLS' },
  { id: 'DbldtjIomdM' },
  { id: 'DZht4Q7I1n2' },
  { id: 'DY1hhS2OUX0' },
  { id: 'DVBsh_mjNi_' },
  { id: 'DV6SgLqDGGf' },
  { id: 'Ddwh59vsv_T' },
  { id: 'DbgSBJRMzv8' },
  { id: 'DdjtbXINuvR' },
  { id: 'DavOO3aI352' },
  { id: 'DX2HfuMtAdW' },
  { id: 'DdwpRgku7mZ' },
  { id: 'DYIVo_ZoZ4V' },
  { id: 'DZ0gFHwoRzg' },
  { id: 'DbBUjlcSJ7r' },
  { id: 'Dc2xAooyEgX' },
  { id: 'DeKBk17trB0' },
  { id: 'DdoMAIrNZC9' },
  { id: 'DbOfwCptkw8' },
];
const INITIAL_REELS = 6;

const LazyReel: React.FC<{ id: string; views?: string }> = ({ id, views }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl bg-white/80 shadow-[0_8px_24px_rgba(28,26,23,0.1)]">
      <div className="min-h-[520px]">
        {visible && <InstagramEmbed url={`https://www.instagram.com/reel/${id}/`} width="100%" captioned={false} />}
      </div>
      {views && (
        <div dir="rtl" className="flex items-center justify-center border-t border-[#1c1a17]/10 px-4 py-3 text-sm font-bold text-[#1c1a17]">
          <span>👁 {views} צפיות</span>
        </div>
      )}
    </div>
  );
};

const circleItems = [
  { image: '/assets/landing/circle/1.png', label: 'העסק הבסיס להכל' },
  { image: '/assets/landing/circle/2.png', label: 'הצילום' },
  { image: '/assets/landing/circle/3.png', label: 'התוכן' },
  { image: '/assets/landing/circle/4.png', label: 'האסטרטגיה' },
  { image: '/assets/landing/circle/5.png', label: 'הנוכחות שלך' },
  { image: '/assets/landing/circle/6.png', label: 'האישיות שלך' },
  { image: '/assets/landing/circle/7.png', label: 'החיבור' },
];

const ORBIT_SECONDS = 30;

// Sits at a fixed angle on the ring; counter-rotates against the orbit so it stays upright.
const OrbitItem: React.FC<{
  item: { image: string; label: string };
  angle: number;
  orbit: MotionValue<number>;
}> = ({ item, angle, orbit }) => {
  const upright = useTransform(orbit, (r) => -(r + angle));
  return (
    <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
      <motion.div
        className="absolute left-1/2 top-0 flex w-28 flex-col items-center gap-2 text-center sm:w-36 md:w-44"
        style={{ x: '-50%', y: '-50%', rotate: upright }}
      >
        <img
          src={item.image}
          alt={item.label}
          className="h-16 w-16 rounded-full object-cover shadow-lg ring-4 ring-[#faf7f2]/80 sm:h-24 sm:w-24 md:h-32 md:w-32"
        />
        <span className="max-w-[130px] text-xs font-medium leading-tight text-[#1c1a17]/80 md:text-base">{item.label}</span>
      </motion.div>
    </div>
  );
};

const CircleSection: React.FC = () => {
  const orbit = useMotionValue(0);
  useEffect(() => {
    const controls = animate(orbit, 360, { duration: ORBIT_SECONDS, ease: 'linear', repeat: Infinity });
    return () => controls.stop();
  }, [orbit]);

  return (
  <section id="system" className="relative overflow-hidden border-b border-black/10 bg-[#e8e1d8] px-6 py-24 md:px-16 md:py-32">
    <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(#8f8172_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
    <div className="relative mx-auto max-w-6xl">
      <Reveal className="mb-12 text-center md:mb-0">
        <span className="text-xs font-bold tracking-[0.28em] text-[#a9781f] uppercase">06 / המערכת</span>
        <h2 className="mx-auto mt-5 max-w-md text-3xl font-display font-black leading-tight md:text-5xl">
          הכל מתחבר
          <br />
          להצלחה שלך
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-10 hidden aspect-square w-full max-w-[480px] md:block md:max-w-[640px]">
        <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#faf7f2]/90 p-4 text-center shadow-xl backdrop-blur-sm md:h-48 md:w-48">
          <p className="font-display text-lg font-bold leading-tight md:text-2xl">הכל מתחבר<br />להצלחה שלך</p>
        </div>

        <div className="absolute inset-[14%]">
          <div aria-hidden="true" className="absolute inset-0 rounded-full border border-dashed border-[#1c1a17]/25" />
          <motion.div className="absolute inset-0" style={{ rotate: orbit }}>
            {circleItems.map((item, index) => (
              <OrbitItem key={item.image} item={item} angle={(360 / circleItems.length) * index} orbit={orbit} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-sm md:hidden">
        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-7 left-1/2 top-7 w-px -translate-x-1/2 bg-black/15" />
          {circleItems.map((item) => (
            <Reveal key={item.image} y={16} className="relative flex flex-col items-center gap-2 py-3 text-center">
              <img src={item.image} alt={item.label} className="z-10 h-36 w-36 flex-shrink-0 rounded-full border-4 border-[#e8e1d8] object-cover shadow-md" />
              <span className="text-base font-medium text-[#1c1a17]/85">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

// An auto-scrolling marquee of scattered photos that float gently and straighten on hover (pauses on hover).
const ResultsCarousel: React.FC<{ items: number[] }> = ({ items }) => {
  const tilts = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', 'rotate-1', '-rotate-2', 'rotate-0'];
  const loop = [...items, ...items];
  return (
    <div dir="ltr" className="group overflow-hidden py-4">
      <motion.div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{ animation: `results-marquee ${items.length * 4}s linear infinite` }}
      >
        {loop.map((n, i) => (
          <motion.div
            key={`${n}-${i}`}
            className={`mr-4 w-32 flex-shrink-0 rounded-xl border border-black/5 bg-white p-2 pb-3 shadow-md transition-transform duration-300 hover:!rotate-0 hover:scale-105 hover:shadow-xl sm:mr-5 sm:w-40 md:w-44 ${tilts[i % tilts.length]}`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + (i % 4) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: (i % 5) * 0.25 }}
          >
            <div className="aspect-[9/16] rounded-xl overflow-hidden">
              <img
                src={`/assets/landing/${n}.png`}
                alt="צילום מסך תוצאה מפרויקט של לקוחה"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <style>{`@keyframes results-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
};
const NewLandingPage: React.FC = () => {
  const [showAllReels, setShowAllReels] = useState(false);
  return (
    <div className="bg-[#faf7f2] text-[#1c1a17] font-sans" dir="rtl">
      <a
        href="#hero"
        aria-label="Elisheva Lev Home"
        className="fixed right-4 top-4 z-50 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-[#a9781f] md:right-10 md:top-8"
      >
        {/* <img
          src="/assets/newLogo2.png"
          alt="Elisheva Lev - Interior Design Social Media"
          className="h-[68px] w-auto object-contain md:h-[92px]"
        /> */}
      </a>

      {/* Ambient background glow */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#a9781f]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#79bddc9e] blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* 1 - Hero / Core Pain */}
        <section
          id="hero"
          className="relative isolate min-h-[720px] md:min-h-screen overflow-hidden border-b border-black/10"
        >
          <div className="absolute inset-0 -z-20 bg-[#e8e3dd]">
            <img
              src="/assets/landing/backFirst.png"
              alt=""
              className="h-full w-full object-cover object-[58%_center] opacity-55 brightness-110 md:opacity-65 md:object-center"
            />
            <div className="absolute inset-0 bg-[#faf7f2]/20" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#faf7f2]/95 via-[#faf7f2]/65 to-[#faf7f2]/20" />
          </div>

          <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 md:min-h-screen md:px-16">
            <div className="ml-auto mr-0 w-full max-w-xl text-right md:max-w-2xl">
              <Reveal>
                <span className="text-[#a9781f] text-lg font-bold tracking-[0.18em] uppercase md:text-2xl">העסק שלך כבר ברמה גבוהה</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 mb-8 font-display text-4xl font-black leading-[1.15] md:text-6xl lg:text-7xl">
                  הגיע הזמן שהנוכחות שלך תשדר את זה.
                </h1>
              </Reveal>
              <Reveal delay={0.2} className="space-y-4 text-lg leading-relaxed text-[#1c1a17]/80 md:text-xl">
                <p className="font-bold">יש לך את הפרויקטים.</p>
                <p className="font-bold">יש לך את הידע.</p>
                <p className="pt-3">
                  יש לך את היכולת ליצור חללים שאנשים מוכנים להשקיע בהם עשרות אלפי שקלים.
                </p>
                <p>
                  אבל כשלקוח פוטנציאלי מגיע לאינסטגרם שלך - האם הוא באמת רואה את כל זה?
                </p>
                <p className="text-[#a9781f] font-bold">או שהוא רואה עוד מעצבת עם תמונות יפות?</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2 - Connection */}
        <section
          id="connection"
          className="relative isolate min-h-[720px] overflow-hidden border-b border-black/10"
        >
          <div className="absolute inset-0 -z-20 bg-[#e8e3dd]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/assets/landing/backSecondMobile.png')] bg-cover bg-center bg-no-repeat md:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[url('/assets/landing/backSecond.png')] bg-cover bg-left bg-no-repeat md:block"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#faf7f2]/95 via-[#faf7f2]/75 to-[#faf7f2]/20" />
          </div>

          <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 md:px-16">
            <Reveal className="ml-auto mr-0 w-full max-w-xl text-right md:max-w-2xl">
              <h2 className="mb-6 text-3xl font-display font-black leading-tight md:text-5xl">
                אנשים מתחברים לאנשים.
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-[#1c1a17]/80 md:text-2xl">
                אבל כדי שאנשים יבחרו בך הם קודם צריכים להכיר אותך.
              </p>

              <div className="space-y-4 text-lg leading-relaxed text-[#1c1a17]/80 md:text-xl">
                <p className="font-bold">לקוח לא בוחר רק לפי התמונות של הפרויקט.</p>
                <p>הוא רוצה להכיר מי עומדת מאחוריהן.</p>
                <p>את הדרך שאת חושבת.</p>
                <p>את הטעם שלך.</p>
                <p>את הידע שלך.</p>
                <p>את האישיות שלך.</p>
                <p>את המקצועיות שלך.</p>
              </div>

              <div className="mt-10 border-r-2 border-[#a9781f] pr-5 text-lg leading-relaxed md:text-xl">
                <p className="font-bold">ולכן שיווק טוב למעצבת לא יכול להיות רק "עוד תוכן".</p>
                <p>הוא צריך ליצור חיבור.</p>
                <p className="mt-4 font-bold">אבל חיבור בלי אסטרטגיה לא מספיק.</p>
                <p>לכן בניתי שיטה שבה הכול מתחבר למערכת אחת.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 - Fears */}
        <section id="pain-points" className="px-6 md:px-16 py-28 border-b border-black/10">
          <div className="max-w-6xl mx-auto">
            <SectionNumber n="02" label="הפחדים שאת לא אומרת בקול" />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {fears.map((fear, i) => (
                <Reveal key={i} delay={i * 0.1} className="border-t border-black/10 pt-6">
                  <p className="text-lg md:text-xl leading-relaxed text-[#1c1a17]/85 font-light">{fear}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4} className="mt-16 text-center">
              <p className="text-[#1c1a17]/50 text-lg">והשאלה היא לא "איך אני מעלה יותר תוכן?"</p>
              <p className="text-2xl md:text-3xl font-display font-bold mt-3">
                אלא איך אני גורמת <span className="text-[#a9781f]">לשיווק שלי</span> לשקף את הרמה של העסק שלי?
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3 - Breaking the belief
        <section id="belief" className="px-6 md:px-16 py-32 border-b border-black/10 flex justify-center">
          <div className="max-w-3xl text-center">
            <Reveal>
              <p className="text-2xl md:text-4xl font-display leading-relaxed">
                שיווק של מעצבת פנים הוא לא רק עוד רילס ועוד פוסט.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 text-lg md:text-xl text-[#1c1a17]/70 font-light leading-relaxed">
              <p>
                כשאת מוכרת פרויקטים בעשרות אלפי שקלים, את צריכה שהנוכחות שלך תעביר{' '}
                <span className="text-[#a9781f] font-medium">מקצועיות, סמכות, סגנון וערך</span> - עוד לפני שהלקוח דיבר איתך.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <p className="text-[#1c1a17]/50">ולכן את לא צריכה רק מישהי שתנהל לך את האינסטגרם.</p>
              <p className="text-xl md:text-2xl font-bold mt-4">
                את צריכה מישהי שמבינה את העסק שלך, את עולם העיצוב ואת הדרך שבה הופכים את הערך שלך למותג.
              </p>
            </Reveal>
          </div>
        </section> */}

        {/* 4 - About Elisheva */}
        <section id="about" className="relative overflow-hidden border-b border-black/10 px-6 py-20 md:px-16 md:py-28">
          <div aria-hidden="true" className="absolute inset-0 hidden bg-[url('/assets/aboutBG.png')] bg-cover bg-center md:block" />
          <div aria-hidden="true" className="absolute inset-0 hidden bg-white/45 md:block" />
          <div className="relative mx-auto w-full max-w-6xl">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <Reveal className="w-full max-w-3xl text-center md:flex-1">
                <SectionNumber n="04" label="מי מובילה את זה" />
                <h2 className="mb-6 text-3xl font-display font-black md:text-5xl">נעים מאוד, אני אלישבע.</h2>
                <p className="text-lg text-center font-light leading-relaxed text-[#1c1a17]/75">
                  בשנה האחרונה צילמתי עשרות פרויקטים, עבדתי לצד מעצבות, ישבתי איתן על העסק, זיקקתי אסטרטגיות, בניתי
                  תוכן והפכתי את העבודה שלהן לסיפור שאפשר לראות ולהרגיש בדיגיטל.
                </p>
              </Reveal>
              <motion.div
                initial={{ opacity: 0, y: 36, scale: 0.96, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[320px] shrink-0 sm:max-w-[360px] md:max-w-[380px]"
              >
                <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-[#a9781f]/15 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white/80 bg-white/65 p-3 shadow-[0_30px_80px_rgba(28,26,23,0.22)] backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[1.4rem] bg-[#e8e1d8]">
                    <motion.img
                      src="/assets/elisheva.png"
                      alt="אלישבע לב"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-[420px] w-full object-cover object-[center_32%] sm:h-[480px] md:h-[540px]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <section id="gallery" className="mt-20 border-y border-black/10 py-12 md:mt-24 md:py-16" aria-labelledby="proof-title">
              <Reveal>
                <div className="text-center">
                  <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#a9781f]">ניסיון מהשטח</p>
                  <h3 id="proof-title" className="text-2xl font-display font-black leading-snug text-[#1c1a17] md:text-4xl">
                    עשרות פרויקטים · עשרות מעצבות · מאות תכנים
                  </h3>
                  <p className="mt-3 text-base font-light text-[#1c1a17]/60 md:text-xl">
                    ניסיון מעשי בעולם העיצוב, השיווק והתוכן.
                  </p>
                </div>

                <div dir="ltr" className="mt-8 overflow-hidden">
                  <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'results-marquee 40s linear infinite' }}>
                    {[...profilePictures, ...profilePictures].map((n, i) => (
                      <img
                        key={`${n}-${i}`}
                        src={`/assets/profilesPictures/${n}.png`}
                        alt=""
                        aria-hidden="true"
                        className="mr-4 h-14 w-14 flex-shrink-0 rounded-full object-cover shadow-md sm:mr-6 sm:h-20 sm:w-20 md:mr-8 md:h-24 md:w-24"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="flex flex-wrap items-center justify-center gap-2 text-base font-display font-bold text-[#1c1a17]/75 sm:gap-4 sm:text-xl md:text-2xl">
                    <span>מה עשינו</span>
                    <ArrowLeft size={18} className="text-[#a9781f]" />
                    <span>איך עשינו</span>
                    <ArrowLeft size={18} className="text-[#a9781f]" />
                    <span>מה קרה</span>
                  </p>
                  <p className="mt-2 text-sm font-light text-[#1c1a17]/55 sm:text-base">
                    צפיות, נתונים, צילומי מסך, רילסים, לפני ואחרי והמלצות.
                  </p>
                </div>
                <div className="mt-4">
                  <ResultsCarousel items={videoResults} />
                </div>
              </Reveal>
            </section>

            <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-20">
              <p className="mb-4 text-lg font-light text-[#1c1a17]/55 md:text-xl">ובדרך הבנתי משהו:</p>
              <p className="text-2xl font-display font-bold leading-relaxed text-[#a9781f] md:text-4xl">
                מעצבות לא צריכות עוד מישהי שתעלה להן פוסט.
              </p>
              <p className="mt-5 text-lg font-light leading-relaxed text-[#1c1a17]/75 md:text-2xl">
                הן צריכות חיבור בין <span className="font-medium text-[#1c1a17]">העסק, האסטרטגיה, התוכן, הצילום והנוכחות הדיגיטלית.</span>
              </p>
              <p className="mt-5 text-base font-light text-[#1c1a17]/55 md:text-lg">משם נבנה התהליך שלי.</p>
              <motion.a
                href="#system"
                aria-label="המשך לפירוט התהליך"
                className="mt-6 inline-flex flex-col items-center gap-1 text-[#a9781f]"
              >
                <span className="text-sm font-medium">מה השיטה שלי?</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown size={28} strokeWidth={1.5} />
                </motion.span>
              </motion.a>
            </Reveal>
          </div>
        </section>

        <CircleSection />

        {/* 5 - The Solution / Premium Process */}
        <section id="process" className="relative isolate overflow-hidden border-b border-black/10 bg-[#f4f0eb] px-6 py-16 md:px-16 md:py-20">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[url('/assets/backProcess.png')] bg-cover bg-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#f4f0eb]/80" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center md:mb-16">
              <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#a9781f]">הדרך שלנו יחד</p>
              <h2 className="font-display text-3xl font-black text-[#1c1a17] md:text-5xl">
                <span className="relative inline-block">
                  מה כולל התהליך?
                  <span aria-hidden="true" className="absolute -bottom-2 left-0 right-0 h-2 -rotate-1 rounded-full bg-[#9bc3de]/55" />
                </span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col border-t border-[#1c1a17]/70 px-1 py-6 text-right md:px-4 md:py-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-4xl leading-none text-[#46382f] md:text-5xl">{step.n}</span>
                        <span aria-hidden="true" className="h-8 w-px bg-[#1c1a17]/70" />
                        <h3 className="text-base font-bold leading-snug md:text-lg">{step.title}</h3>
                      </div>
                      <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center md:h-[76px] md:w-[76px]">
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          className="h-full w-full rounded-full object-cover shadow-[0_12px_28px_rgba(28,26,23,0.18)]"
                          loading="lazy"
                        />
                        <step.Icon aria-hidden="true" className="absolute -top-2 -left-2 h-7 w-7 stroke-[1.5] text-[#9bc3de] drop-shadow-sm md:h-8 md:w-8" />
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[#1c1a17]/80 md:text-base">{step.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 - Recommendations */}
        <section id="recommendations" className="relative isolate overflow-hidden border-b border-black/10 bg-[#f4f0eb] px-6 py-20 md:px-16 md:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[url('/assets/recoBack.png')] bg-cover bg-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#f4f0eb]/75" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="mb-12 text-center md:mb-16">
              <p className="text-sm leading-relaxed text-[#1c1a17]/75 md:text-base">
                ועכשיו תראי את זה בפועל, כי בסופו של דבר, התוצאה חשובה יותר מהמילים.
              </p>
              <p className="mt-8 text-sm font-medium text-[#1c1a17]/55 md:text-base">
                מה השתנה אצל המעצבות שעבדו איתי?
              </p>
              <h2 className="mt-3 font-display text-3xl font-black text-[#1c1a17] md:text-5xl">
                מעצבות שעברו את התהליך
              </h2>
              <p className="mt-2 text-base text-[#1c1a17]/60 md:text-xl">וזה מה שיש להן להגיד על זה.</p>
            </Reveal>

            <div dir="rtl" className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayedTestimonials.map((testimonial, index) => {
                const isLong = testimonial.quote.length > LONG_TESTIMONIAL_LENGTH;
                return (
                  <Reveal
                    key={testimonial.name}
                    delay={(index % 3) * 0.08}
                    className={isLong ? 'lg:row-span-2 lg:self-stretch' : 'self-start'}
                  >
                    <TestimonialCard testimonial={testimonial} long={isLong} />
                  </Reveal>
                );
              })}
            </div>

            <div dir="rtl" className="mx-auto mt-8 grid max-w-6xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-4">
              {recommendations.map((recommendation, index) => (
                <Reveal key={recommendation.src} delay={index * 0.08} className="w-full max-w-[260px] min-w-0">
                  <article className="overflow-hidden rounded-2xl bg-white/65 shadow-[0_8px_24px_rgba(28,26,23,0.1)]">
                    <div className="aspect-[9/16]">
                      <video
                        src={recommendation.src}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={recommendation.label}
                        className="h-full w-full object-cover"
                      >
                        הדפדפן שלך לא תומך בהפעלת וידאו.
                      </video>
                    </div>
                    <p className="px-4 py-3 text-right text-sm font-medium text-[#1c1a17]/75">{recommendation.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram reels */}
        <section id="reels" className="border-b border-black/10 bg-[#f4f0eb] px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 text-center">
              <h2 className="font-display text-3xl font-black text-[#1c1a17] md:text-5xl">התוצאות באינסטגרם</h2>
              <p className="mt-3 text-base text-[#1c1a17]/60 md:text-xl">רילס אמיתיים, מעורבות אמיתית.</p>
            </Reveal>
            <div dir="rtl" className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
              {instagramReels.slice(0, showAllReels ? undefined : INITIAL_REELS).map((reel) => (
                <LazyReel key={reel.id} {...reel} />
              ))}
            </div>
            {!showAllReels && instagramReels.length > INITIAL_REELS && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setShowAllReels(true)}
                  className="rounded-full border border-[#a9781f] px-8 py-3 font-bold text-[#a9781f] transition-colors duration-300 hover:bg-[#a9781f] hover:text-white"
                >
                  עוד רילס
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 7 - The Promise */}
        <section id="promise" className="px-6 md:px-16 py-32 border-b border-black/10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-xl md:text-2xl text-[#1c1a17]/50 mb-4">המטרה היא לא שיהיה לך "אינסטגרם יפה".</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-2xl md:text-4xl font-display font-bold leading-relaxed mb-10">
                המטרה היא שכאשר לקוחה פוטנציאלית תגיע אלייך, היא תבין כבר מהנוכחות שלך:
              </p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-display">
              {['מי את.', 'מה הערך שלך.', 'למה לבחור בך.', 'ולמה העסק שלך מתאים בדיוק לפרויקט שהיא רוצה לבנות.'].map(
                (line, i) => (
                  <span key={i} className="text-[#a9781f]">
                    {line}
                  </span>
                )
              )}
            </Reveal>
          </div>
        </section>

        {/* 8 - CTA */}
        <section id="contact" className="px-6 md:px-16 py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-2xl md:text-4xl font-display font-black leading-relaxed">
                העסק שלך כבר ברמה גבוהה.
                <br />
                הגיע הזמן שהשיווק שלך יהיה שם גם.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-[#1c1a17]/60 mt-8 mb-10">רוצה לבדוק אם התהליך מתאים לעסק שלך?</p>
            </Reveal>
            <Reveal delay={0.25}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#a9781f] text-[#a9781f] hover:bg-[#a9781f] hover:text-white transition-colors duration-300 px-10 py-4 rounded-full font-bold text-lg group"
              >
                לתיאום שיחת התאמה
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewLandingPage;
