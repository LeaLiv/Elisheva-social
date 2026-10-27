import type { Testimonial } from '../../types/landing';

export const clientTestimonials: Testimonial[] = [
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
export const LONG_TESTIMONIAL_LENGTH = 300;

export const isLongTestimonial = (testimonial: Testimonial) =>
  testimonial.quote.length > LONG_TESTIMONIAL_LENGTH;

export const displayedTestimonials: Testimonial[] = [
  ...clientTestimonials.filter(isLongTestimonial),
  ...clientTestimonials.filter((t) => !isLongTestimonial(t)),
];
