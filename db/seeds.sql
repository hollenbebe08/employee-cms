INSERT INTO departments (id, department_name)
VALUES
(1, 'Human Resources'),
(2, 'Sales'),
(3, 'Finance'),
(4, 'IT');

INSERT INTO position (id, title, salary, department_id)
VALUES
(1, 'VP Human Resources', 160000, 1),
(2, 'HR Generalist', 60000, 1),
(3, 'Sales Director', 100000, 1),
(4, 'Sales Lead', 60000, 2),
(5, 'Sales Associate', 45000, 2),
(6, 'VP of Finance', 160000, 3),
(7, 'Controller', 100000, 3),
(8, 'Payroll Administrator', 60000, 3),
(9, 'Principal Architect', 180000, 4),
(10, 'Sr Software Engineer', 110000, 4),
(11, 'Jr Software Developer', 75000, 4);

INSERT INTO employees (id, first_name, last_name, position_id, manager_id)
VALUES
(1, 'Minnie', 'Mouse', 1, null),
(2, 'Donald', 'Duck', 2, 1),
(3, 'Mickey', 'Mouse', 3, null),
(4, 'Jiminy', 'Cricket', 4, 3),
(5, 'Michael', 'Banks', 5, 4),
(6, 'Daisy', 'Duck', 6, null),
(7, 'Winnie', 'ThePooh', 7, 6),
(8, 'Cruella', 'DeVil', 8, 7),
(9, 'Mary', 'Poppins', 9, null),
(10, 'Buzz', 'Lightyear', 10, 9),
(11, 'Jane', 'Banks', 11, 10);

