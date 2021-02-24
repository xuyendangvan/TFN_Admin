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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ApplicationForm } from '../model/applicationForm';
import { NotificationData } from '../model/notificationData';
import { Parent } from '../model/parent';
import { Student } from '../model/student';
import { StudentStatus } from '../model/studentStatus';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ParentService {

    protected basePath = 'https://virtserver.swaggerhub.com/xuyendangvan/DemoAPI/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add new parents to the system
     * 
     * @param body Parent object that needs to be added to the system
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addParent(body: Parent, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addParent(body: Parent, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addParent(body: Parent, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addParent(body: Parent, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addParent.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/parents`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a parent account
     * 
     * @param id Parent id to delete
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteParent(id: number, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteParent(id: number, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteParent(id: number, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteParent(id: number, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteParent.');
        }


        let headers = this.defaultHeaders;
        if (apiKey !== undefined && apiKey !== null) {
            headers = headers.set('api_key', String(apiKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/parents/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds list student by parent id
     * Find the students according to ID
     * @param id ID value that needs to be considered for filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findStudentByParentID(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Student>>;
    public findStudentByParentID(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Student>>>;
    public findStudentByParentID(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Student>>>;
    public findStudentByParentID(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findStudentByParentID.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Student>>(`${this.basePath}/parents/${encodeURIComponent(String(id))}/students`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds list student status by parent id
     * Find the students status according to ID
     * @param id ID value that needs to be considered for filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findStudentStatusByParentID(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<StudentStatus>>;
    public findStudentStatusByParentID(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<StudentStatus>>>;
    public findStudentStatusByParentID(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<StudentStatus>>>;
    public findStudentStatusByParentID(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findStudentStatusByParentID.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<StudentStatus>>(`${this.basePath}/parents/${encodeURIComponent(String(id))}/studentstatus`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get form registration by the parent
     * 
     * @param id id of form object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFormsByParentID(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ApplicationForm>>;
    public getFormsByParentID(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ApplicationForm>>>;
    public getFormsByParentID(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ApplicationForm>>>;
    public getFormsByParentID(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getFormsByParentID.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ApplicationForm>>(`${this.basePath}/parent/${encodeURIComponent(String(id))}/form`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find parent by ID
     * Returns a single parent
     * @param id ID of parent to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getParentById(id: number, observe?: 'body', reportProgress?: boolean): Observable<Parent>;
    public getParentById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Parent>>;
    public getParentById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Parent>>;
    public getParentById(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getParentById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Parent>(`${this.basePath}/parents/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get parent notification
     * 
     * @param id The ID that needs to be fetched. Use 1 for testing. 
     * @param startIndex start index value of notification that needs to be considered for filter
     * @param category the type of notification 1-tuitionfee, 2-general
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getParentNotification(id: number, startIndex: number, category?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<NotificationData>>;
    public getParentNotification(id: number, startIndex: number, category?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NotificationData>>>;
    public getParentNotification(id: number, startIndex: number, category?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NotificationData>>>;
    public getParentNotification(id: number, startIndex: number, category?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getParentNotification.');
        }

        if (startIndex === null || startIndex === undefined) {
            throw new Error('Required parameter startIndex was null or undefined when calling getParentNotification.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (startIndex !== undefined && startIndex !== null) {
            queryParameters = queryParameters.set('startIndex', <any>startIndex);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<NotificationData>>(`${this.basePath}/parent/${encodeURIComponent(String(id))}/notifications`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a parent in the database with form data
     * 
     * @param id ID of parent that needs to be updated
     * @param body parent object to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateParentByID(id: number, body?: Parent, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateParentByID(id: number, body?: Parent, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateParentByID(id: number, body?: Parent, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateParentByID(id: number, body?: Parent, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateParentByID.');
        }


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/parents/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * update the tuition notification seen
     * @param parentID parentID
     * @param ntificationID notificationID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTuitionNotification(parentID: number, ntificationID: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateTuitionNotification(parentID: number, ntificationID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateTuitionNotification(parentID: number, ntificationID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateTuitionNotification(parentID: number, ntificationID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (parentID === null || parentID === undefined) {
            throw new Error('Required parameter parentID was null or undefined when calling updateTuitionNotification.');
        }

        if (ntificationID === null || ntificationID === undefined) {
            throw new Error('Required parameter ntificationID was null or undefined when calling updateTuitionNotification.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (parentID !== undefined && parentID !== null) {
            queryParameters = queryParameters.set('parentID', <any>parentID);
        }
        if (ntificationID !== undefined && ntificationID !== null) {
            queryParameters = queryParameters.set('ntificationID', <any>ntificationID);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.put<any>(`${this.basePath}/parent/checknotification/`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
