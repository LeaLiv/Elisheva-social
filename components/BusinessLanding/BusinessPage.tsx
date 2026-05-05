import React from 'react';
import Hero from '../Hero';
import About from '../About';
import Contact from '../Contact';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import { Clock, HelpCircle, Layers, Layout } from 'lucide-react';
import PainPoints from '../PainPoints';
import Process from '../Process';
import Gallery from '../Gallery';
import { businessContent } from '../../content';

const BusinessPage: React.FC = () => {
  // Specific content for the shared Hero component
  const heroContent = {
    title: <> מוצר מעולה או שירות מצוין <br /> <span className="text-transparent bg-clip-text bg-gradient-to-l from-stone-600 to-stone-900">הם רק ההתחלה.</span></>,
    description: <>כדי להפוך למותג מוביל בעידן שבו אנשים מתחברים לאנשים- <br /><span className="font-bold">אתם צריכים שיראו אתכם באמת.
      <br /></span> לא עוד "טיפים" שחוקים או פוסטים מזדמנים.<br /> אתם צריכים נוכחות דיגיטלית<br />
      שמשלבת בין המקצועיות שלכם לקול הייחודי שלכם.</>,
    primaryBtn: "בואו נדבר תכלס",
    secondaryBtn: "הכירו אותי"
  };

  // Specific content for the shared About component
  const aboutContent = {
    title: "כאן אני נכנסת לתמונה.",
    text: (
      <>
        <p className="text-xl font-medium text-white mb-4">
          אני אלישבע - יוצרת תוכן וסושיאל
          מגיעה מעולמות העיצוב והבנייה,
          שם למדתי שאין תחליף
          למראה עיניים ולתחושת ה"שטח"
        </p>
        <p className="mb-4">
          המומחיות שלי היא לקחת את מה שקורה אצלכם בעסק –
          ב"שטח", במשרד, בסטודיו או בשיחות עם הלקוחות –
          ולתרגם את זה לשפה דיגיטלית חיה ובועטת-
          לא רק פוסטים ומיתוג
          אלא את המציאות העסקית שלכם.
        </p>
        <p className="text-blue-400 font-bold text-lg border-t border-stone-700 pt-4 mt-4">
          כי כשאתם חושפים את התהליך, את האמת ואת האדם
          שמאחורי העסק- נוצר אמון.<br />
          אני כאן כדי לתת לכם את הבידול המדויק שלכם.
        </p>
      </>
    )
  };

  // Specific content for the shared Contact component
  const contactContent = {
    title: "מוכנים להפסיק להתחבא מאחורי לוגו?",
    description: "בואו נהפוך את העשייה היומיומית שלכם למגנט של לקוחות."
  };

  const painPointsContent = {
    title: "בואו נודה על האמת",
    description: <>
      האינסטגרם והרשתות החברתיות הם חלון הראווה של העסק שלכם.
      <br />
      בלי נוכחות אותנטית שמבליטה את מה שמיוחד בכם –
      <br />
      הלקוחות רואים אתכם כמו המתחרים שלכם!!
    </>,
    subtitle: "אתם מבינים שאתם חייבים להיות שם, אבל איך?!",
    points: [
      { icon: <Clock size={40} />, text: "אין לכם זמן לצלם תוך כדי עבודה?" },
      { icon: <Layout size={40} />, text: "מרגישים שפוסטים מעוצבים מדי לא מייצגים את מי שאתם באמת?" },
      { icon: <Layers size={40} />, text: "הלקוחות לא רואים את הערך המיוחד שאתם נותנים?" },
      { icon: <HelpCircle size={40} />, text: "איך הופכים את כל העשייה הזו לתוכן שמוכר בלי להרגיש מוזר או \"מכירתי\" מדי?" }
    ]
  };
  const galleryContent= {
    title: "קצת מהקסם שקורה בשטח",
    description: <>
      לא משנה אם אתם בעלי עסקים, מעצבים או אדריכלים – איכות צילום ודיוק במסר הם שפה בינלאומית.
      <br />
      הנה הצצה לפרויקטים ולרגעים שתפסתי בעדשה.
    </>,
    // כאן את שמה סרטונים שונים שמתאימים לבעלי עסקים!
    items: [
        { type: 'video', url: "/assets/videos/business-intro.mp4", poster: "/assets/biz-cover.jpg" },
        { type: 'instagram', url: "https://www.instagram.com/reel/DTnlLzJCB4F/?igsh=dzZqaDBsMHZ1aXFh" },
        { type: 'instagram', url: "https://www.instagram.com/reel/DTDg9SaiPBl/?igsh=MXFocDd3ejk2cXN4eQ==" },
    ]
  };
  const proccessContent = {
    foundationsTitle: "בונים מותג, לא רק פיד.",
    foundationsDesc: <>בניתי עבורכם מעטפת שתתאים בדיוק לקצב ולצרכים של העסק שלכם.<br /><span className="font-bold">המטרה משותפת- שיראו אתכם</span>.</>,
    foundations: [
      {
        title: "ויזואליה של עסק",
        desc: <>לא סתם 'תיעוד',
          אלא בבידול ותסריט שמייחד אתכם.</>,
        icon: <Clock size={32} />,
        color: "bg-stone-50"
      },
      {
        title: "אסטרטגיה שמוכרת",
        desc: "אנחנו לא רודפים אחרי טרנדים, אלא בונים שפה שיווקית שמשדרת סמכות ומביאה לקוחות.",
        icon: <Layers size={32} />,
        color: "bg-white"
      },
      {
        title: "האדם שבמרכז",
        desc: "אנשים קונים מאנשים. אני אעזור לכם להרגיש בנוח מול המצלמה (כן, זה אפשרי!) ולהביא את האישיות הכובשת שלכם לקדמת הבמה.",
        icon: <HelpCircle size={32} />,
        color: "bg-stone-50"
      }
    ],
    tracksTitle: "בחרו את המסלול שלכם",
    tracksDesc: "ארבע דרכים להפוך כישרון לנוכחות דיגיטלית בולטת:",
    

tracks : [
  {
    title: "הבוסט הוויזואלי",
    target: "לבעלי עסקים שמנהלים לבד, אבל חייבים חומרים ברמה של מגזין.",
    features: [
      {
        title: "יום צילום מדויק לעסק שלכם",
        desc: "בימוי והעמדה במשרד, בסטודיו, או עם הלקוחות שלכם. תסריט מדויק שמשווק אתכם!"
      },
      {
        title: "תוצרים ערוכים:",
        desc: "בנק סרטונים (Reels) ותמונות אווירה מוכנים לשימוש מיידי."
      }
    ],
    buttonText: "תאמי לי יום צילום",
    isPrimary: false,
  },
  {
    title: "פיצוח ואסטרטגיה",
    target: "לבעלי עסקים שרוצים להתקדם בדיגיטל לבד, אבל צריכים תוכנית עבודה.",
    features: [
      {
        title: "פיצוח ואסטרטגיה-",
        desc: "פגישת אפיון הבידול הייחודי שלכם ובניית גאנט תוכן חודשי מסודר."
      },
      {
        title: "יום צילום ותוכן-",
        desc: "אני מגיעה לצלם ולביים, ומספקת לכם בנק סרטונים ותמונות שתואמים בדיוק לגאנט שבנינו."
      },
      {
        title: "ניהול עצמאי-",
        desc: "אתם מקבלים ממני את התוכנית ואת התוכן הוויזואלי - והשאר תלוי בכם!"
      }
    ],
    buttonText: "אני רוצה אסטרטגיה",
    isPrimary: true, 
  },
  {
    title: "ניהול סושיאל מלא",
    target: "לבעלי עסקים שרוצים ראש שקט ומותג שמנוהל מא' ועד ת' בצורה מקצועית.",
    features: [
      {
        title: "כל מה שיש במסלול הוויזואלי",
        desc: "פגישת אפיון ויום צילום מדויק לעסק שלכם."
      },
      {
        title: "ניהול שוטף-",
        desc: "בניית גאנט, כתיבת קאפשן (Text), העלאת פוסטים וניהול הסטורי."
      },
      {
        title: "נוכחות עקבית-",
        desc: "אני דואגת שהעמוד שלכם יהיה פעיל, חי וממיר, בזמן שאתם מתרכזים בעסק."
      }
    ],
    buttonText: "קחי את המושכות",
    isPrimary: false,
  },
  {
    title: "תיעוד אירועים והשקות",
    target: "לחברות וארגונים שרוצים להפוך אירוע חד-פעמי לנכס שיווקי מתמשך.",
    features: [
      {
        title: "מרימים אירוע עסקי? השקה? סדנה?",
        desc: "" // השארתי ריק כי זה נראה כמו כותרת בפני עצמה בתמונה
      },
      {
        title: "תיעוד האווירה, סרטון תדמית,",
        desc: "האנרגיות והרגעים הקטנים שעושים את ההבדל."
      },
      {
        title: "התוצאה:",
        desc: "מזכרת ויזואלית עוצמתית שמשמשת כחומר שיווקי מעולה לאירוע הבא."
      }
    ],
    buttonText: "בואו נדבר על האירוע",
    isPrimary: false,
  }
]
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={businessContent.hero} />
      <PainPoints content={businessContent.painPoints} />
      <About content={businessContent.about} />
      <Process content={businessContent.process} />
      <Gallery content={businessContent.gallery} />
      <Testimonials />
      <Contact content={businessContent.contact} />
    </div>
  );
};

export default BusinessPage;