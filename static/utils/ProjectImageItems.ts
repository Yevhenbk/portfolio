export interface Props {
  id: number,
  title: string,
  background: string,
  zIndex: number,
  top?: number,
  right?: number,
  left?: number,
  href: string
}

export const projectImageItems: Props[] = [
  { id: 1, title: "Marvel Characters", background: "url(../../../static/img/marvelCard.png)",
  top: -6, right: -12, zIndex: 8, href: "https://monumental-conkies-9acc89.netlify.app" },
  { id: 2, title: "Technical Challenge", background: "url(../../../static/img/challengeCard.png)",
  top: -3, right: -6, zIndex: 9, href: "https://63347316ca969e094b51dbed--peppy-beijinho-1dd33a.netlify.app" },
  { id: 3, title: "Worksut", background: "url(../../../static/img/worksutCard.png)",
   zIndex: 10, href: "https://worksut.netlify.app" },
  { id: 4, title: "Los Tercios", background: "url(../../../static/img/losTerciosCard.png)",
  top: -3, left: -6, zIndex: 9, href: "https://halterofilialostercios.netlify.app" },
  { id: 5, title: "Cloudchain", background: "url(../../../static/img/cloudchain2Card.png)",
  top: -6, left: -12, zIndex: 8, href: "https://cloudchain.vercel.app" }
]