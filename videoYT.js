        // Pause the video when the modal is closed
        $(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
            // Remove the src so the player itself gets removed, as this is the only
            // reliable way to ensure the video stops playing in IE
            //$("#background-video").empty();
            $("#trailer-video-container").empty();
        });
        // Start playing the video whenever the trailer modal is opened
        $(document).on('click', '.movie-tile', function (event) {
            var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
            var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
            $("#trailer-video-container").empty().append($("<iframe></iframe>", {
              'id': 'trailer-video',
              'type': 'text-html',
              'src': sourceUrl,
              'frameborder': 0
            }));
        });
        // Animate in the movies when the page loads
        $(document).ready(function () {
          $('.movie-tile').hide().first().show("fast", function showNext() {
            $(this).next("div").show("fast", showNext);
          });
        });

         // ADD Jquery Video Background
          jQuery(function($) {
              $('#module-video').YTPlayer({
                fitToBackground: false,
                videoId: 'jKCyFB5LmPo',
                pauseOnScroll: false,
                playerVars: {
                  modestbranding: 0,
                  autoplay: 1,
                  controls: 1,
                  showinfo: 0,
                  branding: 0,
                  rel: 0,
                  autohide: 0
                }
              });

              $('#background-video').YTPlayer({
                fitToBackground: true,
                videoId: 'FYP95WJmW3o', 
                pauseOnScroll: true,
                callback: function() {
                  videoCallbackEvents();
                }
              });

              var videoCallbackEvents = function() {
              var player = $('#background-video').data('ytPlayer').player;

                player.addEventListener('onStateChange', function(event){
                    console.log("Player State Change", event);

                    // OnStateChange Data
                    if (event.data === 0) {          
                        console.log('video ended');
                    }
                    else if (event.data === 2) {          
                      console.log('paused');
                    }
                });
              }
        });
