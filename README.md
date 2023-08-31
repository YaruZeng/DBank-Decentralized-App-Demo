# DBank

Welcome to my DBank project. This app is deployed by dfx and note.js within the environment of ICP(Internet Computer) with backend supported by Motoko, and frontend by CSS, HTML and JavaScript. 

<img width="1435" alt="image" src="https://github.com/IvyZayn/DBank-Decentralized-App-Demo/assets/91594306/a3ce46cf-3a7e-47a1-87cd-0d39cdce960b">


To get started, you might want to download the repository and try the following commands:

```bash
cd dbank/
dfx help
dfx config --help
```

## Running the project locally

If you want to render the app locally, you can use the following commands:

```bash
# Install dependencies by node
npm install 

# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy

# Start a development server
npm start

```

Once the job completes, the application will be available at `http://localhost:8080`.
