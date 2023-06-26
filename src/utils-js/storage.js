const save = (key, value) => {
  const serializedState = JSON.stringify(value);
  localStorage.setItem(key, serializedState);
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    return [];
  }
};

export { save, load };
