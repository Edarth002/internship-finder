internship-finder/
│
├── app/                            # Next.js frontend + routing
│   ├── layout.tsx                  # App layout (Header, Footer, etc.)
│   ├── page.tsx                    # Landing page
│   ├── login/page.tsx              # Login form
│   ├── register/page.tsx           # Register form
│   ├── dashboard/page.tsx          # User dashboard (applied internships, etc.)
│   ├── profile/page.tsx            # Student preferences and info
│   ├── post-internship/page.tsx    # Page to post new internships (for companies/admins)
│   ├── internships/                
│   │   ├── page.tsx                # List internships with filters
│   │   └── [id]/page.tsx           # Single internship details
│   └── api/                        # Next.js API routes (server logic)
│       └── internships/
│           ├── route.ts            # GET all / POST new internship
│           └── [id]/route.ts       # GET, PUT, DELETE specific internship
│
├── backend/                        # All backend logic
│   ├── controllers/                # Business logic (similar to Express controllers)
│   │   ├── internshipController.ts # Functions for CRUD operations
│   │   └── userController.ts       # (Optional) Functions for user operations
│   ├── models/                     # Mongoose models
│   │   ├── internship.ts
│   │   └── user.ts                 # (Optional)
│   └── lib/                        # Utilities and config
│       ├── mongodb.ts              # MongoDB connection setup
│       └── geolocation.ts          # (Optional) For distance/coordinates handling
│
├── components/                     # Reusable frontend components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── InternshipCard.tsx
│   ├── FilterSidebar.tsx
│   ├── MapDisplay.tsx
│   └── AuthForm.tsx
│
├── types/                          # TypeScript interfaces and types
│   ├── internship.d.ts
│   └── user.d.ts
│
├── styles/
│   └── globals.css                 # Tailwind/global styles
│
├── .env.local                      # Environment variables (MongoDB URI)
├── next.config.js
├── package.json
├── README.md
