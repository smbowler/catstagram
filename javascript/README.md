# Catstagram  <img src="../favicon.ico" style="max-height: 30px">
A full-stack of a web-based application, modeled after Instagram but with cats. 

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


#### TODO # 18: Open the Developer Tools, Navigate to Console tab
    a) Right click the page and select "Inspect"
    b) Choose the tab labeled "Console"


#### TODO #19: Find/Fix the Errors
Do you see any errors in the console? You should see an error that looks like this:

 <img src="../img/console_error.png" style="max-height: 450px">


    a) Read the error, find what line the error is on, click on the link to the brain.js file
    b) Go back to Gitpod, remove the error so that the javascript file is empty.
    c) Save your work in Gitpod by typing "Ctrl S" or File > Save
    d) Return to Chrome and refresh the page. Recheck the console for errors. You should see a no more error on line 1 of brain.js.
    
    
#### TODO #20: Add an onClick function to the FIRST Button
As you get deeper into Javascript, you'll learn more about different ways to 
connect the HTML and Javascript together, including learning about frameworks that make this 
easy. For now, we're going to add a simple onClick function into the opening tag of the **FIRST** ```<button>``` only.

    a) Inside the opening <button> tag of the FIRST photo only, add the following code:
         onClick="likePhoto()"
    b) Confirm that the button element now looks like this:
           <button onClick="likePhoto()" id="likeBtn1">Like</button>
    c) Save your work in Gitpod
    

#### TODO #21: Write the function to be performed onClick
Now that we've added this function to the opening tag of the first button, we need to 
write the function called  ```likePhoto``` in the brain.js file

    a) Navigate to brain.js in Giptod
    b) Write a function called "likePhoto" that prints the word "Like" to the console.
    c) Save your work in Gitpod
    d) Navigate to Chrome, inspect the page, open the console and test the function!
    e) You should see the word "like" printed to the console each time you press the button, like this:
  
   <img src="../img/console_like.png" style="max-height: 450px">

    

#### TODO #22: Create a variable to store the number of likes!
Now that we have a function that is working, we need to modify our javascript so that 
it keeps track of the number of likes on each photo. How can we do this?

    a) Inside the brain.js file, above your likePhoto function, add a variable called "counter" and give it a value of zero 
    b) Modify your likePhoto function so that it increases the counter by one each time the function is called
    c) Instead of printing "like" to the console, now print the counter variable. 
    c) Save your work in Gitpod
    d) Return to Chrome and open the console to see if the variable counter is increasing.
    

#### TODO #23: Connect the javascript code to the HTML using JQuery
Ok, we've done a few things now to give Catstagram some functionality:
    * We've written a function called likePhoto that we call when we click the first Like button on the first photo.  
    * We've added a variable called "counter" to keep track of the likes
    * We've confirmed that our funciton and counter are working because we are printing to the console
    
Now that we know this, we are going to connect our javascript code with our HTML code, so that
when you click the like button, you will actually see the number of likes below each photo. In order to do this,
we're going to use a library called JQuery. The basic idea behind JQuery is called DOM manipulation, which basically means
it allows you to change the HTML using javascript. 

You will learn more about JQuery in the advanced class. For now, copy and paste the following code 
into the ````brain.js```` file. 

            var counter1 = 0;
            var counter2 = 0;
            var counter3 = 0;
            var counter4 = 0;
            var counter5 = 0;
            
            $(document).ready(function() {
            
                $("#likeBtn1").click(function(){
                    counter1++;
            
                    $("#likeCount1").text(counter1);
                });
            
                $("#likeBtn2").click(function(){
                    counter2++;
            
                    $("#likeCount2").text(counter2);
                });
            
                $("#likeBtn3").click(function(){
                    counter3++;
            
                    $("#likeCount3").text(counter3);
                });
            
                $("#likeBtn4").click(function(){
                    counter4++;
            
                    $("#likeCount4").text(counter4);
                });
            
                $("#likeBtn5").click(function(){
                    counter5++;
            
                    $("#likeCount5").text(counter5);
                });
            
            });
            
#### TODO #24: Check out the Likes
Ok, so now that you've added JQuery, you should see that the likeCount of each photo is increasing
whenever the "Like" button is clicked. You've accomplished a lot! Let's Review:
    * You built the frontend of the applicaiton using HTML and CSS
    * You then added a function called likePhoto that allowed you to see how the HTML and Javascript work together.
    * Then you added JQuery in order to manipulate the view/HTML so that you could show the number of likes
Notice, that the function you wrote is still working and still printing to the console. We just added JQuery
to be able to show the number of likes to the user.    
   
#### TODO #25: Review your work and check for errors
A good developer always reviews her work before she commits it. Review all of your work and check for the following:

    * Correct syntax in javascript
    * Ensure the like button performs how it should
    images are centered
    * No errors in the console
    * All TODOs are complete
    
    
#### TODO #26: Push your code to Github
    * First, open a terminal window by clicking at the top Window > New Terminal
    * Then run each of the following commands one by one:
        * ```git add .  ``` then hit Enter. Don't forget the ```.```
        * ```git commit -m 'insert specific message about what you are saving'``` 
              This second command can be tricky.You want to write a message inside the qoutation marks that describes what you are changing. 
              Think of this as a sticky note message. Press Enter. 
        * ```git push``` then press Enter. 
        * If you successfully ran these commands one at a time, your terminal window should look like this:
           
 <img src="../img/successful_push.png" style="max-height: 450px">
        
        * Checkout the live site on your portfolio and make sure the changes are appearing.




