# Data Engineer Fundamentals  
### The 80-20 as Data Engineer you should know.






### CI/CD

#### Continuous Integration (CI)
Continuous Integration is the practice of automating the integration of code changes from multiple contributors into a single software project.
The main goal of CI is to provide rapid feedback so that if a defect is introduced into the code base, it can be identified and corrected as soon as possible.

CI processes typically involve:

**Automated Testing**: Running automated tests every time new code changes are integrated into the main branch of the repository to ensure they don't break the existing codebase.  
**Version Control**: Use of version control systems (like Git) to manage code changes and ensure that developers are always working with the latest version.  
**Build Automation**: Automatically compiling code and running tests to verify that the software is in a good state to be deployed.  

#### Continuous Deployment (CD)
Continuous Deployment extends CI by automatically deploying all code changes to a testing or production environment after the build stage.
This means that every change that passes all stages of your production pipeline is released to your customers automatically, without manual intervention.
This process includes:

**Automated Deployments:** The use of scripts or automation tools to deploy applications automatically to various environments (development, staging, production).
**Environment Consistency:** Keeping all deployment environments as similar as possible to reduce the chances of bugs occurring due to environment-specific configurations.
**Rollback Mechanisms:** Having the ability to quickly revert deployments if issues are detected post-release.