"""
Retrieve ephemeris data for free using JPL's REST API!

!!! warning
    This package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other
    organization! This is an independently written package by an astrodynamics hobbyist.
    See the `HORIZONSAPI` license file for more information about code sharing and usage!

# Extended Help

## License
$(LICENSE)

## Imports
$(IMPORTS)

## Exports
$(EXPORTS)
"""
module HORIZONSAPI

include(joinpath(@__DIR__, "DocStringSetup.jl"))

include(joinpath(@__DIR__, "REST", "REST.jl"))
import .REST

end # module
