
import { Metadata } from "next"
import Formation from './Formation'



export const metadata: Metadata = {
    title:"Développez vos compétences dans le numerique",
    description:"Découvrez ce que nos formation accessibles pour accompagner vos projets et vos ambitions dans le numerique.",
    keywords: ["edev", "numerique", "service du dévellopement", "RCA", "Dévellopement", "Digital", "Accompagnement", "formation"]
  }

  const page = () =>{

    return <Formation />
  }

  export default page;