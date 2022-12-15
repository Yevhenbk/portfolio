export interface Props {
  id: number,
  name: string,
  number: string,
  title: string
}

export const menuItems: Props[] = [
  { id: 1, name: "About", number: "01", title: "about" },
  { id: 2, name: "Contact", number: "02", title: "contact"},
  { id: 3, name: "Work", number: "03", title: "work" }
]