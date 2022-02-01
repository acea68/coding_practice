$(document).ready(function(){

  // Blanks out html body/div section
  var $app = $('#app');
  $app.html('');

  // Invoke timeago in preparation for timestamp display
  jQuery("time.timeago").timeago();

  // Home page title
  var $title = $('<h1>Twiddler</h1>');
  $title.appendTo($app);
  // $('#app').append($title) // does the same as line above ^^

  //  Create "Update Feed" button
  var $updateFeed = $('<button id="update-feed">Update Feed</button>');
  $updateFeed.appendTo($app);

  // Create "feed" area (div)
  var $feed = $('<div id="feed"></div>');
  $feed.appendTo($app);

  // Create "renderFeed" helper func
  var renderFeed = function (tweet) {
    var $tweet = $('<div class="tweet"></div>');

    var $msg = $('<div class="message"></div>');
    $msg.text(tweet.message);

    var $user = $('<div class="username"></div>');
    $user.text('@' + tweet.user);

    var $avatar = $('<img class="profile-photo"></img>');
    $avatar.attr('src', tweet.profilePhotoURL);

    var $timestamp = $('<time class="timestamp timeago"></time>');
    $timestamp.text(jQuery.timeago(tweet.created_at));

    var $iconComment = $('<i class="comment far fa-comment"></i>');
    var $iconRetweet = $('<i class="retweet fas fa-retweet"></i>');
    var $iconLike = $('<i class="like far fa-thumbs-up"></i>');
    var $iconShare = $('<i class="share far fa-share-square"></i>');

         $avatar.appendTo($tweet);
           $user.appendTo($tweet);
            $msg.appendTo($tweet);
      $timestamp.appendTo($tweet);
    $iconComment.appendTo($tweet);
    $iconRetweet.appendTo($tweet);
       $iconLike.appendTo($tweet);
      $iconShare.appendTo($tweet);

    return $tweet;
  };

  // Update feed on button click
  $('#update-feed').click( function (event) {
    $('.tweet').remove();
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $formattedTweet = renderFeed(tweet)
      $formattedTweet.appendTo($feed);
      index -= 1;
    }
  });

  // Initialize feed of 11 tweets in #feed
  var initFeed = 0;
  if (initFeed === 0) {
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $initTweet = renderFeed(tweet);
      $initTweet.appendTo($feed);
      index -= 1;
    };
    initFeed++;
  };

  // Open user feed
  // $('div .username').click( function (event) {
  //   $('.tweet').remove();

  // });





  // Create stream of 11 tweets to populate home page
  // var index = streams.home.length - 1;
  // while(index >= 0){
  //   var tweet = streams.home[index];
  //   var $tweet = $('<div class="tweet"></div>');
  //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //   $tweet.appendTo($app);
  //   index -= 1;
  // }

  // Create alert when clicking title
  // $title.click( function (event) { // $title.on("click", function (event) {
  //   console.log(event);
  //   alert('The title of this page is: ' + event.target.innerText);
  // });
});