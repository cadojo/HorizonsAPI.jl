using Documenter
using HORIZONSAPI

makedocs(
    sitename = "HORIZONSAPI",
    format = Documenter.HTML(),
    modules = [HORIZONSAPI]
)

deploydocs(
    repo = "https://github.com/cadojo/HORIZONSAPI.jl"
)
