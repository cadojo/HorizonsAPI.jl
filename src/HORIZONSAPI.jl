"""
Retrieve ephemeris data for free using JPL's REST API!

!!! warning
    This package is not affiliated **or** endorsed by NASA, JPL, Caltech, or any other
    organization! This is an independently written package by an astrodynamics hobbyist.
    See this package's license file for more information about code sharing and usage!

# Extended Help

## README
$(README)

## License
$(LICENSE)

## Imports
$(IMPORTS)

## Exports
$(EXPORTS)
"""
module HORIZONSAPI

using DocStringExtensions

@template (FUNCTIONS, METHODS, MACROS) =
    """
    $(SIGNATURES)

    $(DOCSTRING)
    """

@template (TYPES, CONSTANTS) =
    """
    $(TYPEDEF)

    $(DOCSTRING)
    """

@info """
Boy oh boy, this is gonna be so cool when this works!
"""

end # module
