/**
 * Demo App
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 *  Contains the data for student statistic for each year quater
 */
export interface StudentStatistic { 
    id?: number;
    quater?: number;
    studentID?: number;
    classID?: number;
    total?: number;
    /**
     * Nghi khong phep
     */
    absences?: number;
    /**
     * Nghi co phep
     */
    requestedAbsences?: number;
    usedMeals?: number;
    dateCreated?: string;
}
