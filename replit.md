# PickleSplit - Pickleball Session Cost Splitter

## Overview
PickleSplit is a lightweight web app for fairly splitting weekly pickleball session costs among team members. The app tracks sessions with VND currency formatting, calculates net balances across all sessions, and provides minimal settlement recommendations to reduce cross-debts.

## Tech Stack
- **Frontend**: React + TypeScript, TanStack Query, Wouter routing, Shadcn UI
- **Backend**: Express.js + TypeScript
- **Database**: SQLite with better-sqlite3
- **Styling**: Tailwind CSS with custom color scheme

## Color Scheme
- Primary Blue: #0118D8
- Background: #FFFCFB
- Light Pink: #FFD8D8
- Red (negative balances): #ED3500
- Yellow: #FCC61D
- Green (positive balances): #8FD14F

## Features Implemented
1. **Sessions Management**: Create and view pickleball sessions with automatic cost splitting
2. **Members Management**: Add, edit, and remove team members
3. **Balance Tracking**: Real-time net balance calculations across all sessions
4. **Minimal Settlements**: Optimal settlement recommendations using greedy algorithm
5. **History**: Complete timeline of all sessions with participant details
6. **VND Formatting**: Proper Vietnamese Dong currency formatting (e.g., 300.000 ₫)

## Database Schema
- **users**: id, name, phone
- **sessions**: id, title, date, total_cost, paid_by_user_id, created_at
- **session_participants**: id, session_id, user_id, share_amount, is_settled
- **transactions**: id, from_user_id, to_user_id, amount, status, created_at, paid_at

## Key Design Decisions
- Balances show cumulative totals across ALL sessions
- Title field is required for all sessions
- Font consistency - no monospace for numbers
- Net balances displayed as cards (green for owed money, red for owes money)
- Minimal settlement algorithm reduces number of transactions needed
- Automatic equal splitting of session costs among participants

## API Endpoints
- `GET /api/users` - List all users
- `POST /api/users` - Create a new user
- `PATCH /api/users/:id` - Update user details
- `DELETE /api/users/:id` - Remove a user
- `GET /api/sessions` - List all sessions with details
- `POST /api/sessions` - Create a new session
- `GET /api/balances` - Get net balances and minimal settlements
- `POST /api/settlements` - Record a payment settlement
- `GET /api/transactions` - List all transaction history

## Project Structure
```
├── client/
│   └── src/
│       ├── components/ - Reusable UI components
│       ├── pages/ - Sessions, Balances, History, Members
│       └── lib/ - Utilities (currency, queryClient)
├── server/
│   ├── db.ts - SQLite database initialization
│   ├── storage.ts - Data access layer with minimal settlement algorithm
│   └── routes.ts - API endpoints
└── shared/
    └── schema.ts - TypeScript types and Zod schemas
```

## Recent Changes
- Implemented full-stack SQLite integration
- Connected all frontend pages to real APIs
- Removed all mock data
- Added settlement tracking with balance updates
- Implemented minimal settlement algorithm (greedy approach)
