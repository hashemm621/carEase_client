# 🚗 CarEase: Vehicle Rental Marketplace

## 🌟 Project Overview 

CarEase is a modern, full-stack vehicle rental platform designed to connect renters with vehicle owners seamlessly. It provides a secure environment for browsing a diverse range of vehicles, managing bookings, and handling vehicle listings with secure Firebase authentication.

## 🚀 Main Technology Stack

This project is built using the **MERN Stack** and modern web development tools:

* **Frontend:** `React.js`
* **Styling:** `Tailwind CSS`, `daisyUI`
* **Backend:** `Node.js`, `Express.js`
* **Database:** `MongoDB` (Managed with Mongoose)
* **Authentication:** `Firebase`
* **Deployment:** `Vercel` (Client), `Express/Vercel` (Server)

## ✨ Key Features 

* **Diverse Vehicle Browsing:** Browse a wide range of vehicles including cars, SUVs, trucks, and luxury cars.
* **Vehicle Management:** Owners can add and manage their own vehicles with availability options.
* **Seamless Booking:** Simple system to manage all your bookings in one place.
* **Secure Auth:** Secure authentication with Firebase for safe login and profile management.
* **Transparent Pricing:** Clear pricing per day along with detailed vehicle location information.
* **User Trust:** Highlights trusted vehicle owners and featured vehicles for reliability.
* **Interactive UI:** Responsive and interactive user interface built with React, Tailwind CSS, and Framer Motion.

## 📦 Dependencies Used 

### Client-Side (`carEase_client`)

| Dependency Category | Key Packages |
| :--- | :--- |
| **UI/State** | `react`, `react-dom`, `react-router` |
| **Styling/Animation** | `@tailwindcss/vite`, `tailwind-css`, `daisyui`, `framer-motion` |
| **Utilities** | `firebase`, `date-fns`, `react-hot-toast`, `sweetalert2` |
| **Dev Tools** | `@vitejs/plugin-react`, `eslint`, `globals` |

### Server-Side (`carEase_server`)

| Dependency Category | Key Packages |
| :--- | :--- |
| **Core** | `express`, `cors` |
| **Database** | `mongodb` |
| **Security/Config** | `dotenv`, `firebase-admin` |

## ⚙️ Running Locally 

Follow these steps to set up and run the CarEase project on your local machine.

### Prerequisites

* `Node.js` installed (v18+)
* `MongoDB` connection string and `Firebase` config ready.

### 1. Clone the Repositories

```bash
# Clone the client repository
git clone [https://github.com/hashemm621/carEase_client.git](https://github.com/hashemm621/carEase_client.git)

# Clone the server repository
git clone [https://github.com/hashemm621/carEase_server.git](https://github.com/hashemm621/carEase_server.git)
