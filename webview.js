module.exports = (Franz, options) => {
  function getMessages() {
      var count = 0;
      if(document.querySelector(".unread_count") != null){
          count = parseInt(document.querySelector('.unread_count').innerHTML);
      }

      Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
