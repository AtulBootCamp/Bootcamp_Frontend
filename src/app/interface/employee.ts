import { Department } from "./department";

export interface Employee {
    id:number;
    empName:string;
    departments:Department[];
}
