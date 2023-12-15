
import ProjectPage from '@/components/Project/ProjectPage'
export default function Home() {



  return (
    <><div className=' '>
   
      <ProjectPage/>
    </div></>
  )
}


export async function generateMetadata(){
 
  return{
    title: "Project",
  }

}