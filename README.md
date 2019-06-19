# Now Stacktrace Error
When using the node builder, stack traces outputted have incorrect line numbers and file names.
This is a minimally reproducible example, just download this folder, run `now dev` inside it (with now cli installed), and open it in the browser.
You should see a stacktrace with the line number off by ~ 47 lines.
