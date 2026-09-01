const STORAGE_KEY = 'quizHighScore';

export const getHighScore = () => {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
};

export const saveHighScore = (score) => {
    return localStorage.setItem(STORAGE_KEY, String(score));
};

export const removeHighScore = () => {
    return localStorage.removeItem(STORAGE_KEY);
};