import React, { Suspense } from "react"
import { Head, Link, useQuery, BlitzPage } from "blitz"
import getVotes from "app/votes/queries/getVotes"

export const VotesList = () => {
  const [votes] = useQuery(getVotes, { orderBy: { id: "desc" } })

  return (
    <ul>
      {votes.map((vote) => (
        <li key={vote.id}>
          <Link href="/votes/[voteId]" as={`/votes/${vote.id}`}>
            <a>{vote.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const VotesPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Votes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Votes</h1>

        <p>
          {
            <Link href="/votes/new">
              <a>Create Vote</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <VotesList />
        </Suspense>
      </main>
    </div>
  )
}

export default VotesPage
