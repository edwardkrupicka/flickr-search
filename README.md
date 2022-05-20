# [Flickr Image Search App](https://edwardkrupicka.github.io/flickr-search/)

## The Task
Write an application that uses the Flickr image search API and displays the images in a grid.
Requirements:
• The application should allow the user to input a search term and display the resulting
images in grid format.
• Feel free to use whatever technologies you're the most comfortable with. This includes
any sort of open-source third-party frameworks, etc. Please attribute your sources using
comments.
Your priorities should be:
A working app. Shortcuts are fine given the time constraints, but be prepared to justify them
and explain better solutions you would have implemented with more time. Clean code and
architecture. We expect this to take a maximum of 2 hours so no need to implement features
that would obviously require more time than that. A concise and readable codebase that
accomplishes all of the above requirements is the goal, so don’t try to do any more than is
required to solve the problem cleanly.

Flickr API You can make this call to the Flickr API to return a JSON object with a list of photos.
https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=90520be9485600ef
The text parameter should be replaced with the query that the user enters into the app.
The JSON response you'll receive will have items described like this example.
{
"id": "52081246904",
"owner": "99514996@N05",
"secret": "701a068189",
"server": "65535",
"farm": 66,
"title": "I LUVS MUH SOCK",
"ispublic": 1,
"isfriend": 0,
"isfamily": 0
},
You can use these parameters to get the full URL of the photo:
http://farm{farm}.static.flickr.com/{server}/{id}_{secret}.jpg
So, using our example from before, the URL would be
http://farm66.static.flickr.com/65535/52081246904_701a068189.jpg
