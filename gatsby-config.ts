import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://arcdev.me/`,
    menus: [
      {
        name: `Home`,
        link: `#home`,
      },
      {
        name: `Projects`,
        link: `#projects`,
      },
      {
        name: `Blog`,
        link: `#blogs`,
      },
      {
        name: `About`,
        link: `#about`,
      },
      {
        name: `Contact`,
        link: `#contact`,
      },
    ],
    featuredProjects: [
      {
        name: `NRCP InfoMetro`,
        description: `Your go-to source for updates in basic research, science and arts programs, and policy-driven initiatives of the Council.`,
        url: `https://infometro.nrcp.dost.gov.ph/`,
        tags: ['Gatsby', 'React', 'Laravel', 'Tailwindcss', 'API', 'MySQL', 'Shared Hosting']
      },
      {
        name: `Count your Calorie`,
        description: `A web-based app that measures an individual’s calorie intake through food logging then generates different workout/exercise recommendations that users can choose from.`,
        url: `https://countyourcalorie.vercel.app/`,
        tags: ['Nextjs', 'Nodejs', 'GraphQL', 'Tailwindcss', 'Apollo', 'MongoDB', 'Vercel']
      },
      {
        name: `Health Buddy Fooducate`,
        description: `A web-based app that was developed in year 2020 to help patients diagnosed with Diabetes, Pulmonary disease, and Hypertension as this serves as a guide to maintain a balanced diet to prevent the disease progression.`,
        url: `https://health-fooducate.web.app/`,
        tags: ['Gatsby', 'Tailwindcss', 'Firebase']
      },
      {
        name: `The Movie Atlas`,
        description: `A web-based app for managing a personal movie collection by utilizing The Movie Database API. This app enables users to search for their preferred movies, view the trailer, and see details about the entire cast and crew.`,
        url: `https://movieatlas.netlify.app/`,
        tags: ['React', 'Tailwindcss', 'API', 'Netlify']
      },
    ],
    workExperience: [
      {
        position: `Computer Programmer III`,
        duration: `Aug 2021 - Present`,
        company: `DOST- National Research Council of the Philippines`,
      },
      {
        position: `Web Developer`,
        duration: `Jul 2019 - Jul 2021`,
        company: `DOST- Food and Nutrition Research Institute`,
      },
      {
        position: `Full-stack Developer`,
        duration: `Jan 2021 - Apr 2021`,
        company: `Gigaddel Online Solutions`,
      },
    ],
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
}

export default config
