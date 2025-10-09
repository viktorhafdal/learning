module Tests

open Xunit

open LuciansLusciousLasagna

[<Fact>]
let ``TestExpectedMinutessInOven`` () =
  Assert.Equal(40, expectedMinutesInOven)

[<Fact>]
let ``TestRemainingMinutesInOven`` () =
  Assert.Equal(30, remainingMinutesInOven 10)

[<Fact>]
let ``TestPreparationTimeInOven`` () =
  Assert.Equal(4, preparationTimeInMinutes 2)

[<Fact>]
let ``TestElapsedTimeInMinutes`` () =
  Assert.Equal(26, elapsedTimeInMinutes 3 20)
