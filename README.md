# DEI Decoder

## Setup Instructions

### 1. Clone the Repository  
Run the following command to clone the project to your local system:  
```sh
git clone https://github.com/CivicTechFredericton/dei-decoder.git
cd dei-decoder
```

### 2. Install Dependencies  
Navigate to the project directory and install the necessary dependencies:  
```sh
npm install
```

### 3. Getting Started  
Once the dependencies are installed, you're ready to start working on the project.



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# Ollama Installation Guide
Ollama is a platform that allows you to run large language models on your local machine. This guide provides instructions for installing Ollama on Windows, macOS, and Linux, along with steps to install the Llama 3.1 model.

## Prerequisites
A stable internet connection is required to download and install the software.
Administrator/root access may be necessary for installation.
### Installation
#### macOS
Open the Terminal.
Install Ollama using Homebrew:
```bash
brew install ollama/tap/ollama

```
Verify the installation by checking the version:
```
ollama --version
```
#### Windows
Download the Ollama installer from the Ollama website.
Run the installer and follow the on-screen instructions to complete the setup.
After installation, open Command Prompt and verify it by checking the version:

```
ollama --version
```
#### Linux
Open your terminal.
Add Ollama’s repository and install it using the following command:
```
curl -s https://ollama.com/ollama-linux.sh 
```

Verify the installation by checking the version:

```
ollama --version
```
Installing the Llama 3.1 Model
After installing Ollama, you can easily download the Llama 3.1 model:

Open the terminal (or Command Prompt on Windows).
Install the Llama 3.1 model or any other model that Ollama supports, that you want to test.

```
ollama install llama3.1
```
Verify the model installation by listing all available models:

```
ollama list
```

Usage
Once installed, you can start using the Llama 3.1 model with the following command:

```
ollama run llama3.1
```
#### Troubleshooting
If you encounter any issues, make sure:

You have administrator/root permissions for the installation process.
The installation is being performed with a stable internet connection.
For more details, please refer to the official Ollama documentation.

## Key Files and Directories

- **public/**: Contains public assets such as icons.
- **README.md**: The readme file for the project.
- **src/**: Contains the source code for the project.
  - **app/**: Contains application-specific code.
    - **api/**: Contains API route handlers.
      - **documentgenerator/route.ts**: API route for generating documents.
      - **llama/route.ts**: API route for interacting with the Llama model.
    - **components/**: Contains React components.
    - **decoder/**
        - **docdecoder**
            - **route.tsx**: Todo a Document analyer option
        - **linkdecoder**
            - **route.tsx**: Todo a URL link decoder
        - **textdecoder**
            - **route.tsx**: Current implementation text decoder

  - **layout.tsx**: The root layout component for the application.

#### For Developers
To Improve git commits and messaging, Use better-commits.
This would help to structure the git commit messages. 
