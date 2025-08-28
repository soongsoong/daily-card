import AwkwardEmoji from '$lib/assets/AwkwardEmoji.png';
import SmilingEmoji from '$lib/assets/SmilingEmoji.png';

export const ImgDef = {
    'default': { src: AwkwardEmoji, alt: "", label: "기본 이모지" },
    'awkward': { src: AwkwardEmoji, alt: "awkward emoji", label: "어색한 이모지" },
    'smile': { src: SmilingEmoji, alt: "smiling emoji", label: "웃는 이모지" }
};

export type ImgKey = keyof typeof ImgDef;