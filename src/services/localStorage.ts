export enum LocalStorageKey {
    Favorites = 'favorites'
}

export const getItem = (key: string) => {
    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key) || '');
    }

    return [];
};

export const setItem = <T>(key: string, value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
    window.localStorage.removeItem(key);
};