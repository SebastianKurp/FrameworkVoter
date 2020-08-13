import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getVote from "app/votes/queries/getVote"
import updateVote from "app/votes/mutations/updateVote"
import VoteForm from "app/votes/components/VoteForm"

export const EditVote = () => {
  const router = useRouter()
  const voteId = useParam("voteId", "number")
  const [vote, { mutate }] = useQuery(getVote, { where: { id: voteId } })

  return (
    <div>
      <h1>Edit Vote {vote.id}</h1>
      <pre>{JSON.stringify(vote)}</pre>

      <VoteForm
        initialValues={vote}
        onSubmit={async () => {
          try {
            const updated = await updateVote({
              where: { id: vote.id },
              data: { name: "MyNewName" },
            })
            mutate(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push("/votes/[voteId]", `/votes/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating vote " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditVotePage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Edit Vote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditVote />
        </Suspense>

        <p>
          {
            <Link href="/votes">
              <a>Votes</a>
            </Link>
          }
        </p>
      </main>
    </div>
  )
}

export default EditVotePage
