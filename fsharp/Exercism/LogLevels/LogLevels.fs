module LogLevels

let message (logLine: string): string =
  logLine.Substring(logLine.IndexOf(':') + 1).Trim()

let logLevel (logLine: string): string =
  logLine
  |> fun s -> s.Substring(s.IndexOf('[') + 1, s.IndexOf(']') - (s.IndexOf('[') + 1))
  |> _.ToLower() // _ replaces `fun s -> s`

let reformat (logLine: string): string =
  $"{message logLine} ({logLevel logLine})"