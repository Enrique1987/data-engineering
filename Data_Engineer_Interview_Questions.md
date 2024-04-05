# Data Engineering  + Iterview Questions

## Data Engineer Interview Questions
A collection of technical interview questions for Data Engineer position based on my day-to-day experience with real problems.

### Technical Questions.

### 1. OLAP vs OLTP Explain it.
OLAP: Online Analitical processing, This is not the official definition (if there is one). But we could say that it is a way of processing data in such a way that it is used for analysis. It is the technology behind BI, its function is not operational in the sense of running a database to make transacion(add new user, update, delete..) but to extract value from the data.See how entities relate to each other.

### 2. Slow Changing Dimension.  

- **Type 0**: The type 0 dimensions attributes never change.7  
- **Type 1**: Overwrite old with new data and therefore does not track historical data.  
- **Type 2**: Add a new row, tracks historical data by creating amultiple records for a given natural key. We could add "effective date" columns.  

| Supplier_Key | Supplier_Code | Supplier_Name  | Supplier_State | Start_Date           | End_Date             |
|--------------|---------------|----------------|----------------|----------------------|----------------------|
| 123          | ABC           | Acme Supply Co | CA             | 2000-01-01T00:00:00  | 2004-12-22T00:00:00  |
| 124          | ABC           | Acme Supply Co | IL             | 2004-12-22T00:00:00  | NULL                 |


Another method from SCD2 uses an effective date and current flag.

| Supplier_Key | Supplier_Code | Supplier_Name  | Supplier_State | Effective_Date       | Current_Flag |
|--------------|---------------|----------------|----------------|----------------------|--------------|
| 123          | ABC           | Acme Supply Co | CA             | 2000-01-01T00:00:00  | N            |
| 124          | ABC           | Acme Supply Co | IL             | 2004-12-22T00:00:00  | Y            |


- **Type 3**: Add a new attribute  

This methos tracks changes using separate columsn and preservers limited history.

| Supplier_Key | Supplier_Code | Supplier_Name  | Original_Supplier_State | Effective_Date       | Current_Supplier_State |
|--------------|---------------|----------------|-------------------------|----------------------|------------------------|
| 123          | ABC           | Acme Supply Co | CA                       | 2004-12-22T00:00:00  | IL                    |

- **Type 4**: Same as Type 3 but win unlimited histroy by using a **separate history table**

Supplier Table:
| Supplier_Key | Supplier_Code | Supplier_Name              | Supplier_State |
|--------------|---------------|----------------------------|----------------|
| 124          | ABC           | Acme & Johnson Supply Co   | IL             |

Supplier_History Table
| Supplier_Key | Supplier_Code | Supplier_Name              | Supplier_State | Create_Date           |
|--------------|---------------|----------------------------|----------------|----------------------|
| 123          | ABC           | Acme Supply Co             | CA             | 2003-06-14T00:00:00  |
| 124          | ABC           | Acme & Johnson Supply Co   | IL             | 2004-12-22T00:00:00  |



- **Type 5** Type 4 + Type 1
- **Type 6** Type 1,2 and 3


### 3. Database Schemas wich one do you know. Use-cases

### 4. Normal Form.

### 5. CAP - Theorem

### 6. CDC Change Data Capture

Is a technique to identify and capture changes made to data. The changes can be inserts, updates or deletes. The primary goal is to ensure data synchronization, replication or loading without needing to san the entire database or data source.

**CDC- Use case**

Imagine we have an e-commerce website with a database taht stores production information. Each day, new products are added, old ones are updated, and some might be removed. Using traditional methods, if you wanted to synchronize this production
data to a data warehouse for analytics, you would have to extract ALL product data nightly, which is bor resource-intensive and time-consuming.

With CDC, instead of extracting all the products, you had only capture the changes made since the last extraction. If 50 products were added, 30 pudated and 10 deleted you had only process those 90 records. This save a lot of computational resources and time.





In distributed systems there are 3 main things that you need to be: be consistent, available, and partition tolerant.

Being consistent means that when you ask the computer for information, it will always give you the same answer.

Being available means that the computer is always ready to give you an answer when you ask for it.

Partition tolerance means that the computer can still work even if some parts of it stop talking to each other.

The CAP theorem says that a distributed system can only have two of these three things at once. So a computer system can only have two of these three features at a time.

For example, if you have a computer system that needs to be always available and partition tolerant, it may not be consistent. 
This means that sometimes it may give you different answers depending on which part of the system you ask.

##### Wich 2 should you choice ?

The choice of which two features to prioritize in a distributed system depends on the specific requirements of the system and the needs of the users.

For example, if you are building a system that handles financial transactions, consistency and partition tolerance might be the most important features to prioritize.
This is because you want to make sure that every transaction is recorded accurately and reliably, and that the system continues to work even if some parts of it fail.

On the other hand, if you are building a system for content delivery, availability and partition tolerance might be more important.
 This is because you want to make sure that users can always access the content they need, and that the system can continue to work even if some parts of it are 
 temporarily unavailable.

So, the choice of which two features to prioritize really depends on the specific needs and goals of the system. It's important to carefully consider these factors and make an informed decision.


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


#### 25. In terms of Data warehouse what is a Change Data Capture know as CDC ?
CDC is a mechanism to keep databases that should be identical (replicas) updated, in a DWH context it may be that we have the same information at different points of our architecture for different purposes,
the mechanism to keep these databases updated is CDC

