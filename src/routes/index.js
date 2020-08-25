import { LoginForm } from "../containers/login/form";
import { EmployeeList } from "../containers/employee/list";

export const paths = {
    'index': '/',
    'employeeList': '/employee-list'
}

export const routes = [
    {
        path: '/',
        component: LoginForm,
    },
    {
        path: '/employee-list',
        component: EmployeeList,
    }
];