module Anagram

let findAnagrams (sources: string list) (target: string): string list =
  let normalize (word: string) =
    word.ToLower()
    |> Seq.sort
    |> Seq.toArray
    |> System.String

  let targetLower = target.ToLower()
  let targetSorted = normalize target

  sources
  |> List.filter (fun candidate -> 
    let candidateLower = candidate.ToLower()
    candidateLower <> targetLower
    && normalize candidate = targetSorted)
