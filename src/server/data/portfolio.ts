// tslint:disable max-line-length

// TODO: group petrol flyers
// TODO: group EXBC promo flyers
// TODO: group up EXBC website and logo
// TOOD: possibly group up bump n grind flyers

const DATA_URL = process.env.DATA_URL || '//d2ltmid28ikt18.cloudfront.net';

const PortfolioList: RawPortfolio[] = [
  {
    title: 'Mastering React Native',
    description: `
      <blockquote>
        <p>Leverage frontend development skills to build impressive iOS and Android applications with React Native.</p>
      </blockquote>
      <p>I coauthored <i>Mastering React Native</i> with my co-instructor from General Assembly, Jacob Friedmann. When asked by Packt to write this book,
      I had zero experience as a professional writer but was excited to share my optimism for React Native with the developer community.
      I, like many developers, come from a web/JavaScript background. I&rsquo;ve worked with other &ldquo;JS to Native&rdquo; frameworks
      but always found myself disappointed with the result. React Native offers something different: write your UI using the familiar,
      declarative syntax of JSX and React but still achieve near-native app performance.
      </p>
    `,
    meta: {
      stackDesign: false,
      websiteUrl:
        'https://www.amazon.com/Mastering-React-Native-Eric-Masiello/dp/1785885782/ref=sr_1_1_sspa?ie=UTF8&qid=1519501994&sr=8-1-spons&keywords=mastering+react+native&psc=1',
      isSVG: false,
      showTitle: false,
      highlightColor: '#3B5588',
      thumb: {
        row: 'span 2',
        column: 'span 2',
      },
    },
    category: ['publications'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/master-react-native-front-original.png`,
        largeUrl: `${DATA_URL}/master-react-native-front-700px.png`,
        mediumUrl: `${DATA_URL}/master-react-native-front-450px.png`,
        thumbUrl: `${DATA_URL}/master-react-native-front-200px.png`,
        title: 'Mastering React Native - front cover',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/master-react-native-back-original.png`,
        largeUrl: `${DATA_URL}/master-react-native-back-700px.png`,
        mediumUrl: `${DATA_URL}/master-react-native-back-450px.png`,
        thumbUrl: `${DATA_URL}/master-react-native-back-200px.png`,
        title: 'Mastering React Native - back cover',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/master-react-native-print-marks-original.png`,
        largeUrl: `${DATA_URL}/master-react-native-print-marks-700px.png`,
        mediumUrl: `${DATA_URL}/master-react-native-print-marks-450px.png`,
        thumbUrl: `${DATA_URL}/master-react-native-print-marks-200px.png`,
        title: 'Mastering React Native - front and back cover with crop marks',
        description: '',
        priority: 0,
        meta: {
          usage: ['hero'],
          backgroundStyles: {
            size: '20%',
          },
        },
      },
    ],
  },
  {
    title: 'Stencil',
    description: `<p>Stencil was built to serve as component library for customer facing pages within Vistaprint Digital.
    Namely, it services our product pages by exposing commonly used UI assets prebaked, reusable, React components.
    Stencil was built in close collaboration with the design team within Vistaprint Digital and its usage has been widely adopted.</p>
    <p>While building Stencil I served as UI architect and primary contributor. My experience with building component libraries
    informed much of the CSS design. We follow BEM with a strong emphasis on shallow selectors. This design is critical for scaling CSS.
    We encapsulated each of these UI components into React components that can be easily imported and customized by other developers.
    </p>
    `,
    meta: {
      stackDesign: false,
      websiteUrl: 'https://websdev.github.io/stencil/',
      isSVG: false,
      showTitle: false,
      highlightColor: 'rgba(60, 61, 66, 0.7)',
      thumb: {
        row: 'span 3',
        column: 'span 3',
      },
    },
    category: ['development'],
    tags: ['Component Library', 'React', 'SCSS'],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/stencil/stencil-splash-original.png`,
        largeUrl: `${DATA_URL}/stencil/stencil-splash-700px.png`,
        mediumUrl: `${DATA_URL}/stencil/stencil-splash-450px.png`,
        thumbUrl: `${DATA_URL}/stencil/stencil-splash-200px.png`,
        title: 'Stencil Splash Screen and Logo',
        description: '',
        priority: 1,
        meta: {
          usage: ['hero'],
        },
      },
      {
        originalUrl: `${DATA_URL}/stencil/stencil-buttons-original.png`,
        largeUrl: `${DATA_URL}/stencil/stencil-buttons-700px.png`,
        mediumUrl: `${DATA_URL}/stencil/stencil-buttons-450px.png`,
        thumbUrl: `${DATA_URL}/stencil/stencil-buttons-200px.png`,
        title: 'Stencil Button Documentation',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/stencil/stencil-colors-original.png`,
        largeUrl: `${DATA_URL}/stencil/stencil-colors-700px.png`,
        mediumUrl: `${DATA_URL}/stencil/stencil-colors-450px.png`,
        thumbUrl: `${DATA_URL}/stencil/stencil-colors-200px.png`,
        title: 'Stencil Color Palette Documentation',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/stencil/stencil-home-original.png`,
        largeUrl: `${DATA_URL}/stencil/stencil-home-700px.png`,
        mediumUrl: `${DATA_URL}/stencil/stencil-home-450px.png`,
        thumbUrl: `${DATA_URL}/stencil/stencil-home-200px.png`,
        title: 'Stencil Documentation Home Page',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/stencil/stencil-media-cards-original.png`,
        largeUrl: `${DATA_URL}/stencil/stencil-media-cards-700px.png`,
        mediumUrl: `${DATA_URL}/stencil/stencil-media-cards-450px.png`,
        thumbUrl: `${DATA_URL}/stencil/stencil-media-cards-200px.png`,
        title: 'Stencil Media Cards Documentation',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/stencil/stencil-package-cards-original.png`,
        largeUrl: `${DATA_URL}/stencil/stencil-package-cards-700px.png`,
        mediumUrl: `${DATA_URL}/stencil/stencil-package-cards-450px.png`,
        thumbUrl: `${DATA_URL}/stencil/stencil-package-cards-200px.png`,
        title: 'Stencil Package Cards Documentation',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Expansion Broadcast at Bump N Grind',
    description: '',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      highlightColor: 'rgba(142, 131, 232, 0.8)',
      thumb: {
        row: 'span 2',
        column: 'span 2',
      },
    },
    category: ['flyers'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/exbc_live_promo_2015-10-23-original.png`,
        largeUrl: `${DATA_URL}/exbc_live_promo_2015-10-23-700px.png`,
        mediumUrl: `${DATA_URL}/exbc_live_promo_2015-10-23-450px.png`,
        thumbUrl: `${DATA_URL}/exbc_live_promo_2015-10-23-200px.png`,
        title: 'EXBC at BNG Harry R4NS0M web promo',
        description: '',
        priority: 1,
        meta: {
          usage: ['hero', 'gallery'],
        },
      },
      {
        originalUrl: `${DATA_URL}/exbc_live_promo_2015-06-26-original.png`,
        largeUrl: `${DATA_URL}/exbc_live_promo_2015-06-26-700px.png`,
        mediumUrl: `${DATA_URL}/exbc_live_promo_2015-06-26-450px.png`,
        thumbUrl: `${DATA_URL}/exbc_live_promo_2015-06-26-200px.png`,
        title: 'EXBC @ BNG (Posers) web promo',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Anarchostar',
    description: 'Web site for electronic music label Anarchostar',
    meta: {
      stackDesign: false,
      websiteUrl: 'http://projects.synbydesign.com/anarchostar/',
      isSVG: false,
      highlightColor: 'rgba(231, 26, 33, 0.8)',
      thumb: {
        row: 'span 4',
        column: 'span 2',
      },
    },
    category: ['web'],
    tags: [
      'HTML5 Audio',
      'Mobile/Responsive Design',
      'Parallax',
      'Wordpress Custom Theme',
      'Wordpress Plugin',
    ],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/anarchostar/anarchostar-original.jpg`,
        largeUrl: `${DATA_URL}/anarchostar/anarchostar-700px.jpg`,
        mediumUrl: `${DATA_URL}/anarchostar/anarchostar-450px.jpg`,
        thumbUrl: `${DATA_URL}/anarchostar/anarchostar-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Sonic Butter flyers',
    description: '',
    meta: {
      stackDesign: true,
      websiteUrl: '',
      isSVG: false,
      highlightColor: 'rgba(26, 189, 205, 0.8)',
      thumb: {
        row: 'span 2',
        column: 'span 2',
      },
    },
    category: ['flyers'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/Just4Heads-color-original.png`,
        largeUrl: `${DATA_URL}/Just4Heads-color-700px.png`,
        mediumUrl: `${DATA_URL}/Just4Heads-color-450px.png`,
        thumbUrl: `${DATA_URL}/Just4Heads-color-200px.png`,
        title: 'Just 4 Heads flyer',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/Just4Heads-color-bg-original.png`,
        largeUrl: `${DATA_URL}/Just4Heads-color-bg-700px.png`,
        mediumUrl: `${DATA_URL}/Just4Heads-color-bg-450px.png`,
        thumbUrl: `${DATA_URL}/Just4Heads-color-bg-200px.png`,
        title: 'Just 4 Heads flyer',
        description: '',
        priority: 0,
        meta: {
          usage: ['background'],
          backgroundStyles: {
            filter: 'blur(1px) grayscale(20%) opacity(0.7)',
          },
        },
      },
      {
        originalUrl: `${DATA_URL}/deep-focus-sonic-butter-takeover-original.jpg`,
        largeUrl: `${DATA_URL}/deep-focus-sonic-butter-takeover-700px.jpg`,
        mediumUrl: `${DATA_URL}/deep-focus-sonic-butter-takeover-450px.jpg`,
        thumbUrl: `${DATA_URL}/deep-focus-sonic-butter-takeover-200px.jpg`,
        title: 'Deep Foc.us Takeover at Sonic Butter flyer',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/exbc-sonic-butter-takeover-original.jpg`,
        largeUrl: `${DATA_URL}/exbc-sonic-butter-takeover-700px.jpg`,
        mediumUrl: `${DATA_URL}/exbc-sonic-butter-takeover-450px.jpg`,
        thumbUrl: `${DATA_URL}/exbc-sonic-butter-takeover-200px.jpg`,
        title: 'EXBC Takeover at Sonic Butter flyer',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Petrol flyers',
    description: '',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        row: 'span 2',
        column: 'span 2',
      },
      highlightColor: '#EA9190',
    },
    category: ['flyers'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/petrol-distal-original.jpg`,
        largeUrl: `${DATA_URL}/petrol-distal-700px.jpg`,
        mediumUrl: `${DATA_URL}/petrol-distal-450px.jpg`,
        thumbUrl: `${DATA_URL}/petrol-distal-200px.jpg`,
        title: 'Petrol Distal flyer',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/petrol-vivek-original.jpg`,
        largeUrl: `${DATA_URL}/petrol-vivek-700px.jpg`,
        mediumUrl: `${DATA_URL}/petrol-vivek-450px.jpg`,
        thumbUrl: `${DATA_URL}/petrol-vivek-200px.jpg`,
        title: 'Petrol V.I.V.I.K flyer',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/petrol-gothtrad-original.jpg`,
        largeUrl: `${DATA_URL}/petrol-gothtrad-700px.jpg`,
        mediumUrl: `${DATA_URL}/petrol-gothtrad-450px.jpg`,
        thumbUrl: `${DATA_URL}/petrol-gothtrad-200px.jpg`,
        title: 'Petrol Goth-Trad flyer',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/petrol-general-flier-original.jpg`,
        largeUrl: `${DATA_URL}/petrol-general-flier-700px.jpg`,
        mediumUrl: `${DATA_URL}/petrol-general-flier-450px.jpg`,
        thumbUrl: `${DATA_URL}/petrol-general-flier-200px.jpg`,
        title: 'Petrol General flyer',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/petrol-original.jpg`,
        largeUrl: `${DATA_URL}/petrol-700px.jpg`,
        mediumUrl: `${DATA_URL}/petrol-450px.jpg`,
        thumbUrl: `${DATA_URL}/petrol-200px.jpg`,
        title: 'Petrol flyer',
        description: '',
        priority: 0,
        meta: {
          usage: ['hero'],
        },
      },
    ],
  },
  {
    title: 'RMR Software Solutions',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: true,
    },
    category: ['logos'],
    tags: [],
    svgSource: `
      <svg version="1.1" id="RMR_Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="118.006px" height="118.006px" viewBox="0 0 118.006 118.006" enable-background="new 0 0 118.006 118.006" xml:space="preserve">
        <g id="RMR">
          <circle id="Outter_Border_7_" fill="none" stroke="" stroke-width="0.5" stroke-miterlimit="10" cx="59.003" cy="59.004" r="59.003"></circle>
          <circle id="Dark_Circle" fill="" cx="59.003" cy="59.004" r="57.8"></circle>
          <circle id="Inner_Circle" fill="#FFFFFF" cx="59.003" cy="59.004" r="52.736"></circle>
          <circle id="Dots" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="0.1,12.8" cx="59.003" cy="59.004" r="55.234"></circle>
          <circle id="Inner_Border_7_" fill="none" stroke="" stroke-width="0.5" stroke-miterlimit="10" cx="59.003" cy="59.004" r="51.569"></circle>
          <g>
            <path fill="" d="M35.447,79.058c0-0.13,0-0.29-0.04-0.419c-0.05-0.121-0.13-0.221-0.29-0.221c-0.13,0-0.21,0.1-0.25,0.221\r\n\t\t\tc-0.05,0.119-0.06,0.289-0.06,0.419c0,0.17,0.09,0.351,0.22,0.51c0.12,0.16,0.28,0.319,0.439,0.47c0.21,0.21,0.46,0.449,0.63,0.72\r\n\t\t\tc0.17,0.28,0.3,0.59,0.3,0.949c0,0.351-0.08,0.72-0.28,0.999c-0.21,0.291-0.53,0.5-1.009,0.5c-0.61,0-0.97-0.279-1.169-0.619\r\n\t\t\tc-0.2-0.34-0.24-0.76-0.24-1.05h0.94c0,0.149,0.01,0.36,0.08,0.521c0.07,0.17,0.18,0.309,0.39,0.309c0.29,0,0.35-0.34,0.35-0.659\r\n\t\t\tc0-0.329-0.32-0.659-0.63-0.97c-0.24-0.229-0.47-0.439-0.649-0.709s-0.31-0.57-0.31-0.97c0-0.319,0.06-0.689,0.25-0.979\r\n\t\t\tc0.19-0.279,0.5-0.49,0.979-0.5c0.59-0.01,0.919,0.211,1.089,0.5c0.17,0.29,0.2,0.67,0.2,0.979H35.447z"></path>
            <path fill="" d="M39.497,81.797c-0.03,0.529-0.19,0.898-0.54,1.188c-0.18,0.149-0.43,0.22-0.76,0.22\r\n\t\t\tc-0.649,0-0.969-0.359-1.129-0.719c-0.09-0.211-0.15-0.45-0.16-0.721v-2.748c0.03-0.529,0.189-0.92,0.54-1.219\r\n\t\t\tc0.17-0.15,0.42-0.221,0.75-0.221c0.649,0,0.979,0.36,1.139,0.71c0.09,0.21,0.15,0.44,0.16,0.7V81.797z M38.547,79.018\r\n\t\t\tc0.01-0.209-0.03-0.359-0.13-0.479c-0.05-0.05-0.13-0.08-0.22-0.08c-0.19,0-0.27,0.13-0.31,0.28c-0.03,0.08-0.04,0.17-0.03,0.279\r\n\t\t\tv2.748c-0.01,0.211,0.04,0.36,0.13,0.471c0.05,0.05,0.12,0.08,0.21,0.08c0.19,0,0.28-0.121,0.32-0.271\r\n\t\t\tc0.03-0.079,0.04-0.17,0.03-0.28V79.018z"></path>
            <path fill="" d="M40.369,83.125v-4.557h-0.51v-0.91h0.51v-0.149c0-0.28,0.01-0.729,0.15-1.1\r\n\t\t\tc0.14-0.37,0.419-0.669,1.009-0.669c0.16,0,0.27,0.01,0.35,0.039l0.12,0.03v0.87c-0.03-0.011-0.06-0.011-0.09-0.021\r\n\t\t\tc-0.07-0.011-0.14-0.021-0.21-0.021c-0.17,0-0.25,0.15-0.29,0.34c-0.02,0.1-0.03,0.2-0.03,0.301c0,0.1,0,0.18,0,0.239v0.14h0.51\r\n\t\t\tv0.91h-0.51v4.557H40.369z"></path>
            <path fill="" d="M43.698,76.309v1.35h0.689v0.91h-0.689v2.719c0,0.17,0,0.389,0.04,0.568c0.04,0.181,0.12,0.33,0.28,0.33\r\n\t\t\tc0.08,0,0.18-0.01,0.25-0.02c0.04-0.01,0.08-0.01,0.12-0.02v0.988c-0.05,0.011-0.1,0.031-0.15,0.041\r\n\t\t\tc-0.1,0.02-0.23,0.029-0.39,0.029c-0.59,0-0.87-0.299-1.009-0.68c-0.14-0.379-0.15-0.84-0.15-1.158v-2.799h-0.51v-0.91h0.51v-1.35\r\n\t\t\tH43.698z"></path>
            <path fill="" d="M47.197,83.125l-0.39-2.607l-0.05-0.311h-0.04l-0.05,0.311l-0.39,2.607h-0.839l-0.81-5.467h0.919\r\n\t\t\tl0.32,2.859l0.04,0.309h0.06l0.05-0.309l0.42-2.859h0.6l0.419,2.859l0.05,0.309h0.06l0.04-0.309l0.32-2.859h0.92l-0.81,5.467\r\n\t\t\tH47.197z"></path>
            <path fill="" d="M50.807,78.958c0-0.091,0-0.229-0.03-0.33c-0.04-0.101-0.12-0.17-0.25-0.17c-0.17,0-0.24,0.13-0.27,0.29\r\n\t\t\tc-0.01,0.08-0.02,0.17-0.02,0.26s0,0.18,0,0.26h-1.01v-0.23c0-0.398,0.15-0.759,0.39-1.029c0.24-0.27,0.58-0.43,0.969-0.43\r\n\t\t\tc0.33,0,0.63,0.131,0.859,0.35c0.23,0.221,0.37,0.53,0.37,0.891v3.357c0,0.49,0.03,0.71,0.07,0.949h-0.989\r\n\t\t\tc-0.09-0.109-0.09-0.369-0.09-0.439h-0.07c-0.05,0.09-0.14,0.221-0.28,0.33c-0.14,0.109-0.33,0.189-0.53,0.189\r\n\t\t\tc-0.13,0-0.34-0.05-0.5-0.25c-0.17-0.189-0.31-0.529-0.31-1.1c0-0.609,0.18-1.049,0.42-1.349s0.54-0.489,0.79-0.62\r\n\t\t\tc0.25-0.129,0.44-0.219,0.479-0.329V78.958z M50.807,80.486c-0.489,0.211-0.699,0.7-0.699,1.22c0,0.07,0.01,0.19,0.05,0.3\r\n\t\t\tc0.04,0.12,0.11,0.21,0.23,0.21c0.23,0,0.419-0.14,0.419-0.329V80.486z"></path>
            <path fill="" d="M54.497,78.697c-0.09-0.029-0.189-0.039-0.28-0.039c-0.16,0-0.35,0.02-0.51,0.17\r\n\t\t\tc-0.189,0.16-0.22,0.33-0.22,0.5v3.797h-1.009v-5.467h1.009v0.609c0.01-0.069,0.08-0.239,0.24-0.399\r\n\t\t\tc0.16-0.149,0.4-0.29,0.77-0.29V78.697z"></path>
            <path fill="" d="M57.427,81.166v0.631c-0.03,0.529-0.19,0.898-0.549,1.188c-0.18,0.149-0.43,0.22-0.76,0.22\r\n\t\t\tc-0.65,0-0.979-0.359-1.14-0.719c-0.09-0.211-0.15-0.45-0.16-0.721v-2.748c0.03-0.529,0.2-0.92,0.56-1.219\r\n\t\t\tc0.17-0.15,0.42-0.221,0.75-0.221c0.65,0,0.979,0.36,1.14,0.71c0.09,0.21,0.15,0.44,0.16,0.7v1.588h-1.669v1.189\r\n\t\t\tc0.01,0.211,0.07,0.36,0.16,0.471c0.05,0.05,0.12,0.08,0.209,0.08c0.19,0,0.28-0.121,0.32-0.271c0.03-0.079,0.04-0.17,0.04-0.28\r\n\t\t\tv-0.6H57.427z M55.758,79.787h0.729v-0.77c0-0.209-0.04-0.359-0.14-0.479c-0.05-0.05-0.13-0.08-0.22-0.08\r\n\t\t\tc-0.189,0-0.27,0.13-0.32,0.28c-0.03,0.08-0.04,0.17-0.05,0.279V79.787z"></path>
            <path fill="" d="M61.188,79.058c0-0.13,0-0.29-0.04-0.419c-0.05-0.121-0.13-0.221-0.29-0.221c-0.13,0-0.21,0.1-0.25,0.221\r\n\t\t\tc-0.05,0.119-0.06,0.289-0.06,0.419c0,0.17,0.09,0.351,0.22,0.51c0.119,0.16,0.279,0.319,0.439,0.47\r\n\t\t\tc0.21,0.21,0.46,0.449,0.63,0.72c0.17,0.28,0.3,0.59,0.3,0.949c0,0.351-0.08,0.72-0.279,0.999c-0.211,0.291-0.53,0.5-1.01,0.5\r\n\t\t\tc-0.61,0-0.97-0.279-1.169-0.619c-0.2-0.34-0.24-0.76-0.24-1.05h0.939c0,0.149,0.01,0.36,0.08,0.521\r\n\t\t\tc0.07,0.17,0.18,0.309,0.39,0.309c0.289,0,0.35-0.34,0.35-0.659c0-0.329-0.32-0.659-0.63-0.97c-0.24-0.229-0.47-0.439-0.649-0.709\r\n\t\t\tc-0.18-0.27-0.31-0.57-0.31-0.97c0-0.319,0.06-0.689,0.25-0.979c0.19-0.279,0.5-0.49,0.979-0.5c0.59-0.01,0.919,0.211,1.089,0.5\r\n\t\t\tc0.17,0.29,0.2,0.67,0.2,0.979H61.188z"></path>
            <path fill="" d="M65.236,81.797c-0.029,0.529-0.189,0.898-0.539,1.188c-0.18,0.149-0.43,0.22-0.76,0.22\r\n\t\t\tc-0.649,0-0.969-0.359-1.129-0.719c-0.09-0.211-0.15-0.45-0.16-0.721v-2.748c0.029-0.529,0.189-0.92,0.539-1.219\r\n\t\t\tc0.17-0.15,0.42-0.221,0.75-0.221c0.649,0,0.979,0.36,1.139,0.71c0.091,0.21,0.15,0.44,0.16,0.7V81.797z M64.287,79.018\r\n\t\t\tc0.01-0.209-0.029-0.359-0.13-0.479c-0.05-0.05-0.13-0.08-0.22-0.08c-0.189,0-0.27,0.13-0.311,0.28\r\n\t\t\tc-0.029,0.08-0.039,0.17-0.029,0.279v2.748c-0.01,0.211,0.04,0.36,0.13,0.471c0.05,0.05,0.12,0.08,0.21,0.08\r\n\t\t\tc0.189,0,0.279-0.121,0.32-0.271c0.029-0.079,0.039-0.17,0.029-0.28V79.018z"></path>
            <path fill="" d="M65.928,83.125v-7.346h1.01v7.346H65.928z"></path>
            <path fill="" d="M69.297,77.658h1.01v5.467h-1.01v-0.459c-0.02,0.01-0.06,0.05-0.109,0.1c-0.12,0.12-0.26,0.26-0.439,0.359\r\n\t\t\tc-0.09,0.051-0.18,0.08-0.271,0.08c-0.27,0-0.46-0.16-0.579-0.369c-0.12-0.2-0.18-0.471-0.18-0.699v-4.479h1.009v4.328\r\n\t\t\tc0,0.209,0.12,0.24,0.239,0.24c0.111,0,0.17-0.061,0.24-0.131c0.03-0.029,0.061-0.08,0.09-0.129V77.658z"></path>
            <path fill="" d="M72.277,76.309v1.35h0.689v0.91h-0.689v2.719c0,0.17,0,0.389,0.04,0.568c0.04,0.181,0.12,0.33,0.28,0.33\r\n\t\t\tc0.08,0,0.18-0.01,0.25-0.02c0.039-0.01,0.079-0.01,0.119-0.02v0.988c-0.05,0.011-0.1,0.031-0.15,0.041\r\n\t\t\tc-0.1,0.02-0.229,0.029-0.389,0.029c-0.59,0-0.87-0.299-1.01-0.68c-0.141-0.379-0.15-0.84-0.15-1.158v-2.799h-0.51v-0.91h0.51\r\n\t\t\tv-1.35H72.277z"></path>
            <path fill="" d="M73.508,75.779h1.01v1.01h-1.01V75.779z M73.508,83.125v-5.467h1.01v5.467H73.508z"></path>
            <path fill="" d="M77.797,81.797c-0.029,0.529-0.189,0.898-0.539,1.188c-0.181,0.149-0.431,0.22-0.76,0.22\r\n\t\t\tc-0.65,0-0.97-0.359-1.13-0.719c-0.09-0.211-0.149-0.45-0.159-0.721v-2.748c0.029-0.529,0.189-0.92,0.539-1.219\r\n\t\t\tc0.17-0.15,0.42-0.221,0.75-0.221c0.648,0,0.979,0.36,1.139,0.71c0.09,0.21,0.15,0.44,0.16,0.7V81.797z M76.848,79.018\r\n\t\t\tc0.01-0.209-0.03-0.359-0.131-0.479c-0.049-0.05-0.129-0.08-0.219-0.08c-0.19,0-0.271,0.13-0.311,0.28\r\n\t\t\tc-0.029,0.08-0.039,0.17-0.029,0.279v2.748c-0.01,0.211,0.039,0.36,0.129,0.471c0.051,0.05,0.121,0.08,0.211,0.08\r\n\t\t\tc0.189,0,0.279-0.121,0.319-0.271c0.03-0.079,0.04-0.17,0.03-0.28V79.018z"></path>
            <path fill="" d="M79.498,83.125h-1.01v-5.467h1.01v0.46c0.02-0.01,0.06-0.05,0.119-0.11c0.11-0.109,0.26-0.26,0.439-0.359\r\n\t\t\tc0.091-0.05,0.17-0.07,0.261-0.07c0.27,0,0.46,0.16,0.579,0.36c0.12,0.21,0.18,0.479,0.18,0.71v4.477h-1.009v-4.327\r\n\t\t\tc0-0.21-0.12-0.239-0.239-0.239c-0.111,0-0.17,0.06-0.24,0.129c-0.03,0.041-0.061,0.08-0.09,0.131V83.125z"></path>
            <path fill="" d="M83.337,79.058c0-0.13,0-0.29-0.04-0.419c-0.05-0.121-0.129-0.221-0.289-0.221\r\n\t\t\tc-0.131,0-0.211,0.1-0.25,0.221c-0.051,0.119-0.061,0.289-0.061,0.419c0,0.17,0.09,0.351,0.221,0.51\r\n\t\t\tc0.119,0.16,0.279,0.319,0.439,0.47c0.209,0.21,0.459,0.449,0.629,0.72c0.17,0.28,0.301,0.59,0.301,0.949\r\n\t\t\tc0,0.351-0.08,0.72-0.28,0.999c-0.21,0.291-0.53,0.5-1.009,0.5c-0.61,0-0.971-0.279-1.17-0.619c-0.2-0.34-0.24-0.76-0.24-1.05\r\n\t\t\th0.939c0,0.149,0.01,0.36,0.08,0.521c0.07,0.17,0.18,0.309,0.391,0.309c0.289,0,0.35-0.34,0.35-0.659\r\n\t\t\tc0-0.329-0.32-0.659-0.631-0.97c-0.239-0.229-0.469-0.439-0.648-0.709s-0.311-0.57-0.311-0.97c0-0.319,0.061-0.689,0.25-0.979\r\n\t\t\tc0.189-0.279,0.5-0.49,0.979-0.5c0.59-0.01,0.919,0.211,1.089,0.5c0.17,0.29,0.201,0.67,0.201,0.979H83.337z"></path>
          </g>
          <path id="RMR_2_" fill="" d="M98.6,47.715c-1.199,0-2.379,0.395-3.54,1.186s-2.079,1.682-2.753,2.676\r\n\t\tc0-0.111,0.028-0.359,0.084-0.744c0.057-0.387,0.104-0.754,0.141-1.104s0.065-0.607,0.084-0.773c0.02-0.166-0.027-0.377-0.14-0.635\r\n\t\tc-0.112-0.256-0.244-0.385-0.394-0.385c-0.037,0-0.188,0.037-0.449,0.109c-4.308,0.957-7.322,1.508-9.045,1.654\r\n\t\tc-0.188,0.037-0.281,0.59-0.281,1.656c0,0.074,0.178,0.129,0.534,0.166c0.355,0.037,0.805,0.146,1.349,0.33\r\n\t\tc0.542,0.186,0.963,0.461,1.264,0.828c0.599,0.625,0.898,1.803,0.898,3.529v8.994c0,1.58-0.131,2.924-0.393,4.025\r\n\t\tc-0.076,0.258-0.572,0.525-1.489,0.801c-0.596,0.18-1.082,0.294-1.48,0.356c-0.354-0.062-0.823-0.177-1.431-0.356\r\n\t\tc-0.937-0.275-1.441-0.543-1.517-0.801c-0.263-1.064-0.394-2.721-0.394-4.965v-5.791c0-1.436-0.122-2.768-0.365-4\r\n\t\tc-0.244-1.232-0.637-2.373-1.18-3.42c-0.543-1.049-1.292-1.867-2.247-2.455s-2.106-0.883-3.455-0.883\r\n\t\tc-1.873,0-3.634,0.367-5.28,1.104c-1.648,0.734-3.016,1.654-4.102,2.758c-0.487-1.141-1.236-2.068-2.247-2.787\r\n\t\tc-1.011-0.717-2.229-1.074-3.651-1.074c-1.461,0-2.895,0.33-4.299,0.992s-2.556,1.434-3.455,2.316\r\n\t\tc-0.149,0.111-0.244,0.166-0.28,0.166c-0.075-0.035-0.112-0.129-0.112-0.275c0-0.295,0.074-0.957,0.225-1.986\r\n\t\tc0.037-0.146,0-0.35-0.112-0.607c-0.112-0.256-0.263-0.385-0.45-0.385c-0.111,0-0.205,0.008-0.28,0.027\r\n\t\tc-0.075,0.018-0.132,0.047-0.169,0.082c-4.27,0.957-7.266,1.508-8.988,1.654c-0.051,0.009-1.813,0.047-1.813-0.164\r\n\t\tc-1.011-1.215-2.548-1.82-4.606-1.82c-1.199,0-2.379,0.395-3.54,1.186s-2.079,1.682-2.753,2.676c0-0.111,0.028-0.359,0.084-0.744\r\n\t\tc0.057-0.387,0.104-0.754,0.141-1.104s0.065-0.607,0.084-0.773c0.02-0.166-0.027-0.377-0.14-0.635\r\n\t\tc-0.112-0.256-0.244-0.385-0.394-0.385c-0.037,0-0.188,0.037-0.449,0.109c-4.308,0.957-7.322,1.508-9.045,1.654\r\n\t\tc-0.188,0.037-0.281,0.59-0.281,1.656c0,0.074,0.178,0.129,0.534,0.166c0.355,0.037,0.805,0.146,1.349,0.33\r\n\t\tc0.542,0.186,0.963,0.461,1.264,0.828c0.599,0.625,0.898,1.803,0.898,3.529v8.994c0,1.58-0.131,2.924-0.393,4.025\r\n\t\tc-0.076,0.258-0.572,0.525-1.489,0.801c-0.918,0.275-1.601,0.414-2.05,0.414c-0.15,0-0.225,0.275-0.225,0.828\r\n\t\tc0,0.551,0.074,0.9,0.225,1.047c0.299-0.037,1.301-0.109,3.005-0.221c1.704-0.109,3.006-0.164,3.905-0.164\r\n\t\tc0.86,0,2.135,0.055,3.82,0.164c1.685,0.111,2.677,0.184,2.977,0.221c0.037-0.184,0.047-0.541,0.028-1.076\r\n\t\tc-0.02-0.531-0.085-0.799-0.196-0.799c-0.338,0-0.965-0.139-1.883-0.414s-1.414-0.543-1.488-0.801\r\n\t\tc-0.263-1.064-0.393-2.721-0.393-4.965v-6.895c0-1.25,0.326-2.455,0.982-3.613c0.654-1.16,1.563-1.738,2.725-1.738\r\n\t\tc0.824,0,1.629,0.367,2.416,1.104c0.786,0.736,1.517,1.104,2.191,1.104c1.263-0.001,3.045-0.97,3.895-2.61\r\n\t\tc0.068-0.134,0.307-0.269,0.84-0.093c0.374,0.037,0.833,0.146,1.377,0.33c0.542,0.186,0.963,0.461,1.264,0.828\r\n\t\tc0.599,0.625,0.898,1.803,0.898,3.529v8.994c0,1.58-0.131,2.924-0.393,4.025c-0.076,0.258-0.582,0.525-1.518,0.801\r\n\t\ts-1.61,0.414-2.021,0.414c-0.15,0-0.225,0.275-0.225,0.828c0,0.551,0.074,0.9,0.225,1.047c0.299-0.037,1.291-0.109,2.977-0.221\r\n\t\tc1.686-0.109,2.996-0.164,3.934-0.164c0.86,0,2.125,0.055,3.791,0.164c1.666,0.111,2.65,0.184,2.949,0.221\r\n\t\tc0.075-0.184,0.104-0.541,0.085-1.076c-0.02-0.531-0.104-0.799-0.253-0.799c-0.337,0-0.955-0.139-1.854-0.414\r\n\t\ts-1.387-0.543-1.461-0.801c-0.301-1.064-0.449-2.721-0.449-4.965v-9.488c0-0.771,0.468-1.471,1.404-2.096\r\n\t\tc0.936-0.625,1.967-0.938,3.09-0.938c1.686,0,2.958,0.643,3.82,1.93c0.861,1.289,1.292,3.365,1.292,6.234v5.297\r\n\t\tc0,1.58-0.132,2.924-0.394,4.025c-0.075,0.258-0.562,0.525-1.461,0.801c-0.898,0.275-1.572,0.414-2.021,0.414\r\n\t\tc-0.113,0-0.169,0.275-0.169,0.828c0,0.551,0.056,0.9,0.169,1.047c0.337-0.037,1.338-0.109,3.006-0.221\r\n\t\tc1.666-0.109,2.949-0.164,3.848-0.164c0.861,0,2.144,0.055,3.848,0.164c1.705,0.111,2.688,0.184,2.95,0.221\r\n\t\tc0.075-0.184,0.103-0.541,0.084-1.076c-0.019-0.531-0.084-0.799-0.196-0.799c-0.338,0-0.975-0.139-1.91-0.414\r\n\t\tc-0.937-0.275-1.442-0.543-1.518-0.801c-0.262-1.064-0.393-2.646-0.393-4.744v-5.848c0-1.471-0.057-2.611-0.168-3.42\r\n\t\tc-0.039-0.109-0.048-0.256-0.029-0.441c0.02-0.184,0.029-0.33,0.029-0.441c0.148-0.551,0.636-1.121,1.46-1.709\r\n\t\tc0.823-0.588,1.854-0.883,3.09-0.883c3.483,0,5.226,2.666,5.226,7.998v5.627c0,1.473-0.133,2.76-0.395,3.861\r\n\t\tc-0.074,0.258-0.561,0.525-1.46,0.801s-1.573,0.414-2.022,0.414c-0.112,0-0.168,0.275-0.168,0.828c0,0.551,0.056,0.9,0.168,1.047\r\n\t\tc0.337-0.037,1.338-0.109,3.006-0.221c1.666-0.109,2.949-0.164,3.848-0.164c0.861,0,2.145,0.055,3.849,0.164\r\n\t\tc0.694,0.045,1.263,0.084,1.718,0.117c0.002,0.003,0.033,0.006,0.074,0.009c0.086,0.008,0.229,0.013,0.351,0.017\r\n\t\tc0.147,0.004,0.257,0.007,0.164,0.004c0,0,0.665-0.006,0.67-0.023c0.476-0.034,1.075-0.074,1.816-0.123\r\n\t\tc1.704-0.109,3.006-0.164,3.905-0.164c0.86,0,2.135,0.055,3.82,0.164c1.685,0.111,2.677,0.184,2.977,0.221\r\n\t\tc0.037-0.184,0.047-0.541,0.028-1.076c-0.02-0.531-0.085-0.799-0.196-0.799c-0.338,0-0.965-0.139-1.883-0.414\r\n\t\ts-1.414-0.543-1.488-0.801c-0.263-1.064-0.393-2.721-0.393-4.965v-6.895c0-1.25,0.326-2.455,0.982-3.613\r\n\t\tc0.654-1.16,1.563-1.738,2.725-1.738c0.824,0,1.629,0.367,2.416,1.104c0.786,0.736,1.517,1.104,2.191,1.104\r\n\t\tc1.797,0,2.696-1.564,2.696-4.689C102.195,48.32,100.658,47.715,98.6,47.715z"></path>
          <g id="Decoration">
            <g>
              <path fill="" d="M57.801,34.752c-0.219-0.836-0.551-1.457-0.996-1.863c-0.766-0.797-1.762-1.195-2.988-1.195\r\n\t\t\t\tc-1.711,0-2.965,0.551-3.762,1.652c-0.32,0.562-0.48,1.027-0.48,1.395v0.07c0,0.289,0.023,0.492,0.07,0.609\r\n\t\t\t\tc0.078,0.359,0.312,0.711,0.703,1.055c0.484,0.391,1.043,0.586,1.676,0.586l0.633-0.07c0.469-0.109,0.824-0.246,1.066-0.41\r\n\t\t\t\tc0.461-0.312,0.691-0.699,0.691-1.16l-0.023-0.141v-0.012h-0.035v0.035c0,0.242-0.215,0.504-0.645,0.785\r\n\t\t\t\tc-0.656,0.297-1.289,0.445-1.898,0.445h-0.176c-0.164,0-0.383-0.035-0.656-0.105c-0.852-0.234-1.277-0.738-1.277-1.512\r\n\t\t\t\tc0-0.664,0.316-1.238,0.949-1.723c0.898-0.625,2.074-0.938,3.527-0.938h0.059c0.445,0,0.938,0.102,1.477,0.305\r\n\t\t\t\tc0.32,0.094,0.676,0.316,1.066,0.668c0.656,0.594,0.984,1.418,0.984,2.473c0,0.609-0.176,1.215-0.527,1.816\r\n\t\t\t\tc-0.148,0.305-0.48,0.672-0.996,1.102c-0.508,0.383-1.078,0.688-1.711,0.914c-1.219,0.352-2.266,0.527-3.141,0.527h-0.633\r\n\t\t\t\tc-1.555,0-3.555-0.309-6-0.926c-2.617-0.727-4.715-1.09-6.293-1.09c-1.328,0-2.418,0.297-3.27,0.891\r\n\t\t\t\tc-0.682,0.555-1.054,1.177-1.152,1.857c0.042-0.016,0.084-0.029,0.127-0.043c0.132-0.558,0.481-1.069,1.061-1.533\r\n\t\t\t\tc0.805-0.547,1.73-0.82,2.777-0.82c0.82,0,1.512,0.059,2.074,0.176c0.391,0,1.645,0.305,3.762,0.914\r\n\t\t\t\tc2.758,0.82,5.125,1.23,7.102,1.23c2.031,0,3.773-0.586,5.227-1.758c1.148-1.062,1.723-2.164,1.723-3.305V35.49\r\n\t\t\t\tC57.895,35.295,57.863,35.049,57.801,34.752z"></path>
            </g>
            <g>
              <path fill="" d="M61.78,34.752c0.219-0.836,0.551-1.457,0.996-1.863c0.766-0.797,1.762-1.195,2.988-1.195\r\n\t\t\t\tc1.711,0,2.965,0.551,3.762,1.652c0.32,0.562,0.48,1.027,0.48,1.395v0.07c0,0.289-0.023,0.492-0.07,0.609\r\n\t\t\t\tc-0.078,0.359-0.312,0.711-0.703,1.055c-0.484,0.391-1.043,0.586-1.676,0.586l-0.633-0.07c-0.469-0.109-0.824-0.246-1.066-0.41\r\n\t\t\t\tc-0.461-0.312-0.691-0.699-0.691-1.16l0.023-0.141v-0.012h0.035v0.035c0,0.242,0.215,0.504,0.645,0.785\r\n\t\t\t\tc0.656,0.297,1.289,0.445,1.898,0.445h0.176c0.164,0,0.383-0.035,0.656-0.105c0.852-0.234,1.277-0.738,1.277-1.512\r\n\t\t\t\tc0-0.664-0.316-1.238-0.949-1.723c-0.898-0.625-2.074-0.938-3.527-0.938h-0.059c-0.445,0-0.938,0.102-1.477,0.305\r\n\t\t\t\tc-0.32,0.094-0.676,0.316-1.066,0.668c-0.656,0.594-0.984,1.418-0.984,2.473c0,0.609,0.176,1.215,0.527,1.816\r\n\t\t\t\tc0.148,0.305,0.48,0.672,0.996,1.102c0.508,0.383,1.078,0.688,1.711,0.914c1.219,0.352,2.266,0.527,3.141,0.527h0.633\r\n\t\t\t\tc1.555,0,3.555-0.309,6-0.926c2.617-0.727,4.715-1.09,6.293-1.09c1.328,0,2.418,0.297,3.27,0.891\r\n\t\t\t\tc0.682,0.555,1.054,1.177,1.152,1.857c-0.042-0.016-0.084-0.029-0.127-0.043c-0.132-0.558-0.481-1.069-1.061-1.533\r\n\t\t\t\tc-0.805-0.547-1.73-0.82-2.777-0.82c-0.82,0-1.512,0.059-2.074,0.176c-0.391,0-1.645,0.305-3.762,0.914\r\n\t\t\t\tc-2.758,0.82-5.125,1.23-7.102,1.23c-2.031,0-3.773-0.586-5.227-1.758c-1.148-1.062-1.723-2.164-1.723-3.305V35.49\r\n\t\t\t\tC61.687,35.295,61.718,35.049,61.78,34.752z"></path>
            </g>
          </g>
        </g>
      </svg>`,
    imagePaths: [],
  },
  {
    title: 'Deinfamous sticker',
    description: 'Illustration and sticker for Deinfamous',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        position: '50% 50%',
      },
    },
    category: ['illustration'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/deinfamous-sticker-original.jpg`,
        largeUrl: `${DATA_URL}/deinfamous-sticker-700px.jpg`,
        mediumUrl: `${DATA_URL}/deinfamous-sticker-450px.jpg`,
        thumbUrl: `${DATA_URL}/deinfamous-sticker-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'EXBC vs. Dirtbox Radio flyer',
    description: 'EXBC vs. Dirtbox Radio flyer',
    meta: {
      stackDesign: true,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        row: 'span 2',
      },
    },
    category: ['flyers'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/exbc-vs-dirtbox-original.jpg`,
        largeUrl: `${DATA_URL}/exbc-vs-dirtbox-700px.jpg`,
        mediumUrl: `${DATA_URL}/exbc-vs-dirtbox-450px.jpg`,
        thumbUrl: `${DATA_URL}/exbc-vs-dirtbox-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Catherine Anne Design',
    description: 'cannedesign',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      detail: {
        grid: ['70%', '30%'],
      },
      thumb: {
        row: 'span 3',
      },
    },
    category: ['web'],
    tags: [
      'CSS/SCSS',
      'JavaScript',
      'jQuery',
      'Mobile/Responsive Design',
      'Wordpress Custom Theme',
    ],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/cannedesign-desktop-original.png`,
        largeUrl: `${DATA_URL}/cannedesign-desktop-700px.png`,
        mediumUrl: `${DATA_URL}/cannedesign-desktop-450px.png`,
        thumbUrl: `${DATA_URL}/cannedesign-desktop-200px.png`,
        title: '',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/cannedesign-mobile-original.png`,
        largeUrl: `${DATA_URL}/cannedesign-mobile-700px.png`,
        mediumUrl: `${DATA_URL}/cannedesign-mobile-450px.png`,
        thumbUrl: `${DATA_URL}/cannedesign-mobile-200px.png`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Expansion Barcast flyer',
    description: 'Expansion Barcast flyer',
    meta: {
      stackDesign: true,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        fit: 'contain',
        row: 'span 3',
        column: 'span 2',
      },
    },
    category: ['flyers'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/expansion-barcast-2012-06-22-original.jpg`,
        largeUrl: `${DATA_URL}/expansion-barcast-2012-06-22-700px.jpg`,
        mediumUrl: `${DATA_URL}/expansion-barcast-2012-06-22-450px.jpg`,
        thumbUrl: `${DATA_URL}/expansion-barcast-2012-06-22-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Expansion Broadcast',
    description: '',
    meta: {
      stackDesign: true,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        fit: 'contain',
        position: '50% 50%',
        row: 'span 2',
        column: 'span 2',
      },
    },
    category: ['flyers', 'web'],
    tags: [
      'Mobile/Responsive Design',
      'Wordpress Custom Theme',
      'Wordpress Plugin',
    ],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/exbc-promo-original.jpg`,
        largeUrl: `${DATA_URL}/exbc-promo-700px.jpg`,
        mediumUrl: `${DATA_URL}/exbc-promo-450px.jpg`,
        thumbUrl: `${DATA_URL}/exbc-promo-200px.jpg`,
        title: 'EXBC web promo',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/expansionbroadcast-original.jpg`,
        largeUrl: `${DATA_URL}/expansionbroadcast-700px.jpg`,
        mediumUrl: `${DATA_URL}/expansionbroadcast-450px.jpg`,
        thumbUrl: `${DATA_URL}/expansionbroadcast-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'IllEffect/Erictronica business cards',
    description: 'IllEffect/Erictronica business cards',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
    },
    category: ['business-cards'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/exbc-business-card-original.jpg`,
        largeUrl: `${DATA_URL}/exbc-business-card-700px.jpg`,
        mediumUrl: `${DATA_URL}/exbc-business-card-450px.jpg`,
        thumbUrl: `${DATA_URL}/exbc-business-card-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'EXBC logo',
    description: 'EXBC logo',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        position: '50% 50%',
      },
    },
    category: ['logos'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/exbc/exbc-logo-original.jpg`,
        largeUrl: `${DATA_URL}/exbc/exbc-logo-700px.jpg`,
        mediumUrl: `${DATA_URL}/exbc/exbc-logo-450px.jpg`,
        thumbUrl: `${DATA_URL}/exbc/exbc-logo-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/exbc/exbc-logo-sketch-original.jpg`,
        largeUrl: `${DATA_URL}/exbc/exbc-logo-sketch-700px.jpg`,
        mediumUrl: `${DATA_URL}/exbc/exbc-logo-sketch-450px.jpg`,
        thumbUrl: `${DATA_URL}/exbc/exbc-logo-sketch-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
        meta: {
          usage: ['background'],
          backgroundStyles: {
            backgroundPosition: '50% -374px',
          },
        },
      },
    ],
  },
  {
    title: 'Thnk DFRNT flyer',
    description: 'thnkdfrnt',
    meta: {
      stackDesign: true,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        column: 'span 2',
      },
    },
    category: ['flyers'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/thnkdfrnt-original.jpg`,
        largeUrl: `${DATA_URL}/thnkdfrnt-700px.jpg`,
        mediumUrl: `${DATA_URL}/thnkdfrnt-450px.jpg`,
        thumbUrl: `${DATA_URL}/thnkdfrnt-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/thnkdfrnt1-original.jpg`,
        largeUrl: `${DATA_URL}/thnkdfrnt1-700px.jpg`,
        mediumUrl: `${DATA_URL}/thnkdfrnt1-450px.jpg`,
        thumbUrl: `${DATA_URL}/thnkdfrnt1-200px.jpg`,
        title: '',
        description: '',
        priority: 1,
      },
    ],
  },
  {
    title: 'Chocolate Milk Logo',
    description: 'Chocolatemilk Logo',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
    },
    category: ['logos'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/chocolatemilk-original.jpg`,
        largeUrl: `${DATA_URL}/chocolatemilk-700px.jpg`,
        mediumUrl: `${DATA_URL}/chocolatemilk-450px.jpg`,
        thumbUrl: `${DATA_URL}/chocolatemilk-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Deep Foc.us',
    description: 'Deep Foc.us music blog.',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        column: 'span 2',
        row: 'span 2',
      },
    },
    category: ['web', 'design'],
    tags: [
      'CSS/SCSS',
      'HTML5',
      'UX Consulting',
      'Visual Design',
      'Wordpress Custom Theme',
      'Wordpress Plugin',
      'Design',
      'jQuery Mobile',
      'logo',
    ],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/deepfocus/deepfocus-home-original.jpg`,
        largeUrl: `${DATA_URL}/deepfocus/deepfocus-home-700px.jpg`,
        mediumUrl: `${DATA_URL}/deepfocus/deepfocus-home-450px.jpg`,
        thumbUrl: `${DATA_URL}/deepfocus/deepfocus-home-200px.jpg`,
        title: 'Deep Foc.us Desktop Design',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/deepfocus/deepfocus-iphone-original.jpg`,
        largeUrl: `${DATA_URL}/deepfocus/deepfocus-iphone-700px.jpg`,
        mediumUrl: `${DATA_URL}/deepfocus/deepfocus-iphone-450px.jpg`,
        thumbUrl: `${DATA_URL}/deepfocus/deepfocus-iphone-200px.jpg`,
        title: 'Deep Foc.us Mobile Design',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/deepfocus/deepfocus-logo-with-gradient-original.jpg`,
        largeUrl: `${DATA_URL}/deepfocus/deepfocus-logo-with-gradient-700px.jpg`,
        mediumUrl: `${DATA_URL}/deepfocus/deepfocus-logo-with-gradient-450px.jpg`,
        thumbUrl: `${DATA_URL}/deepfocus/deepfocus-logo-with-gradient-200px.jpg`,
        title: 'Deep Foc.us Logo Design with gradient backdrop',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/deepfocus/deepfocus-logo-original.png`,
        largeUrl: `${DATA_URL}/deepfocus/deepfocus-logo-700px.png`,
        mediumUrl: `${DATA_URL}/deepfocus/deepfocus-logo-450px.png`,
        thumbUrl: `${DATA_URL}/deepfocus/deepfocus-logo-200px.png`,
        title: 'Deep Foc.us Logo Design',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/deepfocus/deepfocus-gradient-original.jpg`,
        largeUrl: `${DATA_URL}/deepfocus/deepfocus-gradient-700px.jpg`,
        mediumUrl: `${DATA_URL}/deepfocus/deepfocus-gradient-450px.jpg`,
        thumbUrl: `${DATA_URL}/deepfocus/deepfocus-gradient-200px.jpg`,
        title: 'Gradient design',
        description: '',
        priority: 0,
        meta: {
          usage: ['background'],
        },
      },
    ],
  },
  {
    title: 'Sage Dragon',
    description: 'Sage Dragon screen shot',
    meta: {
      stackDesign: false,
      websiteUrl: 'http://projects.synbydesign.com/sagedragon/',
      isSVG: false,
      thumb: {
        column: 'span 2',
        row: 'span 2',
      },
    },
    category: ['web'],
    tags: [
      'CSS/SCSS',
      'JavaScript',
      'jQuery',
      'Mobile/Responsive Design',
      'Wordpress Custom Theme',
    ],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/sagedragon/sagedragon-desktop-original.png`,
        largeUrl: `${DATA_URL}/sagedragon/sagedragon-desktop-700px.png`,
        mediumUrl: `${DATA_URL}/sagedragon/sagedragon-desktop-450px.png`,
        thumbUrl: `${DATA_URL}/sagedragon/sagedragon-desktop-200px.png`,
        title: 'Sage Dragon (Desktop)',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/sagedragon/sagedragon-tablet-original.png`,
        largeUrl: `${DATA_URL}/sagedragon/sagedragon-tablet-700px.png`,
        mediumUrl: `${DATA_URL}/sagedragon/sagedragon-tablet-450px.png`,
        thumbUrl: `${DATA_URL}/sagedragon/sagedragon-tablet-200px.png`,
        title: 'Sage Dragon (Tablet)',
        description: '',
        priority: 1,
      },
      {
        originalUrl: `${DATA_URL}/sagedragon/sagedragon-mobile-original.png`,
        largeUrl: `${DATA_URL}/sagedragon/sagedragon-mobile-700px.png`,
        mediumUrl: `${DATA_URL}/sagedragon/sagedragon-mobile-450px.png`,
        thumbUrl: `${DATA_URL}/sagedragon/sagedragon-mobile-200px.png`,
        title: 'Sage Dragon (Mobile)',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Eighty Eight DC',
    description: 'Eighty Eight DC',
    meta: {
      stackDesign: false,
      websiteUrl: 'http://www.eightyeightdc.com/',
      isSVG: false,
    },
    category: ['web'],
    tags: ['CSS/SCSS', 'Mobile/Responsive Design', 'Wordpress Custom Theme'],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/eightyeight/eightyeightdc-homepage-original.png`,
        largeUrl: `${DATA_URL}/eightyeight/eightyeightdc-homepage-700px.png`,
        mediumUrl: `${DATA_URL}/eightyeight/eightyeightdc-homepage-450px.png`,
        thumbUrl: `${DATA_URL}/eightyeight/eightyeightdc-homepage-200px.png`,
        title: 'Eighty Eight DC Homepage',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/eightyeight/eightyeightdc-category-original.png`,
        largeUrl: `${DATA_URL}/eightyeight/eightyeightdc-category-700px.png`,
        mediumUrl: `${DATA_URL}/eightyeight/eightyeightdc-category-450px.png`,
        thumbUrl: `${DATA_URL}/eightyeight/eightyeightdc-category-200px.png`,
        title: 'Eighty Eight DC Topic Category Page',
        description: '',
        priority: 0,
      },
      {
        originalUrl: `${DATA_URL}/eightyeight/eightyeightdc-posts-original.jpg`,
        largeUrl: `${DATA_URL}/eightyeight/eightyeightdc-posts-700px.jpg`,
        mediumUrl: `${DATA_URL}/eightyeight/eightyeightdc-posts-450px.jpg`,
        thumbUrl: `${DATA_URL}/eightyeight/eightyeightdc-posts-200px.jpg`,
        title: 'Eighty Eight DC Topic Posts Page',
        description: '',
        priority: 1,
      },
    ],
  },
  {
    title: 'Sigma Performance Group',
    description: 'sigmaperfgroup',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        column: 'span 1',
        row: 'span 2',
        position: '0 100%',
      },
    },
    category: ['web'],
    tags: ['(X)HTML', 'CSS', 'Design/Branding', 'PHP'],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/sigmaperfgroup-original.jpg`,
        largeUrl: `${DATA_URL}/sigmaperfgroup-700px.jpg`,
        mediumUrl: `${DATA_URL}/sigmaperfgroup-450px.jpg`,
        thumbUrl: `${DATA_URL}/sigmaperfgroup-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
  {
    title: 'Incognito Logo',
    description: 'Logo for Incognito electronic events and production service',
    meta: {
      stackDesign: false,
      websiteUrl: '',
      isSVG: false,
      thumb: {
        position: '0 100%',
      },
    },
    category: ['logos'],
    tags: [],
    imagePaths: [
      {
        originalUrl: `${DATA_URL}/incognito-original.jpg`,
        largeUrl: `${DATA_URL}/incognito-700px.jpg`,
        mediumUrl: `${DATA_URL}/incognito-450px.jpg`,
        thumbUrl: `${DATA_URL}/incognito-200px.jpg`,
        title: '',
        description: '',
        priority: 0,
      },
    ],
  },
];
// tslint:enable max-line-length

export default PortfolioList;
