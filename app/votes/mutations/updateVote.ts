import db, { VoteUpdateArgs } from "db"

type UpdateVoteInput = {
  where: VoteUpdateArgs["where"]
  data: VoteUpdateArgs["data"]
}

export default async function updateVote(
  { where, data }: UpdateVoteInput,
  ctx: Record<any, any> = {}
) {
  const vote = await db.vote.update({ where, data })

  return vote
}
