#
# Common query parameters
#

"""
A HORIZONS `QueryParameter` which is associated with many types of requests.
"""
@with_kw struct CommonParameter <: QueryParameter
    name::String
    default::Union{String, Nothing}
    allowable::Union{Vector{String}, Nothing}
    description::Union{String, Nothing}
end
