import { CalendarDays, Camera, Instagram } from 'lucide-react';
import type { ProcessStep } from '../../types/landing';

export const processSteps: ProcessStep[] = [
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
