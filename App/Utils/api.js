const api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then(
      (res) => res.json()
    );
  },

  getNotes(username){
    username = username.toLowerCase().trim();
    const url = `https://bam-formation.firebaseio.com/${username}.json`;
    return fetch(url)
    .then((res) => res.json());
  },

  addNotes(username, note){
    username = username.toLowerCase().trim();
    const url = `https://bam-formation.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note),
    }).then((res) => res.json());

  },

};

module.exports = api;
