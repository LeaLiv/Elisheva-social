import React, { useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { ArrowLeft, CalendarDays, Camera, Instagram } from 'lucide-react';

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
    lead: 'בפגישה נעבוד על:',
    points: [
      'היכרות מעמיקה עם העסק',
      'קהל היעד והלקוחה האידיאלית',
      'השירותים והפרויקטים המרכזיים',
      'הבידול והמסר השיווקי',
      'עמודי התוכן וכיווני היצירה',
    ],
    note: 'כתיבת תסריטים ובניית יום צילום',
    image: '/assets/landing/circle/5.png',
    imageAlt: 'פגישת עבודה ותכנון אסטרטגי',
    Icon: CalendarDays,
  },
  {
    n: '02',
    title: 'יום צילום + יצירת תוכן',
    desc: 'יום צילום מתוכנן מראש, בהתאם לאסטרטגיה ולמטרות העסק, ליצירת מאגר תוכן איכותי, מקצועי ומדויק.',
    lead: 'מה יוצא מיום הצילום?',
    points: [
      '6 רילסים ערוכים · שווי',
      '3 פוסטים מעוצבים · שווי',
      'חומרי גלם לשימוש עתידי',
      'תמונות וקטעי וידאו נוספים לסטורי',
      'תוכן מגוון שניתן להשתמש בו לאורך זמן',
    ],
    image: '/assets/landing/circle/3.png',
    imageAlt: 'מצלמה על חצובה במהלך יום צילום',
    Icon: Camera,
  },
  {
    n: '03',
    title: 'פגישת Instagram + גאנט תוכן',
    desc: 'אחרי שיצרנו את התוכן, הופכים אותו לנוכחות ברורה ומסודרת בעמוד.',
    lead: 'בפגישה נעבוד על:',
    points: [
      'מעבר על כל התכנים שיצרנו',
      'סדר ונראות עמוד האינסטגרם',
      'בניית גאנט תוכן חודשי',
      'סדר פרסום ברור ומדויק',
      'דיוק המסרים והכותרות',
      'כיוון להמשך הפעילות בעמוד',
    ],
    image: '/assets/landing/circle/7.png',
    imageAlt: 'תכנון וארגון תכנים לרשתות החברתיות',
    Icon: Instagram,
  },
];

const stats = [
  { value: 'עשרות', label: 'פרויקטים' },
  { value: '30+', label: 'מעצבות שעבדו איתי' },
  { value: 'רבים', label: 'ימי צילום' },
  { value: '100%', label: 'תוכן מותאם אישית' },
];

const videoResults = Array.from({ length: 14 }, (_, i) => 101 + i);

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

