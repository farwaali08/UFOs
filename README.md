# UFOs :alien:

## OVERVIEW

This project features a dynamic webpage, which was built to display data regarding UFO sightings. The webpage was built using JavaScript (JS), and the display was modified using HTML/CSS and Bootstrap.

The end product includes a webform that accepts user inputs, and adjusts the display according to the user's specifications.

## TOOLS, RESOURCES, & QUICK LINKS

### Data

 * [data.js](https://github.com/farwaali08/UFOs/blob/a9786791d7d55218b373279c1fb2ebf3a25be212/static/js/data.js)

### Code

* [app.js](https://github.com/farwaali08/UFOs/blob/cb5949a3ecedd5342b5196552cf0980e70dd8ac2/static/js/app.js)

### Software

 * JavaScript
 * HTML/CSS
 * Bootstrap

## RESULTS & DEMO 

The webpage can be accessed by clicking [here](https://farwaali08.github.io/UFOs/). The video below will demonstrate how to navigate the webpage and filter using different search criteria.

### DEMO

https://user-images.githubusercontent.com/89050277/140686974-5d1fba48-5a35-4c5b-8ca8-ed707cc68c5e.mov



## ANALYSIS & SUMMARY

As seen in the video above, the webpage is able to accept user inputs, and will filter and display the results accordingly, however there are limitations with this design that may contribute to a poor user experience. Two critical limitations are summarized below:

***Case Sensitivity and Matching***

![alt_text](https://github.com/farwaali08/UFOs/blob/ab0470518c07c3a590038b0570c944896b43ece6/static/images/case_sensitive.png)


In order to yield results, the search criteria must be an exact match to data in the table, which may not always be intuitive, and will not produce accurate results. As seen in the image above, entering "CA" instead of "ca", results in different outcomes, despite the fact that both represent "California". Essentially, the user must know exactly what they're looking for, which limits the utility of a search/filter function.

For this reason, the webpage would benefit from a drop-down menu, as it would provide the user with all available options. This is also important when considering the next point:

***Data Quality***

![alt_text](https://github.com/farwaali08/UFOs/blob/ab0470518c07c3a590038b0570c944896b43ece6/static/images/needs_parsing.png)

The data is not maintained in a consistent format, as illustrated in the "Duration" column above, which can also hinder the filtering functionality. This can be improved by the following:

* Parsing the data so that each column follows a consistent format
* Updating the code to filter for partial matches, OR
* Creating a drop-down menu

### ADDITIONAL RECOMMENDATIONS

* Add "Clear Search" or "New Search" button to reset the search parameters
* Create form for users to submit information on additional sightings  
* Add filter for date range
* Add date picker
       
 ![alt_text](https://github.com/farwaali08/UFOs/blob/684a9ed6e7098b886718fc073d10c7994d966533/static/images/example_date.png)
 
   >[Source](https://formden.com/blog/date-picker)
