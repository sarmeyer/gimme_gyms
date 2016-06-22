$(document).ready(function(){

  $.ajax({
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxcalories=450&maxcarbs=50&maxfat=50&maxprotein=100&mincalories=0&minCarbs=0&minfat=0&minProtein=7',
      type: 'GET',
      dataType: 'json',
      success: function(data) { showRecipes(data); },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "nLD6ETzxmRmsh1zXOQe6WAZsJgXgp1EZkMNjsn2LtOKB4FyEDA");
      }
  });
  function showRecipes(results) {
    results.forEach(function(recipe){
      var thumbnails = document.createElement('div');
      var img = document.createElement('img');
      img.src = recipe.image;
      $(img).addClass('recipe_images');
      img.id = recipe.id;
      img.title = recipe.title;
      img.alt = 'No image available, but the link works!'
      $(thumbnails).append(img);
      $('#food').append(thumbnails);
      });
      links(results);
    }
  function links(){
    //********add link******//
    $('img').each(function () {
      var currentImage = $(this);
      currentImage.wrap("<a href=" + "'https://spoonacular.com/recipes/chicken-enchiladas-" + this.id + "'</a>");
  })
}
})



// curl --get --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/5487/information?includeNutrition=false' \
//   -H 'X-Mashape-Key: nLD6ETzxmRmsh1zXOQe6WAZsJgXgp1EZkMNjsn2LtOKB4FyEDA'
