
## Part IV: Give Catstagram Some Functionality

#### Investigate and Discuss
We're making progress. From the options below, what have we built so far? 

1. Javascript
2. Database
3. HTML
4. CSS
5. All of the Above

Yes, we have already built the **structure and content** of the website, the HTML, and we have **styled** it using CSS. 
Next, in order to make the site have functionality, from the list above what language are we going to use? 

#### TODO #16: Add A Heart Button above the caption of the First Photo
    a) Above the <p> 0 Likes </p> add a button element:
        <button> Heart </button>
    b) Save your work on Gitpod
    c) Return to Chrome and confirm that you have a button with the word "Heart" on it below your first photo.

#### TODO # 17: Open the Developer Tools, Navigate to Console tab
    a) Right click the page and select "Inspect"
    b) Choose the tab labeled "Console"


#### TODO #18: Find/Fix the Errors
    a) Read the error, find what line the error is on, click on the link to the brain.js file
    b) Go back to Gitpod, remove the error so that the javascript file is empty.
    c) Save your work in Gitpod by typing "Ctrl S" or File > Save
    d) Return to Chrome and refresh the page. Recheck the console for errors. You should see a no more error on line 1 of brain.js.
    
    
#### TODO #19: Make the Button DO Something, Part 1
As you get deeper into Javascript, you'll learn more about different ways to 
connect the HTML and Javascript together, including learning about frameworks that make this 
easy. For now, we're going to add a simple onClick function into the opening tag of the ```<button>```

    a) Inside the opening <button> tag, add the following code:
         onClick="likePhoto()"
    b) Confirm that the button element now looks like this:
         <button onClick="likePhoto()">Heart</button>
    c) Save your work in Gitpod
    
#### TODO #20: Add A Heart Button to EVERY Photo
Now that you've added some functionality to the button, copy and paste it for each of your
five photos. 

    a) Above the <p> 0 Likes </p> add a button element to every photo:
         <button onClick="likePhoto()">Heart</button>
    b) Save your work on Gitpod
    c) Return to Chrome and confirm that you have a button with the word "Heart" on it below every photo.

#### TODO #21: Make the Button DO Something, Part 2
Now that we've added this function to the opening tag of the button, we need to 
write the function called  ```likePhoto``` in the brain.js file

    a) Navigate to brain.js in Giptod
    b) Write a function called "likePhoto" that prints the word "Like" to the console.
    c) Save your work in Gitpod
    d) Navigate to Chrome, inspect the page, open the console and test the function!
    e) You should see the word "like" printed to the console each time you press the button, like this:
  
   <img src="img/console_like.png" style="max-height: 450px">

    

#### TODO #22: Create a variable to store the number of likes!
Now that we have a function that is working, we need to modify our javascript so that 
it keeps track of the number of likes on each photo. How can we do this?

    a) Above your likePhoto function, add a variable called "likeCount" and give it a value of zero 
    b) Modify your likePhoto function so that it increases the likeCount by one each time the function is called
    c) Instead of printing "like" to the console, now print the likeCount variable. 
    c) Save your work in Gitpod
    d) Return to Chrome and open the console to see if likeCount is increasing.
    

#### TODO #?: Add a Heart Image to each Button
Just like on Instagram, we now want to add a heart image to each button, which we will
turn red if you like the photo!

        a)Look inside the 'img' folder and locate the 'heart_btn.jpg' image
        b)In between the opening and closing  <button></button>  tags, add an <img> tag, with the following attributes:
           id="heart_btn"
           src="img/heart_btn.jpg"
        c)Inside the  <style></style>  tag in the head, add the following class:
        
               #heart_btn{
                          width: 23px;
                        }
#### TODO #?: Adjust the likes with each click of the Heart Button
Now that we have  a true LIKE button, we want to adjust the number of likes that are visible on the
page to a user. In order to do this, we're going to use a library called JQuery, which allows us
to manipulate the HTML in a page through javascript.       
   
#### TODO #23: Review your work and check for errors
A good developer always reviews her work before she commits it. Review all of your work and check for the following:

    * Correct syntax in javascript
    * Ensure the like button performs how it should
    images are centered
    * No errors in the console
    * All TODOs are complete
    
    
#### TODO #24: Push your code to Github
    * First, open a terminal window by clicking at the top Window > New Terminal
    * Then run each of the following commands one by one:
        * ```git add .  ``` then hit Enter. Don't forget the ```.```
        * ```git commit -m 'insert specific message about what you are saving'``` 
              This second command can be tricky.You want to write a message inside the qoutation marks that describes what you are changing. 
              Think of this as a sticky note message. Press Enter. 
        * ```git push``` then press Enter. 
        * If you successfully ran these commands one at a time, your terminal window should look like this:
           <img src="img/successful_push.png" style="max-height: 450px">
        * Checkout the live site on your portfolio and make sure the changes are appearing.




