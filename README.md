# 🎮 Rock Paper Scissors Game

A classic implementation of the timeless Rock Paper Scissors game built with modern web technologies.

## 🚀 Demo

[Live Demo](https://your-username.github.io/Rock-Paper-Scissor/) *(Update with your GitHub Pages URL)*

## 📸 Screenshots

![Game Interface](./screenshots/game-interface.png)
![Game Results](./screenshots/game-results.png)

## 🎯 Features

- **Interactive Gameplay**: Play against an AI computer opponent
- **Score Tracking**: Real-time score updates for both player and computer
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging hover effects and transitions
- **Game History**: Track rounds played and win/loss statistics
- **Reset Functionality**: Start fresh games anytime
- **Visual Feedback**: Clear indication of game results (win/lose/tie)

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Game logic and DOM manipulation

### Additional Technologies
- **Git**: Version control
- **GitHub Pages**: Deployment and hosting

## 🏗️ Project Structure

```
Rock-Paper-Scissor/
├── index.html              # Main HTML file
├── styles/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Mobile responsiveness
├── scripts/
│   ├── game.js             # Core game logic
│   ├── ui.js               # User interface handling
│   └── utils.js            # Utility functions
├── assets/
│   ├── images/
│   │   ├── rock.png        # Rock choice image
│   │   ├── paper.png       # Paper choice image
│   │   ├── scissors.png    # Scissors choice image
│   │   └── favicon.ico     # Site favicon
│   └── sounds/             # Game sound effects (optional)
├── screenshots/            # Demo screenshots
├── README.md              # Project documentation
└── LICENSE                # Project license
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarathye3/Rock-Paper-Scissor.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Rock-Paper-Scissor
   ```

3. **Open the game**
   - Double-click `index.html` to open in your default browser
   - Or use a local server for development:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **Start playing!**
   - Choose your move: Rock, Paper, or Scissors
   - The computer will make its choice
   - See the results and track your score

## 🎮 How to Play

1. **Choose Your Move**: Click on Rock, Paper, or Scissors
2. **Computer Choice**: The AI will randomly select its move
3. **Determine Winner**: 
   - Rock crushes Scissors 🪨 ✂️
   - Scissors cuts Paper ✂️ 📄
   - Paper covers Rock 📄 🪨
4. **Score Tracking**: Keep track of wins, losses, and ties
5. **Play Again**: Continue playing or reset the game

## 🧠 Game Logic Implementation

### Core Algorithm
```javascript
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };
    
    return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
}
```

### Computer AI
- Uses `Math.random()` for random choice generation
- Equal probability distribution for fair gameplay
- Prevents predictable patterns

### Score Management
- Persistent score tracking during gameplay session
- Win/loss/tie statistics
- Round counter for total games played

## 🎨 Design Features

- **Modern UI**: Clean, intuitive interface design
- **Color Scheme**: Carefully selected color palette for visual appeal
- **Typography**: Readable fonts optimized for all screen sizes
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant with proper contrast ratios

## 📱 Responsive Design

The game is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-optimized interface
- **Mobile**: Streamlined layout for smaller screens

## 🔄 Future Enhancements

- [ ] **Multiplayer Mode**: Play against friends online
- [ ] **Tournament Mode**: Best of 3/5/7 rounds
- [ ] **Sound Effects**: Audio feedback for actions
- [ ] **Themes**: Multiple visual themes to choose from
- [ ] **Statistics**: Detailed game analytics and history
- [ ] **AI Difficulty**: Different computer opponent skill levels
- [ ] **Lizard Spock Mode**: Extended version with 5 choices

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow consistent code formatting
- Add comments for complex logic
- Test on multiple browsers
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name** - [@sarathye3](https://github.com/sarathye3)

## 🙏 Acknowledgments

- Inspired by the classic hand game
- Thanks to the open-source community for inspiration
- Built as part of learning web development

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: [your-email@example.com]
- Follow updates: [@sarathye3](https://github.com/sarathye3)

---

⭐ **Star this repository if you found it helpful!**

*Made with ❤️ and lots of ☕*
