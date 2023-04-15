"""
Interact with the JPL HORIZONS REST API.

# Extended Help

$(README)

## License

$(LICENSE)

## Exports

$(EXPORTS)

## Imports

$(IMPORTS)
"""
module HorizonsAPI

import HTTP
using DocStringExtensions

@template (FUNCTIONS, METHODS, MACROS) = """
                                         $(SIGNATURES)

                                         $(DOCSTRING)
                                         """

@template (TYPES, CONSTANTS) = """
                               $(TYPEDEF)

                               $(DOCSTRING)
                               """

"""
The Horizons API endpoint.
"""
const ENDPOINT = "https://ssd.jpl.nasa.gov/api/horizons.api"

"""
The Horizons API accepts very specific formatting for some strings. For example, setting
the `format` option to "text" is fine, but "'text'" will cause the server to throw an error.
Each method of `urlify` takes in a single argument, and outputs a string.

The one exception here is the method which takes an argument of type `Missing`; that method
simply returns the singleton value `missing` to the option to be filtered out before the
query is sent.
"""
urlify(x) = !all(isletter, x) ? "'$x'" : string(x)

urlify(x::Bool) = x ? "YES" : "NO"
urlify(x::Nothing) = "NONE"
urlify(x::Missing) = missing
urlify(x::Number) = "'$x'"
urlify(x::NTuple) = """'$(replace(string(x), " " => "", "(" => "", ")" => ""))'"""



"""
Common parameters, as specified by the Horizons API documentation.
"""
const COMMON_PARAMETERS = (;
    format="json",
    OBJ_DATA=true,
    MAKE_EPHEM=true,
    EPHEM_TYPE="OBSERVER",
    EMAIL_ADDR=missing
)

const EPHEMERIS_PARAMETERS = (;
    CENTER="Geocentric",
    REF_PLANE="ECLIPTIC",
    COORD_TYPE="GEODETIC",
    SITE_COORD=(0, 0, 0),
    START_TIME=missing,
    STOP_TIME=missing,
    STEP_SIZE="60 min",
    TLIST=missing,
    TLIST_TYPE=missing,
    QUANTITIES="A",
    REF_SYSTEM="ICRF",
    OUT_UNITS="KM-S",
    VEC_TABLE=3,
    VEC_CORR="NONE",
    CAL_FORMAT="CAL",
    CAL_TYPE="MIXED",
    ANG_FORMAT="HMS",
    APPARENT="AIRLESS",
    TIME_DIGITS="MINUTES",
    TIME_ZONE="+00:00",
    RANGE_UNITS="AU",
    SUPPRESS_RANGE_RATE="NO",
    ELEV_CUT=-90,
    SKIP_DAYLT="NO",
    SOLAR_ELONG=(0, 180),
    AIRMASS=38.0,
    LHA_CUTOFF=0.0,
    ANG_RATE_CUTOFF=0.0,
    EXTRA_PREC="NO",
    CSV_FORMAT="NO",
    VEC_LABELS="YES",
    VEC_DELTA_T="NO",
    ELM_LABELS="YES",
    TP_TYPE="ABSOLUTE",
    R_T_S_ONLY="NO"
)

const SPK_PARAMETERS = (;
    START_TIME=missing,
    STOP_TIME=missing
)

const APPROACH_PARAMETERS = (;
    CA_TABLE_TYPE="STANDARD",
    TCA3SG_LIMIT=14400,
    CALIM_SB=0.05,
    CALIM_PL=(0.1, 0.1, 0.1, 0.1, 1.0, 1.0, 1.0, 1.0, 0.1, 0.003)
)

const ELEMENTS_PARAMETERS = (;
    OBJECT=missing,
    EPOCH=missing,
    ECLIP=missing,
    EC=missing,
    QR=missing,
    TP=missing,
    OM=missing,
    W=missing,
    IN=missing,
    MA=missing,
    A=missing,
    N=missing
)

const SMALL_BODY_PARAMETERS = (;
    RAD=missing,
    H=missing,
    G=missing,
    M1=missing,
    M2=missing,
    K1=missing,
    PHCOF=missing,
    A1=missing,
    A2=missing,
    A3=missing,
    RO=missing,
    ALN=missing,
    NM=missing,
    NN=missing,
    NK=missing,
    DT=missing,
    AMRAT=missing,
    SRC=missing,
    EST=missing
)

"""
Return the requested HORIZONS data.
"""
function query(COMMAND; kwargs...)

    options = merge(COMMON_PARAMETERS, kwargs)

    if strip(uppercase(urlify(options.MAKE_EPHEM))) == "YES"

        options = merge(EPHEMERIS_PARAMETERS, options)
        type = strip(uppercase(options.EPHEM_TYPE))

        if type == "SPK"
            options = merge(SPK_PARAMETERS, options)
        elseif type == "APPROACH"
            options = merge(APPROACH_PARAMETERS, options)
        elseif type == "ELEMENTS"
            options = merge(ELEMENTS_PARAMETERS, options)
        end

    end

    options = map(pair -> pair.first => urlify(pair.second), collect(pairs(options)))
    filter!(pair -> !ismissing(pair.second), options)
    push!(options, :COMMAND => string(strip(string(COMMAND))))

    response = HTTP.get(
        ENDPOINT;
        query=options
    )

    return response
end

end # module HorizonsAPI
