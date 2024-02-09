# Memory Game (2 players)

- just type `npm run dev` and try it out

- assuming you know how to play the game already, have fun 

# Explaining the architecture on a detailed level
  I tried to aproach a modular structure, currently, the app has one feature "memory-game" with one redux slice, representing the "module" of this feature.

  The App component is responsible for mapping through the routes, and 

  ## UI Layer:
    - Components:
        -MemoryGame: Represents the main component of the memory game feature, composed of sub-components like GameInfo, MemoryCard, MemoryTable, and MenuOptions.
          -GameInfo: Displays information about the game mode and scores.
          -MemoryCard: Represents a single card in the memory game.
          -MemoryTable: Displays the grid of memory cards.
          -MenuOptions: Provides options for the game, such as resetting or changing game modes.
          -Other components located within the features/memory-game folder.

        Routing:
        App.tsx imports and renders the routing component from app/pages/index.tsx 
  ## State Management Layer:
    - Redux Store:
      -store.ts: Initializes the Redux store using createStore from Redux Toolkit, including middleware setup.
      -rootReducer: Combines all reducers using combineReducers.
      -memoryGame.ts: Defines the Redux slice for managing memory game-related state, including initial state, reducers, and async actions using Redux Toolkit.

  ## Data Layer:
    - Assets:
      -Contains static assets like images used in the application.
  ## Shared Utilities:
    -Contains shared configuration files (config) and utility functions (utils) used across the application.
  ## Entry Point:
    main.tsx: Main entry point of the application, where the React app is initialized and rendered.
  ## Pages:
    pages/index.tsx will render a component that maps through all defined routes (defined in shared/config/router) path
    home/index.tsx: Represents the Home page of the application, where we render the game.



# Listing the known limitations:
 
  - The players are not stressed by a timer
  - Can't make the grid dynamic, so gameboard like (6x6, 8x8, ...)

# Identify the potential next steps in order to ‘productionize’ your solution:

  1. Optimize Performance
  2. Add a security level (sure if we have data we don't want to disclose to other people)
  3. Testing
  4. Conduct accessibility audits using tools like Lighthouse
  5. Error Logging and Monitoring
  6. Deployment
  7. Documentation
  8. Performance Monitoring
  9. Scalability & Maintenance