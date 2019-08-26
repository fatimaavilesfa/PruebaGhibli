# This is a solution for Resuelve front-End test

### We are consuming Ghibli's API and making a searchbar with autocomplete based on the titles of the movies 

### Link to project in production

```
[http://fatimaavilesfa.github.io/PruebaGhibli](http://fatimaavilesfa.github.io/PruebaGhibli)

```

In the project directory run:

### `npm start`

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

### Auto Complete

###Autocomplete

For me the AutoComplete was especially challenging, but things got easier after finding Material-UI autocomplete for react, after that just took first to understand the code and then implemented the code in my project (witch took some time too).

###React

I choose react because I learn that it is used at Resuelve, regardless of the fact that I have been working with Angular 7 and Angular Material. From there I chose to go with Bootstrap since I have been using it for my personal projects and find it easy and fun to work with.

###Multi Select

If I had more time I would like to implement the multi select option to the search bar.
And implement react router for the search feature.

###Integrating the autocomplete 

At the end the part of code that I am most proud of is the one I have to put more effort into, the part where I implement the autoComple

```javascript

<IntegrationDownshift 
	searchChange={this.searchChange} 
	movies={this.state.movies.map(m => { return { label: m.title.toLowerCase() } })}
/>

```




