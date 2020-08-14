import React, { Suspense } from "react"
import { Head, Link, useQuery, BlitzPage } from "blitz"
import getVotes from "app/votes/queries/getVotes"
import styled from "styled-components"

const ListItem = styled.a`
  font-weight: bold;
  font-size: 16px;
  margin-right: 4px;
`
export const VotesList = () => {
  const [votes] = useQuery(getVotes, { orderBy: { id: "desc" } })

  return (
    <ul>
      {votes.map((vote) => (
        <li key={vote.id}>
          <Link href="/votes/[voteId]" as={`/votes/${vote.id}`}>
            <div>
              <ListItem>Choice: {vote.choice}</ListItem>
              <ListItem>Email: {vote.email}</ListItem>
              <ListItem>Vote Created At: {vote.createdAt}</ListItem>
            </div>
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
        <Suspense fallback={<div>Loading...</div>}>
          <VotesList />
        </Suspense>
      </main>
    </div>
  )
}

export default VotesPage
