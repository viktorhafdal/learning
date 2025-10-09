module LogLevelsTests

open Xunit
open LogLevels

let testMessage = "[ERROR]: Invalid operation"

[<Fact>]
let ``TestMessage`` () =
    Assert.Equal("Invalid operation", message testMessage)

[<Fact>]
let ``TestLogLevel`` () =
    Assert.Equal("error", logLevel testMessage)

[<Fact>]
let ``TestReformat`` () =
    Assert.Equal("Invalid operation (error)", reformat testMessage)
