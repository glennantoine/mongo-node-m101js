You can configure your applications via the drivers to read from secondary nodes within a replica set. 
What are the reasons that you might not want to do that? 

- If your write traffic is significantly greater than your read traffic, you may overwhelm the secondary, which must process all the writes as well as the reads. Replication lag can result.

- You may not read what you previously wrote to MongoDB.

- If the secondary hardware has insufficient memory to keep the read working set in 