# Learning & Blocker Journal: Solo Recon
**Learner:** Sheila_Mbae
**Date:** 17 AUG 2026 - 21 AUG 2026 
**Phase:** DAY 1-5  
**Time Boxed:** 5 DAYS (20 hours) | **Actual Time:** 4 DAY (10 hours)

## Log Entry 01: Repository Creation & README Initialization

**Task:** Create a public GitHub repository and initialize a README.md file manually via the browser interface.

**Challenge / Blocker:** 
I initially didn't understand the difference between a "local folder" on my computer and a "repository" on GitHub. 
I also hesitated on whether to check the "Add a README" box during creation, as I wasn't sure if doing it manually later was required.

**Resources Consulted:** 
- GitHub Docs: Creating a new repository(https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- GitHub Docs: About READMEs(https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

**Decision & Resolution:** 
I decided to create the repo without the auto-generated README to strictly follow the assignment's manual workflow. 
I learned that a "commit" is simply a saved snapshot of my work. I successfully created the file, named it README.md, and committed it with a standard "chore:" prefix in the commit message.

**Time Breakdown:**
- Account/Repo Setup: 2 mins
- Reading Documentation: 11 mins
- Creating & Committing README: 8 mins
- Journaling this entry: 5 mins
- Buffer/Navigation: 6 mins

---------------------------------------------------------------------------------------------------

## Log Entry 02: Serverless Function Creation & File Structuring

**Task:** Create the `/api` directory structure and write the initial `stock.js` serverless function to handle inventory queries.

**Challenge / Blocker:** 
I did not know how to create a folder using only the GitHub web interface, as there is no "New Folder" button. 
I also needed to understand how Vercel would know to run this specific file.

**Resources Consulted:** 
- Vercel Docs: Serverless Functions Overview (https://vercel.com/docs/functions/serverless-functions)
- GitHub UI exploration (discovering the `folder/filename.ext` naming convention).

**Decision & Resolution:** 
I learned that typing `api/stock.js` in the file name input automatically generates the `api` folder and places `stock.js` inside it. 
I also learned that Vercel automatically maps any file inside an `/api` directory to a live URL route (e.g., `/api/stock`). 
I pasted the provided logic, which uses a simple JavaScript object as a mock database, and committed it with a 'feat:' prefix.

**Time Breakdown:**
- Creating api/stock.js structure: 25 mins
- Pasting and reviewing code logic: 15 mins
- Committing with proper convention: 10 mins
- Updating Journal: 5 mins
- Buffer/Navigation: 3 mins

---------------------------------------------------------------------------------------------------

## Log Entry 03: Vercel Deployment & Live Endpoint Testing

**Task:** Connect the GitHub repository to Vercel, deploy the serverless function, and validate the live API endpoint with query parameters.

**Challenge / Blocker:** 
After clicking "Deploy," I was initially unsure if the process was stuck because the "Building" status remained for about 45 seconds. 
I also had to figure out the exact URL structure to test the specific item query.

**Resources Consulted:** 
- Vercel Dashboard UI (observing the real-time build logs).
- Vercel Docs: Serverless Functions Routing (https://vercel.com/docs/functions/serverless-functions/routing) to confirm the `/api/filename` URL mapping.

**Decision & Resolution:** 
I waited patiently and observed the logs, which successfully transitioned to "Ready." 
I learned that Vercel provides a default `.vercel.app` domain. 
I constructed the test URL by appending `/api/stock?item=laptop` to the base domain. 
The API successfully returned a 200 OK JSON response with the correct stock data, and correctly returned a 404 error for an unknown item ("banana"), proving the logic works in the cloud.

**Time Breakdown:**
- Vercel Account Setup & Repo Import: 20 mins
- Monitoring Deployment Logs: 5 mins
- Constructing URLs and Testing 3 Scenarios (In Stock, Out of Stock, Not Found): 15 mins
- Updating Journal & Taking Victory Screenshot: 10 mins
- Buffer/Navigation: 5 mins

--------------------------------------------------------------------------------------------------

## Log Entry 04: Day 3 Original Build - Testing the Polling Workflow

**Task:** Execute the polling workflow and verify the query endpoint serves updated cached data.

**Challenge / Blocker:** 
I encountered two significant constraints during testing:
1. I do not have Node.js installed locally, so I could not execute `scripts/poll-warehouse.js` directly.
2. Vercel serverless functions operate on a **read-only filesystem at runtime**, meaning a serverless endpoint cannot write to `cache.json` during execution. This is a documented Vercel limitation for ephemeral compute environments.

**Resources Consulted:** 
- Vercel Docs: Serverless Function Filesystem Limitations (https://vercel.com/docs/functions/runtimes#read-only-file-system)
- Node.js Docs: `fs` module (https://nodejs.org/api/fs.html)

**Decision & Resolution:** 
Rather than abandoning the prototype or introducing an external database (Redis, MongoDB) which would exceed the time-box, I chose to **simulate the cron job execution manually via Git commits**. I:
1. Edited `warehouse-source.json` to reflect a stock change (laptop: 15 → 14).
2. Edited `cache.json` to match, simulating what the 5-minute poll would write.
3. Verified the live `/api/stock?item=laptop` endpoint returned the updated cached value (`"stock": 14, "source": "cached_data"`).

This proved the **query architecture works correctly** — the endpoint successfully reads from the cache layer, not the source. The polling mechanism itself is architecturally sound but would require a persistent write environment (e.g., a VPS, AWS Lambda with S3, or an external DB) for production deployment.

**Production Note for Day 4 Pivot:** 
This read-only filesystem limitation actually makes the Day 4 webhook pivot *easier*. Webhooks will write to an external database (like a JSONBin.io store or Google Sheet via API), and the `/api/stock.js` endpoint will read from it — no filesystem conflicts.

**Time Breakdown:**
- Simulating warehouse change via Git: 25 mins
- Simulating poll execution via Git: 15 mins
- Testing live endpoint (3 scenarios): 20 mins
- Screenshots and verification: 5 mins
- Journaling this critical discovery: 15 mins
- Buffer: 5 mins
