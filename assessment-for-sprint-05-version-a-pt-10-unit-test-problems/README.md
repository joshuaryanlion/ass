# Sprint 5 Unit Test Problems

## Setup

1. Download the starter using the green button below
2. Rename the folder to `firstname-lastname-sprint-5-practice-problems`. For
   example, if your name is "Jane Doe", then name your folder
   `jane-doe-sprint-5-practice-problems`
3. Run `npm install` to install dependencies
4. Run `npm test` to run test specs
5. Your objective is to implement the functions in `/problems` to pass all
   specs.

## User Registration

You have joined a new team and are given a task to investigate the user
registration service, which works fine but has grown increasingly sluggish as
the site gained popularity.

1. Only a fixed number of users can be registered at once. If a new user
   registers after the max has been reached, the user who has been registered
   the longest is unregistered.

2. Once a username is taken, that username can **never** be chosen again, even
   if that user is unregistered.

Your goal is to optimize this code so it can register 1 million new users with
a max of 500 thousand users in under 1000ms.

### User Registration Hints

1. Start by understanding the problem and identifying performance bottlenecks.
2. Use big-O analysis: Which operations can be optimized?
3. Consider all the tools (data structures) you have learned this week and
   pick the right tool for the job.  An optimal solution for this problem will
   use 1 set, 1 linked list, and 0 arrays.
   - Important Note: You **must** use the `LinkedList` class provided for you in
     the starter code

Fill out the code in the `./problems/user-registration.js` file.

There are two test sets of specs for this problem, implementation and timing
specs.

You can test the implementation of your code with the implementation specs
using the following command:

```bash
npm test test/user-registration-implementation-spec.js
```

You can test the optimization of your code with the timing specs using the
following command:

```bash
npm test test/user-registration-timing-spec.js
```

An important note for the timing specs:

There is a time buffer built into the timing specs to account for processor
speeds. Your actual grade will be scored on a processor that is different from
yours, so the amount of test specs you actually fail/pass may be different from
what you see in your local machine when you run the timing specs. Make sure you
read the instructions carefully to check that you achieved what the problem is
asking you to do.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Rename your folder to begin with your `firstName_lastName`
3. Zip up your folder
4. Upload it