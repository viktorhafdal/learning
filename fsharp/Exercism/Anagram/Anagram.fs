module Anagram

let findAnagrams (sources: string list) (target: string): string list =
  let normalize (word: string) =
    word.ToLower().ToCharArray()
    |> Array.sort
    |> string

  let targetLower = target.ToLower()
  let targetSorted = normalize target

  sources
  |> List.filter(fun candidate -> 
    let candidateLower = candidate.ToLower()
    candidateLower <> targetLower
    && normalize candidate = targetSorted)

