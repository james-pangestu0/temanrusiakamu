# Firebase Setup (Auth + Database)

## 1) Create Firebase project
1. Open Firebase Console.
2. Create project.
3. Add Web App.
4. Copy web config keys into `firebase-config.js`.

## 2) Enable Authentication
1. Go to Authentication -> Sign-in method.
2. Enable **Email/Password**.

## 3) Enable Firestore Database
1. Go to Firestore Database -> Create database.
2. Start in production mode (recommended).

## 4) Firestore Rules (basic)
Use this rule to allow user write their own profile and signed-in users read `users`.

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow create: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
```

## 5) Pages
- `signup.html` -> create account + save profile to Firestore
- `login.html` -> login existing user
- `admin-users.html` -> monitor registered users (requires login)

## 6) Suggested admin access
Use one dedicated admin account to open `admin-users.html`.
