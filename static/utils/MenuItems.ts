export interface Props {
  id: number,
  name: string,
  number: string,
  title: string
}

export const menuItems: Props[] = [
  { id: 1, name: "Experience & Skills", number: "01", title: "skills" },
  { id: 2, name: "Work", number: "02", title: "work"},
  { id: 3, name: "About & Contact", number: "03", title: "about" }
]