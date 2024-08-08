const inquirer = require('inquirer');
const db = require('./db/db');

const mainMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ],
        },
    ]).then(answer => {
        switch (answer.action) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            default:
                db.end();
                break;
        }
    });
};

const viewAllDepartments = async () => {
    const res = await db.query('SELECT * FROM department');
    console.table(res.rows);
    mainMenu();
};

const viewAllRoles = async () => {
    const res = await db.query('SELECT * FROM role');
    console.table(res.rows);
    mainMenu();
};

const viewAllEmployees = async () => {
    const res = await db.query('SELECT * FROM employee');
    console.table(res.rows);
    mainMenu();
};

const addDepartment = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the department name:',
        },
    ]);
    await db.query('INSERT INTO department (name) VALUES ($1)', [answer.name]);
    console.log(`Added ${answer.name} to the database.`);
    mainMenu();
};

const addRole = async () => {
    const departments = await db.query('SELECT * FROM department');
    const departmentChoices = departments.rows.map(department => ({
        name: department.name,
        value: department.id,
    }));
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the role salary:',
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Select the department for this role:',
            choices: departmentChoices,
        },
    ]);
    await db.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answer.title, answer.salary, answer.department_id]);
    console.log(`Added ${answer.title} to the database.`);
    mainMenu();
};

const addEmployee = async () => {
    const roles = await db.query('SELECT * FROM role');
    const roleChoices = roles.rows.map(role => ({
        name: role.title,
        value: role.id,
    }));
    const employees = await db.query('SELECT * FROM employee');
    const managerChoices = employees.rows.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
    }));
    managerChoices.unshift({ name: 'None', value: null });

    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee first name:',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee last name:',
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the employee role:',
            choices: roleChoices,
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Select the employee manager:',
            choices: managerChoices,
        },
    ]);
    await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answer.first_name, answer.last_name, answer.role_id, answer.manager_id]);
    console.log(`Added ${answer.first_name} ${answer.last_name} to the database.`);
    mainMenu();
};