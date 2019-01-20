// todo: add function to convert number to hex color

export function convertIntToHSL(H, votesum)
{
    let saturation = 15 + votesum;
    if (saturation < 0)
        saturation = 0;
    else if (saturation > 100)
        saturation = 100;

    return "hsl(" + H + ", " + saturation + "%, 37%)";


}

