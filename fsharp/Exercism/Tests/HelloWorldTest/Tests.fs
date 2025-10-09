module HelloWorldTests

open Xunit

open HelloWorld

[<Fact>]
let ``Say Hi!`` () =
  Assert.Equal("Goodbye, Mars!", hello)
