# Finease – Smart Financial Management Web App

Click Here to see demo- [Live Demo](https://finease-c8e05.web.app/)

Finease is a modern, user-friendly financial management web application designed to help individuals track, manage, and analyze their personal finances. It combines intuitive design with powerful analytics, enabling users to make smarter financial decisions.

---

## 🌟 Features

- **Comprehensive Dashboard:**
  View your total income, expenses, and overall balance at a glance, with easy-to-understand visual summaries.

- **Seamless Transaction Management:**
  Add, edit, or delete income and expense transactions quickly. Finease ensures all your data is organized and up-to-date.

- **Interactive Charts & Analytics:**
  Visualize your financial patterns with bar charts and pie charts, including monthly comparisons and category-wise breakdowns.

- **Category-wise Tracking:**
  Organize your transactions into categories such as Salary, Freelance, Food, Transport, and more for better budgeting and insights.

- **Secure Authentication:**
  User authentication and authorization are implemented to ensure your data remains safe and private.

- **Responsive & Accessible Design:**
  Fully optimized for desktop, tablet, and mobile devices, providing a seamless experience across all platforms.

- **Budget Insights & Planning:**
  Analyze spending habits, compare monthly totals, and plan your budget effectively using Finease’s simple tools.
---

## 🚀 Getting Started

1. Visit the [Live Demo](https://finease-c8e05.web.app/) to explore the application.
2. Sign up or log in to start tracking your finances.
3. Add your income and expenses, and view your financial insights in real-time.

---

## 🎯 Why Finease?

Finease is perfect for anyone looking to gain **complete control over their finances**. By combining real-time tracking, category-based analytics, and a clean interface, it allows users to:

- Understand their spending habits
- Make informed financial decisions
- Save time managing transactions
- Plan monthly budgets effectively

---

## 📂 Project Structure

```
Finease/
│
├── client/ # React frontend code
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Different app pages (Dashboard, Transactions)
│ ├── context/ # React context for authentication
│ └── assets/ # Images, SVGs, icons
└── README.md # Project documentation

```

##  🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/hossain-shifat/Finance-Management.git
cd Assignment-09
```

2. Install dependencies:
```bash
npm install
```
3. Create `.env.local` file and add Firebase config:

 ```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Run development server:
```bash
npm run dev
```


---

## 💻 Technology Stack

### Frontend
- **Framework & Libraries:** React.js, React DOM, React Router, Lucide React (icons), React Chart.js 2, Recharts
- **Styling & UI:** Tailwind CSS, DaisyUI, Motion (animations)
- **Charts & Data Visualization:** Chart.js, Recharts
- **Notifications & Alerts:** React Toastify, SweetAlert2
- **Build & Development Tools:** Vite, @vitejs/plugin-react, ESLint, @eslint/js

### Backend
- **Server & API:** Node.js, Express.js
- **Database & Cloud:** MongoDB, Firebase Admin SDK
- **Middleware & Utilities:** CORS, dotenv

### Deployment & Hosting
- **Hosting & Authentication:** Firebase Hosting, Firebase Authentication & Firestore

This setup ensures a **fast, responsive, and secure full-stack web application** for modern financial management.
