export type TBarsProps = {

    id:number;
    named:string;

}
export interface ISupBarProps extends TBarsProps { 

    images: string;
    
}
export const barsLists: TBarsProps[] = [
    {
        id:1,
        named:'Програмування'
    },
    {
        id:2,
        named:'Тестування'
    },
    {
        id:3,
        named:'Маркетинг'
    },
    {
        id:4,
        named:'Англійська мова'
    },
]

export const supBarsLists: ISupBarProps[] = [
    {
        id:1,
        named:'Front-end',
        images:`${process.env.NEXT_URL}/img/courses/html-icon.png`
    },
    {
        id:2,
        named:'C#',
        images:`${process.env.NEXT_URL}/img/courses/sharp.png`
    },
    {
        id:3,
        named:'Golang',
        images:`${process.env.NEXT_URL}/img/courses/golang.png`
    },
    {
        id:4,
        named:'JavaScript',
        images:`${process.env.NEXT_URL}/img/courses/javaScript.png`
    },
    {
        id:5,
        named:'Full-stack',
        images:`${process.env.NEXT_URL}/img/courses/fullstack.png`
    },
]