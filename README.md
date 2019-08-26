### Auto Complete

For me the AutoComplete was especially challenging, but things got easier after finding Material-UI autocomplete for react, after that just took first to understand the code and then implemented the code in my project (witch took some time too).

### React

I choose react because I learn that it is used at Resuelve, regardless of the fact that I have been working with Angular 7 and Angular Material. From there I chose to go with Bootstrap since I have been using it for my personal projects and find it easy and fun to work with.

### Multi Select

If I had more time I would like to implement the multi select option to the search bar.
And implement react router for the search feature.

### Integrating the autocomplete 

At the end the part of code that I am most proud of is the one I have to put more effort into, the part where I implement the autoComple

```javascript

<IntegrationDownshift 
	searchChange={this.searchChange} 
	movies={this.state.movies.map(m => { return { label: m.title.toLowerCase() } })}
/>

```