
![landing page](https://github.com/ScottsGit/T7CnC-Frontend/assets/17536863/74eab397-9b7f-4a9f-ae24-40e289df8270)
&nbsp;&nbsp;

![signup page](https://github.com/ScottsGit/T7CnC-Frontend/assets/17536863/0cd404f6-3487-443c-beee-49dd98660148)

![dashboard1](https://github.com/ScottsGit/T7CnC-Frontend/assets/17536863/2bc6585e-6554-483b-a818-a421502ef6ff)


# T7CnC-Frontend
Team 7 - Cash-n-Crunch Frontend

### CheatSheet
https://education.github.com/git-cheat-sheet-education.pdf  

### Init working branch:
git clone https://github.com/ScottsGit/T7CnC-Frontend.git  

git status  
git checkout -b [name of your new branch for what you working on]  
Example: git checkout -b create-login-page  
git branch -a  

### Making changes in your branch:
git commit -am "Your commit message"  
or  
for new files  
git add .  
git commit -m "message"  

### Publishing your branch:  
Method 1:  
git checkout staging  
git pull  
git merge staging  
git commit -m "Merge main into your-local-branch"  

Method 2:  
git fetch origin  
git merge staging  
git commit -m "Merge main into your-local-branch"  

Then:  
fix bugs  
git push origin create-login-page  