#### 26. Can you make a example of use of CDC ?

Let's imagine that we have a store that sells electrical appliances, if our business is very small we could use a database to support the OLTP actions and we could also use some analysis queries in our database,
such as knowing which appliance has been sold. more, or when money we have generated etc..

while doing this may be acceptable in a small company with a small database, a large organization with a very large database is not a good idea, it is not a good idea to use the same table for doing transactions as for Analysis, for what is chosen in these cases to replicate the database (in our example the stock table)

then we use table 1 for OLTP operations and table 2 which is the copy of table 1 for OLAP operations.

The way to synchronize the 2 tables is through CDC


Example:

Initial State:

Database 1 (Source):

```
+----+------------+-------+
| ID | Product    | Stock |
+----+------------+-------+
| 1  | Laptop     | 50    |
| 2  | Smartphone | 30    |
| 3  | Tablet     | 20    |
+----+------------+-------+
```

Database 2 (Target, copy of Database 1 at the time of copying):

```
+----+------------+-------+
| ID | Product    | Stock |
+----+------------+-------+
| 1  | Laptop     | 50    |
| 2  | Smartphone | 30    |
| 3  | Tablet     | 20    |
+----+------------+-------+
```
Change:
A customer purchases a Smartphone from Database 1, reducing its stock by 1.

```
UPDATE products SET Stock = Stock - 1 WHERE Product = 'Smartphone';
```

CDC Capture:
The CDC system in Database 1 detects this change and captures it in a CDC log or journal.

```
yaml

Transaction ID: 12345
Table: products
Operation: UPDATE
Primary Key: ID=2
Column: Stock
Old Value: 30
New Value: 29

```
CDC Apply:
The CDC system reads the captured change and applies it to Database 2. It updates the corresponding record for the Smartphone product with the new stock value of 29.

Result:
After applying the change, both Database 1 and Database 2 will have the same values:

```
+----+------------+-------+
| ID | Product    | Stock |
+----+------------+-------+
| 1  | Laptop     | 50    |
| 2  | Smartphone | 29    |
| 3  | Tablet     | 20    |
+----+------------+-------+
```
**summary**
CDC is used to keep Database 2 updated with respect to Database 1,
enabling the data in Database 2 to be available for analysis and generating valuable insights without affecting the operational OLTP database


## Databricks 


#### Whats the following code do in Databricks ?

SHALLOW CLONE delta.{source_path}/{source_name}


It will clone a table but the only thing its really generate its the metadata, it means the clone would not make a copy of the data just reference the same underlying files as the source table.


#### How can I drop a table, removing the data that is reference underlying. can you give me a use case ?

Using "PURGE"

```Drop <table_name> PURGE ```

A use case that occurs to me could be that of an old project that is no longer necessary, not even keeping a backup copy, so it may be a good option to delete the tables used by that project,
making sure that we do not leave data that could belongs. So we do a more general cleaning.


#### Pyspark vs SparSQL what are the advantange one compare the other in terms of perfomrance.

No, both of them are backed in the same angine: "the Catalyst optimizer"


#### What are the User-Defined Functions in Databricks.

UDF allows you to register custom SQL logic as function to reuse it later or when you want.

Example:

```
CREATE OR REPLACE FUNCTION sale_announcement(item_name STRING, item_price INT)
RETURNS STRING
RETURN concat("The ", item_name, " is on sale for $", round(item_price * 0.8, 0));

SELECT *, sale_announcement(name, price) AS message FROM item_lookup
```


#### How can you see the basic information of a function ? 

DESCRIBE FUNCTION EXTENDED <my_function>

#### How many types of functions do you know ?

 1) SCALAR: It means the the funcion operate on difividual row(row by row)
 2) AGGREGATE:Operate multiple rows
 3) WINDOW: Compute result for a specific row based or window
 

##### When would be a advantange sparkSQL vs Pyspark 

Better SparkSQL: SQL Familiarity, Portability, Readability
Better PySpark: When you are not just using SQL.
                Other libaries (ML)
				
				
#### Nested data, you have a tables where the values are nested json, how could you convert it in a normal Table where every value is a column



```
+----+------------------------------------------------------------------------------------+
| ID |                                   value                                            |  
+----+------------+-----------------------------------------------------------------------+
| 1  | {"device":"Linux","ecommerce":{"purchase_revenue_in_usd":1047.6","unique_items":2},|
|    |   "event_name":"finalize","event_previous_timestamp":1593879787820475,             |
|	 |	"event_timestamp":1593879948830076,"geo":{"city":"Huntington Park","state":"CA"}  |                                                                          | 
+----+------------------------------------------------------------------------------------+
```

We can create a new table on the fly parsing the schema.

```
CREATE OR REPLACE TEMP VIEW parsed_events AS SELECT json.* FROM (
SELECT from_json(value, schema_of_json('{"device":"Linux","ecommerce":{"purchase_revenue_in_usd":1075.5,"total_item_quantity":1,"unique_items":1},
                                         "event_name":"finalize","event_previous_timestamp":1593879231210816,"event_timestamp":1593879335779563,
										 "geo":{"city":"Houston","state":"TX"}')) AS json 
FROM my_old_table_json);
```



#### What are the 

SELECT * FROM parsed_events







#### Base on your experience, what bad practices did you see ? 

- People out of the company been responsible or Jobs fails, so at the end nobody was notifiying.