// A draggable, snap-scrolling filmstrip of scattered photos that float gently and straighten on hover.
const ResultsCarousel: React.FC<{ items: number[] }> = ({ items }) => {
  const tilts = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', 'rotate-1', '-rotate-2', 'rotate-0'];
  return (
    <div>
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 px-6 md:px-16 -mx-6 md:-mx-16 no-scrollbar cursor-grab active:cursor-grabbing">
        {items.map((n, i) => (
          <motion.div
            key={n}
            className={`snap-center flex-shrink-0 w-40 sm:w-48 md:w-56 bg-white p-2 pb-3 rounded-2xl shadow-lg border border-black/5 transition-transform duration-300 hover:!rotate-0 hover:scale-105 hover:shadow-2xl ${tilts[i % tilts.length]}`}
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
      </div>
      <p className="text-center text-sm text-[#1c1a17]/40 mt-2">← גררי לצדדים לעוד תוצאות →</p>
    </div>
  );
};

const NewLandingPage: React.FC = () => {
  return (
    <div className="bg-[#faf7f2] text-[#1c1a17] font-sans" dir="rtl">
      <a
        href="#hero"
        aria-label="Elisheva Lev Home"
        className="fixed right-4 top-4 z-50 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-[#a9781f] md:right-10 md:top-8"
      >
        <img
          src="/assets/newLogo2.png"
          alt="Elisheva Lev - Interior Design Social Media"
          className="h-[68px] w-auto object-contain md:h-[92px]"
        />
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
        <section id="about" className="relative overflow-hidden px-6 md:px-16 py-28 border-b border-black/10">
          <div aria-hidden="true" className="absolute inset-0 hidden bg-[url('/assets/aboutBG.png')] bg-cover bg-center md:block" />
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <Reveal>
              <SectionNumber n="04" label="מי מובילה את זה" />
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6">נעים מאוד, אני אלישבע.</h2>
              <div className="space-y-5 text-lg text-[#1c1a17]/75 font-light leading-relaxed">
                <p>
                  בשנה האחרונה צילמתי עשרות פרויקטים, עבדתי לצד מעצבות, ישבתי איתן על העסק, זיקקתי אסטרטגיות, בניתי
                  תוכן והפכתי את העבודה שלהן לסיפור שאפשר לראות ולהרגיש בדיגיטל.
                </p>
                <p className="text-[#1c1a17]/50">ובדרך הבנתי משהו:</p>
                <p className="text-[#a9781f] font-medium text-xl">מעצבות לא צריכות עוד מישהי שתעלה להן פוסט.</p>
                <p>
                  הן צריכות חיבור בין <span className="text-[#1c1a17] font-medium">העסק, האסטרטגיה, התוכן, הצילום והנוכחות
                  הדיגיטלית.</span>
                </p>
                <p className="text-[#1c1a17]/50">משם נבנה התהליך שלי.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="flex justify-center md:hidden">
              <img
                src="/assets/elisheva.png"
                alt="אלישבע לב"
                className="h-auto max-h-[100vh] w-full max-w-[380px] object-contain"
              />
            </Reveal>
          </div>
        </section>

        {/* 5 - The Solution / Premium Process */}
        <section id="process" className="border-b border-black/10 bg-[#f4f0eb] px-6 py-16 md:px-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="divide-y divide-[#1c1a17]/70">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <article className="grid grid-cols-[minmax(0,1fr)_88px] items-center gap-x-4 gap-y-5 py-9 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_116px_minmax(0,1fr)] md:gap-x-7 md:py-10">
                    <div className="text-right">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-display text-4xl leading-none text-[#46382f] md:text-5xl">{step.n}</span>
                        <span aria-hidden="true" className="h-5 w-px bg-[#1c1a17]" />
                        <h3 className="text-base font-bold leading-snug md:text-lg">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#1c1a17]/80 md:text-base">{step.desc}</p>
                    </div>

                    <div className="relative row-span-2 flex h-[88px] w-[88px] items-center justify-center md:row-span-1 md:h-[116px] md:w-[116px]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="h-full w-full rounded-full object-cover shadow-[0_12px_28px_rgba(28,26,23,0.18)]"
                        loading="lazy"
                      />
                      <step.Icon aria-hidden="true" className="absolute -top-3 left-0 h-8 w-8 stroke-[1.5] text-[#9bc3de] drop-shadow-sm md:-top-4 md:-left-2 md:h-10 md:w-10" />
                    </div>

                    <div className="col-span-2 text-right md:col-span-1">
                      <p className="mb-1 text-sm font-semibold md:text-base">{step.lead}</p>
                      <ul className="list-inside list-disc space-y-0.5 text-sm leading-snug text-[#1c1a17]/85 md:text-base">
                        {step.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                      {step.note && <p className="mt-2 text-sm font-medium leading-snug md:text-base">{step.note}</p>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-center font-display text-lg text-[#46382f]/75 md:mt-12 md:text-xl">Elisheva Lev Social</p>
          </div>
        </section>

        <CircleSection />

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

        {/* 7 - Proof */}
        <section id="gallery" className="px-6 md:px-16 py-28 border-b border-black/10">
          <div className="max-w-6xl mx-auto">
            <SectionNumber n="07" label="הוכחות" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1} className="text-center border-r border-black/10 first:border-r-0 px-4">
                  <p className="text-3xl md:text-4xl font-display font-black text-[#79bddc9e]">{stat.value}</p>
                  <p className="text-sm text-[#1c1a17]/60 mt-2">{stat.label}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mb-16">
              <ResultsCarousel items={videoResults} />
            </Reveal>

            <Reveal delay={0.2} className="border border-black/10 rounded-2xl p-10 text-center bg-white/60">
              <p className="flex flex-wrap justify-center items-center gap-3 text-lg md:text-2xl font-display font-bold mb-4">
                <span>מה עשינו</span>
                <ArrowLeft size={20} className="text-[#79bddc9e]" />
                <span>איך עשינו</span>
                <ArrowLeft size={20} className="text-[#79bddc9e]" />
                <span>מה קרה</span>
              </p>
              <p className="text-[#1c1a17]/60 font-light">עם צפיות, נתונים, צילומי מסך, רילסים, לפני/אחרי והמלצות.</p>
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
            <Reveal delay={0.4} className="mt-20 pt-10 border-t border-black/10 text-[#1c1a17]/50 font-light leading-relaxed max-w-2xl mx-auto">
              <p className="mb-2">המוצר הוא לא "אסטרטגיה + צילום + אינסטגרם". אלה המרכיבים.</p>
              <p>
                המוצר הוא לקחת מעצבת שיש לה עסק טוב אבל השיווק שלה לא משקף אותו - ולבנות לה מערכת שיווקית שלמה,
                מקצועית ומדויקת שמציגה את הערך שלה.
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewLandingPage;
