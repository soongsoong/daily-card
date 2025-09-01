import AwkwardEmoji from '$lib/assets/AwkwardEmoji.png';
import SmilingEmoji from '$lib/assets/SmilingEmoji.png';

export const ImgDef = {
    'default': { src: AwkwardEmoji, alt: "", label: "기본 이모지" },
    'awkward': { src: AwkwardEmoji, alt: "awkward emoji", label: "어색한 이모지" },
    'smile': { src: SmilingEmoji, alt: "smiling emoji", label: "웃는 이모지" }
};

export const ProfileImage = "https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjJfMTQw/MDAxNTU1OTIzNzQyMzM1.7ykRPNOiY1KAKJdjmT3entD-oO3B11Meac3NkzvNwrEg.asbbsirs8onxiLo9Xhk0PpNSid1b4JjQgzhRas0OkrYg.JPEG.kyj4022/SE-51aee90f-4829-4d97-90de-d2372f671102.jpg?type=w800";

export type ImgKey = keyof typeof ImgDef;