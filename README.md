## Website Performance Optimization portfolio project

In this project, I have used what I have learned in the Website optimization courses
to improve the performance of the website and run it on approximately 60fps.

### Installation

* Clone the project
* navigate to the project repository
* run the following code: ``` npm install ```
* run: ``` grunt ```
* open server: ``` $> python -m SimpleHTTPServer 8080 ```
* Open a browser and visit localhost:8080

### Optimization Steps

#### index.html Page

1. Avoid render blocking
	* Inline css
	* add media query for print
2. Avoid parser blocking of js file by adding async
3. minify css, and js

#### pizaa.html

1. Avoid render blocking
	* Inline css
2. Avoid parser blocking of js file by adding async
3. minify css, and js
4. optimize JS
	* Use requestAnimationFrame
	* Avoid Forced Synchronous layout


