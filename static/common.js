var ClockManager = function($el) {
  this.$el = $el;
  this.localStartT = Date.now();
  this.serverStartT = +new Date($el.text());
  this.update();
  setInterval(this.update.bind(this), 1000);
};
ClockManager.prototype.update = function() {
  var nowT = Date.now();
  var diffT = nowT - this.localStartT;
  var currentServerDT = new Date();
  currentServerDT.setTime(this.serverStartT + diffT);
  this.$el.text(currentServerDT.toLocaleString());
};

$(function() {
  // A. Receive server clock and display it
  var clock = new ClockManager($('#clock-me'));
  $('script[type="text/deferscript"]').map(function(i, el) {
    $('<script />')
      .attr('type', 'text/javascript')
      .text(el.innerHTML)
      .appendTo('head');
    $(el).remove();
  });
});
