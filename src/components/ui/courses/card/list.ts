export type TCoursesProps = {
    id: number;
    images: string;
    types?: string;
    urlCheck?: string;
    description?: string;
} 
export interface ITestList extends TCoursesProps {
    title: string;
}
export interface IFrontCourses extends TCoursesProps  {
    company: string;
 }
export const listItem: TCoursesProps[] = [
    {
        id: 1,
        images: `${process.env.NEXT_URL}/img/courses/front-end-basic.png`,
        types: 'Програмування',
        urlCheck: 'programming',
        description: 'Курси Back-end, Front-end, Machine Learning та DevOps'
    },
    {
        id: 2,
        images: `${process.env.NEXT_URL}/img/courses/front-end-pro.png`,
        types: 'Тестування',
        urlCheck: 'testing',
        description: 'Курси тестувальників: QA Manual та QA Automation на Java, Python та JavaScript, а також підготовка до сертифікації ISTQB'
    },
    {
        id: 3,
        images:`${process.env.NEXT_URL}/img/courses/react.png`,
        types: 'Маркетинг',
        urlCheck: 'marketing',
        description: 'Курси інтернет маркетингу та SMM'
    },
]

export const TestList: ITestList[] = [
    {
        id: 1,
        images:`${process.env.NEXT_URL}/img/courses/card-test-actually.png`,
        title:'Актуальність знань',
        description: 'Навчальні курси, створені експертами, забезпечують актуальність інформації, що критично в галузях, які швидко розвиваються.'  
    },
    {
        id: 2,
        images:`${process.env.NEXT_URL}/img/courses/card-test-idei.png`,
        title:'Ефективність навчання',
        description: 'Курсы структуровані логічно, щоб допомагати учням ефективно засвоювати матеріал і швидко досягати цілей.'  
    },
    {
        id: 3,
        images:`${process.env.NEXT_URL}/img/courses/card-test-global.png`,
        title:'Доступність для всіх',
        description: 'Онлайн-курси роблять освіту доступною всюди, де є Інтернет, забезпечуючи глобальну доступність навчання.'  
    },
    {
        id: 4,
        images:`${process.env.NEXT_URL}/img/courses/card-test-money.png`,
        title:`Підтримка кар'єрного зростання`,
        description: `Навчання новим навичкам підвищує конкурентоспроможність на ринку праці і відкриває можливості для кар'єрного зростання.`  
    },
]
export const OtherCurses: TCoursesProps[] = [
    {
        id: 1,
        images: `${process.env.NEXT_URL}/img/courses/design.png`,
        types: 'Дизайн',
        description: 'Курси веб та графічного дизайну для починаючих та вже прокачаних юзерів.'
    },
    {
        id: 2,
        images: `${process.env.NEXT_URL}/img/courses/management.png`,
        types: 'Менеджмент',
        description: 'Курси менеджменту, апргейт навичок управління командою.'
    },
    {
        id: 3,
        images:`${process.env.NEXT_URL}/img/courses/languages.png`,
        types: 'Іноземні мови',
        description: 'Курси та приватні уроки з української, англійської,  німецької, французьскої, іспанської, італьянської та інших мов.'
    },
    {
        id: 4,
        images:`${process.env.NEXT_URL}/img/courses/science.png`,
        types: 'Науки',
        description: 'Курс та приватні уроки із математики, хімії, фізики та інших наук.'
    }, 
    {
        id: 5,
        images:`${process.env.NEXT_URL}/img/courses/interesting.png`,
        types: 'Цікаве',
        description: 'Курси та приватні уроки із різних напрямків, наприклад: роботетхника, розробка ігр...'
    },
]

export const FrontEndCurses: IFrontCourses[] = [
    {
        id: 1,
        images: `${process.env.NEXT_URL}/img/courses/design.png`,
        types: 'Front-end Basic',
        company:'Hillel',
        description: 'В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.'
    },
    {
        id: 2,
        images: `${process.env.NEXT_URL}/img/courses/management.png`,
        types: 'Front-end Pro',
        company:'Hillel',
        description: 'На курсі ви познайомитеся з принципами ООП, DOM, REST API і отримаєте практичні навички створення додатків з використанням «реакт-стека», що дозволить претендувати на посаду Junior Front-end Developer.'
    },
    {
        id: 3,
        images:`${process.env.NEXT_URL}/img/courses/languages.png`,
        types: 'React',
        company:'Hillel',
        description: 'Курси присвячений бібліотеці React'
    },
    {
        id: 4,
        images:`${process.env.NEXT_URL}/img/courses/science.png`,
        types: 'React',
        company:'Hillel',
        description: 'В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.'
    }, 
    {
        id: 5,
        images:`${process.env.NEXT_URL}/img/courses/interesting.png`,
        types: 'JavaScript Basic',
        company:'Hillel',
        description: 'На курсі ви познайомитеся з принципами ООП, DOM, REST API і отримаєте практичні навички створення додатків з використанням «реакт-стека», що дозволить претендувати на посаду Junior Front-end Developer.'
    },
    {
        id: 6,
        images:`${process.env.NEXT_URL}/img/courses/interesting.png`,
        types: 'Typescript',
        company:'Hillel',
        description: 'Курси присвячений бібліотеці React'
    },
]
export const TestingCurses: IFrontCourses[] = [
    {
        id: 1,
        images: `${process.env.NEXT_URL}/img/courses/design.png`,
        types: 'Front-end Basic',
        company:'Hillel',
        description: 'В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.'
    },
 
]
export const MarketingCurses: IFrontCourses[] = [
    {
        id: 1,
        images: `${process.env.NEXT_URL}/img/courses/design.png`,
        types: 'Front-end Basic',
        company:'Hillel',
        description: 'В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.'
    },
    {
        id: 2,
        images: `${process.env.NEXT_URL}/img/courses/management.png`,
        types: 'Front-end Pro',
        company:'Hillel',
        description: 'На курсі ви познайомитеся з принципами ООП, DOM, REST API і отримаєте практичні навички створення додатків з використанням «реакт-стека», що дозволить претендувати на посаду Junior Front-end Developer.'
    },

]
