# workoutAI


Our url has a lot of data and is too long to copy and paste, so please find a link to our project in the google doc linked below:
https://docs.google.com/document/d/1n7vguFAgYPcaiiuNH5vELqSXRtSPUveNaT_99RFfjd8/edit?usp=sharing




Inspiration
All three of us come from extensive athletic backgrounds, where regular workouts are an integral part of our daily life. After talking to many people on campus and doing our research on beginning workout plans, we realized that simply_starting_a_regime is the biggest hurdle when beginning to train. To combat this, we created an applet in the new You.com developer environment that creates a custom workout for the user to take to the gym, eliminating the heavy lifting before the heavy lifting.

What it does
The applet takes in information about the muscle group you want to work, calls the exercise database to get a curated list of exercises, then enters a GPT prompt requesting a workout plan based on these specifications, which is then returned to the user.

How we built it
Since You.com can only call from one API, we had to build our own API from scratch which included requests to both the exercise database API and OpenAI's GPT-3 API to take the muscle group the user wants to train, run a prompt request to OpenAI based on the exercises returned, and generate a usable, ready-to-go workout routine with instructions for any and all related exercises for the user to refer to in the workout.

Challenges we ran into
There was a fairly large struggle in setting up the API initially--namely, just getting past Firebase's setup and hosting requirements. Once we were able to move beyond that, it was relatively simple to code in the You.com software and pull from our newly-created API. Additionally, it was a learning process fitting into the constraints of what the APIs we used. For example, we could only form the query for GPT-3 based on the data that the exercise API gave us, so we had to think critically about what our limitations were at each step. Towards the end, we spent a lot of time on prompt engineering, trying to figure out the best query to get a usable workout for the customer.

Accomplishments that we're proud of
None of us have ever attended a hackathon before, so this was an environment that took some time to get accustomed to. We had a lot of ideas initially, overwhelmed by all of the avenues to explore and opportunities to dive into, so the fact that we latched onto one and spent a meaningful amount of time creating was something to take home for us. Additionally, oftentimes, it is easy to pounce on an idea which is maybe the quickest way to start but not the solution the group is most passionate about. The fact that we were able to find a problem near and dear to us as athletes was something we were really proud of because it made the entire process more enjoyable.

What we learned
First and foremost, asking for help is key. It is rare to go into a hackathon and not use any resources that you have. As beginners, we were forced to go out of our comfort zone and ask for help from mentors more than we were accustomed to receiving help. Additionally, making an entire project from scratch in 36 hours or less is naturally going to come with ups and downs, so learning to embrace the struggle that comes with the process was super important. Lastly, humbling ourselves was a big factor. Because there are many smart minds present, most of whom have more hackathon experience than us, we were forced to return and remain in the student mindset and soak up as much information as we possibly could.

What's next for WorkoutAI
As the ChatGPT API gets rolled out for public usage, utilizing that to further improve our curated workout plans is a near and clear next step. In addition to this, given more time, we would look to increase the user parameters in our model to make workouts even more personalized to each new customer embarking on their fitness journey. Beyond that, we are extremely passionate about overall health and fitness, so including a nutritional aspect would be a great addition to the feature, specifically by expanding the APIs we pull data from and utilizing LLMs to generate meal preparation, scrape recipes, or recommend nearby eateries.

