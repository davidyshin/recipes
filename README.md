# Project Structure

I wanted to separate my "page" level logic and "component" level logic to different folders, to differentiate which files would handle data/abstract logic.

```
    - Pages
        - Home
        - CreatePage
        - DetailsPage
        - Favorites
    - Components (Not yet created, but TBD)
        - Button
        - Input
```


# Data Handling 

Most of my "pages" handle fetching and rendering data. The idea was for the pages to retrieve the data, and pass it down to smaller components. However, due to time constraints, I was only able to create the higher "page" level components.

  ## Favorites Data 
  - I chose the obvious route of handling favorites with localStorage.
  While saving the id's of the recipes a user favorites into localStorage was easy, retrieving a list of favorite recipes according to the localStorage required a bit more thought. 
    - My initial thought was to fetch the recipes again, and then filter the recipes by the existing ID's saved in localStorage. However, that seemed dry and repetitive.
    - I decided to handle it the way I would during a work day, have my backend team handle it. (haha just kidding). 
      - Seriously though, unless I were to use all the data that was fetched on my favorites pages, I did not want to fetch all the recipes. So I read the JSON-Server docs and found that I could query by ID. Using the ID's I had in my localStorage, I created a queryString to fetch just the recipes I needed.


   
# Future Features

I admit, I started this Case Study very late. With ~2-3hours devoted to this, I did not want to delay in sending this in.

Things I wanted to implement but did not get to: 
- Styling
- Modularizing the application, creation and separation of re-usable components.
- Testing 
    - I was confused as to what "automated testing" meant in the instructions for this. I was going to implement a very baseline snapshot testing, but that felt like a lazy way out. If given more time, I would love to actually implement a full test suite.

## Summary

This app is very late and very incomplete. I had some personal matters to take care of while juggling my actual work. I do apologize and thank everyone for understanding. If allowed, I'd love to polish this a bit more. 

Thanks for reading.



<br>
<br>
<br>
<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
````
