module LogLevels

let message (logLine: string): string =
  logLine.Substring(logLine.IndexOf(':') + 1).Trim()

let logLevel (logLine: string): string =
  logLine
  |> fun s -> s.Substring(s.IndexOf('[') + 1, s.IndexOf(']') - (s.IndexOf('[') + 1))
  |> fun s -> s.ToLower()

let reformat (logLine: string): string =
  sprintf "%s (%s)" (message logLine) (logLevel logLine)