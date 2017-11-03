export default {
    hero: JSON.parse(localStorage.getItem('Hero')) !== null ? JSON.parse(localStorage.getItem('Hero')) : false || {},
    enemy: JSON.parse(localStorage.getItem('Enemy')) !== null ? JSON.parse(localStorage.getItem('Enemy')) : false || {},
    levelOfForest: JSON.parse(localStorage.getItem('Forest'))  || 0
};
//JSON.parse(localStorage.getItem('Store').levelOfForest) || 
// JSON.parse(localStorage.getItem('Store').hero)
// JSON.parse(localStorage.getItem('Store').enemy)