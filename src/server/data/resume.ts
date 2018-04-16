const resume: Resume = {
  ownerName: 'Eric Masiello',
  ownerTitle: 'Full Stack JavaScript Engineer',
  lead: `
    Over 10 years of professional experience in web development and design
    with a passion for developing rich internet applications using modern
    JavaScript frameworks`,
  skills: [
    'Web application development',
    'Responsive web design',
    'Single page applications',
    'React',
    'React Native',
    'Redux',
    'ES2015/16+',
    'Typescript',
    'Styled Components',
    'Node',
    'Express JS',
    'HTML5',
    'CSS',
    'SCSS',
    'Jest',
    'Mocha',
    'Enzyme',
    'Angular',
    'jQuery',
    'Webpack',
    'Gulp',
    'Babel',
    'Wordpress',
    'PHP',
    'Git',
    'Cross browser development',
    'MySQL',
    'Postgres',
    'Mongo',
  ],
  professionalExperience: [
    {
      organization: 'Vistaprint Digital',
      roles: [
        {
          title: 'Senior Software Engineer',
          yearFrom: '2016',
        },
      ],
      accomplishments: [
        'Vistaprint Digital UI Component library architect',
        'Full stack engineer across multiple products utilizing React and Node JS running on Heroku and AWS',
        'Mentor junior & senior engineers on front-end and Node development',
      ],
    },
    {
      organization: 'Advisory Board Company',
      roles: [
        {
          title: 'Principal Front-End Developer',
          yearFrom: '2013',
          yearTo: '2016',
        },
        {
          title: 'Lead Front-End Developer',
          yearFrom: '2011',
          yearTo: '2013',
        },
      ],
      accomplishments: [
        [
          'Principal engineer on multiple health care and higher education RESTful',
          'web applications using SCSS, Angular, Ionic, Cordova, Knockout, jQuery, Gulp, and Grunt',
        ].join(' '),
        'Advisory Board UI framework CSS Architect',
        'Authored and trained two one–week-long front end developer boot camps',
        'Coached and mentored junior engineers and designers',
        'Winner of multiple Advisory Board Hackathon competitions',
        'Acted as cross-product accessibility consultant',
      ],
    },
    {
      organization: 'US Census Bureau',
      roles: [
        {
          title: 'Chief of Human Resources Info Systems Branch',
          yearFrom: '2011',
          yearTo: '2010',
        },
        {
          title: 'Senior Web Developer & Team Lead',
          yearFrom: '2008',
          yearTo: '2010',
        },
        {
          title: 'Web Designer & Developer',
          yearFrom: '2003',
          yearTo: '2009',
        },
      ],
      accomplishments: [
        'Managed 9 direct reports',
        'Acted as project manager for HR Systems: developing project plans, wireframes, & milestones',
        [
          'Developed and documented visual style guide for engineers,',
          'enforcing HTML semantics, best practices, UI, and UX consistency',
        ].join(' '),
        'Lead developer for Census Human Resource Information System (CHRIS) using on .NET and SQL Server',
      ],
    },
  ],
  relatedExperience: [
    {
      title: 'General Assembly',
      role: {
        title: 'Instructor',
        yearFrom: '2018',
      },
      accomplishments: [
        'Teach students how to build web sites using HTML5, CSS, JavaScript, and jQuery',
      ],
    },
    {
      title: 'Packt Publishing <em>Mastering React Native</em> Book',
      role: {
        title: 'Author',
      },
      meta: 'Release January 2017',
      accomplishments: [
        'Teach front-end web developers how to create mobile applications for iOS and Android using React Native',
      ],
    },
    {
      title: 'General Assembly',
      role: {
        title: 'Instructor',
        yearFrom: '2017',
      },
      accomplishments: [],
    },
    {
      title: 'Packt Publishing <em>Mastering React.js</em> Video',
      role: {
        title: 'Technical Reviewer',
        yearFrom: '2015',
      },
      accomplishments: [
        'Provide insight and assess technical accuracy of video content and offer suggestions to improve relevance for an audiences new to React programming',
      ],
    },
    {
      title: 'Syn By Design',
      website: {
        url: 'http://synbydesign.com',
      },
      role: {
        title: 'Developer, Designer',
        yearFrom: '2018',
      },
      accomplishments: [
        'React, Redux, ES2015+, Webpack, HTML5, Styled Components, REST API, responsive design',
      ],
    },
    {
      title: 'Anarchostar',
      website: {
        url: 'http://anarchostar.com',
        disabled: true,
      },
      role: {
        title: 'Developer, Designer',
        yearFrom: '2015',
      },
      accomplishments: [
        'Parallax, Wordpress theme, Custom Wordpress Soundcloud plugin, Responsive design',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Maryland, Baltimore County',
      location: 'Catonsville, MD',
      year: '2003',
      degree: 'Bachelor of Science Information Systems Management',
    },
    {
      institution: 'Chain React Conference',
      year: '2017',
      location: 'Portland, OR',
    },
    {
      institution: 'Scrum Alliance',
      degree: 'Certified ScrumMaster',
      year: '2017',
      location: 'Washington, DC',
    },
    {
      institution: "Steven Krug's Usability Testing Workshop",
      year: '2009',
      location: 'Washington, DC',
    },
  ],
};

export default resume;
