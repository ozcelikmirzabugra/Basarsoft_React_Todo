export const postData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Post error:', error);
      throw error;
    });
};

export const deleteData = (url) => {
  return fetch(url, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Eğer bir JSON yanıtı varsa bunu döner
    })
    .catch((error) => {
      console.error('Delete error:', error);
      throw error;
    });
};

export const patchData = (url) => {
  return fetch(url, {
    method: 'PUT',
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch((error) => {
    console.log('Update error:', error);
    throw error;
  });
};
