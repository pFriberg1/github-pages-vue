import FishbotMd from './documents/projects/Fishbot.md';
import EmailsyncMd from './documents/projects/Emailsync.md';
import VuegitMd from './documents/projects/Vuegit.md';

export default {
  navbar: [
    {
      name: 'Home',
      uri: '/'
    },
    {
      name: 'Projects',
      uri: '/projects'
    },
    {
      name: 'About',
      uri: '/about'
    }
  ],
  projects: {
    'fishing_bot': {
      'title': 'Fishing bot',
      'description': 'Simple pixel bot written in C#, using wpf for the ui for learning purposes',
      'html': FishbotMd
    },
    'email_sync': {
      'title': 'EmailSync',
      'description': 'Scan emails and add email bookings to google calendar',
      'html': EmailsyncMd
    },
    'vue_github_pages': {
      'title': 'This',
      'description': 'Creating an app in vue and publishing to github-pages',
      'html': VuegitMd
    }
  }
};
