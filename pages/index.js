import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Home page<br />
      <br />
      <Link href="/test/[1]" as="/test/a"><a>It reloads full page</a></Link>
    </div>
  )
}
