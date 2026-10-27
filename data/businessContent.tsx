import { Camera, TrendingUp, User, Clock, Layout, Layers, HelpCircle } from 'lucide-react';
import type {
  AboutContent,
  ContactContent,
  GalleryContent,
  HeroContent,
  PainPointsContent,
  ProcessContent,
} from '../types/content';

interface BusinessContent {
  hero: HeroContent;
  painPoints: PainPointsContent;
  about: AboutContent;
  process: ProcessContent;
  gallery: GalleryContent;
  contact: ContactContent;
}

export const businessContent: BusinessContent = {
  hero: {
    title: <>מוצר מעולה או שירות מצוין <br /> <span className="text-transparent bg-clip-text bg-gradient-to-l from-stone-600 to-stone-900">הם רק ההתחלה.</span></>,
    description: "כדי להפוך למותג מוביל בעידן שבו אנשים מתחברים לאנשים – אתם צריכים שיראו אתכם באמת. לא עוד 'טיפים' שחוקים או פוסטים מזדמנים. אתם צריכים נוכחות דיגיטלית שמשלבת בין המקצועיות שלכם לקול הייחודי שלכם.",
    primaryBtn: "בואו נדבר תכלס",
    secondaryBtn: "הכירו אותי",
  },
  painPoints: {
    title: "בואו נודה על האמת",
    description: <>
      האינסטגרם והרשתות החברתיות הם חלון הראווה של העסק שלכם.
      <br className="hidden md:block" />
      בלי נוכחות אותנטית שמבליטה את מה שמיוחד בכם –
      <br className="hidden md:block" />
      הלקוחות רואים אתכם כמו המתחרים שלכם!!
    </>,
    subtitle: "אתם מבינים שאתם חייבים להיות שם, אבל איך?!",
    points: [
      { icon: <Clock size={40} />, text: "אין לכם זמן לצלם תוך כדי עבודה?" },
      { icon: <Layout size={40} />, text: "מרגישים שפוסטים מעוצבים מדי לא מייצגים את מי שאתם באמת?" },
      { icon: <Layers size={40} />, text: "הלקוחות לא רואים את הערך המיוחד שאתם נותנים?" },
      { icon: <HelpCircle size={40} />, text: "איך הופכים את כל העשייה הזו לתוכן שמוכר בלי להרגיש מוזר או 'מכירתי' מדי?" }
    ]
  },
  about: {
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
  },
  process: {
    foundationsTitle: "בונים מותג, לא רק פיד.",
    foundationsDesc: "בניתי עבורכם מעטפת שתתאים בדיוק לקצב ולצרכים של העסק שלכם. המטרה משותפת- שיראו אתכם.",
    foundations: [
      {
        title: "ויזואליה של עסק",
        desc: "לא סתם 'תיעוד', אלא בבידול ותסריט שמייחד אתכם.",
        icon: <Camera size={32} />,
        color: "bg-stone-50"
      },
      {
        title: "אסטרטגיה שמוכרת",
        desc: "אנחנו לא רודפים אחרי טרנדים, אלא בונים שפה שיווקית שמשדרת סמכות ומביאה לקוחות.",
        icon: <TrendingUp size={32} />,
        color: "bg-white"
      },
      {
        title: "האדם שבמרכז",
        subtitle: "(Personal Branding)",
        desc: "אנשים קונים מאנשים. אני אעזור לכם להרגיש בנוח מול המצלמה (כן, זה אפשרי!) ולהביא את האישיות הכובשת שלכם לקדמת הבמה.",
        icon: <User size={32} />,
        color: "bg-stone-50"
      }
    ],
    tracksTitle: "בחרו את המסלול שלכם",
    tracksDesc: "ארבע דרכים להפוך עסק לנוכחות דיגיטלית בולטת:",
    tracks: [
      {
        title: "הבוסט הויזואלי",
        target: "לבעלי עסקים שמנהלים לבד, אבל חייבים חומרים ברמה של מגזין.",
        features: ["יום צילום מדויק לעסק שלכם: בימוי והעמדה במשרד, בסטודיו או עם הלקוחות.", "תוצרים ערוכים: בנק סרטונים (Reels) ותמונות אווירה מוכנים לשימוש מיידי."],
        buttonText: "תאמי לי יום צילום",
        isPrimary: false
      },
      {
        title: "פיצוח ואסטרטגיה",
        target: "לבעלי עסקים שרוצים להתקדם בדיגיטל לבד, אבל צריכים תוכנית עבודה.",
        features: ["פיצוח ואסטרטגיה: פגישת אפיון הבידול הייחודי שלכם ובניית גאנט תוכן.", "יום צילום ותוכן: אספקת בנק סרטונים ותמונות שתואמים לגאנט.", "ניהול עצמאי: אתם מקבלים את התוכנית, השאר תלוי בכם!"],
        buttonText: "אני רוצה אסטרטגיה",
        isPrimary: true
      },
      {
        title: "ניהול סושיאל מלא",
        target: "לבעלי עסקים שרוצים ראש שקט ומותג שמנוהל מא' ועד ת' בצורה מקצועית.",
        features: ["כל מה שיש במסלול הויזואלי +", "ניהול שוטף: בניית גאנט, כתיבת קאפשן (Text), העלאת פוסטים וניהול הסטורי.", "נוכחות עקבית: אני דואגת שהעמוד יהיה פעיל, חי וממיר."],
        buttonText: "קחי את המושכות",
        isPrimary: false
      },
      {
        title: "תיעוד אירועים והשקות",
        target: "לחברות וארגונים שרוצים להפוך אירוע חד-פעמי לנכס שיווקי מתמשך.",
        features: ["מרימים אירוע עסקי? השקה? סדנה?", "תיעוד האווירה, סרטון תדמית, האנרגיות והרגעים הקטנים.", "התוצאה: מזכרת ויזואלית עוצמתית שמשווקת כחומר שיווקי מעולה לאירוע הבא."],
        buttonText: "בואו נדבר על האירוע",
        isPrimary: false
      }
    ]
  },
  gallery: {
    title: "קצת מהקסם שקורה בשטח",
    description: <>
      לא משנה אם אתם בעלי עסקים, מעצבים או אדריכלים – איכות צילום ודיוק במסר הם שפה בינלאומית.
      <br />
      הנה הצצה לפרויקטים ולרגעים שתפסתי בעדשה.
    </>,
    // כאן שמים סרטונים שונים שמתאימים לבעלי עסקים!
    items: [
      { type: 'video', url: "/assets/business-intro.mp4", poster: "/assets/biz-cover.jpg" },
      { type: 'instagram', url: "https://www.instagram.com/reel/DTnlLzJCB4F/?igsh=dzZqaDBsMHZ1aXFh" },
      { type: 'instagram', url: "https://www.instagram.com/reel/DTDg9SaiPBl/?igsh=MXFocDd3ejk2cXN4eQ==" },
    ]
  },
  contact: {
    title: "מוכנים להפסיק להתחבא מאחורי לוגו?",
    description: "ולהתחיל להראות את העוצמה שלכם? בואו נהפוך את העשייה היומיומית שלכם למגנט של לקוחות. שיחת התאמה לעסק שלכם:"
  }
};
