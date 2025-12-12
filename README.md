# Weather Application Using APIs

## Tech Used

- EJS
- NPM & Node JS
- Bootstrap
- API usage

## Installing npm

- Clone the project `https://github.com/JayanShrestha/Weather-Application.git`
- Browse to folder `cd Weather-Application`
- Execute the command 'npm install' in command prompt or git bash on that folder
- Run `nodemon index.js`
- Open http://localhost:3000 with your browser.

## CI/CD Workflow

After the repository is cloned and running on your local machine, the following steps need to be taken first to have your task approved and merged

### 1. Create new branch

```bash 
git push origin your_feature_branch
```

### 2. Make changes to your branch

Make sure changes made to your branch runs on command ```nodemon index.js``` and check functionality and responsiveness of the website. Further testing will be added in the future.

### 3. Git add modified files and commit to the local repository with the following command:
```bash
git add your_files
```
```bash
git commit -m your_message_or_comment
```
### 4. Push to origin
Push your branch to Git
```bash
git push origin your_feature_branch
```
After that navigate to the github for Weather-Application and create a pull request from your branch.
### 5. Code Review
A reviewer will review your code and ask to make any necessary adjustments.
### 6. Development Iteration
Repeat steps 2-5 until the code is approved by the reviewer.
### 7.Merge to Master
```bash
git pull origin master
git checkout master
git merge your_feature_branch
git push origin master
```

## API Keys
I have used my own API key for using the Openweathermap api. The api key can be generated if you sign up to Openweathermap api (https://openweathermap.org/city/2159851). After the API key is generated, export the key from utilities.js(you need to create one) file in the root folder. 



