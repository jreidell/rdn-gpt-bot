# RDN AI Recipe Bot

RDN AI Recipe Bot is a React-based web application that uses OpenAI's GPT-4 model to provide users with recipe suggestions. The bot is designed to handle only recipe-related queries and format the results as an HTML content block.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [License](#license)

## Features

- **AI-Powered Recipe Suggestions**: Uses OpenAI's GPT-4 to generate recipes.
- **User Interaction**: Users can chat with the bot by typing messages.
- **Responsive Design**: The chat interface scrolls automatically to show the latest messages.

## Installation

To install and run this application locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/jreidell/rdn-gpt-bot.git
cd rdn-ai-recipe-bot
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up your environment variables**:

Create a .env file in the root directory and add your OpenAI API key:

```bash
VITE_OPENAI_APIKEY=your-openai-api-key
```

## Usage

After completing the installation steps, you can start the development server:

```bash
npm run dev
```

This will launch the application in development mode. Open your browser and navigate to `http://localhost:5173` to interact with the RDN AI Recipe Bot.

### Using the RDN AI Recipe Bot

1. **Start a Conversation**: Once the app is running, you'll see a text input field at the bottom of the screen. Type a recipe-related query into this field and press `Enter` to send your message.
2. **Get Recipe Suggestions**: The bot will process your input and provide a recipe suggestion formatted as an HTML content block. The response will appear on the message board above the input field.

3. **Scroll Through the Conversation**: As you interact with the bot, the conversation history will be displayed in the message board, with the bot's responses and your messages clearly distinguished.

4. **Typing Indicator**: While the bot is generating a response, a "Typing..." indicator will appear, letting you know that the bot is processing your request.

### Example Interactions

- **Ask for a Recipe**: "Can you give me a recipe for chicken alfredo?"
- **Request Dietary-Specific Recipes**: "What are some vegan dessert options?"
- **Inquire About Cooking Methods**: "How do I bake a loaf of sourdough bread?"

Remember, the RDN AI Recipe Bot is designed specifically to handle recipe-related queries. If you ask something outside of this domain, the bot will politely decline to respond.

## Configuration

### Environment Variables

- **`VITE_OPENAI_APIKEY`**: Your OpenAI API key, which you should add to the `.env` file in the root directory. This key is necessary for accessing OpenAI's GPT-4 model.

### Model Configuration

- The bot is configured to use the GPT-4 model by default. If you prefer to use a different model (e.g., `gpt-3.5-turbo`), you can adjust the `gptModel` variable within the `chat` function in `App.tsx`.

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Lint the project using ESLint to check for code issues.
- **`npm run format`**: Format the code using Prettier to maintain consistent code style.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
