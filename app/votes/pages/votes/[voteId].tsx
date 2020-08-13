import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getVote from "app/votes/queries/getVote"
import deleteVote from "app/votes/mutations/deleteVote"

export const Vote = () => {
  const router = useRouter()
  const voteId = useParam("voteId", "number")
  const [vote] = useQuery(getVote, { where: { id: voteId } })

  return (
    <div>
      <h1>Vote {vote.id}</h1>
      <pre>{JSON.stringify(vote, null, 2)}</pre>

      {
        <Link href="/votes/[voteId]/edit" as={`/votes/${vote.id}/edit`}>
          <a>Edit</a>
        </Link>
      }

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteVote({ where: { id: vote.id } })
            router.push("/votes")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowVotePage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Vote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {
            <Link href="/votes">
              <a>Votes</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Vote />
        </Suspense>
      </main>
    </div>
  )
}

export default ShowVotePage
