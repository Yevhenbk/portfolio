export interface Props {
  id: number,  
  title: string,
  skillOne: string,
  skillTwo?: string,
  skillThree?: string,
  skillFour?: string,
  skillFive?: string,
  skillSix?: string,
  skillSeven?: string,
  skillEight?: string,
  skillNine?: string,
  skillTen?: string,
  skillEleven?: string
}

export const skillsItems: Props[] = [
  { id: 1, skillOne: "HTML", skillTwo: "CSS/Sass", title: "Languages",
  skillThree: "JavaScript (ES6)", skillFour: "TypeScript", skillFive: "Python", 
  skillSix: "SQL", skillSeven: "Go", skillEight: "Solidity" },
  { id: 2, title: "Frameworks", skillOne: "React.js", skillTwo: "Next.js",
  skillThree: "Redux", skillFour: "GraphQL", skillFive: "styled-components",
  skillSix: "TailwindCSS", skillSeven: "MUI", skillEight: "Bootstrap",
  skillNine: "Ethers.js", skillTen: "Prisma", skillEleven: "Flask" },
  { id: 3, title: "Tools", skillOne: "Git & GitHub", skillTwo: "Chrome DevTools",
  skillThree: "Spline", skillFour: "Postman", skillFive: "MongoDB",
  skillSix: "Postgresql", skillSeven: "JWT Authentication", skillEight: "Jest & React Testing Library",
  skillNine: "Figma", skillTen: "Adobe Photoshop" } 
]
