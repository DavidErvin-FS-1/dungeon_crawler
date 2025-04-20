# Log ...🚀

## Project & Portfolio V

### David Ervin

![Degree Program](https://img.shields.io/badge/degree-Web%20Development-blue.svg)

<br/>

## 📢 &nbsp; Weekly Stand Up

Each week I will summarize my milestone activity and progress by writing a stand-up. A stand-up is meant to be a succinct update on how things are going. Use these prompts as a guide on what to write about:
<br/>

⚙️ &nbsp; Overview - What I worked on this past week.
🌵 &nbsp; Challenges - What problems did I have & how I'm addressing them.
🏆 &nbsp; Accomplishments - What is something I "leveled up" on this week.
🔮 &nbsp; Next Steps - What I plan to prioritize and do next

<br/>

### Week 1

#### ⚙️ &nbsp; **Overview**

This week I did some personal research to find out if I could utilize tools like [Cheerio](https://cheerio.js.org/) and [Puppeteer](https://pptr.dev/) to scrape data from a website to use in a project. Unfortunately, I found that the website I was interested in scraping data from had no regularly structured data. I spent some time trying to figure out if I could manage to scrape the data I wanted, but I was unsuccessful. So I turned to my old project from a previous class, a dungeon crawler game that I designed. I was unable to get authentication for the old repo working before unexpected events occurred. I won't get into details but I was forced to create a new repo and copy over some the details from it. Some of the details have been changed to reflect some new tools I would like to utilize and removal of some of the old ones. README's were updated to make them more readable and to reflect the new changes. I then turn to coding the client-side of the game. I setup Vite and React utilizing `yarn create vite . --template react` to get started. Then I installed any dependencies I know for sure will be utilized such as Tailwind CSS for our styling, React Router for page navigation, and Axios for API calls. I then created a few basic components and styled them with Tailwind CSS (e.g. button variations and menu) to utilize later.

#### 🌵 &nbsp; **Challenges**

This week was full of challenges for me. I looked into web scraping and the rules that come with it. I found that the website I was interested in scraping data that had no `robots.txt` restrictions. Due to the irregular data structure of the website, I was unable to scrape the data I wanted and wasted more time then I should've trying. I then turned to my old project and was unable to get Github authentication working for the old repository, this is when an unexpected event took me away from home for two and a half days. When I got back I wanted to get started immediately to get back on track. I created a new repo and copied over some of the details from the old one. I then updated some documents to reflect some new changes I'd like to make to the project. I then started coding the client-side of starting by setting up Vite and React utilizing `yarn create vite . --template react`, removed unnecessary files, and installed dependencies I know I will be using (e.g. Tailwind CSS, React Router, and Axios). I then created a few basic components and styled them with Tailwind CSS (e.g. button variations) to utilize later.

#### 🏆 &nbsp; **Accomplishments**

This week I learned a lot about web scraping and the rules that come with it. I learned about `robots.txt` and how it can be used to restrict web scraping. I also learned about the different tools that can be used for web scraping, such as Cheerio and Puppeteer. While I failed in my attempt to get the data, I did learn a lot from my research and attempts.

#### 🔮 &nbsp; **Next Steps**

Next steps are to get some more components coded and styled with Tailwind CSS (e.g. forms, input fields, game components, etc.) and begin working on the game pages design and layout.

<br/>

### Week 2

#### ⚙️ &nbsp; **Overview**

This week I continued to work on the client-side of the game. I created a few more components and styled them with Tailwind CSS (e.g. forms, input fields, menu, etc.). I also started working on the game pages design and layout. I created a few pages and styled them with Tailwind CSS (e.g. homepage, login, register, etc.). I was looking at how to implement the game logic for the game components and how to handle the game state. I want it data, e.g. player stats, to be stored in a database and retrieved when needed but also be reactive to changes as the game progresses. I began by creating an allocate stats form that allows the player to allocate their stats. This will tie into the game logic / server side later on. As for the game components themselves, the sidebar and the game terminal, require more attention. Both of these components will require server side logic to handle the game state and player actions.

#### 🌵 &nbsp; **Challenges**

Time is my biggest challenge this week. As a father of a new born, time has been hard to come by. I have been trying to balance my 3 year old and my new born, and get enough sleep to function. I have been able to get some work done, but not as much as I would like to. With that being said, I think I have made some good progress on the client-side of the game but have concerns about the project scope and whether I will have a complete project by the end of the term.

#### 🏆 &nbsp; **Accomplishments**

This week I was able to create a few more components and style them with Tailwind CSS. I also started working on the game pages design and layout. I was able to create a few pages and style them with Tailwind CSS. I also started working on the game logic for the game components and how to handle the game state. I created an allocate stats form that allows the player to allocate their stats. This will tie into the game logic / server side later on.

#### 🔮 &nbsp; **Next Steps**

Next steps are to continue working on the client-side of the game alongside the server side. I want to get the game logic and server side working so that I can test the game components and see how they interact with each other. The terminal game component will require a lot of attention as it will require data to be stored and show to the player of each choice that character makes and also the outcome of those choices. Most of the logic will be handled on the server side as random events will occur and the player will have to make choices based on those events (e.g. found a locked door, do you pick the lock or try to break it down?). I also want to get the game state working so that the player can see their stats and progress.

<br/>

### Week 3

#### ⚙️ &nbsp; **Overview**

This week I turned my focus to the server side of the game. I created a new sever directory and initialized a new Node.js project. I installed the necessary dependencies such as Express for the server, Mongoose for MongoDB interactions, etc. I created a basic server setup with Express and connected to a MongoDB database. Then it was time to create the necessary models for the game. I created a user model to handle user details (e.g. email, username, password) and coded the logic for user registration and login. Trying to get ahead a little I locked into creating a prologue for game to introduce the player to the game world and story. This prologue will be displayed to the player when they first login to the game utilizing API calls to retrieve the data from the server.

#### 🌵 &nbsp; **Challenges**

This week wasn't much of a challenge for me. Switching to server side development put me in my comfort zone. I was able to get the server setup and connected to a MongoDB database without any issues. Creating the initial user model and logic for user registration and login was straightforward. The prologue was a little tricky as I wanted to create a simple text-based introduction to the game world and story. I had to think about how to structure the data so that it could be easily retrieved and displayed to the player and how to handle showing the prologue line by line to the player allowing them to read at their own pace and click to continue.

#### 🏆 &nbsp; **Accomplishments**

This week I was able to create a new server directory and initialize a new Node.js project. I installed the necessary dependencies such as Express for the server, Mongoose for MongoDB interactions, etc. I created a basic server setup with Express and connected to a MongoDB database. I created a user model to handle user details (e.g. email, username, password) and coded the logic for user registration and login. I also started working on the prologue for the game to introduce the player to the game world and story.

#### 🔮 &nbsp; **Next Steps**

Next steps are to continue working on the server side of the game. I want to ensure the prologue is working correctly and that the players only see it when they first login to the game. I also plan to add stats to the user model (e.g. health, strength, agility), this will then lead into allowing the player to allocate their stats after reading the prologue.
