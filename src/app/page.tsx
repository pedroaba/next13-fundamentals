import { Suspense } from 'react'

import { GitHubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis
        nulla expedita culpa porro ex? Praesentium fugiat, sit magni nobis nemo
        quis neque quisquam, quos vero, commodi officia maiores eligendi!
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GitHubProfile</p>}>
        <GitHubProfile />
      </Suspense>
    </div>
  )
}
