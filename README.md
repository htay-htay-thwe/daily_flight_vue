# ✈️ Daily Flight Vue

A modern flight booking web application built with Vue 3, TypeScript, and Vuex. This project provides a user-friendly interface for searching and booking flights, inspired by Agoda's design principles.

![Application Screenshot](https://github.com/user-attachments/assets/70a9107d-2f7e-4b86-9535-77d80b6626d6)

## 🌟 Features

- **Flight Search**: Search for one-way and round-trip flights
- **Interactive UI**: Clean and intuitive user interface with smooth animations
- **Date Selection**: Easy-to-use date picker powered by Flatpickr
- **Flight Details**: View detailed information about available flights
- **Responsive Design**: Fully responsive design that works on all devices
- **State Management**: Efficient state management using Vuex
- **Type Safety**: Built with TypeScript for enhanced code quality and developer experience

## 🛠️ Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Typed superset of JavaScript
- **Vue Router** - Official router for Vue.js
- **Vuex** - State management pattern and library
- **Axios** - Promise-based HTTP client
- **Flatpickr** - Lightweight date picker
- **Swiper** - Modern mobile touch slider
- **Sass/Stylus** - CSS preprocessors for enhanced styling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.x or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/htay-htay-thwe/daily_flight_vue.git
   cd daily_flight_vue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Run the development server with hot-reload:
```bash
npm run serve
```

The application will be available at `http://localhost:8080`

### Build for Production

Compile and minify for production:
```bash
npm run build
```

### Linting

Lint and fix files:
```bash
npm run lint
```

## 📁 Project Structure

```
daily_flight_vue/
├── public/             # Static assets
│   └── index.html
├── src/
│   ├── assets/        # Images, fonts, and other static resources
│   ├── book/          # Booking-related components and assets
│   ├── components/    # Reusable Vue components
│   ├── router/        # Vue Router configuration
│   ├── store/         # Vuex store modules
│   ├── views/         # Page components
│   │   ├── HomeView.vue
│   │   ├── flightDetail.vue
│   │   └── AboutView.vue
│   ├── App.vue        # Root component
│   ├── main.ts        # Application entry point
│   └── shims-vue.d.ts # TypeScript declarations
├── package.json
├── tsconfig.json      # TypeScript configuration
└── README.md
```

## 🎨 Key Features Explanation

### Flight Search Form
- Select departure and destination cities
- Choose travel dates with an intuitive date picker
- Toggle between one-way and round-trip options

### Flight Details
- View comprehensive flight information
- Compare different flight options
- Easy booking process

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Htay Htay Thwe**
- GitHub: [@htay-htay-thwe](https://github.com/htay-htay-thwe)

## 🙏 Acknowledgments

- Design inspiration from [Agoda](https://www.agoda.com)
- Built with Vue 3 and the amazing Vue ecosystem

---

**Note**: This project is for educational and demonstration purposes. The reference is Agoda website.
