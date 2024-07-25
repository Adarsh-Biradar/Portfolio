import { Tag } from './../tags/Tags';
export interface project{
    id:number;
    name:String;
    Summary:String;
    projectLink:String;
    pictures:String[];
    tags:Tag[];
}