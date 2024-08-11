\c taylor_employee_db

-- Insert departments
INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Human Resources'),
    ('Finance'),
    ('Marketing'),
    ('Sales');

-- Insert roles
INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 80000, (SELECT id FROM department WHERE name='Engineering')),
    ('Senior Software Engineer', 100000, (SELECT id FROM department WHERE name='Engineering')),
    ('HR Manager', 75000, (SELECT id FROM department WHERE name='Human Resources')),
    ('Accountant', 65000, (SELECT id FROM department WHERE name='Finance')),
    ('Marketing Specialist', 60000, (SELECT id FROM department WHERE name='Marketing')),
    ('Sales Representative', 50000, (SELECT id FROM department WHERE name='Sales'));

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', (SELECT id FROM role WHERE title='Software Engineer'), NULL),
    ('Jane', 'Smith', (SELECT id FROM role WHERE title='Senior Software Engineer'), 1), -- John Doe is her manager
    ('Emily', 'Johnson', (SELECT id FROM role WHERE title='HR Manager'), NULL),
    ('Michael', 'Brown', (SELECT id FROM role WHERE title='Accountant'), NULL),
    ('Sarah', 'Davis', (SELECT id FROM role WHERE title='Marketing Specialist'), NULL),
    ('Chris', 'Wilson', (SELECT id FROM role WHERE title='Sales Representative'), NULL);
