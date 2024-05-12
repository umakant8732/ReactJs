

export const MemeApiFetch = async () => {
    const apiResponse = await fetch(`https://api.imgflip.com/get_memes`);
    return await apiResponse.json();
}