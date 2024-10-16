import Link from "next/link";
export default function About(){

    return(
        <>
        <h2>this is the about page</h2>
        <Link href="/about/post1" >post-1</Link>
        <br/>
        <Link href="/about/post2" >post-2</Link>
        </>
    )
}