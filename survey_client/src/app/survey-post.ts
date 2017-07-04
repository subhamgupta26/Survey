export class SurveyPost {
    id:number;
    title:string;
    description:string;
    count:number;
    availableResponses:Response[];
}

export interface Response{
    id:number;
    name:string;
    totalSelectedBy:number;
}
