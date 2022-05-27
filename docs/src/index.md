# `HORIZONSAPI.jl`
_Solar system ephemeris data for free!_

This project aims to implement the publicly accessible REST API for JPL's 
[HORIZONS](https://ssd-api.jpl.nasa.gov/horizons.html) ephemeris platform.
Once development is complete, this package will allow you to download 
physical attribute information, position and velocity data, binary files,
and more from HORIZONS. Hooks into [`DataFrames`](https://dataframes.juliadata.org/stable/) 
and [`Interpolations`](http://juliamath.github.io/Interpolations.jl/stable/) are 
also in-work.

!!! warning
    More documentation will come, but for now, `HORIZONSAPI` only has humble 
    [docstrings](docstrings)! For more information, take a look at the project's 
    [GitHub repository](https://github.com/cadojo/HORIZONSAPI.jl/). There, and 
    in docstrings, you'll find a recurring warning which is reiterated here:
    this project is not affiliated with or endorsed by NASA, JPL, Caltech, or
    any other organization!
