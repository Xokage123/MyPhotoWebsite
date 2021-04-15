const photos = (state = [], action) => {
    switch (action.type) {
        case "LOAD_PHOTOS":
            return [...state, ...action.photos];
        case "UPDATE_PHOTO":
            const newArray = state.filter((element) => {
                if (element.id !== action.photo.id) {
                    return true;
                }
            })
            newArray.push(action.photo);
            console.log(newArray);
            return newArray;
        default:
            return state;
    }
};

export default photos;