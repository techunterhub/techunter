# Techunter

Techunter is a modern web application built with **Next.js**. It offers a seamless user experience with a variety of features such as a contact form that integrates with Telegram, robust CI/CD pipelines for staging and production deployments, Vercel analytics for performance tracking, and more.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Features

- **Contact Form Integration**: Submissions are sent directly to a Telegram channel for real-time updates.
- **Staging and Production Pipelines**: CI/CD setup ensures smooth deployment to Vercel.
- **Vercel Analytics**: Track user activity and performance metrics with ease.
- **Modern UI/UX**: Built with Mantine and TailwindCSS for a clean, responsive design.
- **State Management**: Integrated with Redux and React Hook Form.
- **Sanity CMS**: Manage and deliver content dynamically.

---

## Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) (v14)
- [React](https://reactjs.org/) (v18)
- [Mantine](https://mantine.dev/) (UI library)
- [TailwindCSS](https://tailwindcss.com/) (CSS framework)

### Backend
- [Sanity CMS](https://www.sanity.io/)
- [Nodemailer](https://nodemailer.com/) (for email handling)
- [Telegram Bot API](https://core.telegram.org/bots)
- zoho mail

### Additional Tools
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vercel Analytics](https://vercel.com/analytics)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/techunterhub/techunter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd techunter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables (see [Environment Variables](#environment-variables)).

---

## Scripts

Here are the available scripts for development and deployment:

- **Start Development Server**: 
  ```bash
  npm run dev
  ```
- **Build for Production**: 
  ```bash
  npm run build
  ```
- **Start Production Server**: 
  ```bash
  npm run start
  ```
- **Build for Staging**: 
  ```bash
  npm run build:stage
  ```
- **Build for Production**: 
  ```bash
  npm run build:prod
  ```
- **Lint Code**: 
  ```bash
  npm run lint
  ```

---

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```plaintext
NEXT_PUBLIC_APP_ENV=production # or staging
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
SANITY_PROJECT_ID=your-sanity-project-id
SANITY_DATASET=your-sanity-dataset
ZOHO_USER = your user
ZOHO_PASS = yoour password
ZOHO_HOST = smtp.zoho.com
ZOHO_PORT = 465
NODE_ENV=development
```

---

## Deployment

### CI/CD Pipeline
The project includes CI/CD pipelines for both staging and production environments:
- **Staging**: Deployed to `stage.techunterhub.com`.
- **Production**: Deployed to `techunterhub.com`.

### GitHub Actions
Separate workflows (`stage.yml` and `prod.yml`) are configured for automated deployments based on specific branches or commit messages.

### Vercel
The application is hosted on Vercel for high performance and reliability.

---

## Contact

For any inquiries, use the contact form on the website or reach out via **Telegram**.

---

## License

This project is licensed under the [MIT License](LICENSE).

> **Note:** There are still many things to fix and improve in the project. Contributions and feedback are welcome!
