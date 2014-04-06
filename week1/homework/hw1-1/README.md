# Homework: Homework 1.1

Install MongoDB on your computer and run it on the standard port.

Use mongorestore to restore the dump into your running mongod. Do this by opening a terminal window (mac) or cmd window (windows) and navigating to the directory so that the dump directory is directly beneath you. Now type:

mongorestore dump

Note you will need to have your path setup correctly to find mongorestore.

Now, using the Mongo shell, perform a findOne on the collection called hw1_1 in the database m101. That will return one document. 
Please provide the value corresponding to the "answer" key (without the surrounding quotes) from the document returned.
