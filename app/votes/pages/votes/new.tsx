import React from "react"
import { Head, Link, useRouter, BlitzPage } from "blitz"
import createVote from "app/votes/mutations/createVote"
import VoteForm from "app/votes/components/VoteForm"

const NewVotePage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>New Vote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create New Vote </h1>

        <VoteForm
          initialValues={{}}
          onSubmit={async () => {
            try {
              const vote = await createVote({ data: { name: "MyName" } })
              alert("Success!" + JSON.stringify(vote))
              router.push("/votes/[voteId]", `/votes/${vote.id}`)
            } catch (error) {
              alert("Error creating vote " + JSON.stringify(error, null, 2))
            }
          }}
        />

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

export default NewVotePage
