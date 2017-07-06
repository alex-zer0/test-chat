class HomeController {
  constructor(ChatService, $timeout) {
    'ngInject';
    this.name = 'home';

    this.addMessage = () => {
      if (!this.newMsg) {
        return;
      }
      this.loadMessage({
        body: this.newMsg,
        avatarUrl: ChatService.getAvatar(),
        isNew: true
      });
    };

    this.loadMessage = message => {
      this.messages.push(message);
      $timeout(() => delete message.isNew, 2000);
      this.newMsg = '';
    };
  }
}

export default HomeController;
