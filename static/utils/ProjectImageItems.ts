export interface Props {
  id: number,
  title: string,
  background: string,
  zIndex: number,
  top?: number,
  right?: number,
  left?: number
}

export const projectImageItems: Props[] = [
  { id: 1, title: "Marvel Characters", background: "url(../../../static/img/marvelCard.png)",
  top: -6, right: -12, zIndex: 8 },
  { id: 2, title: "Technical Challenge", background: "url(../../../static/img/challengeCard.png)",
  top: -3, right: -6, zIndex: 9 },
  { id: 3, title: "Worksut", background: "url(../../../static/img/worksutCard.png)",
   zIndex: 10 },
  { id: 4, title: "Los Tercios", background: "url(../../../static/img/losTerciosCard.png)",
  top: -3, left: -6, zIndex: 9 },
  { id: 5, title: "Cloudchain", background: "url(../../../static/img/cloudchainCard.png)",
  top: -6, left: -12, zIndex: 8 }
]