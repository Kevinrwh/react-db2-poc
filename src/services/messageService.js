// src/services/messageService.js
export const fetchMessage = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 1000); // simulate network delay
    });
  };