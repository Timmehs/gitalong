/**
 * Given many arrays of ObjectIDs, return a unique list
 *
 * @params {ObjectID[]} objectIDs - as from two arrays of ObjectIDs concatenated together
 * @returns {ObjectID[]}
 */
module.exports = function dedupeIDs(objectIDs) {
  const ids = {}
  objectIDs.forEach(_id => (ids[_id.toString()] = _id))
  return Object.values(ids)
}
