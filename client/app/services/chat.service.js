const avatarUrl = 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg';

const messages = [
  {
    avatarUrl: avatarUrl,
    body: 'Hello, this is first message'
  },
  {
    avatarUrl: avatarUrl,
    body: 'It\'s the second'
  },
  {
    avatarUrl: avatarUrl,
    body: 'Almost last message for you'
  }
];

export function ChatService(/*$http*/) {
  'ngInject';

  return {
    fetchAll: () => messages, //$http.get('data.json').then(res => res.data)
    getAvatar: () => avatarUrl
  };
}