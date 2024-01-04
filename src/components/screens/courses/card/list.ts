
export type TCoursesProps = {
    id: number;
    images: string;
    start?: string;
    sessions?: string;
    types: string;
    company: string;
    description: string;
} 
export const listItem: TCoursesProps[] = [
    {
        id:1,
        images: `${process.env.NEXT_URL}/img/courses/front-end-basic.png`,
        types: 'Front-end Basic',
        company: 'Hillel',
        start:'11 грудня старт ',
        sessions:'20 занять',
        description: 'В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.'
    },
    {
        id:2,
        images: `${process.env.NEXT_URL}/img/courses/front-end-pro.png`,
        types: 'Front-end Pro',
        company: 'Hillel',
        start:'11 грудня старт ',
        sessions:'20 занять',
        description: 'На курсі ви познайомитеся з принципами ООП, DOM, REST API і отримаєте практичні навички створення додатків з використанням «реакт-стека», що дозволить претендувати на посаду Junior Front-end Developer.'
    },
    {
        id:3,
        images:`${process.env.NEXT_URL}/img/courses/react.png`,
        types: 'React',
        company: 'Hillel',
        start:'11 грудня старт ',
        sessions:'20 занять',
        description: 'Курси присвячений бібліотеці React'
    },
]
