using Documenter
using HORIZONSAPI

makedocs(
    sitename = "HORIZONSAPI",
    format = Documenter.HTML(),
    modules = [HORIZONSAPI, HORIZONSAPI.REST],
    pages=[
        "Overview" => [
            "Getting Started" => "index.md",
            "Docstrings" => "docstrings.md"
        ],
    ]
)

deploydocs(
    target    = "build",
    repo      = "github.com/cadojo/HORIZONSAPI.jl.git",
    branch    = "gh-pages",
    devbranch = "main",
    versions  = ["stable" => "v^", "manual", "v#.#", "v#.#.#"],
)
