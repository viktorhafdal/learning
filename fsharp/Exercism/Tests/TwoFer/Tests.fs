module TwoFerTests 

open Xunit
open TwoFer

[<Fact>]
let ``No name given`` () =
  Assert.Equal("One for you, one for me.", twoFer None)

[<Fact>]
let ``A name given`` () =
  Assert.Equal("One for Alice, one for me.", twoFer (Some "Alice"))

[<Fact>]
let ``Aother name given`` () =
  Assert.Equal("One for Bob, one for me.", twoFer (Some "Bob"))

[<Fact>]
let ``No name given (simpler)`` () =
  Assert.Equal("One for you, one for me.", simplerTwoFer None)

[<Fact>]
let ``A name given (simpler)`` () =
  Assert.Equal("One for Alice, one for me.", simplerTwoFer (Some "Alice"))

[<Fact>]
let ``Another name given (simpler)`` () =
  Assert.Equal("One for Bob, one for me.", simplerTwoFer (Some "Bob"))
