import React from "react";

import { Employees } from "../../fixtures/employee";
import "../../styles/cards.css";
import "../../styles/layout.css";
import { Header } from "../header/header";

export const EmployeeList = () => {
    return (
        <div>
            <Header title={'Employee List'} isAuthenticated={true} />

            <div className="list-wrapper">
                {Employees.map((employee, empIndex) =>
                    <div className="card-wrapper" key={'emp-' + empIndex}>
                        <div className="card">
                            <p className="name">{employee.name}</p>
                            <p className="mobile">{employee.phoneNo}</p>

                            <div className="other-data">
                                <span>{employee.email}</span>
                                <span>{employee.gender}</span>
                                <span>{employee.age}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}