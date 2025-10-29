module Tests

open Xunit
open Anagram

[<Fact>]
let ``No matches`` () =
    let candidates = ["hello"; "world"; "zombies"; "pants"]
    let result = findAnagrams candidates "diaper"
    Assert.Empty(result)

[<Fact>]
let ``Detects two anagrams`` () =
    let candidates = ["lemons"; "cherry"; "melons"]
    let result = findAnagrams candidates "solemn"
    Assert.Equal<string list>(["lemons"; "melons"], result)

[<Fact>]
let ``Does not detect anagram subsets`` () =
    let candidates = ["dog"; "goody"]
    let result = findAnagrams candidates "good"
    Assert.Empty(result)

[<Fact>]
let ``Detects anagram`` () =
    let candidates = ["enlists"; "google"; "inlets"; "banana"]
    let result = findAnagrams candidates "listen"
    Assert.Equal<string list>(["inlets"], result)

[<Fact>]
let ``Detects three anagrams`` () =
    let candidates = ["gallery"; "ballerina"; "regally"; "clergy"; "largely"; "leading"]
    let result = findAnagrams candidates "allergy"
    Assert.Equal<string list>(["gallery"; "regally"; "largely"], result)

[<Fact>]
let ``Detects multiple anagrams with different case`` () =
    let candidates = ["Eons"; "ONES"]
    let result = findAnagrams candidates "nose"
    Assert.Equal<string list>(["Eons"; "ONES"], result)

[<Fact>]
let ``Does not detect non-anagrams with identical checksum`` () =
    let candidates = ["last"]
    let result = findAnagrams candidates "mass"
    Assert.Empty(result)

[<Fact>]
let ``Detects anagrams case-insensitively`` () =
    let candidates = ["cashregister"; "Carthorse"; "radishes"]
    let result = findAnagrams candidates "Orchestra"
    Assert.Equal<string list>(["Carthorse"], result)

[<Fact>]
let ``Detects anagrams using case-insensitive subject`` () =
    let candidates = ["cashregister"; "carthorse"; "radishes"]
    let result = findAnagrams candidates "Orchestra"
    Assert.Equal<string list>(["carthorse"], result)

[<Fact>]
let ``Detects anagrams using case-insensitive possible matches`` () =
    let candidates = ["cashregister"; "Carthorse"; "radishes"]
    let result = findAnagrams candidates "orchestra"
    Assert.Equal<string list>(["Carthorse"], result)

[<Fact>]
let ``Does not detect an anagram if the original word is repeated`` () =
    let candidates = ["go Go GO"]
    let result = findAnagrams candidates "go"
    Assert.Empty(result)

[<Fact>]
let ``Anagrams must use all letters exactly once`` () =
    let candidates = ["patter"]
    let result = findAnagrams candidates "tapper"
    Assert.Empty(result)

[<Fact>]
let ``Words are not anagrams of themselves`` () =
    let candidates = ["BANANA"]
    let result = findAnagrams candidates "BANANA"
    Assert.Empty(result)

[<Fact>]
let ``Words are not anagrams of themselves even if letter case is partially different`` () =
    let candidates = ["Banana"]
    let result = findAnagrams candidates "BANANA"
    Assert.Empty(result)

[<Fact>]
let ``Words are not anagrams of themselves even if letter case is completely different`` () =
    let candidates = ["banana"]
    let result = findAnagrams candidates "BANANA"
    Assert.Empty(result)

[<Fact>]
let ``Words other than themselves can be anagrams`` () =
    let candidates = ["LISTEN"; "Silent"]
    let result = findAnagrams candidates "LISTEN"
    Assert.Equal<string list>(["Silent"], result)
