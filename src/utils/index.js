export const getRandomBG = () => {
    const colors = [
        '#FF8A80', // Red
        '#82B1FF', // Blue
        '#A5D6A7', // Blue
        '#FFE066', // Yellow
    ];
   const color = colors[Math.floor(Math.random() * colors.length)];
//    return "bg-[" + color + "]";
    return color;
}