module AnnalynsInfiltrationTests
open Xunit
open AnnalynsInfiltration
[<Fact>]
let ``TestCanFastAttack`` () =
    Assert.False(canFastAttack true)
[<Fact>]
let ``TestCanSpy`` () =
    Assert.True(canSpy false true false)
[<Fact>]
let ``TestCanSignalPrisoner`` () =
    Assert.True(canSignalPrisoner false true)
[<Fact>]
let ``TestCanFreePrisoner`` () =
    Assert.False(canFreePrisoner false true false false)
