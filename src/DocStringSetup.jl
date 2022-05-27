#
# Docstring setup which is used for all modules in `HORIZONSAPI`!
#

using DocStringExtensions

@template (FUNCTIONS, METHODS, MACROS) =
    """
    $(SIGNATURES)

    $(DOCSTRING)
    """

@template TYPES =
    """
    $(TYPEDEF)

    $(DOCSTRING)

    ## `HORIZONSAPI` Methods
    $(METHODLIST)
    """

@template CONSTANTS =
    """
    $(TYPEDEF)

    $(DOCSTRING)
    """
