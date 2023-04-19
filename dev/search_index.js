var documenterSearchIndex = {"docs":
[{"location":"#HorizonsAPI.jl","page":"HorizonsAPI.jl","title":"HorizonsAPI.jl","text":"","category":"section"},{"location":"","page":"HorizonsAPI.jl","title":"HorizonsAPI.jl","text":"Solar system ephemeris data for free!","category":"page"},{"location":"","page":"HorizonsAPI.jl","title":"HorizonsAPI.jl","text":"This project aims to implement the publicly accessible REST API for JPL's HORIZONS ephemeris platform. Once development is complete, this package will allow you to download physical attribute information, position and velocity data, binary files, and more from HORIZONS. Hooks into DataFrames and Interpolations are also in-work as part of a separate package: HorizonsEphemeris.jl.","category":"page"},{"location":"","page":"HorizonsAPI.jl","title":"HorizonsAPI.jl","text":"warning: Warning\nMore documentation will come, but for now, HorizonsAPI only has humble docstrings! For more information, take a look at the project's GitHub repository. There, and in docstrings, you'll find a recurring warning which is reiterated here: this project is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization!","category":"page"},{"location":"docstrings/#Documentation","page":"Documentation","title":"Documentation","text":"","category":"section"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"All docstrings!","category":"page"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"Modules = [\n    HorizonsAPI,\n]\nOrder = [:module, :type, :function, :constant]","category":"page"},{"location":"docstrings/#HorizonsAPI.HorizonsAPI","page":"Documentation","title":"HorizonsAPI.HorizonsAPI","text":"Interact with the JPL HORIZONS REST API.\n\nExtended Help\n\n(Image: Tests) (Image: Docs) (Image: SciML Code Style)\n\nHorizonsAPI\n\nA wrapper around JPL's REST API for the HORIZONS solar system ephemeris platform!\n\nWarningThis package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization! This is an independently written package by an astrodynamics hobbyist. See the HorizonsAPI.jl license file for more information about code sharing and usage!\n\nOverview\n\nThe NASA Jet Propulsion Laboratory (JPL), located at the California Institute of Technology, provides a solar system ephemeris service called HORIZONS. It's fantastic! It can find and visualize periodic orbits, allow you to download position and velocity data for bodies in our solar system, list physical parameters for celestial bodies, and more!\n\nYou may utilize these tools using several methods, including through a web interface, with telnet via telnet ssd.jpl.nasa.gov 6775, and even through email! You can consult the HORIZONS documentation for more information.\n\nIn 2021, JPL released a REST API which allows users to programatically interact with HORIZONS through HTTP requests. This API is also described in the HORIZONS documentation. This Julia package provides an interface to the HORIZONS REST API.\n\nVision\n\nActually, this package will provide two interfaces to the HORIZONS REST API! A precise interace, which matches the syntax of the requests described in the HORIZONS documentation, will be provided. In addition, a more Julian syntax for ephemeris downloading and processing will be provided in a separate interface.\n\nCredits\n\nThis package uses HTTP.jl to process all HTTP requests and responses!\n\nLicense\n\nMIT License\n\nCopyright (c) 2023 Joe Carpinelli\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nExports\n\nfetch_approach\nfetch_elements\nfetch_observer\nfetch_properties\nfetch_spk\nfetch_vectors\n\nImports\n\nBase\nCore\nDocStringExtensions\n\n\n\n\n\n","category":"module"},{"location":"docstrings/#HorizonsAPI.fetch_approach-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.fetch_approach","text":"fetch_approach(\n    COMMAND;\n    file,\n    CALIM_PL,\n    CALIM_SB,\n    CA_TABLE_TYPE,\n    EMAIL_ADDR,\n    TCA3SG_LIMIT,\n    format\n)\n\n\nFetch planetary ephemeris for the body specified by COMMAND, in the EPHEM_TYPE=\"APPROACH\" format.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.fetch_elements-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.fetch_elements","text":"fetch_elements(\n    COMMAND;\n    file,\n    A,\n    EC,\n    ECLIP,\n    EMAIL_ADDR,\n    EPOCH,\n    IN,\n    MA,\n    N,\n    OBJECT,\n    OM,\n    QR,\n    TP,\n    W,\n    format\n)\n\n\nFetch planetary ephemeris for the body specified by COMMAND, in the EPHEM_TYPE=\"ELEMENTS\" format.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.fetch_observer-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.fetch_observer","text":"fetch_observer(\n    COMMAND;\n    file,\n    AIRMASS,\n    ANG_FORMAT,\n    ANG_RATE_CUTOFF,\n    APPARENT,\n    CAL_FORMAT,\n    CAL_TYPE,\n    CENTER,\n    COORD_TYPE,\n    CSV_FORMAT,\n    ELEV_CUT,\n    ELM_LABELS,\n    EMAIL_ADDR,\n    EXTRA_PREC,\n    LHA_CUTOFF,\n    OUT_UNITS,\n    QUANTITIES,\n    RANGE_UNITS,\n    REF_PLANE,\n    REF_SYSTEM,\n    R_T_S_ONLY,\n    SITE_COORD,\n    SKIP_DAYLT,\n    SOLAR_ELONG,\n    START_TIME,\n    STEP_SIZE,\n    STOP_TIME,\n    SUPPRESS_RANGE_RATE,\n    TIME_DIGITS,\n    TIME_ZONE,\n    TLIST,\n    TLIST_TYPE,\n    TP_TYPE,\n    VEC_CORR,\n    VEC_DELTA_T,\n    VEC_LABELS,\n    VEC_TABLE,\n    format\n)\n\n\nFetch planetary ephemeris for the body specified by COMMAND, in the EPHEM_TYPE=\"OBSERVER\" format.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.fetch_properties-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.fetch_properties","text":"fetch_properties(COMMAND; file, EMAIL_ADDR, format)\n\n\nFetch physical attribute data for the body specified by COMMAND.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.fetch_spk-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.fetch_spk","text":"fetch_spk(\n    COMMAND;\n    file,\n    EMAIL_ADDR,\n    START_TIME,\n    STOP_TIME,\n    format\n)\n\n\nFetch planetary ephemeris for the body specified by COMMAND, in the EPHEM_TYPE=\"SPK\" format.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.fetch_vectors-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.fetch_vectors","text":"fetch_vectors(\n    COMMAND;\n    file,\n    AIRMASS,\n    ANG_FORMAT,\n    ANG_RATE_CUTOFF,\n    APPARENT,\n    CAL_FORMAT,\n    CAL_TYPE,\n    CENTER,\n    COORD_TYPE,\n    CSV_FORMAT,\n    ELEV_CUT,\n    ELM_LABELS,\n    EMAIL_ADDR,\n    EXTRA_PREC,\n    LHA_CUTOFF,\n    OUT_UNITS,\n    QUANTITIES,\n    RANGE_UNITS,\n    REF_PLANE,\n    REF_SYSTEM,\n    R_T_S_ONLY,\n    SITE_COORD,\n    SKIP_DAYLT,\n    SOLAR_ELONG,\n    START_TIME,\n    STEP_SIZE,\n    STOP_TIME,\n    SUPPRESS_RANGE_RATE,\n    TIME_DIGITS,\n    TIME_ZONE,\n    TLIST,\n    TLIST_TYPE,\n    TP_TYPE,\n    VEC_CORR,\n    VEC_DELTA_T,\n    VEC_LABELS,\n    VEC_TABLE,\n    format\n)\n\n\nFetch planetary ephemeris for the body specified by COMMAND, in the EPHEM_TYPE=\"VECTORS\" format.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.query-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.query","text":"query(COMMAND; options...)\n\n\nGiven keyword arguments which map to Horizons API parameters, construct a Vector{Pair} that is compatible with the query keyword argument of HTTP.get.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.request-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.request","text":"request(\n    COMMAND;\n    file,\n    A,\n    AIRMASS,\n    ANG_FORMAT,\n    ANG_RATE_CUTOFF,\n    APPARENT,\n    CALIM_PL,\n    CALIM_SB,\n    CAL_FORMAT,\n    CAL_TYPE,\n    CA_TABLE_TYPE,\n    CENTER,\n    COORD_TYPE,\n    CSV_FORMAT,\n    EC,\n    ECLIP,\n    ELEV_CUT,\n    ELM_LABELS,\n    EMAIL_ADDR,\n    EPHEM_TYPE,\n    EPOCH,\n    EXTRA_PREC,\n    IN,\n    LHA_CUTOFF,\n    MA,\n    MAKE_EPHEM,\n    N,\n    OBJECT,\n    OBJ_DATA,\n    OM,\n    OUT_UNITS,\n    QR,\n    QUANTITIES,\n    RANGE_UNITS,\n    REF_PLANE,\n    REF_SYSTEM,\n    R_T_S_ONLY,\n    SITE_COORD,\n    SKIP_DAYLT,\n    SOLAR_ELONG,\n    START_TIME,\n    STEP_SIZE,\n    STOP_TIME,\n    SUPPRESS_RANGE_RATE,\n    TCA3SG_LIMIT,\n    TIME_DIGITS,\n    TIME_ZONE,\n    TLIST,\n    TLIST_TYPE,\n    TP,\n    TP_TYPE,\n    VEC_CORR,\n    VEC_DELTA_T,\n    VEC_LABELS,\n    VEC_TABLE,\n    W,\n    format\n)\n\n\nReturn the requested HORIZONS data in the form of an HTTP.Response.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.to_kwargs-Tuple","page":"Documentation","title":"HorizonsAPI.to_kwargs","text":"to_kwargs(parameters)\n\n\nReturn a sequence of Expr objects which represent a NamedTuple with a format that is compatible with keyword arguments in function definitions.\n\nExtended Help\n\nReferences:\n\nhttps://discourse.julialang.org/t/unpack-namedtuple-into-a-function-definition/97500/2\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.urlify-Tuple{Any}","page":"Documentation","title":"HorizonsAPI.urlify","text":"urlify(x)\n\n\nThe Horizons API accepts very specific formatting for some strings. For example, setting the format option to \"text\" is fine, but \"'text'\" will cause the server to throw an error. Each method of urlify takes in a single argument, and outputs a string.\n\nThe one exception here is the method which takes an argument of type Missing; that method simply returns the singleton value missing to the option to be filtered out before the query is sent.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#HorizonsAPI.APPROACH_PARAMETERS","page":"Documentation","title":"HorizonsAPI.APPROACH_PARAMETERS","text":"Parameters specific to close-approach requests, as specified by the Horizons API documentation.\n\n\n\n\n\n","category":"constant"},{"location":"docstrings/#HorizonsAPI.COMMON_PARAMETERS","page":"Documentation","title":"HorizonsAPI.COMMON_PARAMETERS","text":"Common parameters, as specified by the Horizons API documentation.\n\n\n\n\n\n","category":"constant"},{"location":"docstrings/#HorizonsAPI.ELEMENTS_PARAMETERS","page":"Documentation","title":"HorizonsAPI.ELEMENTS_PARAMETERS","text":"Parameters specific to user-requested heliocentric osculating orbital elements, as specified by the Horizons API documentation.\n\n\n\n\n\n","category":"constant"},{"location":"docstrings/#HorizonsAPI.ENDPOINT","page":"Documentation","title":"HorizonsAPI.ENDPOINT","text":"The Horizons API endpoint.\n\n\n\n\n\n","category":"constant"},{"location":"docstrings/#HorizonsAPI.EPHEMERIS_PARAMETERS","page":"Documentation","title":"HorizonsAPI.EPHEMERIS_PARAMETERS","text":"Ephemeris-specific parameters, as specified by the Horizons API documentation.\n\n\n\n\n\n","category":"constant"},{"location":"docstrings/#HorizonsAPI.SMALL_BODY_PARAMETERS","page":"Documentation","title":"HorizonsAPI.SMALL_BODY_PARAMETERS","text":"Parameters specific to small-body ephemeris requests, as specified by the Horizons API documentation.\n\n\n\n\n\n","category":"constant"},{"location":"docstrings/#HorizonsAPI.SPK_PARAMETERS","page":"Documentation","title":"HorizonsAPI.SPK_PARAMETERS","text":"Parameters specific to spacecraft ephemeris, as specified by the Horizons API documentation.\n\n\n\n\n\n","category":"constant"}]
}
