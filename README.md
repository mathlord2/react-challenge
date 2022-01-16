# AnimeSearch

A web app that allows users to search and filter animes using the Jikan anime API. 

## GitHub Pages Link

[https://ericxiao.tech/react-challenge/](https://ericxiao.tech/react-challenge/)

## Explanation of API

I decided to use an anime API, since I do enjoy watching anime as a hobby, so working on an anime-related project is an exciting opportunity for me. More specifically,
I chose the Jikan API since I felt that it was very well-documented and contained a humongous database of animes for me to work with.

## Other Uses

The Jikan API simply web-scrapes the MyAnimeList website for information on animes and mangas, so there are not really many other uses of this API besides searching. However, an example of an app that could leverage this API in a different way than simply searching (like mine) is one that generates a random anime for someone to learn about each day; this can allow them to expand their tastes rather than simply watching the same type of anime every day.

## Responsiveness and mobile-friendliness

When aiming for a responsive/mobile-friendly app, I put high emphasis on the grid layout of the results page. I wanted to make sure that the cards spanned the entire width of the screen no matter the size, which is exactly what I achieved in this app; wide computer screens would have 4 to 5 cards in a row displayed, while smaller mobile screens may only have 1 or 2 in a row.

## Accessibility

To make my app accessible to the disabled, more specifically those with varying degrees of blindness, I would introduce a speech search feature that would allow them to search for animes by speaking their search terms. I would also create a text-to-speech feature that would translate the search results to speech.

## Future Changes

If I were to make future changes to this app, firstly I would implement the accessibility features I mentioned in the previous section. An API that I can use for that is the Web Speech API; it would interpret the user's speech and use it in a query to search for anime, and it would also convert the search results into speech for the user to hear. Another change to my project would be to include more filters (e.g. sorting by date, filtering by country of origin or season, etc.) and display all of the information given by the API in a nicer format (e.g. the API also gives a synopsis with each anime, but the text is very long so I didn't bother displaying it in the card). The filters could be done with more JavaScript code or by checking out the documentation of Jikan to see if it supports the filters I need, and to display the API information, I would try to develop a separate component or page and use the React Router library.