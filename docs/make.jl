using Documenter
using HorizonsAPI

makedocs(
    sitename="HorizonsAPI",
    format=Documenter.HTML(),
    modules=[HorizonsAPI],
    pages=[
        "Overview" => "index.md",
        "Examples" => "examples/index.md",
        "Reference" => "reference/index.md",
    ]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
#=deploydocs(
    repo = "<repository url>"
)=#
