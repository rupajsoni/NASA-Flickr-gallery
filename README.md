# NASA Flickr gallery

This repository contains the codebase for a Node.js based responsive application to retrieve the NASA images through Flickr API.

## Functionalities
1. **Search**
  * A user can enter a query in the search box. If this query matches any of the images in the NASA album, it will be retrieved and displayed in the application.
2. **Sorting**
  * A user can sort the current requested query by selecting one of these options:
    * _Date - Latest_
    * _Relevance_
    * _Interestingness_
    * _Date - Oldest_
3. **Photo gallery**
  * _Grid_ - All the images obtained through the API are displayed in a responsive photo gallery
  * _Pagination_ - A user can browse through the pages of images

## Additional details
1. **Cross browser compatible**
  * The website is compatible with the latest and latest-1 versions of popular browsers like Chrome, Firefox and Internet Explorer.
    Cross browser compatibility tests were conducted using [browserling](https://www.browserling.com/) which is popular online tool.

2. **Improved performance**
  * _Optimized CSS delivery_
    * The CSS files have been minimized to decrease file size and increase CSS style application.
  * _Optimized JavaScript_
    * Render blocking calls have been avoided as much as possible. This reduces the wait time to receive JavaScript functionality over a network
  * _Prioritize visible content_
    * Above-the-fold content has been prioritized so that the base content of the website has lower load time.

3. **Responsive**
  * The website can be run across multiple platforms with varying screen sizes and resolutions.

4. **Intuitive design**
  * The web application is easy to use and self-explanatory with stylized content and intuitive design.

## Running the application
* Clone the repository `git clone https://github.com/rupajsoni/NASA-Flickr-gallery.git`
* Install node
* Run `npm install`
* Run `npm start`

## Demo
Check out the live app on http://fedexercise.mybluemix.net/
