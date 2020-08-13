import db, { VoteCreateArgs } from "db"

type CreateVoteInput = {
  data: VoteCreateArgs["data"]
}
export default async function createVote({ data }: CreateVoteInput, ctx: Record<any, any> = {}) {
  const vote = await db.vote.create({ data })

  return vote
}
