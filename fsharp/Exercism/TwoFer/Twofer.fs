module TwoFer
type O = | Something of string | Nothing of string

let twoFer (input: string option): string =
  match input with
  | Some name -> sprintf "One for %s, one for me." name
  | None  -> sprintf "One for you, one for me." 

let simplerTwoFer (input: string option): string =
  input
  |> Option.defaultValue "you" // same as Option.defaultValue "you" input
  |> sprintf "One for %s, one for me."

// Option.defaultValue
let defaultValue (value: string) (opt: string option) : string =
  match opt with
  | Some a -> a
  | None -> value
