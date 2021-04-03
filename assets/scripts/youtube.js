var YOUR_API_KEY = "AIzaSyDuYx8N72Fgrlvv1uyeakRwNNeB6R7MM44";


//function to make the ajax call to YouTube api
async function gettrailer(movietitle) {
  const titleWithTrailerString = `${movietitle} official trailer`;
  console.log('trailerString: ' + titleWithTrailerString)
  const videoURL = await $.ajax({
    type: "GET",
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&order=relevance&q=${titleWithTrailerString}&key=${YOUR_API_KEY}`,
    datatype: "json",
    Headers: { "Accept": "application/json" },
    success: function (data) {
      console.log('full trailer data')
      console.log(data);
      
      var filteredData = data.items.filter(item => {
        return item.id.kind == "youtube#video"
      });
      console.log('filtered data')
      console.log(filteredData);

      var videourl = `https://youtube.com/watch?v=${filteredData[0].id.videoId}`;
    
      console.log('built youtube url')
      console.log(videourl);
      window.location.href = videourl;
      return;

    }
  })
};

//Event listener for Youtube buttons
$(document).on('click', '.youtube-router', function (e) {
  e.preventDefault();
  const desiredTitle = $(this).attr('data-title');
  console.log(desiredTitle)
  gettrailer(desiredTitle)

  .catch(err => {
    console.log(err)
  })



})