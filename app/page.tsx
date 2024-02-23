import Image from "next/image";

export async function generateStaticParams(){
  return {
    props : {
      pageId : 'about_me'
    }
  }
}

export default function Home() {
  return (
<h1>About</h1>
  );
}
