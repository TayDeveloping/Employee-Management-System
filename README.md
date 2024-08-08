# Employee Management System

## Description

The Employee Management System is a command-line application that allows business owners to view and manage the departments, roles, and employees in their company. This tool helps in organizing and planning business operations effectively.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/employee-management-system.git
    ```

2. Install the necessary dependencies by running:
    npm install

3. Set up the PostgreSQL database:
    - Open your PostgreSQL client (e.g., pgAdmin or psql).
    - Create a new database.
    - Run the schema.sql file to create the necessary tables.
    - Optionally, run the seeds.sql file to populate the database with initial data.

4. Configure the database connection:
    - Update the connection details in db/db.js with your PostgreSQL credentials.

## Usage

To start the application, use the following command:
    npm start

You will be presented with a series of prompts in the command-line interface to view and manage departments, roles, and employees.

## Available Options:
    View All Departments: Displays a table with department names and IDs.
    View All Roles: Shows job titles, role IDs, departments, and salaries.
    View All Employees: Displays employee details including IDs, names, job titles, departments, salaries, and managers.
    Add Department: Allows you to add a new department.
    Add Role: Enables you to add a new role with a specified salary and department.
    Add Employee: Lets you add a new employee with a specific role and manager.
    Update Employee Role: Allows you to change an employee’s role.

## Database Schema
    
The database consists of three main tables:

# Department:

id: Primary key.
name: Name of the department.

# Role:

id: Primary key.
title: Role title.
salary: Role salary.
department_id: Foreign key referencing the department.

# Employee:

id: Primary key.
first_name: Employee's first name.
last_name: Employee's last name.
role_id: Foreign key referencing the role.
manager_id: Self-referencing foreign key for the employee’s manager.

## Features
    View departments, roles, and employees.
    Add new departments, roles, and employees.
    Update employee roles.
    User-friendly command-line interface.

## Bonus Features
    Update employee managers.
    View employees by manager.
    View employees by department.
    Delete departments, roles, and employees.
    View the total utilized budget of a department.

## License 
This project is licensed under the MIT License. See the LICENSE file for more details.