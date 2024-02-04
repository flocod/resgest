// util.js

// Fonction pour ajouter des séparateurs de milliers à un nombre
export const formatNumberWith = (number, separator) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };