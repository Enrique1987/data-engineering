# Data Engineering  + Iterview Questions

# Data Engineer Interview Questions
A collection of technical interview questions for Data Engineer position based on my day-to-day experience with real problems.


#### 1. A typical task of a data engineer is to migrate an ETL that is currently running on A and has to start running on B.
Where A and B are different enviroments.This may be due to different reasons, such as the choice of a new technology (due to licensing issues
or that it is more convenient in terms of scalability to run it in the new environment).You are in charge of this project. What is the first thing you would do? 

- Establishing contact with the parties involved is always the first step in a project like this, in this case it would be the person from Business who has commissioned this project.
- The second thing to do is to check where the data comes from in the original process and establish the mechanisms to get that data to the source of the new process.
  If both processes do not have the same input data, the old process and the,new process will have no way of verifying that it is correct, so the first step is to establish that both have the same input data.
- Once we have clarified the issue of data collection, we will be interested to know where we have to take the data.
- It is interesting to look at what technologies were used for the original ETL process, if it was an ETL that only used SQL code and our task is to carry the code in a Databricks environment but we can choose whether we want to use pyspark or sparksql we may be interested in replicating the code in SparkSQL, if on the other hand the original ETL used other languages 
 (either because it communicated via APIs when receiving the data) we may be interested in using python + pyspark. There is no single rule.
 
#### 2.(continuation of the first question) You are migrating the ETL process to a new technology,
####what strategy would you use to ensure that the outcome in the original and the final process is the same.How are you checking the results ? 
