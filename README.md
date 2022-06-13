# OBS Browser Source Test

## Web Server

### Queue API

queue.js provides a FIFO (first in first out) queue

HTTP Method | URL               | JS Method     | Description
---         | ---               | ---           | ---
GET         | /api/queue        | `.size()`     | Get the status of the queue (message count)
GET         | /api/queue?all=1  | `.all()`      | List all queue entries
POST        | /api/queue        | `.put(it)`    | Add an item to the end of queue
DELETE      | /api/queue        | `.get()`      | Remove the first item from the queue
DELETE      | /api/queue?all=1  | `.clear()`    | Remove all items from the queue

### Pages

URL             | Description
---             | ---
/source.html    | OBS Browser source - checks queue for new items
/control.html   | Control panel to add items to the queue
