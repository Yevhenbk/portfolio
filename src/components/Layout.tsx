import Head from 'next/head'

type Props = {
  title: string,
  name?: string
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name={props.name} content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Layout