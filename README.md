📱 Web Automation with Playwright
**Goal:** To automate the end-to-end user journey (Login -> Add to Cart -> Checkout) for a modern e-commerce platform.

This project demonstrates advanced web automation using Playwright. It features a robust CI/CD pipeline, and comprehensive Allure reporting.

🚀 Key Features
Multiple Major Browser Testing: Executes tests across major browsers.

Page Object Model (POM): Implements a clean, modular, and maintainable code structure.

CI/CD Integration: Powered by GitHub Actions for automated execution on every push or pull_request.

Automated Reporting: Generates Allure Reports hosted on GitHub Pages, featuring recorded videos and screenshots of failures.

Advanced Debugging: Configured with Playwright Trace Viewer for deep-dive analysis of timeouts and regressions.

📊 Live Report & Monitoring
Access the latest test execution results publicly here:

👉 View Allure Report

🛠️ Tech Stack
Language: TypeScript

Framework: Playwright

Reporting: Allure Report

CI/CD: GitHub Actions

📦 Local Installation & Setup
# Clone the repository:

git clone https://github.com/reynaldiakbarr/PlaywrightExerciseWeb.git
cd PlaywrightExerciseWeb

# Install Dependencies:

npm install
npx playwright install

# Run all tests
npx playwright test

# Run tests and generate/view Allure Report
npm run report

⚙️ CI/CD Pipeline
The workflow is defined in .github/workflows/playwright.yml and includes:

Dependency and browser installation.

Test execution using GitHub Secrets for sensitive credentials.

Artifact uploading (videos, traces, and screenshots).

Automated generation and publication of the Allure Report to GitHub Pages.
