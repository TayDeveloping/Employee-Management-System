const viewAllDepartments = async () => {
    const res = await db.query('SELECT * FROM department');
    console.table(res.rows);
    mainMenu();
};

