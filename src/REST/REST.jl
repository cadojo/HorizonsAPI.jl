"""
The precise API for JPL's HORIZONS ephemeris platform, as described by the the
[official documentation](https://ssd-api.jpl.nasa.gov/doc/horizons.html).

# Extended Help

!!! warning
    This package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other
    organization! This is an independently written package by an astrodynamics hobbyist.
    See the `HORIZONSAPI` license file for more information about code sharing and usage!

## Imports
$(IMPORTS)

## Exports
$(EXPORTS)
"""
module REST

include(joinpath(@__DIR__, "..", "DocStringSetup.jl"))

using HTTP
using Parameters: @with_kw

"""
An abstract supertype for all query parameters associated with HORIZONS API requests.

All `QueryParameters` subtypes must implement several methods:
- `REST.name`
- `REST.defaults`
- `REST.allowable`
- `REST.description`

Some subtypes must implement additional methods. For example, `REST.EphemerisParameter`
must also implement the `REST.ephemeristype` method. The necessary methods for each subtype
are described in each subtype's docstring.
"""
abstract type QueryParameter end

"""
Returns the name of a `QueryParameter`, as it would be written in a URL request.
"""
function name end

"""
Returns the default values associated with a particular parameter. If no default values
exist, then the singleton `nothing` is returned.
"""
function defaults end

"""
Returns the allowable values associated with a particular parameter. If no finite list of
allowable values exists, then the singleton `nothing` is returned.
"""
function allowable end

"""
Returns the description associated with a particular parameter. If no description exists,
then the singleton `nothing` is returned.
"""
function description end

"""
Returns the allowable ephemeris types (Observer, Vectors, or Elements) for a particular
ephemeris-specific parameter.
"""
function ephemeristypes end

"""
Returns the units associated with a particular parameter. If no units exist, then the
singeleton type `nothing` is returned.
"""
function units end

include(joinpath("Parameters", "common.jl"))
include(joinpath("Parameters", "ephemeris.jl"))
include(joinpath("Parameters", "spk.jl"))
include(joinpath("Parameters", "approach.jl"))
include(joinpath("Parameters", "osculating.jl"))
include(joinpath("Parameters", "small.jl"))

end
