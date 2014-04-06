# Aggregation Pipeline

$project, $match, $group, $sort, $skip, $limit, $unwind
The $match, $sort, $limit, and $skip pipeline operators can take advantage of an index when they occur at the beginning of the pipeline before any of the following aggregation operators: $project, $unwind, and $group.

db.orders.aggregate([
                      { $match: { status: "A" } },
                      { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
                      { $sort: { total: -1 } }
                   ])


