# 🎮 JavaScript Mini Games

A collection of two interactive browser-based games built with **Vanilla JavaScript**, **HTML5**, and **CSS3**. Both games are accessible from a single landing page.

🔗 **Live Demo:** [https://YOUR-USERNAME.github.io/javascript-mini-games/](https://YOUR-USERNAME.github.io/javascript-mini-games/)

---

## 🎯 Games Included

### 🪙 1. Coin Toss (Heads or Tails)

Click the "Flip Coin" button and watch the coin flip with a smooth 3D animation. The result (Heads or Tails) appears after the animation finishes.

**Features:**
- Random outcome using `Math.random()`
- Smooth 3D flip animation with `@keyframes`
- Timed result display using `setTimeout`
- Clean, centered UI

### 🎲 2. Number Guessing Game

The computer picks a random number between 1 and 10. Enter your guess and see if you can match it!

**Features:**
- Random number generation (`Math.random()`)
- Real-time validation (empty input check)
- Floating label animation on focus/blur
- Color-coded feedback (green for win, red for loss)
- Shows both computer's number and your number after each guess

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, forms, and page layout |
| **CSS3** | Styling, transitions, `@keyframes` animations, flexbox |
| **JavaScript (ES6)** | `Math.random()`, DOM manipulation, event handling, `setTimeout` |

---

## 📂 Folder Structure

```text
javascript-mini-games/
│
├── index.html                    # Landing page (links to both games)
│
├── pages/
│   ├── head-tale-game.html       # Coin Toss game
│   └── guess-number-game.html    # Number Guessing game
│
├── css/
│   ├── style.css                 # Landing page styles
│   ├── head-tale-game.css        # Coin Toss styles
│   └── guess-number-game.css     # Number Guessing styles
│
└── js/
    ├── head-tale-game.js         # Coin Toss logic
    └── guess-number-game.js      # Number Guessing logic