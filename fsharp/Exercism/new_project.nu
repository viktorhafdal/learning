print "Enter solution name filename, inclusive affix (e.g., \"MySolution.sln\")" 
let solution_file = (input)
if ($solution_file | is-empty) { error"Solution name cannot be empty. Aborting." }

print "Enter the new F# project name, no affix (e.g., \"MyProject\")"
let project_name = (input)
if ($project_name | is-empty) { error"Project name cannot be empty. Aborting." }

let test_dir_name = $"Tests/($project_name)Test"
let project_dir_name = $project_name

print $"\n--- Executing setup for project: ($project_name) in ($solution_file) ---"

print $"- Creating class library: ($project_dir_name)"
dotnet new classlib -lang f# -o $project_dir_name

print $"- Creating test project: ($test_dir_name)"
dotnet new xunit -lang F# -o $test_dir_name

print $"- Adding test project to ($solution_file)"
dotnet sln $solution_file add $test_dir_name 

print $"- Adding class library project to ($solution_file)"
dotnet sln $solution_file add $project_dir_name

let project_file = $"($project_dir_name)/($project_dir_name).fsproj"
let test_project_file = $"($test_dir_name)/($project_name)Test.fsproj"

print $"- Adding reference from test project to class library"
dotnet add $test_project_file reference $project_file

print "\n--- Setup Complete! ---"
print $"Project '($project_name)' and test project '($test_dir_name)' are ready."
print $"You can now open '($solution_file)'."