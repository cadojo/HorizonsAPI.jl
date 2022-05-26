"""
Retrieve ephemeris data for free using JPL's REST API!

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

end # module
