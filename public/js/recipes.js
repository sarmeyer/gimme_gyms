$(document).ready(function(){
  $.ajax({
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxcalories=450&maxcarbs=50&maxfat=50&maxprotein=100&mincalories=0&minCarbs=0&minfat=0&minProtein=7',
      type: 'GET',
      dataType: 'json',
      success: function(data) { randomRecipes(data); },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "nLD6ETzxmRmsh1zXOQe6WAZsJgXgp1EZkMNjsn2LtOKB4FyEDA");
      }
  });
  function randomRecipes(results) {
    results.splice(0,7);
    results.forEach(function(recipe){
      var thumbnails = document.createElement('div');
      var img = document.createElement('img');
      var spanText = document.createElement('p');
      $(img).addClass('recipe_images');
      $(spanText).addClass('titles');
      $(thumbnails).addClass('allRecipes')
      img.src = recipe.image;
      img.id = recipe.id;
      img.alt = 'No image available, click here for more recipe details!'
      $(spanText).html(recipe.title);
      $(thumbnails).append(spanText);
      $(thumbnails).append(img);
      $('#food').append(thumbnails);
      });
      links(results);
    }
    $('.recipe_search').keydown(function(e) {
        if(e.keyCode === 13) {
          var userInput = $(this).val();
          getSearched(userInput);
        }
      });
      $('.recipe_search').keyup(function(event){
        if(event.keyCode === 13) {
          $('.recipe_search').val('');
        }
      })
    function getSearched(userInput) {
      $.ajax({
          url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?limitLicense=false&number=10&offset=0&query=${userInput}`,
          type: 'GET',
          dataType: 'json',
          success: function(data) { userRecipes(data.results); },
          error: function(err) { },
          beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "nLD6ETzxmRmsh1zXOQe6WAZsJgXgp1EZkMNjsn2LtOKB4FyEDA");
        }
      });
    }
  function userRecipes(results){
    $('#food').empty();
    results.forEach(function(recipes){
      var thumbnails = document.createElement('div');
      var img = document.createElement('img');
      var spanText = document.createElement('p');
      $(img).addClass('recipe_images');
      $(spanText).addClass('titles');
      img.src = `https://spoonacular.com/recipeImages/${recipes.image}`;
      img.id = recipes.id;
      img.alt = 'No image available, but the link works!'
      $(spanText).html(recipes.title);
      $(thumbnails).append(spanText);
      $(thumbnails).append(img);
      $('#food').append(thumbnails);
      });
      links(results);
    }
  function links(){
    $('img').each(function () {
      var currentImage = $(this);
      currentImage.wrap("<a href=" + "'https://spoonacular.com/recipes/chicken-enchiladas-" + this.id + "'</a>");
    })
  }
})
