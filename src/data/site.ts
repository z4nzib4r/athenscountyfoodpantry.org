// Central place for contact details, hours and links used across the site.
// Edit here and every page updates.

export const site = {
  name: 'Athens County Food Pantry',
  shortName: 'ACFP',
  url: 'https://athenscountyfoodpantry.org',
  mission: 'Helping our neighbors with food and support.',
  description:
    'Since 1980, the all-volunteer Athens County Food Pantry has helped families in Athens and Southeast Ohio with food and support.',

  // Set `text` to an empty string to hide the banner.
  announcement: {
    text: "Third Saturdays at the Pantry! We're open Nov 21, 10am – 3pm.",
    href: '/events',
  },

  phone: '(740) 590-7051',
  phoneHref: 'tel:+17405907051',
  smsHref: 'sms:+17405907051',
  email: 'info@athenscountyfoodpantry.org',
  treasurerEmail: 'president@athenscountyfoodpantry.org',

  address: {
    line1: '13183A State Route 13',
    city: 'Millfield',
    state: 'OH',
    zip: '45761',
    note: 'Back of the Athens County Job & Family Services building, outside Chauncey. Look for signs from the north parking lot (nearest the dog shelter).',
  },
  mailing: {
    line1: '9 N. College St.',
    city: 'Athens',
    state: 'OH',
    zip: '45701',
  },
  mapsLink: 'https://maps.google.com/?cid=10459712068790653101',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6166.680337745728!2d-82.1180743!3d39.3938095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884873de5f7899f5%3A0x91285cb5692210ad!2sAthens%20County%20Food%20Pantry!5e0!3m2!1sen!2sus!4v1724950299068!5m2!1sen!2sus',

  hours: [
    { days: 'Monday – Friday', time: '10am – 3pm' },
    { days: 'First Saturday of the month', time: '1pm – 3pm' },
    { days: 'Other Saturdays', time: 'Closed' },
    { days: 'Sunday', time: 'Closed' },
  ],
  hoursNote: 'Closed on federal and state holidays.',

  donateUrl: 'https://www.paypal.com/donate/?hosted_button_id=UACR3HTD5FXTN',
  volunteerFormUrl: 'https://api.leadconnectorhq.com/widget/form/ZjhcgYdhndYAe0Zldj3G',
  newsletterUrl: 'http://eepurl.com/gk8Gob',
  guidestarUrl: 'https://app.candid.org/profile/7400802',
  guidestarSeal: 'https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/7400802/svg',
  reviewsUrl:
    'https://www.google.com/search?q=Athens+County+Food+Pantry,+13183+OH-13,+Millfield,+OH+45761&ludocid=10459712068790653101#lrd=0x884873de5f7899f5:0x91285cb5692210ad,1',
  calendarEmbed: 'https://embed.styledcalendar.com/#046s93WEw2fp00ckyPdd',

  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/athenscountyfoodpantry/' },
    { name: 'Instagram', href: 'https://www.instagram.com/athenscountyfoodpantry/' },
    { name: 'YouTube', href: 'https://www.youtube.com/@AthensCountyFoodPantryYouTube' },
  ],
} as const;

export const nav = [
  { label: 'Get Food', href: '/get-food' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Donors', href: '/donors' },
  { label: 'Contact', href: '/contact-us' },
];
