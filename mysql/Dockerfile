# Use an official MySQL image as the base image
FROM mysql:latest

# Set the root password and create a database
ENV MYSQL_ROOT_PASSWORD=123456
ENV MYSQL_DATABASE=instagram-clone

# Optionally, expose the MySQL port
EXPOSE 3306

# Copy the SQL script to initialize the database
COPY init.sql /docker-entrypoint-initdb.d/

# Grant necessary privileges to root user (replace 'yourpassword' with a secure password)
RUN echo "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'yourpassword' WITH GRANT OPTION;" > /docker-entrypoint-initdb.d/01-grant-all.sql

# Grant necessary privileges to the user associated with the database
RUN echo "GRANT ALL PRIVILEGES ON *.* TO 'youruser'@'%' IDENTIFIED BY 'yourpassword' WITH GRANT OPTION;" > /docker-entrypoint-initdb.d/02-grant-user.sql

# Optionally, set character set and collation (replace 'utf8mb4' and 'utf8mb4_unicode_ci' with your preferred values)
RUN echo "ALTER DATABASE ${MYSQL_DATABASE} CHARACTER SET = 'utf8mb4' COLLATE = 'utf8mb4_unicode_ci';" > /docker-entrypoint-initdb.d/03-set-charset.sql

# You can add more SQL scripts for additional database setup if needed

# The official MySQL image automatically runs scripts in /docker-entrypoint-initdb.d/ during container initialization

