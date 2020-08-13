import db, { FindManyVoteArgs } from "db"

type GetVotesInput = {
  where?: FindManyVoteArgs["where"]
  orderBy?: FindManyVoteArgs["orderBy"]
  cursor?: FindManyVoteArgs["cursor"]
  take?: FindManyVoteArgs["take"]
  skip?: FindManyVoteArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyVoteArgs['include']
}

export default async function getVotes(
  { where, orderBy, cursor, take, skip }: GetVotesInput,
  ctx: Record<any, any> = {}
) {
  const votes = await db.vote.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return votes
}
