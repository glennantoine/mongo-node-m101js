Replica Set Members

A replica set in MongoDB is a group of mongod processes that provide redundancy and high availability. The members of a replica set are:

Primary.
    The primary receives all write operations.
Secondaries.
    Secondaries replicate operations from the primary to maintain an identical data set. Secondaries may have additional configurations for special usage profiles. For example, secondaries may be non-voting or priority 0.

You can also maintain an arbiter as part of a replica set. Arbiters do not keep a copy of the data. However, arbiters play a role in the elections that select a primary if the current primary is unavailable.

A replica set can have up to 12 members. [1] However, only 7 members can vote at a time.

The minimum requirements for a replica set are: A primary, a secondary, and an arbiter. Most deployments, however, will keep three members that store data: A primary and two secondary members.