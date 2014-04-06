Network Errors

What are the reasons why an application may receive an error back even if the write was successful:

- The network TCP network connection between the application and the server was reset between the time of the write and the time of the getLastError call.

- The MongoDB server terminates between the write and the getLastError call.

- The network fails between the time of the write and the time of the getLastError call