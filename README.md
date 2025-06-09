# Babynama - Frontend Developer Intern Assignment

Welcome to the Babynama internship assignment! This short project is designed to simulate a real-world task and help us understand your skills and thought process.

**Objective:** Build a small, self-contained feature in Next.js.  
**Time Allotment:** 2-4 hours.

---

### **Part 1: Getting Started & The Task**

1.  **Repository Setup:** You have already created a repository from this template. Now, install the dependencies:
    ```bash
    npm install
    ```
2.  **The User Story:** Your goal is to implement the following feature:
    > "As a busy parent exploring Babynama's resources, I want to see a simple, clear list of upcoming live webinars on a dedicated page so I can quickly see what's available."

3.  **Your Implementation Tasks:**
    * **Create a Page:** Build a new page at the `/webinars` route.
    * **Display Data:** You don't need an API. Create a mock data array directly in your page file. The array should contain at least three webinar objects, each with an `id`, `title`, `speaker` (e.g., "Dr. Sumitra Meena"), and `date`. Render this data as a list of styled cards on the `/webinars` page.
    * **Add Interactivity:** Add a "View Details" button to each card. When clicked, it should log the `id` of that webinar to the browser's console (e.g., `console.log("Viewing details for webinar ID: 3")`).

---

### **Part 2: Submission**

After you've finished coding, please complete the following two steps.

1.  **Deploy Your Work:** Deploy your project to Vercel (it's free).
2.  **Complete this README:** **This is the most important step.** Edit this `README.md` file in your repository to include:
    * **Live URL:**
    - Home: https://v0-new-project-m79h7tau4zk-gifflerde-bellerinashines-projects.vercel.app 
    - Webinars Page : https://v0-new-project-m79h7tau4zk-gifflerde-bellerinashines-projects.vercel.app/webinars
    * **Choices Made:** I used Next.js App Router with a simple mock data array inside `/webinars/page.tsx` to render webinar cards quickly. I chose this for speed and clarity since the requirement didn’t need API integration.
    * **Roadblock & Learning:** At first, I had a 404 issue when trying to visit `/webinars`. I learned that the folder name inside the `app/` directory determines the route. Renaming `babynama-webinars` to `webinars` inside `app/` solved the issue. Also learned to use Vercel correctly for deployment.
    * **Screenshot:**
        ![Link for scrrenshot](https://github.com/Bellerinashine/Babynama-assignment/blob/main/2025-06-09_15h52_58.png)

To submit, please share the link to your finished GitHub repository with us. Good luck!
