# RDN AI Recipe Bot

## Overview

RDN AI Recipe Bot is a React-based web application that integrates the OpenAI API to provide a chat interface for recipe-related inquiries. Users can interact with the bot to receive recipes and cooking tips formatted in HTML.

## Features

- **OpenAI Integration**: Utilizes OpenAI's powerful language models for generating cooking recipes and tips.
- **React Hooks**: Implements `useState` for state management within the React framework.
- **Responsive Chat Interface**: A user-friendly chat interface that dynamically updates with the conversation.

## Installation

1. **Clone the Repository**

    ```bash
    git clone [Repository URL]
    ```

2. **Install Dependencies**

    Navigate to the project directory and run:

    ```bash
    npm install
    ```

3. **Environment Variables**

    Create a `.env` file in the project root and add your OpenAI API key:

    ```bash
    REACT_APP_OPENAI_APIKEY=Your_OpenAI_API_Key
    ```

4. **Start the Application**

    ```bash
    npm start
    ```

## Usage

After starting the application, the user interface should be available in your web browser. Simply type a message related to cooking or recipes and press Enter. The bot will respond with relevant information formatted in HTML.

## Code Structure

- `App.js`: The main component that handles the chat interface and OpenAI API integration.
- `App.css`: Contains the styling for the application.
- `openai`: A configured OpenAI instance for interacting with the OpenAI API.

## API Reference

The application uses the `chat.completions.create` method from the OpenAI API to generate responses based on the user's input.


