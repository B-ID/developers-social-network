import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developers Social network',
  description: 'Social network for developers to share projects and portfolios'
}


export default function Home() {
  return (
    <section className='flex-col mb-16 flex-start paddings'>
      {/* Category Links */}
      <h1>category links</h1>


      {/* Posts */}
      <h1>posts</h1>


      {/* Load More */}
      <p>load more</p>

    </section>
  )
}
