import {default as IconsProgramming } from './storage/programming.svg'
import {default as IconMarketing} from './storage/marketing.svg'
import {default as IconTesting} from './storage/testing.svg'
import {JSX} from "react";

type TCoursesIcons = {
    [name: string]: JSX.Element;
}
const coursesIcons: TCoursesIcons = {
    programming: <IconsProgramming/>,
    marketing:<IconMarketing/>,
    testing:<IconTesting/>,
}
type TypeOptionSelectImg = {
    name:string,
    img:string,
    bg:string,
    width: string;
    height: string;
    borderRadius: string;
}

export const listOptionsImg: TypeOptionSelectImg[] = [
    {
        name: "programming",
        img: "programming",
        bg: "linear-gradient(138deg, #0029FF -8%, #FA00FF 106.69%)",
        width: '109px',
        height: '108px',
        borderRadius:'19px',
    },
    {
        name: "testing",
        img: "testing",
        bg: "linear-gradient(138deg, #4E6AFE -8%, #00F0FF 106.69%)",
        width: '109px',
        height: '108px',
        borderRadius:'19px',
    },
    {
        name: "marketing",
        img: "marketing",
        bg: "linear-gradient(138deg, #EB6CF6 -8%, #1DE4FF 103.83%, #54D8EA 106.69%)",
        width: '109px',
        height: '108px',
        borderRadius:'19px',
    },
]
export const IconsImport = () => {
    return (
        <>
            {listOptionsImg.map((item:TypeOptionSelectImg) => (
                <div style={{background: item.bg ,width:item.width, height:item.height, borderRadius:item.borderRadius}}>
                    {coursesIcons[ item.img ]}
                </div>
            ))}
        </>
    );
};
