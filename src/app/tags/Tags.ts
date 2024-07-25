export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly Java = new Tag('Java','orange');
    static readonly Python = new Tag('Python','pink');
    static readonly Spring_Boot = new Tag('Spring_Boot','green');
    static readonly Spring_Jpa = new Tag('Spring_Jpa','yellow');
    static readonly Sql = new Tag('Sql','purple');
    static readonly PlSql = new Tag('PlSql','blue');



   private constructor(private readonly key:string , public readonly color:string){

    }
    toString(){
   return this.key;
    }
}