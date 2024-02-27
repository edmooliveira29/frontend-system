# Frontend Repository Installation

### **Pre-requisites**
- A linux-based operating system, such as Ubuntu.
- Git installed on your machine.
- A GitHub account with 2FA enabled.

### **1. Install NVM and Node.Js**

To install NVM, open the terminal and run the following command:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```


Execute the following command:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```


To install a version of Node.js using NVM, run the following command:

```sh
nvm install v18.16.0
```


To set the default Node.js version to be used, run the following command:

```sh
nvm alias default v18.16.0
```

### **2. Install React-Native**
 Running this code to install React:
		`npx i -g react`

### **3. Setting Up 2FA Access to GitHub**

GitHub offers various forms of authentication, and we recommend using a personal access token (PAT) that can be created on the security settings page of your GitHub account.

To create a PAT, follow the steps below:

1. Go to the security settings page of your GitHub account (https://github.com/settings/security).

2. Click "Personal access tokens".

3. Click "Generate new token".

4. Enter a description for the token (e.g. "Repository access to GitHub").

5. Select the permissions the token should have (e.g. read and write access to private repositories).

6. Click "Generate token".

7. Copy the generated token to a safe location. You will only see the token once, so be sure to copy it immediately.

### **Cloning the Repository**

To clone the repository, open the terminal and run the following command:

```sh
git clone https://{YOUR ACCESS KEY}@github.com/edmooliveira29/frontend-system.git
```

### **4. Installing Dependencies**

To install the project dependencies, run the following command in the project root directory:

```sh
npm install
```

### **5. Running the Repository**

To run the repository, run the following command in the project root directory:

```sh
npm start
```

### **6. Running the Tests**

To run the tests, run the following command in the project root directory:

```sh
npm run tests-e2e
```

### **Author**
Edmo de Oliveira Leite (edmooliveira29@gmail.com)
 
