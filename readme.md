# 3D Car driving Game

An immersive 3D car game built with Three.js and Cannon.js physics. Drive around, explore, and have fun in this interactive 3D world!

## Features

- **Realistic Physics**: Powered by Cannon.js for authentic car movement and collisions
- **3D Graphics**: Beautiful 3D environment rendered with Three.js
- **Multiple Car Models**: Choose between default car and cyber truck (add `#cybertruck` to URL)
- **Interactive Objects**: Bowling balls, horns, and other physics objects to play with
- **Real-time Stats**: Track your speed, distance, and playtime
- **Responsive Controls**: Full keyboard and mobile touch support
- **Immersive Audio**: Engine sounds, collision effects, and horn sounds

## Controls

### Desktop Controls
- **W / ↑** - Accelerate forward
- **S / ↓** - Reverse
- **A / ← D / →** - Steer left/right
- **Space / Ctrl** - Brake
- **Shift** - Boost (turbo mode)
- **H** - Horn
- **R** - Reset car position
- **Tab** - Show game statistics
- **U** - Toggle UI visibility

### Special Keys
- **B** - Spawn bowling ball (Cyber Truck mode only)
- **K** - Rain horns from the sky
- **Mouse** - Look around (camera controls)

### Mobile Controls
- **Virtual Joystick** - Steer the car
- **Touch Buttons** - Accelerate, brake, boost, and reverse

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-racing-game-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Game Features

### Car Physics
- Realistic wheel physics with suspension
- Weight transfer and momentum
- Collision detection with environment
- Auto-recovery when car flips over

### Interactive Environment
- Drive-able terrain with various obstacles
- Interactive objects you can push around
- Sound effects for different surfaces and collisions
- Dynamic shadows and lighting

### Game Modes
- **Free Roam**: Explore the world at your own pace
- **Cyber Truck Mode**: Access special features like spawning bowling balls
- **Challenge Mode**: Try to achieve high speeds and distances

## 🔧 Customization

### Car Models
- Default car: Classic racing car design
- Cyber Truck: Futuristic electric truck (add `#cybertruck` to URL)

### Debug Mode
Add `#debug` to the URL to enable debug controls and performance monitoring.

## Mobile Support

The game is fully responsive and includes:
- Touch-based steering with virtual joystick
- Optimized UI for smaller screens
- Gesture controls for camera movement
- Performance optimizations for mobile devices

## Technical Details

### Built With
- **Three.js** - 3D graphics and rendering
- **Cannon.js** - Physics simulation
- **Vite** - Build tool and development server
- **GSAP** - Animations and transitions
- **Howler.js** - Audio management

### Performance
- Optimized for 60 FPS gameplay
- Efficient memory management
- LOD (Level of Detail) for distant objects
- Mobile-specific optimizations

## Tips for Best Experience

1. **Use headphones** for immersive audio experience
2. **Adjust graphics settings** if experiencing performance issues
3. **Try different camera angles** by dragging with mouse
4. **Experiment with physics** by interacting with objects
5. **Challenge yourself** to achieve higher speeds and distances

## Game Statistics

The game tracks:
- **Total Distance Traveled** - How far you've driven
- **Maximum Speed Achieved** - Your top speed record
- **Average Speed** - Speed efficiency over time
- **Play Time** - Total time spent in the game

Press **Tab** during gameplay to view your current statistics!

## Troubleshooting

### Performance Issues
- Close other browser tabs
- Lower graphics quality by adding `#low` to URL
- Ensure your browser supports WebGL 2.0

### Controls Not Working
- Make sure the game window has focus (click on it)
- Check if another application is blocking keyboard input
- Try refreshing the page

### Mobile Issues
- Use landscape orientation for better experience
- Ensure touch events are enabled in your browser
- Clear browser cache if experiencing loading issues

## Acknowledgments

Originally inspired by Bruno Simon's portfolio, this has been converted into a standalone car drive game. Special thanks to the Three.js and Cannon.js communities for their excellent libraries.

---

**Enjoy the ride! 🏁**

