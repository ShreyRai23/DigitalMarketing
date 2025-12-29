# 🚀 Quick Start Guide

## Running the MERN App

### Step 1: Start MongoDB
Make sure MongoDB is running on your system.

**Option A - MongoDB Service** (Windows):
```bash
# MongoDB should be running as a service
# Check in Services app or MongoDB Compass
```

**Option B - Manual Start**:
```bash
mongod
```

### Step 2: Start the Backend Server

Open a terminal and run:
```bash
cd "c:\Users\shrey\OneDrive\Documents\Digital Marketing\server"
npm run dev
```

You should see:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### Step 3: Start the Frontend

Open a **new terminal** (keep the server running) and run:
```bash
cd "c:\Users\shrey\OneDrive\Documents\Digital Marketing\client"
npm run dev
```

You should see:
```
VITE v7.3.0  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Step 4: Open in Browser

Navigate to: **http://localhost:5173**

## ⚠️ Current Limitations

The site will appear **unstyled** because:
- CSS files haven't been migrated yet
- Images haven't been copied to the assets folder
- Original Bootstrap/CSS need to be imported

**This is expected!** The structure and routing are complete.

## ✅ What You Can Test

1. **Navigation**: Click through all menu links - routing works!
2. **Pages**: Visit all routes manually (/, /about, /contact, /services/*, etc.)
3. **Backend Health**: Visit http://localhost:5000/api/health
4. **Components**: All layout components are rendering (TopBar, Navbar, Footer)

## 📋 Next Steps

See the [README.md](file:///c:/Users/shrey/OneDrive/Documents/Digital%20Marketing/README.md) for the complete next steps, but here's the priority:

1. **Migrate CSS files** →This will make the site look correct
2. **Copy images** → This will show all visuals
3. **Port full HTML content** → This will complete the pages
4. **Connect contact form** → This will make forms work

## 🆘 Troubleshooting

**Server won't start**:
- Check if MongoDB is running
- Check if port 5000 is available

**Client won't start**:
- Check if port 5173 is available
- Try: `npm install` in the client folder

**Database connection failed**:
- Verify MongoDB is running
- Check the MONGODB_URI in `server/.env`

## 📚 Documentation

- **Full README**: [README.md](file:///c:/Users/shrey/OneDrive/Documents/Digital%20Marketing/README.md)
- **Implementation Plan**: See artifacts
- **Task Checklist**: See artifacts
- **Walkthrough**: See artifacts
