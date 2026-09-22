import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

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
  { n: '01', title: 'אסטרטגיה', desc: 'נבין מי את, למי את רוצה להגיע, מה מייחד אותך ומה את רוצה למכור.' },
  { n: '02', title: 'תוכן', desc: 'נהפוך את הידע, האישיות והפרויקטים שלך לתוכן שמייצר סמכות ומחבר אותך לקהל הנכון.' },
  { n: '03', title: 'יום צילום', desc: 'ניצור יחד מאגר תוכן מקצועי שמתוכנן מראש בהתאם לאסטרטגיה שלך.' },
  { n: '04', title: 'אינסטגרם', desc: 'נבנה נוכחות שמספרת את הסיפור של העסק שלך ומשקפת את הרמה שאליה את רוצה להגיע.' },
  { n: '05', title: 'ליווי / ניהול', desc: 'בהתאם לצורך - הדרכה, ליווי או ניהול שוטף של הנוכחות הדיגיטלית.' },
];

const stats = [
  { value: 'עשרות', label: 'פרויקטים' },
  { value: '30+', label: 'מעצבות שעבדו איתי' },
  { value: 'רבים', label: 'ימי צילום' },
  { value: '100%', label: 'תוכן מותאם אישית' },
];

const NewLandingPage: React.FC = () => {
  return (
    <div className="bg-[#faf7f2] text-[#1c1a17] font-sans" dir="rtl">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#a9781f]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#79bddc9e] blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* 1 - Hero / Core Pain */}
        <section id="hero" className="flex flex-col justify-center px-6 md:px-16 pt-8 pb-24 md:pt-10 md:pb-32 md:min-h-screen border-b border-black/10">
          <div className="max-w-5xl">
            <Reveal>
              <span className="text-[#a9781f] tracking-[0.4em] text-xs uppercase">העסק שלך טוב יותר מהשיווק שלו</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.15] mt-8 mb-10">
                יש לך פרויקטים מדהימים.
                <br />
                <span className="text-[#1c1a17]/50">אז למה זה לא רואים?</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2} className="max-w-2xl space-y-4 text-lg md:text-xl text-[#1c1a17]/70 leading-relaxed font-light">
              <p>יש לך ידע, ניסיון ולקוחות מרוצים. אולי אפילו פרויקט ב־40,000 ₪ ומעלה.</p>
              <p>אבל כשלקוח פוטנציאלי נכנס לאינסטגרם שלך - האם הוא באמת מבין את הערך שלך?</p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 border-r-2 border-[#a9781f] pr-6">
              <p className="text-xl md:text-2xl font-display italic text-[#1c1a17]">
                כי יכול להיות שהבעיה היא לא שאת לא מספיק טובה.
                <br />
                <span className="text-[#a9781f] not-italic font-bold">יכול להיות שפשוט לא רואים את זה.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2 - Fears */}
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

        {/* 3 - Breaking the belief */}
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
        </section>

        {/* 4 - About Elisheva */}
        <section id="about" className="px-6 md:px-16 py-28 border-b border-black/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
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
            <Reveal delay={0.2} className="relative">
              <div className="absolute -inset-4 border border-[#79bddc9e] rounded-3xl -z-10" />
              <img
                src="/assets/self-picture.jpg"
                alt="אלישבע לב"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
            </Reveal>
          </div>
        </section>

        {/* 5 - The Solution / Premium Process */}
        <section id="process" className="px-6 md:px-16 py-28 border-b border-black/10">
          <div className="max-w-6xl mx-auto">
            <SectionNumber n="05" label="הפתרון" />
            <Reveal className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-4">תהליך שיווקי פרימיום למעצבות פנים</h2>
              <p className="text-lg text-[#1c1a17]/70 font-light">
                תהליך אישי שנבנה סביב העסק שלך - מהאסטרטגיה ועד לתוכן שעולה בפועל.
              </p>
            </Reveal>
            <div className="relative">
              <div className="absolute top-0 bottom-0 right-[27px] w-px bg-black/10 hidden md:block" />
              <div className="space-y-10">
                {processSteps.map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.08}>
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                      <span className="font-display text-2xl text-[#79bddc9e] w-14 flex-shrink-0">{step.n}</span>
                      <div className="border-t md:border-t-0 border-black/10 pt-4 md:pt-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-[#1c1a17]/65 font-light max-w-xl">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 - The Promise */}
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
