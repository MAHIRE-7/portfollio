# Portfolio Website - Manoday Anil Ahire

A modern, responsive portfolio website for Cloud & DevOps Engineer built with Node.js, Express, and EJS. Features a cyberpunk-inspired design with gradient effects and glass morphism.

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](http://localhost:3000)

## 📋 Features

- **Modern Design**: Cyberpunk-inspired theme with gradient effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects
- **Professional Sections**:
  - Hero section with contact information
  - About me with certifications
  - Technical skills showcase
  - Work experience timeline
  - Project portfolio with GitHub links
  - Leadership & volunteering experience
  - Education background

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Styling**: Custom CSS with modern features
- **Containerization**: Docker
- **Icons**: Font Awesome
- **Fonts**: Inter, SF Pro Display

## 📁 Project Structure

```
portfollio/
├── public/
│   └── style.css          # Main stylesheet
├── views/
│   └── index.ejs          # Main template
├── server.js              # Express server
├── package.json           # Dependencies
├── Dockerfile             # Docker configuration
├── .dockerignore          # Docker ignore file
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfollio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Production Deployment

```bash
npm start
```

## 🐳 Docker Deployment

### Build and Run

```bash
# Build Docker image
docker build -t portfolio-website .

# Run container
docker run -p 3000:3000 portfolio-website
```

### One-liner

```bash
docker build -t portfolio-website . && docker run -p 3000:3000 portfolio-website
```

## 📝 Customization

### Update Personal Information

Edit the `portfolio` object in `server.js`:

```javascript
const portfolio = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... other fields
};
```

### Modify Styling

Update `public/style.css` to customize:
- Colors and gradients
- Typography
- Layout and spacing
- Animations and effects

### Add New Sections

1. Update the data structure in `server.js`
2. Add corresponding HTML in `views/index.ejs`
3. Style the new section in `public/style.css`

## 🎨 Design Features

- **Color Scheme**: Dark theme with blue/green/pink gradients
- **Typography**: Modern sans-serif fonts with proper hierarchy
- **Layout**: CSS Grid and Flexbox for responsive design
- **Effects**: Glass morphism, gradient borders, smooth transitions
- **Icons**: Font Awesome for consistent iconography

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Scripts

```json
{
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## 📦 Dependencies

- **express**: Web framework for Node.js
- **ejs**: Template engine for dynamic HTML

### Dev Dependencies

- **nodemon**: Development server with auto-reload

## 🌟 Key Highlights

- **60+ Technical Skills** showcased in organized format
- **8 Major Projects** with GitHub links and descriptions
- **4 Professional Experiences** with detailed timelines
- **3 Leadership Roles** demonstrating soft skills
- **3 Certifications** from AWS, Microsoft, and Udemy
- **Modern UI/UX** with professional design standards

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Manoday Anil Ahire**
- Email: manodayahire786@gmail.com
- LinkedIn: [linkedin.com/in/manodayAhire](https://linkedin.com/in/manodayAhire)
- GitHub: [github.com/MAHIRE-7](https://github.com/MAHIRE-7)
- Location: Pune, Maharashtra, India

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ by Manoday Anil Ahire**