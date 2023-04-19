using Documenter
using HorizonsAPI

makedocs(
    sitename="HorizonsAPI",
    format=Documenter.HTML(),
    modules=[HorizonsAPI]
)

deploydocs(
    target="build",
    repo="github.com/cadojo/HorizonsAPI.jl.git",
    branch="gh-pages",
    devbranch="main",
    versions=["stable" => "v^", "manual", "v#.#", "v#.#.#"],
)
