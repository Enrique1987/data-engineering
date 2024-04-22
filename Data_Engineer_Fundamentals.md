# Data Engineer Fundamentals  
### The 80-20 as Data Engineer you should know.






## CI/CD

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


## Database

### ER-Schema

Example of simple relational schema for a university system based on the entities we discussed earlier. 
This schema will detail each table along with its primary keys (PK) and foreign keys (FK) and describe the relationships between the tables.

#### Tables and Their Attributes

1. **Student**
   - **StudentID** (PK): A unique identifier for each student.
   - **FirstName**: The first name of the student.
   - **LastName**: The last name of the student.
   - **DateOfBirth**: The date of birth of the student.
   - **MajorID** (FK): References the Major table to indicate what major the student is studying.

2. **Professor**
   - **ProfessorID** (PK): A unique identifier for each professor.
   - **FirstName**: The first name of the professor.
   - **LastName**: The last name of the professor.
   - **DepartmentID** (FK): References the Department table where the professor belongs.

3. **Course**
   - **CourseID** (PK): A unique identifier for each course.
   - **CourseName**: The name of the course.
   - **CourseDescription**: A brief description of what the course covers.
   - **Credits**: The number of credits the course is worth.
   - **DepartmentID** (FK): References the Department offering the course.

4. **Department**
   - **DepartmentID** (PK): A unique identifier for each department.
   - **DepartmentName**: The name of the department.
   - **Building**: The building in which the department is located.

5. **Enrollment**
   - **EnrollmentID** (PK): A unique identifier for each enrollment record.
   - **StudentID** (FK): References the Student involved in the enrollment.
   - **CourseID** (FK): References the Course in which the student is enrolled.
   - **Semester**: Indicates the semester during which the enrollment is valid.
   - **Year**: The year of the enrollment.
   - **Grade**: The grade received by the student for the course.

6. **Major**
   - **MajorID** (PK): A unique identifier for each major.
   - **MajorName**: The name of the major.
   - **DepartmentID** (FK): References the Department that offers the major.

7. **CourseOffering**
   - **OfferingID** (PK): A unique identifier for each course offering.
   - **CourseID** (FK): References the Course being offered.
   - **ProfessorID** (FK): References the Professor teaching the course.
   - **Semester**: The semester during which the course is offered.
   - **Year**: The year in which the course is offered.
   - **TimeSlot**: The time slot of the course offerings.

#### Relationships

- **Students** are linked to **Majors** through MajorID.
- **Professors** are linked to **Departments** through DepartmentID.
- **Courses** are linked to **Departments**.
- **Enrollments** link **Students** and **Courses** to track which student is in which course.
- **Majors** are offered by **Departments**.
- **Course Offerings** link **Courses** with **Professors**, indicating who teaches what and when.

This schema provides a comprehensive view of how the tables are interconnected within a university's database, illustrating the relationships that help manage the academic and administrative data.
Each table is normalized to ensure data integrity and reduce redundancy. 
![](img/01_ER_Uni.png)