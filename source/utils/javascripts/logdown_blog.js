(function() {
  if (typeof document.querySelector == "undefined" || document.querySelector == null) return false;

  var categorySelect = document.querySelector('#category-select');

  for (var i = 0; i < categorySelect.length; i++) {
    if (location.pathname == categorySelect[i].value) {
      categorySelect.value = categorySelect[i].value
    }
  }

  categorySelect.addEventListener('change', function(event) {
    location.href = this.value;
  });
})();