import AwkwardEmoji from '$lib/assets/AwkwardEmoji.png';
import SmilingEmoji from '$lib/assets/SmilingEmoji.png';

export const ImgDef = {
    'default': { src: AwkwardEmoji, alt: "", label: "기본 이모지" },
    'awkward': { src: AwkwardEmoji, alt: "awkward emoji", label: "어색한 이모지" },
    'smile': { src: SmilingEmoji, alt: "smiling emoji", label: "웃는 이모지" }
};

export const ProfileImage = "https://lh3.googleusercontent.com/pw/AP1GczOX4IppNi3giikNZeudvpe4Q9FA3N-tYWfwuL7TckupB-wZAL1Xm9PI6KRSMZqxL5LvOzQx8QwizA3LM1_Jju8aEpcxGXDfTSm9kQoH3_I_FGR_WIt4mjD3lEui-xTtTJK7y5j307NmqGoe4C6aEeuV=w317-h409-s-no-gm?authuser=0";

export const todos = [
    {text: "ukulele", status:"완료"},
    {text: "lank up", status:"완료"},
    {text: "diary", status:"미완료"},
];

export type ImgKey = keyof typeof ImgDef;