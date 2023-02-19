import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link, useStaticQuery, graphql } from "gatsby"
import emailjs from "emailjs-com"
import Notifications, { notify } from "react-notify-toast"
import { StaticImage } from "gatsby-plugin-image"
import Human from "@images/svgs/human.svg"
import Badge from "@components/Badge"
import Button from "@components/Button"
import Card from "@components/Card"
import Grid from "@components/Grid"
import Input from "@components/Input"
import Layout from "@components/layout"
import Section from "@components/Section"
import { 
  SectionTitle, 
  Heading, 
  Paragraph, 
  SubHeading } from "@components/Text"
import Eye from "@images/svgs/eye.svg"
import Marker from "@images/svgs/marker.svg"
import Mail from "@images/svgs/mail.svg"

const initFormValue = {
  name: "",
  email: "",
  message: "",
}

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const [formData, setFormData] = React.useState(initFormValue)
  const [isLoading, setLoading] = React.useState(false)

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          featuredProjects {
            name
            description
            url
            tags
          }
          workExperience {
            position
            duration
            company
          }
        }
      }
    }
  `)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)

    const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID || ''
    const userId = process.env.GATSBY_EMAILJS_USER_ID || ''

    sendFeedback(
      serviceId,
      templateId,
      {
        message_html: formData.message,
        from_name: formData.name,
        reply_to: formData.email,
      },
      userId
    )
  }

  const sendFeedback = (
    serviceId:  string, 
    templateId: string, 
    variables: {message_html: string; from_name: string; reply_to: string}, 
    userId: string) => {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then(res => {
        notify.show("Message sent, Thank you for reaching out!", "success")
        setLoading(false)
        setFormData(initFormValue)
      })
      .catch(err => {
        notify.show("Error occured while sending, Please try again!", "error")
        setLoading(false)
      })
  }

  return (
    <Layout location={location}>
      <Notifications />
      {/* Home */}
      <section id="home" className="flex items-center justify-center h-screen">
        <div className="flex-1">
          <p className="text-lg md:text-xl lg:text-2xl font-normal py-2 md:py-3 lg:py-5 text-gray-600">
            Hi, I'm
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-700">
            Allan Reyes Colibao
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-600">
            Front-end Developer
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-normal py-2 md:py-3 lg:py-5 leading-loose text-gray-600">
            Designing and developing modern web applications. Check out my{" "}
            <Link 
              to="#projects"
              className="text-gray-600 font-bold hover:text-gray-800 hero-link"
            >
              featured projects
            </Link>
              {" "}and{" "}
             <Link 
              to="#blogs"
              className="text-gray-600 font-bold hover:text-gray-800 hero-link"
            >
              blog
            </Link>
          </p>
        </div>
        <div className="flex-1 hidden xl:block">
          <Human className="mt-12"/>
        </div>
      </section>
      {/* Projects */}
      <Section id="projects">
        <SectionTitle>
          Featured Projects
        </SectionTitle>
        <Grid>
          {data.site.siteMetadata.featuredProjects.map((project: {
              name: string
              description: string
              url: string
              tags: Array<string>
            }, i: number) => 
              <Card key={i}>
                <Heading>
                  {project.name}
                </Heading>
                <Paragraph>
                  {project.description}
                </Paragraph>
                {project.tags.map((tag: string, i: number) => (
                  <div key={i} className="inline-block">
                    <Badge>
                      {tag}
                    </Badge>
                  </div>
                ))}
                <div className="flex w-full mt-3">
                  <a href={project.url} target="_blank" className="hero-link flex items-center text-gray-600 hover:text-gray-400">
                    <Eye className="h-auto w-6 md:w-8 mr-1 text-gray-600"/> See live
                  </a>
                </div>
              </Card>
            )}
        </Grid>
      </Section>
      {/* Blogs */}
      <Section id="blogs">
        <SectionTitle>
          Blogs
        </SectionTitle>
        <Grid>
          <Card>
            dasdasdas
          </Card>
          <Card>
            dasdasdas
          </Card>
          <Card>
            dasdasdas
          </Card>
          <Card>
            dasdasdas
          </Card>
        </Grid>
      </Section>
      {/* About me */}
      <Section id="about">
        <SectionTitle>
          About me
        </SectionTitle>
        <div className="block lg:flex">
          <div className="w-full xl:w-1/2 pr-0 lg:pr-12 xl:pr-16">
              {/* Introduction, Work Experience, and Education */}
              <Heading>
                Hello There!
              </Heading>
              <div className="mb-4">
                <Paragraph>
                  I am a highly motivated Front-end Developer with a passion 
                  for creating engaging and interactive user experiences. 
                  With 3+ years of experience in the industry, I have a strong 
                  understanding of HTML, CSS, and JavaScript and have worked with 
                  frameworks such as React and Vue.
                </Paragraph>
              </div>
              <div className="mb-4">
                <Paragraph>
                  Most recently, I worked on a project for a Government Agency, 
                  where I was responsible for developing the user interface using 
                  React. The project received positive feedback from both the client 
                  and users for its clean design and seamless user experience.
                </Paragraph>
              </div>
              <div className="mb-4">
                <Paragraph>
                  I am always eager to take on new challenges and further develop 
                  my skills as a Front-end Developer. If you're interested in connecting, 
                  I would love to hear from you. Thank you for your time!
                </Paragraph>
              </div>
              {/* Work Experience */}
              <Heading>
                Work Experience
              </Heading>
              {data.site.siteMetadata.workExperience.map((exp: {
                position: string
                duration: string
                company: string
              }, i: number) => 
                <div className="mb-4" key={i}>
                  <SubHeading>
                    {exp.position}
                  </SubHeading>
                  <Paragraph>
                    {exp.duration}
                  </Paragraph>
                  <Paragraph>
                    {exp.company}
                  </Paragraph>
                </div>
              )}
              {/* Education */}
              <Heading>
                Education
              </Heading>
              <SubHeading>
                Electronics and Computer Engineering Technology
              </SubHeading>
              <Paragraph>
                2010 - 2013
              </Paragraph>
              <Paragraph>
                College of Sciences, Technology and Communications, Inc.
              </Paragraph>
          </div>
          {/* Image and Contact Info */}
          <div className="w-full xl:w-1/2">
              {/* Image */}
              <div className="hidden lg:block">
                <StaticImage 
                  src="../images/dp.jpg" 
                  className="w-72 rounded-full border-8 border-gray-300"
                  alt="Arcdev Logo" 
                />
              </div>
              {/* Contact Info */}
              <div className="mt-0 lg:mt-10">
                  <div className="flex items-center py-1 lg:py-2">
                    <Marker className={icon.style} />
                    <Paragraph>
                      Earth
                    </Paragraph>
                  </div>
                  <div className="flex items-center py-1 lg:py-2">
                    <Mail className={icon.style} />
                    <a 
                      href="mailto:colibaoallanreyes@gmail.com"
                      className="text-xs lg:text-sm xl:text-base font-normal text-gray-700 leading-relaxed hero-link"
                    >
                      colibaoallanreyes@gmail.com
                    </a>
                  </div>
              </div>
          </div>
        </div>
      </Section>
      <Section id="contact">
        <SectionTitle>
          Contact
        </SectionTitle>
        <div className="block lg:flex">
          <div className="w-full md:w-1/2">
            <Heading>
              Let's talk
            </Heading>
            <form onSubmit={handleSubmit}>
              <div className="py-2 md:py-4 w-full">
                <Input 
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })}
                  required={true}
                  placeholder="Full Name"
                />
              </div>
              <div className="py-2 md:py-4 w-full">
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })}
                  required={true}
                  placeholder="Email"
                />
              </div>
              <div className="py-2 md:py-4 w-full">
                <Input 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })}
                  required={true}
                  placeholder="Message"
                  isTextarea={true}
                  rows={8}
                />
              </div>
              <div className="py-2 md:py-4 w-full">
                <Button 
                  type="submit"
                  label="Send"
                  loadingText="Sending..."
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

const icon = {
  style: "inline-block w-4 md:w-5 lg:w-6 h-auto mr-1 md:mr-2 text-gray-600"
}

export default IndexPage

export const Head: HeadFC = () => <title>Allan Colibao | Front-end Developer</title>
