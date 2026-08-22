# Learning & Blocker Journal: Solo Recon (Days 1-2)
**Learner:** Sheila_Mbae
**Date:** 17 AUG 2026  
**Phase:** Block 1 - GitHub Setup & Initialization  
**Time Boxed:** 45 Minutes | **Actual Time:** 32 Minutes

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
