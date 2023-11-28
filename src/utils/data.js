import { drink, menu1, menu2, menu3, no1, testimonial1, testimonial2, testimonial3 } from "../assets";

import { ICON_FACEBOOK, ICON_INSTAGRAM, ICON_LINKEDIN, ICON_TWITTER } from "../utils/icons";


// NAV LINKS
export const navLink = [
      { title: 'Home', to: '/' },
      { title: 'Why Us?', to: '/#why-us' },
      { title: 'Reviews', to: '/#reviews' },
      { title: 'Our Menu', to: '/#menu' },
];

// rating
export const rating = [
      { no: '5,000', name: 'Customer' },
      { no: '8,000', name: 'Delivery' },
      { no: '1,000', name: 'Rating' },
];
// rating


// Menu

export const menu = [
      {
            img: menu1,
            name: 'Mini Salad Yummy ',
            price: '$ 2.99'
      },
      {
            img: menu2,
            name: 'Completed Salad',
            price: '$ 3.99'
      },
      {
            img: menu3,
            name: 'Salad Yummy Red',
            price: '$ 3.99'
      },
];

// Menu

// why Us

export const whyUs = [
      {
            img: drink,
            title: 'Own fruit orchard',
            text: 'Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad. setiap provinsi yang .'
      },
      {
            img: no1,
            title: '#1 Healthy Fruit Salad',
            text: 'The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance.'
      },
      {
            img: drink,
            title: '100 Top Brand',
            text: 'We are one of the best brands in the Food and Beverage sector in Indonesia.'
      },
];

// why Us

// testimonials

export const testimonials = [
      {
            img: testimonial1,
            name: 'Selena Gomz',
            age: '22',
            text: 'The salad is fresh!!! Don\'t ask about the sauce again, it\'s really delicious, it\'s going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.'
      },
      {
            img: testimonial2,
            name: 'David Ken',
            age: '24',
            text: 'The salad is fresh!!! Don\'t ask about the sauce again, it\'s really delicious, it\'s going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.'
      },
      {
            img: testimonial3,
            name: 'Jennifer Sina',
            age: '21',
            text: 'The salad is fresh!!! Don\'t ask about the sauce again, it\'s really delicious, it\'s going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.'
      },
];

// testimonials



// Footer


export const socials = [
      { icon: ICON_FACEBOOK, url: 'http://facebook.com' },
      { icon: ICON_TWITTER, url: 'facebook.com' },
      { icon: ICON_INSTAGRAM, url: 'instagram.com' },
      { icon: ICON_LINKEDIN, url: 'linkedin.com' },
];

