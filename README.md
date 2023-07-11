# MovieFlix

<h2> Welcome to my repository.
<h3>This project is developed with React Native and Expo, facilitating the development.
    <img align="center" alto="Ellen-react" height="30" width="50"  
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" > </h3>   
<h2>
<h3>It is a Movie Mobile APP that consumes the TMDB API, to gain access it is necessary to 'Register and Login', where the user can browse through 4 categories of Movies,
having a 'Details' page, a 'Film Search' page, which contains, in addition to the search results, 4 trailers are displayed.</h3>
<h2>
<h3>To use this project it is necessary to follow the following installation steps.💻</h3><h2>
    
<h3>1 - node_module ⤵️</h3>
    
````
npm install
````
 <h2>
<h3>For Login and Registration verifications, it is necessary to create an auth folder with auth.js file inside the
    
auth.js and put your firebase settings.</h3> 

<h3>2 - firebase   ⤵️</h3>

````
npm install firebase
````
<h2>
<h3>For using environment variables</h3>
    
<h3>3 - react-native-dotenv ⤵️</h3>

````
npm install react-native-dotenv
````
<h2>
<h3>To consume TMDB API</h3>

<h3>4 - axio ⤵️ </h3>

````
npm install axios
````
<h2>
<h3>To use gradients in the project</h3>

<h3>5 - expo-linear-gradient ⤵️</h3>

````
 npx expo install  expo-linear-gradient
````
<h2>
<h3>To use the Trailers</h3>

<h3>react-native-youtube-iframe </h3>

<h3>Following the installation steps in this link ⤵️</h3>
<h4>https://lonelycpp.github.io/react-native-youtube-iframe/install</h4>
<h3>Obs: If the project is created with React Native CLI app, follow the instructions.</h3>
<h2>

<h3>OBS ❌
<h3>ERROR in ./node_modules/react-native-web-webview/dist/postMock.html 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. 
</h3>

<h3>"how it was solved ⤵️"</h3>

````
npm install react-native-web-webview –save
````

<h3>enter the project's NodeModule => find the webpack folder inside it => lib inside lib => confg folder inside the config => the default.js file. Going through the lines of the file will have a 'const rules', with JSON writing at the end of this writing inside the JSON add ⤵️</h3>

````
{
  test: /postMock.html$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
}

````

 <h2>   
<h3>To upload the project use ⤵️</h3>

````
npx expo start
````
<h2></h2>
    
<div>
    
  <div display= "flex" align="center">
      <img align="center" alto="Ellen-home" height="500" width="270" 
    src=https://github.com/Ellen-TSantos/movies/assets/122386488/b43f3bc6-fb9f-446b-8f94-6c4326bae996>
       <img align="center" alto="Ellen-login" height="500" width="270" 
    src=https://github.com/Ellen-TSantos/movies/assets/122386488/fad52e6e-8e16-4b27-9605-ba51f8ff32ef>
    <h2></h2> 
       <img align="center" alto="Ellen-movie" height="500" width="270" 
    src=https://github.com/Ellen-TSantos/movies/assets/122386488/458f9927-f016-4f91-87a1-972e1e19aa54>  
      <img align="center" alto="Ellen-details" height="500" width="270" 
    src=https://github.com/Ellen-TSantos/movies/assets/122386488/1e4dbb70-98f0-45aa-a991-cd1041ae31c5>
    <h2></h2>
      <img align="center" alto="Ellen-search" height="500" width="270" 
    src=https://github.com/Ellen-TSantos/movies/assets/122386488/a7313dc3-1f8d-47f7-8463-fe9d7bee945d>  
      <img align="center" alto="Ellen-trailer" height="500" width="270" 
    src=https://github.com/Ellen-TSantos/movies/assets/122386488/54089f7e-4493-4abd-ad97-25c520c2c03b> 
</div>

