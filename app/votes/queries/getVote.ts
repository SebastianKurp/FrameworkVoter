import { NotFoundError } from "blitz"
import db, { FindOneVoteArgs } from "db"

type GetVoteInput = {
  where: FindOneVoteArgs["where"]
  // Only available if a model relationship exists
  // include?: FindOneVoteArgs['include']
}

export default async function getVote(
  { where /* include */ }: GetVoteInput,
  ctx: Record<any, any> = {}
) {
  const vote = await db.vote.findOne({ where })

  if (!vote) throw new NotFoundError()

  return vote
}
