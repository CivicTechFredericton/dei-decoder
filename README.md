# dei-decoder

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel (Ignore This)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

#### For Developers
To Improve git commits and messaging, Use better-commits.
This would help to structure the git commit messages. 
