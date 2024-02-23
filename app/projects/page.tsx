import ProjectItem from "./projectItem"
import image1 from '../../public/image.png'


export async function generateStaticParams(){
  return {
    props : {
      pageId : 'projects'
    }
  }
} 

const projects = () => {
  return (
    <div className="mt-16 px-8">
 <header>
 <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
 <p className="text-base mt-6 text-zinc-600">I have been working on a
number of small creative projects</p>
 </header>
 <div className="mt-16">
 <h2 className="text-2xl">Apps</h2>
 <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
 <ProjectItem name='TallyCoin: Tracking Chores And Rewards'
url='https://apps.apple.com/us/app/tallycoin/id1633932632'
urlDisplay='App Store' imageSrc={image1} />

<ProjectItem name='TallyCoin: Tracking Chores And Rewards'
url='https://apps.apple.com/us/app/tallycoin/id1633932632'
urlDisplay='App Store' imageSrc={image1} />




 </ul>
 </div>
 <div className="mt-16">
 <h2 className="text-2xl">Books</h2>
 <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
 <ProjectItem name='TallyCoin: Tracking Chores And Rewards'
url='https://apps.apple.com/us/app/tallycoin/id1633932632'
urlDisplay='App Store' imageSrc={image1}/>

<ProjectItem name='TallyCoin: Tracking Chores And Rewards'
url='https://apps.apple.com/us/app/tallycoin/id1633932632'
urlDisplay='App Store' imageSrc={image1}/>
 <ProjectItem name='TallyCoin: Tracking Chores And Rewards'
url='https://apps.apple.com/us/app/tallycoin/id1633932632'
urlDisplay='App Store' imageSrc={image1}/>

<ProjectItem name='TallyCoin: Tracking Chores And Rewards'
url='https://apps.apple.com/us/app/tallycoin/id1633932632'
urlDisplay='App Store' imageSrc={image1}/>
 </ul>
 </div>
 </div>
  )
}

export default projects