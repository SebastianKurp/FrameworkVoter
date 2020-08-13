import db, { VoteDeleteArgs } from "db"

type DeleteVoteInput = {
  where: VoteDeleteArgs["where"]
}

export default async function deleteVote({ where }: DeleteVoteInput, ctx: Record<any, any> = {}) {
  const vote = await db.vote.delete({ where })

  return vote
}
