use JOSHDATABASE;

INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Housekeeping");
INSERT INTO department (name) VALUES ("Food/Beverage");
INSERT INTO department (name) VALUES ("Asset Protection");
INSERT INTO department (name) VALUES ("Front Desk");
INSERT INTO department (name) VALUES ("Customer Service");

INSERT INTO role (title, salary, department_id) VALUES ("Main Housekeeper", 30, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Main Engineer", 65, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Human Resource Director", 35, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Food/Beverage Assistant", 25, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Asset Protection Manager", 24, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Front Desk Agent", 23, 6);
INSERT INTO role (title, salary, department_id) VALUES ("Customer Service Associate", 19, 7);


INSERT INTO employee (first_name, last_name, role_id) VALUES ("Joshua", "Harris", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("David", "Harris", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Ryan", "Harris", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Theo", "Harris", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Nuri", "Harris", 5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Amir", "Joseph", 6);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Shareef", "Harris", 7);