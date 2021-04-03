[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/cdfishe1/show-match)
![GitHub top language](https://img.shields.io/github/languages/top/cdfishe1/show-match)

# Show-Match

Show Match allows a user to search movies and tv shows, read a description, and then click a button to view a YouTube video.

## Created by
* [Charles Fisher](https://github.com/cdfishe1)
* [Javiann Marrero](https://github.com/javiistacks)
* [Thomas Schmidt](https://github.com/Thomas-NW)

## Table of Contents
* [User Story](#user-story)
* [Show Match Demos](#show-match-demos)
* [Deployment](#deployment)
* [Development](#development)
* [Challenges and Successes](#challenges-and-successes)
* [Directions for Future Development](#directions-for-future-development)
* [Credits](#credits)
* [Special Thanks](#special-thanks)
* [License](#license)

## User Story

```
AS A media consumer
I WANT to learn more about movies and tv shows
SO THAT I can watch a trailer of that show
```

## Acceptance Criteria

```
GIVEN a media search dashboard with form inputs
WHEN I search for a movie or tv show
THEN I am presented with a list of shows and that show is added to the search history
WHEN I view a show
THEN I am presented with the name, poster image, and summary of that show
WHEN I click on the Watch Now button for a show
THEN I am taken to a YouTube video trailer corresponding to that show
WHEN I click on a search term in the search history
THEN I am again presented with a list of shows for that search term
```

## Show Match Demos

### Screencast on wide screen
![Screencast on wide screen](assets/images/wide-screen-demo.gif)

### Screencast on mobile
![Screencast on mobile](assets/images/mobile-screen-demo.gif)


## Deployment

Site deployed at [Show Match](https://cdfishe1.github.io/show-match/)

## Development

### We used two server side apis:
* [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
  * This API generates the results of the user search using the fetch() web api.
* [YouTube API](https://developers.google.com/youtube/v3)
  * This API generates the YouTube links using the ajax call method.

### We used Pure.css and Bootstrap
* [Pure.css](https://purecss.io/)
  * Pure.css was used to generate the YouTube search buttons needed to overcome Bootstrap limitations
* [Bootstrap](https://getbootstrap.com/)
  * Bootstrap was used for layout and mobile responsivess

## Challenges and Successes
* Managing Git, pull requests, and dealing with conflicts was a challenge for all.
* Working with different coding styles was sometimes a challenge, such as blending vanilla javascript with jQuery.
* Pure.css helped with creating and managing the YouTube buttons without the conflicts created by Bootstrap styling.
* Getting the javascript to interate through the YouTube buttons to point to appropriate videos was a great success!

## Directions for Future Development

* Multiple users will be able to perform a search.
* They will be able to select and save their searches to remote storage.
* The app will allow users to share their lists.
* The app will compare the lists and return a list of common selections.
* The users will be able to decide which shows they wish to view together based on this shared list.

## Special Thanks

* David Metcalf, bootcamp tutor, helped us understand how to use the checkValidity() method to help with form validation.
* Paul Zwik, guest teaching assistant, who helped us understand how to loop through the YouTube buttons with the needed YouTube link.

## License

Copyright (c) Charles Fisher, Javiann Marerro, Thomas Schmidt All rights reserved.<br>
Please be kind and change content if you wish to use this code.

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Charles Fisher, Javiann Marerro, Thomas Schmidt

<blockquote>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</blockquote>
</details>



