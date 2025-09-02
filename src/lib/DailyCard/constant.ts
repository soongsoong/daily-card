import AwkwardEmoji from '$lib/assets/AwkwardEmoji.png';
import SmilingEmoji from '$lib/assets/SmilingEmoji.png';

export const ImgDef = {
    'default': { src: AwkwardEmoji, alt: "", label: "기본 이모지" },
    'awkward': { src: AwkwardEmoji, alt: "awkward emoji", label: "어색한 이모지" },
    'smile': { src: SmilingEmoji, alt: "smiling emoji", label: "웃는 이모지" }
};

export const ProfileImage = "https://images.stockcake.com/public/2/d/8/2d81ce52-116c-47ca-9e41-66514c56de6c_large/sunset-city-view-stockcake.jpg";

export const todos = [
    {text: "ukulele", status:"완료"},
    {text: "lank up", status:"완료"},
    {text: "diary", status:"미완료"},
];

export type ImgKey = keyof typeof ImgDef;