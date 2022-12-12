export interface Props {
  id: number,
  name: string,
  number: string,
  title: string
}

export const menuItems: Props[] = [
  { id: 1, name: "Work", number: "01", title: "work" },
  { id: 2, name: "About", number: "02", title: "about"},
  { id: 3, name: "Contact", number: "03", title: "contact" }
]