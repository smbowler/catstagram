# Catstagram
A full-stack of a web-based application, modeled after Instagram but with cats. 

## First, Answer This Question
*Start here young padouan and riddle us this question:*
* Do you use Instagram, Twitch, or Soundcloud, or any other web application? Do you *actually* know how they work? **PAUSE.**
* If the answer was *"No,"* that's okay. Even though over a billion people use these applications, 99.9%
of them don't either. **We want you to be in that .01%** of 
people that can explain to your friends and family exactly how every web-based project works, front to back. 

## How?
*How are you going to learn how web applications work?*
* You are going to learn by **building your own version of Instagram**, except only with
pictures of...cats.

## Why?
*Why you should want to know how web-based applications work:*
* You are alive in 2021, right!? The internet has already changed the way you live, learn, work, think, and play, right?! 
* Whether you choose to pursue a career building world-changing software or you become a musician, knowing how applications
work will open up an entirely new world to you, while also making you a more engaged, thoughtful member of society. 

## Part I: Things to Know

## INTERNAL TODO: A Universal Diagram

## File Structure / File Tree
INTERNAL TODO: Insert picture of file structure from gitpod
* This project, like most projects, has its own folder, that contains the following:
    * **index.html page:**
        * This is the page that the browser loads and is the file that you should preview when you want to see an application
    * **brains.js**:
        * This is the javascript file, the brains of the operation.
    * **favicon.ico**
        * This is the icon that appears on the tab in the browser. It stands for "favorite icon"

## What is Github and Why/How Do you use it? 

### What is Github?
 * Just like you save your work in Google Drive for school, software developers save their code in something called
 Github. 
 * When we did setup for this class, you created a repository for your code to live. You can think of a repository (repo for short),
 as a folder or locker for your code. 
 * Inside the locker, you put all of the files, images, and graphics you need to run
 your application. 
 ### Why do you use it?
 * Just like when you build a house, you can have multiple people working at the same time - painting, hanging drywall, etc - you can do the same thing with code.
 * It's important that everyone working on software be able to save their work in one place, so that everyone
 can know what progress has been made. 
 * Github allows developers to save their code so that everyone can see it, just like Google Drive. 
 ### How do you use it?
 * First, go to Window > New Terminal in Gitpod. 
    * This will open up the terminal or bash window, which allows
 you to talk directly to your computer. Believe it or not, the first computer was just this window!
 * Once the terminal is open, you are going to run three different commands, pressing enter after each one. 
 * The first command: 
    * ```git add .  ``` then hit Enter. Don't forget the ```.```
    * ```git commit -m 'insert specific message about what you are saving'``` 
    This second command can be tricky.You want to write a message inside the qoutation marks that describes what you are changing. 
    Think of this as a sticky note message. Press Enter. 
    * ```git push``` then press Enter. 
 * If you successfully ran these commands one at a time, your terminal window should look like this:
 <img src="img/successful_push.png" style="max-height: 450px">

 
 
## Part II: Preview index.html + Check for errors
Below you will find instructions on what TODO to build Catstagram. Take each bulletpoint one by one. Work in Google Chrome Incognito. 
There are **nine** TODOs in Part I. Complete each one!

#### TODO #0: Open an incognito window in Chrome.
    * Click on the three dots in the top right corner of the browser window
    * Select "Open Incognito Window"

#### TODO #1: Investigate/Preview Index.html file
    * Open the index.html file in Gitpod and look it over
    * Ask the questions:
        * Do I know what each of these lines of html do?
        * What should I expect to see when I preview this file? *Hint: What's inside the body tag?*
        * Do I see any errors, any opening tags or closing tags that are wrong?
    * Right click on the file index.html and click "Preview with LiveServer"
    * Ask the question: 
        * Was I right? Am I seeing what I expected to see?
    * Fix the errors in the html

#### TODO # 2: Open the Console
    * Right click the page and select "Inspect"
    * Choose the tab labeled "Console"

INTERNAL TODO: Add file names markdown language look like

#### TODO #3: Find/Fix the Errors
    * Read the error, find what line the error is on, click on the link to the brain.js file
    * Go back to Gitpod, remove the error so that the javascript file is empty.
    * Save your work in Gitpod by click "Ctrl S" or File > Save
    * Return to Chrome and refresh the page. Recheck the console for errors. You should see a no more error on line 1 of brain.js.

## Part II: Build The Structure of Catstagram with HTML
Next you will build the structure of Catstagram so that you and your users can start to get value
from the applicaiton, i.e. see pics of cats!

#### TODO # 4: Add Basic HTML
    * Inside the  ``` <body> </body> ``` add an ``` <h1></h1>``` and name the site "Catsagram"
    * Below the h1 title, add an ``` <h5></h6>```and add the caption "Sharing the World's cats" 
    * Save your work in Gitpod
    * Return to Chrome and refresh the page. You should see a title and tagline for Catstagram

    
    
#### TODO #5: Add One Cat Image from a Source URL
    * Create an ``` <img>``` tag with an attribute
    * Add an attribute inside the opening ``` <img>``` tag for ``` src```
    * Search Google for an image of a cat, right click on the image, and select "copy image address"
    * Inside the opening ``` <img>``` tag, find the ``` src``` tag and paste the url of the cat image so that 
    it looks like this ``` src="https://i.pinimg.com/originals/3b/4f/55/3b4f55f606f04ed5300d1bcf589c010e.jpg"```
    * Save your work in Gitpod
    * Return to Chrome and refresh the page. You should see your image on the website
 
#### Investigate and Discuss

Next, we are going to investigate Instagram and determine what else needs to be added
*What else is associated with each photo? Where is each element located? Investigate so you know how to build Catstagram*

* Navigate to Instagram.com or go to the app on your phone. 
* Notice the different elements associated with each photo:
        * A # of Likes
        * A caption
        
#### TODO #6: Add Like Count and Caption underneath the photo
    * Underneath the ``` <img>``` tag, add a ``` <p></p>``` with '0 Likes' in it
    * Underneath the ``` <img>``` tag, add a ``` <p></p>``` with a caption. Get creative!
    * Save your work in Gitpod
    * Return to Chrome and refresh the page. You should see a like count and a caption underneath the photo

#### TODO #7: Add 4 More Cat Pics with Like Count and Captions
    * Underneath the image, like count, and caption, add four more images following the same steps as above.
    * Each time you add a photo, save your workspace in Gitpod, and you should see your cat images, like counts, and captions show up in a column just like Instagram
    * When you finish, review your work above
    
#### TODO #8: Review your work and check for errors
A good developer always reviews his work before she commits it. Don't worry, you'll learn what a commit is in a second. For now, 
review all of your work and check for the following:

    * Correct indentation
    * Opening and closing tags (except for img tag)
    * Spelling/grammer mistakes
    * All images are showing up
    * All TODOs are complete

    
#### TODO #9: Push your code to Github



##### What is @$%@ is Github and how do you use it?

#### Part I Guiding Questions
* What is the file tree?
* What is a favicon?
* What does it mean to "inspect the page"? How do you get to the console of a page?
* What does src stand for?
* What is Github? What are the commands to add your code

