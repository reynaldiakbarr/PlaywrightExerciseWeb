# 🎭 Web Automation with Playwright
![Playwright Tests](https://github.com/reynaldiakbarr/PlaywrightExerciseWeb/actions/workflows/playwright.yml/badge.svg)

# Web Automation with Playwright

* **Goal:** To automate the end-to-end user journey (Login -> Add to Cart -> Checkout) for a modern e-commerce platform.
This project demonstrates advanced web automation using Playwright. It features a robust CI/CD pipeline, and comprehensive Allure reporting.

## 🚀 Key Features
* **Multiple Major Browser Testing:** Executes tests across major browsers.
* **Page Object Model (POM):** Implements a clean, modular, and maintainable code structure.
* **CI/CD Integration:** Powered by GitHub Actions for automated execution on every push or pull_request.
* **Automated Reporting:** Generates Allure Reports hosted on GitHub Pages, featuring recorded videos and screenshots of failures.
* **Advanced Debugging:** Configured with Playwright Trace Viewer for deep-dive analysis of timeouts and regressions.

## 📊 Live Report & Monitoring
You can view the latest test results here:  👉 **[View Allure Report](https://reynaldiakbarr.github.io/PlaywrightExerciseWeb/)**

## 🛠️ Tech Stack
* **Language:** TypeScript
* **Framework:** Playwright
* **Reporting:** Allure Report
* **CI/CD:** GitHub Actions

## 📦 Local Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/reynaldiakbarr/PlaywrightExerciseWeb.git
   cd PlaywrightExerciseWeb

2. **Install Dependencies:**
   ```bash
   npm install
   npx playwright install

3. **Run all tests:**
   ```bash
   npx playwright test

4. **Run tests and generate/view Allure Report:**
   ```bash
   npm run report

## ⚙️ CI/CD Pipeline
* **The workflow is defined in .github/workflows/playwright.yml and includes:**
* **Dependency and browser installation.**
* **Test execution using GitHub Secrets for sensitive credentials.**
* **Artifact uploading (videos, traces, and screenshots).**
* **Automated generation and publication of the Allure Report to GitHub Pages.**
