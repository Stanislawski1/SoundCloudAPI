# SoundCloud Hybrid Test Automation Framework

This project is a professional-grade test automation framework for SoundCloud, demonstrating a **hybrid approach** (combining API and UI testing). It utilizes **Cypress** with the **Page Object Model (POM)** and **JSON Schema Validation** to ensure a robust, scalable, and maintainable testing architecture.

---

##  Key Features

* **Hybrid Testing Strategy**: Leverages the SoundCloud API to fetch test data (track URLs, IDs) instantly before performing UI assertions, significantly reducing test execution time and flakiness.
* **Page Object Model (POM)**: Implements a clean separation between test logic and UI element selectors, making the framework easy to update when the UI changes.
* **Advanced API Client**: A custom-built API wrapper that handles requests, headers, and dynamic `client_id` injection for streamlined backend testing.
* **JSON Schema Validation**: Uses the **AJV** library to perform contract testing, ensuring that API responses match predefined structures and data types.
* **Data-Driven Testing (DDT)**: Dynamically generates multiple test cases from external JSON fixtures to maximize coverage without code duplication.
* **Session Injection**: Bypasses complex login UI and anti-bot measures by injecting `oauth_token` cookies directly into the browser session.

---

##  Tech Stack

* **Cypress** (Core Automation Engine)
* **JavaScript ES6+** (Programming Language)
* **AJV** (JSON Schema Validator)
* **SoundCloud API v2** (Testing Object)

---

##  Project Structure

```text
cypress/
├── api/             # API clients and request wrappers (Logic)
├── e2e/             
│   ├── api/         # Pure API & Contract tests
│   └── ui/          # Hybrid E2E scenarios (User Flows)
├── fixtures/        # Test data & JSON Schemas for validation
├── pages/           # Page Objects (BasePage & Specific Page classes)
└── support/         # Custom commands & Global configurations