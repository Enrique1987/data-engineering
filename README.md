# Data Engineering  + Iterview Questions

## Data Engineer Interview Questions
A collection of technical interview questions for Data Engineer position based on my day-to-day experience with real problems.

### Technical Questions.

#### 1. OLAP vs OLTP Explain it.
OLAP: Online Analitical processing, This is not the official definition (if there is one). But we could say that it is a way of processing data in such a way that it is used for analysis. It is the technology behind BI, its function is not operational in the sense of running a database to make transacion(add new user, update, delete..) but to extract value from the data.See how entities relate to each other.

#### 2. Slow changing dimension.

#### 3. Database Schemas wich one do you know. Use-cases

#### 4. Normal Form.

#### 5. CAP - Theorem

#### 6. ACID properties.

#### 7. Big data, the v´s

#### 8. What is a View in Database and when does it make sense.

#### 9. SQL vs NoSQL

#### 10.Which kinds of Databases do you know ?

#### 11. Advantages and disadvantages of the Databases named above.

#### 12. Map-Reduce

### Questions based on project experience.

#### 21. A typical task of a data engineer is to migrate an ETL that is currently running on A and has to start running on B.
Where A and B are different enviroments.This may be due to different reasons, such as the choice of a new technology (due to licensing issues
or that it is more convenient in terms of scalability to run it in the new environment).You are in charge of this project. What is the first thing you would do? 

- Establishing contact with the parties involved is always the first step in a project like this, in this case it would be the person from Business who has commissioned this project.
- The second thing to do is to check where the data comes from in the original process and establish the mechanisms to get that data to the source of the new process.
  If both processes do not have the same input data, the old process and the,new process will have no way of verifying that it is correct, so the first step is to establish that both have the same input data.
- Once we have clarified the issue of data collection, we will be interested to know where we have to take the data.
- It is interesting to look at what technologies were used for the original ETL process, if it was an ETL that only used SQL code and our task is to carry the code in a Databricks environment but we can choose whether we want to use pyspark or sparksql we may be interested in replicating the code in SparkSQL, if on the other hand the original ETL used other languages 
 (either because it communicated via APIs when receiving the data) we may be interested in using python + pyspark. There is no single rule.
 
#### 22.(continuation of the first question) You are migrating the ETL process to a new technology, what strategy would you use to ensure that the outcome in the original and the final process is the same.How are you checking the results ? 

#### 23. Can you tell me about a situation that was a particular challenge?

#### 24. In your years working as a Data Engineer, can you tell me about a mistake you made in the past and how you have learned from it?