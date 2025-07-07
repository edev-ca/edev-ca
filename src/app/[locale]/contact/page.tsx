import { Metadata } from "next";
import Contact from './Contact'



export const metadata: Metadata = {
    title:"Contactez-nous pour vos projet",
    description:"Ensemble faisons de votre idée une réalité.",
    keywords: [ "edev", "numerique", "service du dévellopement", "RCA", "Dévellopement", "Digital", "Accompagnement", "formation"]
  }

  const page = () =>{

    return <Contact />
  }

  export default page;