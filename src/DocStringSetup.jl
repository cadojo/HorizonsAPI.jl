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

    ## Methods

    !!! warning
        Only methods which are defined at the time this docstring was generated are
        included in the list below!

    $(METHODLIST)
    """

@template CONSTANTS =
    """
    $(TYPEDEF)

    $(DOCSTRING)
    """
