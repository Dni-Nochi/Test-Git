const userCache = new Map();

function getUserProfile(userName) {
  if (userCache.has(userName)) {
    console.log(`Берем из кеша: ${userCache.get(userCache)}`);
  } else {
    console.log(`Загружаем с сервера: ${userName}`);
    userCache.set(userName, { data: 'какие-то данные' });
    return userCache.get(userName).data;
  }
}

console.log(getUserProfile('alex99'));
