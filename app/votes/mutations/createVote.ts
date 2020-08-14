import db, { VoteCreateArgs } from "db"

type CreateVoteInput = {
  data: VoteCreateArgs["data"]
}
export default async function createVote({ data }: CreateVoteInput, ctx: Record<any, any> = {}) {
  let voteEmail = data.email
  const emailVoted = await db.vote.findMany({
    where: {
      email: {
        equals: voteEmail,
      },
    },
  })
  if (emailVoted.length > 0) {
    throw new Error("Email in use, please try again with another email.")
  }
  const vote = await db.vote.create({ data })

  return vote
}
