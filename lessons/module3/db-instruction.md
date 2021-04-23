# Part One - What the heck is a database anyway?
- What is a database?
    - Show spreadsheet
    - Talk about the value of data
    - Data is simply about things and the relationships between things (whiteboard - movie data example)

- Explain how websites and other applications interact with a database (whiteboard)
    - Read Data
    - Write Data

# Part 2 - How do we design a database
- Database Structure (Relational)
    - Design Database For Netflix

- SQL Tutorial (https://sqlbolt.com/lesson/select_queries_with_joins)
    - Describe the data: Movie Data
        - Two Tables: 
            - Movies
                - Title, Director, year, Length_minutes
            - Boxoffice
                - Movie_id
                - Rating
                - Domestic_sales

# Part 3 - How do we query a database?

    - What is SQL (Structured SQL Language)
    - Getting Data Out
    
        - Give me all the data in the movies table
            - Select * from movies

        - Give me all the data in the movies table, ordered by release year (asc vs desc)
            - Select * from movies order by Year

        - Give me all of the directors
            - Select director from movies
            - Better yet, give me all of the unique directors
                - Select distinct(director) from movies
            - Even better, count the number of movies that each director directed
                - select director, count(*) from movies group by director
                - Now order that by the count descending.
                    - select director, count(*) as count from movies group by director order by count desc

        - Give me only movies directed by "John Lasseter"
            - Select * from movies where director = “John Lasseter”

        - What was the dollar amount of the movie with the most in domestic_sales?
            - Select max(domestic_sales) from boxoffice
            - Select * from boxoffice order by domestic_sales desc limit 1;

        - Okay, but how do I get the data from movies & boxoffice together?  Joins.
          - select * from movies join boxoffice on id = movie_id
        - Movie with the most domestic sales
          - select * from movies join boxoffice on id = movie_id order by domestic_sales desc limit 1
        - Total Sales
          select *, domestic_sales + international_sales as total_sales from movies join boxoffice on id = movie_id order by total_sales desc
        - Average total sales
          select year, avg(total_sales) from (select *, domestic_sales + international_sales as total_sales from movies join boxoffice on id = movie_id order by total_sales desc) group by year order by year desc


http://bit.ly/sbcsclass2
http://bit.ly/sbcsclass3