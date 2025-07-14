
# St. Agnes Catholic Parish Website

A modern, responsive website for St. Agnes Catholic Parish built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Main Features
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Dynamic Content Management**: Admin panel for managing announcements, news, gallery, and more
- **Photo Gallery**: Interactive gallery with search, lightbox, and responsive grid
- **News & Announcements**: Real-time updates with rich content management
- **Mass Schedule**: Dynamic mass schedule management
- **Ministries & Services**: Comprehensive parish information
- **Contact & Donations**: Easy communication and giving options

### Technical Features
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: shadcn/ui component library
- **Database**: Supabase for backend services
- **Authentication**: Secure admin authentication
- **File Management**: Image and PDF upload capabilities
- **Real-time Updates**: Live content updates

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nashe01/agnes-parish-website.git
   cd agnes-parish-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── admin/          # Admin panel components
│   ├── about/          # About page components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   └── ...             # Other component categories
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
│   └── supabase/       # Supabase client and types
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Component Library

This project uses [shadcn/ui](https://ui.shadcn.com/) for consistent, accessible UI components. All components are located in `src/components/ui/`.

### Key Components
- **Button**: Various button styles and variants
- **Card**: Content containers with consistent styling
- **Dialog**: Modal dialogs and overlays
- **Form**: Form components with validation
- **Input**: Text input fields
- **Select**: Dropdown selection components
- **Toast**: Notification system

## 🗄️ Database Schema

The project uses Supabase with the following main tables:

- `news_articles` - Parish news and announcements
- `gallery_photos` - Photo gallery images
- `mass_schedules` - Mass timing information
- `ministries` - Parish ministries and groups
- `sacraments` - Sacrament information
- `announcements` - Parish announcements

## 🔐 Authentication

The admin panel uses Supabase authentication with role-based access control. Admin users can:
- Manage all content types
- Upload and manage images
- Update parish information
- Manage mass schedules

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Pages

### Home Page (`/`)
- Hero section with parish welcome
- Latest announcements
- Services overview
- News highlights
- About us preview
- Contact information

### About Page (`/about`)
- Parish history
- Leadership team
- Parish guilds and groups
- Mission and values

### Gallery Page (`/gallery`)
- Photo gallery with search
- Lightbox image viewer
- Responsive grid layout
- Image captions

### Admin Panel (`/admin`)
- Content management dashboard
- File upload capabilities
- Real-time updates
- User management

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server for SPA routing

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test on multiple devices
- Follow the existing code style

## 🐛 Troubleshooting

### Common Issues

**Development server won't start**
- Check Node.js version (requires 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for port conflicts

**Build errors**
- Run `npm run type-check` to identify TypeScript errors
- Ensure all environment variables are set
- Check for missing dependencies

**Database connection issues**
- Verify Supabase credentials in environment variables
- Check Supabase project status
- Ensure proper table permissions

## 📞 Support

For support or questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔍 Code Review & Branch Protection

To ensure code quality and collaboration, this repository uses GitHub's branch protection and review process:

1. All changes must go through a pull request (PR).
2. At least one reviewer must approve the PR before it can be merged.
3. Direct pushes to the `main` branch are not allowed.

### How to Set Up Required Reviews (for repository admins)
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. In the left sidebar, click **Branches**.
4. Under "Branch protection rules," click **Add rule**.
5. For "Branch name pattern," enter `main` (or your default branch name).
6. Check **Require a pull request before merging**.
7. Check **Require approvals** and set the number of required approvals (e.g., 1 or 2).
8. (Optional) Check **Dismiss stale pull request approvals when new commits are pushed**.
9. (Optional) Check **Require status checks to pass before merging** if you use CI/CD.
10. Click **Create** or **Save changes**.

This ensures that all code is reviewed and tested before being merged into the main codebase.

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Supabase](https://supabase.com/) for backend services
- [Vite](https://vitejs.dev/) for build tooling
- [React](https://reactjs.org/) for the framework


