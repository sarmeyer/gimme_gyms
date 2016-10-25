// $(document).ready(function(){
//   $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyB92DxcX8-pGzaLxXLTfwpjYhfTexY3P-w&channelId=UCiP6wD_tYlYLYh3agzbByWQ&part=snippet,id&order=date&maxResults=8",
//   function(data, status){
//     getVideos(data.items);
//   })
// function getVideos(videos){
//     for (var i = 0; i < videos.length; i++) {
//       var vid_id = videos[i].id.videoId;
//       var vid = document.createElement('iframe');
//       vid.src = `https://www.youtube.com/embed/${vid_id}`;
//       $('#player').append(vid);
//     }
//   }
// })
