export interface Props {
  id: number,
  count: string,
  company: string, 
  date: string,
  description: string
}

export const experienceItems: Props[] = [
  { id: 1, count: "01", company: "dooboolab", date: "Oct 2018 - Dec 2019", description: "Write modern, performant, maintainable code for a diverse array of client and internal projects. Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis." },
  { id: 2, count: "02", company: "Upwork", date: "Jan 2020 - Apr 2020", description: "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Python, Prisma, and Netlify." },
  { id: 3, count: "03", company: "CGSpark", date: "Sep 2021 - Feb 2022", description: "Worked with a team of three designers to build a marketing website and e-commerce platform. Interfaced with clients on a weekly basis, providing technological expertise." },
  { id: 4, count: "04", company: "Worksut", date: "Mar 2022 - Aug 2022", description: "Entering an ambitious startup originating from Attlos, taking responsibilities as Frontend Team Lead, maintaining the source code, managing and reviewing branches." },
  { id: 5, count: "05", company: "Los Tercios", date: "Jun 2022 - Sep 2022", description: "Developed and maintained code for in-house and client website primarily using HTML, CSS, Sass, JavaScript, and TypeScript. Manually tested in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness." }
]